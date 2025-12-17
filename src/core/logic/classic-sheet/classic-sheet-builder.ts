import { AbilityKeyword } from '../../enums/ability-keyword';
import { AbilitySheetInterface } from '../../models/classic-sheets/ability-sheet';
import { AbilityUsage } from '../../enums/ability-usage';
import { Characteristic } from '../../enums/characteristic';
import { CharacteristicsSheetInterface } from '../../models/classic-sheets/classic-sheets';
import { CreatureLogic } from '../creature-logic';
import { DamageModifierType } from '../../enums/damage-modifier-type';
import { FeatureLogic } from '../feature-logic';
import { FeatureType } from '../../enums/feature-type';
import { FollowerInterface } from '../../models/follower';
import { Format } from '../../utils/format';
import { FormatLogic } from '../format-logic';
import { ItemInterface } from '../../models/item';
import { ItemSheetInterface } from '../../models/classic-sheets/hero-sheet';
import { ItemType } from '../../enums/item-type';
import { MonsterRoleType } from '../../enums/monster-role-type';
import { MonsterSheetInterface } from '../../models/classic-sheets/monster-sheet';
import { SheetFormatter } from './sheet-formatter';
import { SummonInterface } from '../../models/summon';
import { Hero } from '../../impl/hero';
import { Monster } from '../../impl/monster';
import { Ability } from '../../impl/ability';

export class ClassicSheetBuilder {
	static buildCharacteristicsSheet = (
		creature: Hero | Monster | FollowerInterface | undefined
	): CharacteristicsSheetInterface => {
		if (!creature) {
			return {
				might: 0,
				agility: 0,
				reason: 0,
				intuition: 0,
				presence: 0,
			};
		} else if (CreatureLogic.isHero(creature)) {
			return {
				might: creature.getCharacteristic(Characteristic.Might),
				agility: creature.getCharacteristic(Characteristic.Agility),
				reason: creature.getCharacteristic(Characteristic.Reason),
				intuition: creature.getCharacteristic(Characteristic.Intuition),
				presence: creature.getCharacteristic(Characteristic.Presence),
			};
		} else if (CreatureLogic.isMonster(creature)) {
			return {
				might: creature.getCharacteristic(Characteristic.Might),
				agility: creature.getCharacteristic(Characteristic.Agility),
				reason: creature.getCharacteristic(Characteristic.Reason),
				intuition: creature.getCharacteristic(Characteristic.Intuition),
				presence: creature.getCharacteristic(Characteristic.Presence),
			};
		} else {
			const follower = creature as FollowerInterface;
			return {
				might: follower.characteristics.find((c) => c.characteristic === Characteristic.Might)?.value || 0,
				agility: follower.characteristics.find((c) => c.characteristic === Characteristic.Agility)?.value || 0,
				reason: follower.characteristics.find((c) => c.characteristic === Characteristic.Reason)?.value || 0,
				intuition:
					follower.characteristics.find((c) => c.characteristic === Characteristic.Intuition)?.value || 0,
				presence:
					follower.characteristics.find((c) => c.characteristic === Characteristic.Presence)?.value || 0,
			};
		}
	};

	// #region MonsterInterface Sheet
	static buildMonsterSheet = (monster: Monster): MonsterSheetInterface => {
		const level = monster.getLevel();
		let monsterType = `Lvl ${level} ${monster.role.organization}`;
		if (monster.role.type !== MonsterRoleType.NoRole) {
			monsterType += ` ${monster.role.type}`;
		}

		const speed = monster.getSpeed();
		const immunities = monster.getDamageModifiers(DamageModifierType.Immunity);
		const weaknesses = monster.getDamageModifiers(DamageModifierType.Weakness);

		const sheet: MonsterSheetInterface = {
			id: monster.id,
			name: monster.getMonsterName(),
			type: monsterType,
			role: monster.role.type,

			characteristics: ClassicSheetBuilder.buildCharacteristicsSheet(monster),

			keywords: monster.keywords.join(', '),
			size: FormatLogic.getSize(monster.size),
			speed: speed.value,
			stamina: monster.getStamina(),
			stability: monster.stability,
			freeStrike: monster.getFreeStrikeDamage(),
			immunity: immunities.map((mod) => `${mod.damageType} ${mod.value}`).join(', '),
			weakness: weaknesses.map((mod) => `${mod.damageType} ${mod.value}`).join(', '),
			movement: speed.modes.map((m) => Format.capitalize(m)).join(', '),
			withCaptain: monster.withCaptain,
		};

		sheet.features = monster.getFeatures().filter((f) => [FeatureType.Text, FeatureType.AddOn].includes(f.type));

		const abilities = monster
			.getFeatures()
			.filter((f) => f.type === FeatureType.Ability)
			.map((f) => new Ability(f.data.ability));
		sheet.abilities = abilities.map((a) => ClassicSheetBuilder.buildAbilitySheet(a, monster));

		return sheet;
	};
	// #endregion

	// #region AbilityInterface Sheet
	static buildAbilitySheet = (
		ability: Ability,
		creature?: Hero | Monster | SummonInterface,
		summoner?: Hero
	): AbilitySheetInterface => {
		const isMonster = CreatureLogic.isMonster(creature);
		const isHero = CreatureLogic.isHero(creature);
		const isSummon = CreatureLogic.isSummon(creature);
		const sheet: AbilitySheetInterface = {
			id: ability.id,
			abilityType: ability.type.usage.toString(),
			name: ability.name,
			description: ability.description,
			isSignature: false,
			isNotTrueAbility: false,
			cost: Number(ability.cost) || 0,
			actionType: ability.type.usage.toString(),
			keywords: ability.keywords.join(', '),
			target: ability.target,
			trigger: ability.type.trigger,
			hasPowerRoll: false,
		};

		sheet.name = sheet.name.replace(/\s*Benefit and Drawback\s*/, '').trim();

		if (isHero) {
			if (ability.cost === 'signature') {
				sheet.isSignature = true;
				sheet.abilityType = 'Signature AbilityInterface';
			} else if (ability.cost > 0) {
				sheet.abilityType = 'Heroic AbilityInterface';
			} else if (ability.type.usage === AbilityUsage.Trigger) {
				sheet.abilityType = 'Triggered Action';
			} else if (ability.type.usage === AbilityUsage.FreeStrike) {
				sheet.abilityType = 'Free Strike';
				if (ability.name.toLowerCase().includes('melee')) {
					sheet.name = 'Melee Free Strike';
				} else if (ability.name.toLowerCase().includes('ranged')) {
					sheet.name = 'Ranged Free Strike';
				}
			} else if (ability.type.usage === AbilityUsage.Maneuver) {
				sheet.abilityType = 'Maneuver';
			} else if (ability.type.usage === AbilityUsage.Move) {
				sheet.abilityType = 'Move Action';
			} else if (ability.keywords.includes('Performance')) {
				sheet.abilityType = 'Performance';
			}

			// non-ability 'abilities' won't have distance, keywords, or targets
			if (!ability.distance.length && !ability.keywords.length && !ability.target.length) {
				sheet.isNotTrueAbility = true;
			}
		}

		if (isMonster || isSummon) {
			if (ability.cost === 'signature') {
				sheet.abilityType = 'Signature AbilityInterface';
			} else if (ability.cost > 0) {
				sheet.abilityType = `${ability.cost} Malice`;
			} else if (isMonster && creature.retainer?.level) {
				sheet.abilityType = 'Encounter';
			} else {
				sheet.abilityType = '';
			}
		}

		if (creature === undefined) {
			if (ability.cost !== 'signature' && ability.cost > 0) {
				sheet.abilityType = `${ability.cost} Malice`;
			} else {
				sheet.abilityType = '';
			}
		}

		if (sheet.actionType && ability.type.free) {
			sheet.actionType = `Free ${sheet.actionType}`;
		}

		sheet.qualifiers = ability.type.qualifiers;

		let refCreature = undefined;
		if (isSummon) {
			refCreature = new Monster(creature.monster);
		} else {
			refCreature = creature;
		}

		if (ability.distance.length) {
			sheet.distance = ability.getAllDistancesCreature(refCreature).join(', ');
		}

		const effectSections = ability.sections.filter((s) => s.type !== 'roll');
		let effectText = SheetFormatter.abilitySections(effectSections, refCreature).trim();

		// Kind of hacky, but this is a one-off at the moment
		if (
			CreatureLogic.isHero(creature) &&
			['grab', 'knockback'].includes(ability.id) &&
			(creature as Hero).getFeatures().find((f) => f.feature.id === 'null-1-8')
		) {
			// Psionic Martial Arts id
			effectText = effectText.replace(/your Might/g, 'your Intuition');
		}
		sheet.effect = effectText;

		const rollSections = ability.sections.filter((s) => s.type === 'roll');
		if (rollSections.length) {
			sheet.hasPowerRoll = true;
			const rollSection = rollSections[0];
			if (isSummon) {
				sheet.rollPower = ability.getPowerRollBonusValue(summoner).toString();
			} else {
				sheet.rollPower = ability.getPowerRollBonusValue(refCreature).toString();
			}

			const characteristics = ability
				.getPowerRollCharacteristics(undefined)
				.sort(SheetFormatter.sortCharacteristics);
			const allCharacteristics = Object.values(Characteristic).sort(SheetFormatter.sortCharacteristics);
			const isAllCharacteristics = allCharacteristics.every((c, i) => characteristics[i] === c);
			if (isAllCharacteristics) {
				sheet.rollPower = 'Highest Characteristic';
			} else {
				sheet.rollPower = SheetFormatter.joinCommasOr(characteristics.map((c) => c.toString().slice(0, 1)));
			}

			sheet.rollT1Effect = SheetFormatter.formatAbilityTier(rollSection.roll.tier1, 1, ability, refCreature);
			sheet.rollT2Effect = SheetFormatter.formatAbilityTier(rollSection.roll.tier2, 2, ability, refCreature);
			sheet.rollT3Effect = SheetFormatter.formatAbilityTier(rollSection.roll.tier3, 3, ability, refCreature);

			if (CreatureLogic.isHero(creature)) {
				const isMelee =
					ability.keywords.includes(AbilityKeyword.Melee) && ability.keywords.includes(AbilityKeyword.Weapon);
				const isRanged =
					ability.keywords.includes(AbilityKeyword.Ranged) &&
					ability.keywords.includes(AbilityKeyword.Weapon);

				const meleeKits = creature.getKitDamageBonuses().filter((dmg) => dmg.type === 'melee');

				const rangedKits = creature.getKitDamageBonuses().filter((dmg) => dmg.type === 'ranged');

				if (isMelee && meleeKits.length > 1) {
					const bestT1 = Math.max(...meleeKits.map((k) => k.tier1));
					const bestT2 = Math.max(...meleeKits.map((k) => k.tier2));
					const bestT3 = Math.max(...meleeKits.map((k) => k.tier3));

					const meleeBonuses = meleeKits
						.filter((k) => k.tier1 >= bestT1 || k.tier2 >= bestT2 || k.tier3 >= bestT3)
						.map((k) => {
							return {
								name: k.name,
								type: k.type,
								tier1: SheetFormatter.addSign(k.tier1) || '',
								tier2: SheetFormatter.addSign(k.tier2) || '',
								tier3: SheetFormatter.addSign(k.tier3) || '',
							};
						});
					if (meleeBonuses.length > 1) sheet.rollBonuses = (sheet.rollBonuses ?? []).concat(meleeBonuses);
				}
				if (isRanged && rangedKits.length > 1) {
					const bestT1 = Math.max(...rangedKits.map((k) => k.tier1));
					const bestT2 = Math.max(...rangedKits.map((k) => k.tier2));
					const bestT3 = Math.max(...rangedKits.map((k) => k.tier3));

					const rangedBonuses = rangedKits
						.filter((k) => k.tier1 >= bestT1 || k.tier2 >= bestT2 || k.tier3 >= bestT3)
						.map((k) => {
							return {
								name: k.name,
								type: k.type,
								tier1: SheetFormatter.addSign(k.tier1) || '',
								tier2: SheetFormatter.addSign(k.tier2) || '',
								tier3: SheetFormatter.addSign(k.tier3) || '',
							};
						});
					if (rangedBonuses.length > 1) sheet.rollBonuses = (sheet.rollBonuses ?? []).concat(rangedBonuses);
				}
			}
		}

		return sheet;
	};
	// #endregion

	// #region ItemInterface Sheet
	static buildItemSheet = (item: ItemInterface, heroLevel: number): ItemSheetInterface => {
		const features = FeatureLogic.getFeaturesFromItem(item, heroLevel).map((f) => f.feature);
		// console.log(features);
		const sheet: ItemSheetInterface = {
			id: item.id,
			item: item,
			effect: SheetFormatter.enhanceMarkdown(item.effect),
			features: FeatureLogic.reduceFeatures(features),
		};

		if (item.imbuements.length) {
			sheet.effect = item.imbuements
				.map((imbuement) => imbuement.feature)
				.reduce((effect, feature) => {
					if (feature.type === FeatureType.Text) {
						if (feature.description) {
							if (feature.name) {
								effect += '\n\n';
								effect += `**${feature.name}**`;
							}
							effect += '\n\n';
							effect += feature.description;
						}
					}
					return effect;
				}, '');
		}

		if (item.type === ItemType.Artifact) {
			sheet.effect = SheetFormatter.enhanceMarkdown(
				features.find((f) => f.id === item.id)?.description ?? sheet.effect
			);
		}

		if (!sheet.effect.length) {
			sheet.effect = features.find((f) => f.id === item.id)?.description ?? '';
		}

		return sheet;
	};
	// #endregion
}
