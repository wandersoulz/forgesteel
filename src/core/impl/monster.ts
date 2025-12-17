import { MaliceData } from '../../data/malice-data';
import {
	DamageType,
	Characteristic,
	FeatureType,
	FeatureField,
	AbilityDistanceType,
	ConditionType,
	DamageModifierType,
	MonsterOrganizationType,
	MonsterRoleType,
	SkillList,
} from '../enums';
import { ModifierLogic, CreatureLogic } from '../logic';
import {
	MonsterRoleInterface,
	SizeInterface,
	SpeedInterface,
	FeatureInterface,
	RetainerInfoInterface,
	MonsterStateInterface,
	MonsterGroupInterface,
	EncounterSlotInterface,
	FeatureMaliceAbilityInterface,
	FeatureMaliceInterface,
	MonsterFilterInterface,
	SkillInterface,
} from '../models';
import { MonsterInterface } from '../models/monster';
import { Collections } from '../utils';
import { ActiveSourcebooks } from './sourcebook';

export class Monster implements MonsterInterface {
	picture: string | null;
	level: number;
	role: MonsterRoleInterface;
	keywords: string[];
	encounterValue: number;
	size: SizeInterface;
	speed: SpeedInterface;
	stamina: number;
	stability: number;
	freeStrikeDamage: number;
	freeStrikeType: DamageType;
	characteristics: { characteristic: Characteristic; value: number }[];
	withCaptain: string;
	features: FeatureInterface[];
	retainer: RetainerInfoInterface | null;
	state: MonsterStateInterface;
	id: string;
	name: string;
	description: string;

	constructor(monster: MonsterInterface) {
		this.id = monster.id;
		this.name = monster.name;
		this.description = monster.description;

		this.state = monster.state;
		this.picture = monster.picture;
		this.retainer = monster.retainer;
		this.features = monster.features;
		this.withCaptain = monster.withCaptain;
		this.characteristics = monster.characteristics;
		this.level = monster.level;
		this.role = monster.role;
		this.keywords = monster.keywords;
		this.encounterValue = monster.encounterValue;
		this.size = monster.size;
		this.speed = monster.speed;
		this.stamina = monster.stamina;
		this.stability = monster.stability;
		this.freeStrikeDamage = monster.freeStrikeDamage;
		this.freeStrikeType = monster.freeStrikeType;
	}

	getMonsterName(group?: MonsterGroupInterface) {
		if (this.name) {
			return this.name;
		}

		if (group && group.name) {
			return `${group.name} ${this.role.type}`;
		}

		return 'Unnamed MonsterInterface';
	}

	getLevel() {
		if (this.retainer && this.retainer.level) {
			return this.retainer.level;
		}

		return this.level;
	}

	getMonsterDescription() {
		const lvl = this.getLevel();

		if (this.role.type === MonsterRoleType.NoRole) {
			if (this.role.organization === MonsterOrganizationType.NoOrganization) {
				return lvl ? `Level ${lvl}` : '';
			} else {
				return lvl ? `Level ${lvl} ${this.role.organization}` : `${this.role.organization}`;
			}
		}

		if (this.role.organization === MonsterOrganizationType.NoOrganization) {
			return lvl ? `Level ${lvl} ${this.role.type}` : `${this.role.type}`;
		}

		const orgGoesLast = [MonsterOrganizationType.Retainer].includes(this.role.organization);
		if (orgGoesLast) {
			return lvl
				? `Level ${lvl} ${this.role.type} ${this.role.organization}`
				: `${this.role.type} ${this.role.organization}`;
		}

		return lvl
			? `Level ${lvl} ${this.role.organization} ${this.role.type}`
			: `${this.role.organization} ${this.role.type}`;
	}

	getStamina() {
		let stamina = this.stamina;

		this.getFeatures()
			.filter((f) => f.type === FeatureType.Bonus)
			.filter((f) => f.data.field === FeatureField.Stamina)
			.forEach((f) => {
				stamina += ModifierLogic.calculateModifierValue(f.data, this);
			});

		if (this.retainer && this.retainer.level) {
			stamina += 9 * (this.retainer.level - this.level);
		}

		return stamina;
	}

	getSignatureDamageBonus() {
		let tier1 = 0;
		let tier2 = 0;
		let tier3 = 0;

		if (this.retainer && this.retainer.level) {
			const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
				(lvl) => lvl > this.level && lvl <= this.retainer!.level
			);
			tier1 += levels.filter((lvl) => lvl % 2 === 0).length;
			tier2 += levels.length;
			tier3 += levels.length;
		}

		if (tier1 + tier2 + tier3 === 0) {
			return null;
		}

		return {
			tier1: tier1,
			tier2: tier2,
			tier3: tier3,
		};
	}

	getFreeStrikeDamage() {
		let damage = this.freeStrikeDamage;

		if (this.retainer && this.retainer.level) {
			const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
				(lvl) => lvl > this.level && lvl <= this.retainer!.level
			);
			damage += levels.filter((lvl) => lvl % 3 === 0).length * 2;
		}

		return damage;
	}

	getFreeStrikeDistance() {
		const distance = this.features
			.filter((f) => f.type === FeatureType.Ability)
			.filter((f) => f.data.ability.cost === 'signature')
			.map((f) => f.data.ability)
			.reduce((distance, a) => {
				const abilityRangedDistance = a.distance
					.filter((d) => d.type === AbilityDistanceType.Ranged)
					.reduce((rd, ad) => {
						return Math.max(rd, ad.value);
					}, 0);
				return Math.max(distance, abilityRangedDistance);
			}, 5);

		return distance;
	}

	getFeatures() {
		const features = [...this.features];

		if (this.retainer) {
			this.retainer.featuresByLevel
				.filter((lvl) => lvl.level <= this.getLevel())
				.forEach((lvl) => {
					if (lvl.feature) {
						switch (lvl.feature.type) {
							case FeatureType.Choice:
								features.push(...lvl.feature.data.selected);
								break;
							case FeatureType.Multiple:
								features.push(...lvl.feature.data.features);
								break;
							default:
								features.push(lvl.feature);
								break;
						}
					}
				});
		}

		return features;
	}

	matches(filter: MonsterFilterInterface) {
		if (filter.name) {
			const tokens = filter.name.toLowerCase().split(' ');
			const monsterName = this.getMonsterName();
			if (!tokens.every((token) => monsterName.toLowerCase().includes(token))) {
				return false;
			}
		}

		if (filter.keywords.length > 0) {
			if (!filter.keywords.every((k) => this.keywords.includes(k))) {
				return false;
			}
		}

		if (filter.roles.length > 0) {
			if (!filter.roles.includes(this.role.type)) {
				return false;
			}
		}

		if (filter.organizations.length > 0) {
			if (!filter.organizations.includes(this.role.organization)) {
				return false;
			}
		}

		if (filter.size.length > 0) {
			const minSize = Math.min(...filter.size);
			const maxSize = Math.max(...filter.size);
			if (this.size.value < minSize || this.size.value > maxSize) {
				return false;
			}
		}

		if (filter.level.length > 0) {
			const minLevel = Math.min(...filter.level);
			const maxLevel = Math.max(...filter.level);
			if (this.level < minLevel || this.level > maxLevel) {
				return false;
			}
		}

		if (filter.ev.length > 0) {
			const minEV = Math.min(...filter.ev);
			const maxEV = Math.max(...filter.ev);
			if (this.encounterValue < minEV || this.encounterValue > maxEV) {
				return false;
			}
		}

		return true;
	}

	getRoleMultiplier(organization: MonsterOrganizationType) {
		switch (organization) {
			case MonsterOrganizationType.Minion:
				return 4;
		}

		return 1;
	}

	getCharacteristic(characteristic: Characteristic) {
		let value = 0;

		const ch = this.characteristics.find((ch) => ch.characteristic === characteristic);
		if (ch) {
			value = ch.value;
		}

		this.getFeatures().forEach((f) => {
			if (f.type === FeatureType.CharacteristicBonus) {
				if (f.data.characteristic === characteristic) {
					value += f.data.value;
				}
			}
		});

		return value;
	}

	getStability() {
		let stability = this.stability;

		this.getFeatures()
			.filter((f) => f.type === FeatureType.Bonus)
			.filter((f) => f.data.field === FeatureField.Stability)
			.forEach((f) => {
				stability += ModifierLogic.calculateModifierValue(f.data, this);
			});

		return stability;
	}

	getSpeed() {
		let value = this.speed.value;

		this.getFeatures()
			.filter((f) => f.type === FeatureType.Bonus)
			.filter((f) => f.data.field === FeatureField.Speed)
			.forEach((f) => {
				value += ModifierLogic.calculateModifierValue(f.data, this);
			});

		if (this.state.conditions.some((c) => [ConditionType.Grabbed, ConditionType.Restrained].includes(c.type))) {
			value = 0;
		}
		if (this.state.conditions.some((c) => [ConditionType.Slowed].includes(c.type))) {
			value = Math.min(value, 2);
		}

		return {
			value: value,
			modes: this.speed.modes,
		};
	}

	getSpeedModified() {
		if (
			this.state.conditions.some((c) =>
				[ConditionType.Grabbed, ConditionType.Restrained, ConditionType.Slowed].includes(c.type)
			)
		) {
			return true;
		}

		return false;
	}

	getConditionImmunities() {
		const conditions: ConditionType[] = [];

		// Collate from features
		this.getFeatures()
			.filter((f) => f.type === FeatureType.ConditionImmunity)
			.forEach((f) => {
				f.data.conditions.forEach((c) => {
					if (!conditions.includes(c)) {
						conditions.push(c);
					}
				});
			});

		return Collections.sort(conditions, (c) => c);
	}

	getDamageModifiers(type: DamageModifierType) {
		const modifiers: { damageType: string; value: number }[] = [];

		// Collate from features
		this.getFeatures()
			.filter((f) => f.type === FeatureType.DamageModifier)
			.forEach((f) => {
				f.data.modifiers
					.filter((dm) => dm.type === type)
					.forEach((dm) => {
						const value = ModifierLogic.calculateModifierValue(dm, this);

						const existing = modifiers.find((x) => x.damageType === dm.damageType);
						if (existing) {
							existing.value += dm.value;
						} else {
							modifiers.push({
								damageType: dm.damageType,
								value: value,
							});
						}
					});
			});

		return Collections.sort(modifiers, (dm) => dm.damageType);
	}

	getCombatState() {
		const maxStamina = this.getStamina();
		if (this.role.organization !== MonsterOrganizationType.Minion && maxStamina > 0) {
			const winded = Math.floor(maxStamina / 2);
			const currentStamina = maxStamina - this.state.staminaDamage;

			if (currentStamina <= 0) {
				return 'dead';
			}

			if (currentStamina <= winded) {
				return 'winded';
			}

			if (currentStamina < maxStamina) {
				return 'injured';
			}
		}

		return 'healthy';
	}

	getRoleTypeDescription(type: MonsterRoleType) {
		switch (type) {
			case MonsterRoleType.Ambusher:
				return 'Ambushers are melee warriors who can slip by beefier heroes to reach squishier targets in the back lines.';
			case MonsterRoleType.Artillery:
				return 'Artillery creatures fight best from afar, and can use their most powerful abilities at great distance.';
			case MonsterRoleType.Brute:
				return 'Brutes are hardy creatures who have lots of Stamina and deal lots of damage. They have abilities and traits that make them difficult to ignore and hard to get away from, and that let them push enemies around.';
			case MonsterRoleType.Controller:
				return 'Controllers are creatures who change the battlefield, often with magic or psionics. They reposition foes and alter terrain to make it more advantageous for their allies. Controllers are often on the squishier side, so they need some protection!';
			case MonsterRoleType.Defender:
				return 'Defenders are tough creatures able to take a lot of damage, and who can force enemies to attack them instead of squishier targets. Defenders often act in squads with allies who have lower Stamina, such as controllers and hexers.';
			case MonsterRoleType.Harrier:
				return 'Harriers are mobile warriors who make definitive use of hit-and-run tactics. Their traits allow them to make the most of their positioning on the battlefield.';
			case MonsterRoleType.Hexer:
				return 'Hexers specialize in debuffing enemies with conditions and other effects. They are generally squishy and rely on allies to help defend them.';
			case MonsterRoleType.Mount:
				return 'Mounts are mobile creatures meant to be ridden in combat, and who make their riders even more dangerous. Mounts act at the same time as their riders.';
			case MonsterRoleType.Support:
				return 'Support creatures specialize in aiding their allies, providing buffs, healing, movement, or action options.';
		}

		return '';
	}

	getRoleOrganizationDescription(organization: MonsterOrganizationType) {
		switch (organization) {
			case MonsterOrganizationType.Minion:
				return 'Minions are weaker enemies who are made to die fast and threaten heroes en masse.';
			case MonsterOrganizationType.Horde:
				return 'MonsterInterface bands are hardier and work in smaller groups than minions, but it still takes multiple of these creatures to effectively threaten a single hero of the same level.';
			case MonsterOrganizationType.Platoon:
				return 'MonsterInterface platoons are highly organized and usually self- sufficient armies.';
			case MonsterOrganizationType.Elite:
				return 'Troops are the functional opposite of minions. A creature under the troop organization is hardy and can usually stand up to two heroes of the same level on their own.';
			case MonsterOrganizationType.Leader:
				return 'A leader is a powerful who buffs their allies and grants them extra actions.';
			case MonsterOrganizationType.Solo:
				return 'A creature under a solo organization is an encounter all on their own.';
			case MonsterOrganizationType.Retainer:
				return 'A retainer is a type of follower who fights alongside the heroes. A retainer can gain levels just as heroes do, so their battlefield contributions remain relevant as the heroes advance.';
		}
	}

	getStaminaDescription() {
		const max = this.getStamina();
		let str = `${max}`;

		if (this.state.staminaDamage > 0) {
			str = `${Math.max(max - this.state.staminaDamage, 0)} / ${max}`;
		}
		if (this.state.staminaTemp > 0) {
			str += ` +${this.state.staminaTemp}`;
		}

		return str;
	}

	getMinionStaminaDescription(slot: EncounterSlotInterface) {
		const max = Collections.sum(slot.monsters, (m) => new Monster(m).getStamina());

		let str = `${max}`;
		if (slot.state.staminaDamage > 0) {
			str = `${Math.max(max - slot.state.staminaDamage, 0)} / ${max}`;
		}
		if (slot.state.staminaTemp > 0) {
			str += ` +${slot.state.staminaTemp}`;
		}

		return str;
	}

	getWindedThreshold() {
		return Math.floor(this.getStamina() / 2);
	}

	getDeadThreshold() {
		return -this.getWindedThreshold();
	}

	getSkills() {
		const skillNames: string[] = [];

		// Collate from features
		this.getFeatures()
			.filter((f) => f.type === FeatureType.SkillChoice)
			.forEach((f) => {
				skillNames.push(...f.data.selected);
			});

		const skills: SkillInterface[] = [];
		const allSkills = ActiveSourcebooks.getInstance().getSkills();
		Collections.distinct(skillNames, (s) => s).forEach((name) => {
			const skill = allSkills.find((skill) => skill.name == name);
			if (skill) {
				skills.push(skill);
			} else {
				skills.push({ name: name, description: '', list: SkillList.Custom });
			}
		});

		return Collections.sort(skills, (s) => s.name);
	}

	getRecoveries = () => {
		return 6; // Monsters, p. 351
	};

	getRecoveryValue() {
		return Math.floor(this.getStamina() / 3);
	}

	resetState() {
		this.state.staminaDamage = 0;
		this.state.staminaTemp = 0;
		this.state.conditions = [];
		this.state.reactionUsed = false;
		this.state.defeated = false;
		this.state.captainID = undefined;
	}

	getMaliceOptions(group?: MonsterGroupInterface) {
		const options: (FeatureMaliceInterface | FeatureMaliceAbilityInterface)[] = [...MaliceData.malice];
		if (group) {
			const level = this.getLevel();
			options.push(...group.malice.filter((f) => f.data.echelon <= CreatureLogic.getEchelon(level)));
		}

		return options.sort((a, b) => {
			const getCost = (malice: FeatureMaliceInterface | FeatureMaliceAbilityInterface) => {
				let cost =
					malice.type === FeatureType.MaliceAbility ? (malice.data.ability.cost as number) : malice.data.cost;
				const repeatable =
					malice.type === FeatureType.MaliceAbility ? malice.data.ability.repeatable : malice.data.repeatable;
				if (repeatable) {
					cost += 0.5;
				}
				return cost;
			};

			return getCost(a) - getCost(b);
		});
	}
}
