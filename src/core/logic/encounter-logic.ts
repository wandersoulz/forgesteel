import { EncounterInterface, EncounterGroupInterface } from '../models/encounter';
import { EncounterSlotInterface, EncounterSlotCustomizationInterface } from '../models/encounter-slot';
import { FeatureMaliceInterface, FeatureMaliceAbilityInterface } from '../models/feature';
import { Collections } from '../utils/collections';
import { Monster } from '../impl/monster';
import { ActiveSourcebooks } from '../impl/sourcebook';

export class EncounterLogic {
	static getMonsterCount = (encounter: EncounterInterface) => {
		let total = 0;

		encounter.groups.forEach((g) => {
			g.slots.forEach((s) => {
				let count = s.count;

				const monsterConfig = ActiveSourcebooks.getInstance().getMonster(s.monsterID);
				if (monsterConfig) {
					const monster = new Monster(monsterConfig);
					count *= monster.getRoleMultiplier(monster.role.organization);
				}

				total += count;
			});
		});

		return total;
	};

	static getGroupName = (group: EncounterGroupInterface, encounter: EncounterInterface) => {
		const names = group.slots.flatMap((s) => s.monsters).map((m) => m.name);
		if (names.length === 0) {
			const index = encounter.groups.findIndex((g) => g.id === group.id);
			return `Group ${index + 1}`;
		}
		if (names.length === 1) {
			return names[0];
		}
		return `${names[0]} (and ${names.length > 2 ? `${names.length - 1} others` : '1 other'})`;
	};

	static getSlotName = (slot: EncounterSlotInterface) => {
		const names = slot.monsters.map((m) => m.name);
		if (names.length === 0) {
			return 'Slot';
		}
		if (names.length === 1) {
			return names[0];
		}
		return `${names[0]} (and ${names.length > 2 ? `${names.length - 1} others` : '1 other'})`;
	};

	static getMonsterData = (encounter: EncounterInterface) => {
		const list: {
			key: string;
			monsterID: string;
			customization: EncounterSlotCustomizationInterface;
		}[] = [];

		encounter.groups
			.flatMap((g) => g.slots)
			.forEach((s) => {
				const key =
					s.monsterID + s.customization.addOnIDs.join('') + (s.customization.convertToSolo ? 'SOLO' : '');
				const item = list.find((i) => i.key === key);
				if (!item) {
					list.push({
						key: key,
						monsterID: s.monsterID,
						customization: {
							addOnIDs: [...s.customization.addOnIDs],
							itemIDs: [...s.customization.itemIDs],
							levelAdjustment: s.customization.levelAdjustment,
							convertToSolo: s.customization.convertToSolo,
						},
					});
				}
			});

		return list;
	};

	static getMonsterGroups = (encounter: EncounterInterface) => {
		const groups = this.getMonsterData(encounter)
			.map((data) => ActiveSourcebooks.getInstance().getMonsterGroup(data.monsterID))
			.filter((group) => !!group);
		return Collections.distinct(groups, (item) => item!.id);
	};

	static getContentIDs = (encounter: EncounterInterface) => {
		const ids: string[] = [];

		encounter.groups.forEach((g) => {
			g.slots.forEach((s) => {
				const monsterGroup = ActiveSourcebooks.getInstance().getMonsterGroup(s.monsterID);
				if (monsterGroup) {
					if (!ids.includes(monsterGroup.id)) {
						ids.push(monsterGroup.id);
					}
				}
				s.customization.itemIDs.forEach((id) => {
					if (!ids.includes(id)) {
						ids.push(id);
					}
				});
			});
		});

		return ids;
	};

	static getMaliceGained = (encounter: EncounterInterface) => {
		if (encounter.heroes.length === 0) {
			return 0;
		}

		let malice = 0;

		if (encounter.round === 0) {
			// Gain malice equal to the average number of victories per hero
			malice += Math.round(Collections.mean(encounter.heroes, (h) => h.state.victories));
		}

		// Gain malice equal to the number of active heroes plus the number of the round that's starting
		malice += encounter.heroes.filter((h) => !h.state.defeated).length;
		malice += encounter.round + 1;

		return malice;
	};

	static getAllMaliceFeatures = (
		encounter: EncounterInterface
	): { group: string; features: (FeatureMaliceInterface | FeatureMaliceAbilityInterface)[] }[] => {
		const monsterGroups = this.getMonsterGroups(encounter);
		const result: { group: string; features: (FeatureMaliceInterface | FeatureMaliceAbilityInterface)[] }[] = [
			{ group: 'Basic', features: [] },
		];
		monsterGroups
			.filter((group) => group.malice.length > 0)
			.forEach((group) => {
				result.push({ group: group.name, features: group.malice });
			});
		return result;
	};

	static getCombatants = (encounter: EncounterInterface) => {
		const combatants: {
			type: 'group' | 'hero';
			id: string;
			section: 'ready' | 'current' | 'finished' | 'defeated';
		}[] = [];

		encounter.groups
			.filter((g) => g.slots.length > 0)
			.forEach((g) => {
				const section =
					g.slots.every((s) => s.state.defeated) ||
					g.slots.flatMap((s) => s.monsters).every((m) => m.state.defeated)
						? 'defeated'
						: g.encounterState;
				combatants.push({ type: 'group', id: g.id, section: section });
			});

		encounter.heroes.forEach((h) => {
			const section = h.state.defeated ? 'defeated' : h.state.encounterState;
			combatants.push({ type: 'hero', id: h.id, section: section });
		});

		return combatants;
	};

	static getEncounterVictory = (encounter: EncounterInterface) => {
		const combatants = EncounterLogic.getCombatants(encounter);
		const activeCombatants = combatants.filter((c) => c.section !== 'defeated');
		const inactiveCombatants = combatants.filter((c) => c.section === 'defeated');

		if (activeCombatants.every((c) => c.type === 'group') && inactiveCombatants.some((c) => c.type === 'hero')) {
			return 'monsters';
		}

		if (activeCombatants.every((c) => c.type === 'hero') && inactiveCombatants.some((c) => c.type === 'group')) {
			return 'heroes';
		}

		return null;
	};
}
