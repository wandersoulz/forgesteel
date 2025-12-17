import { Characteristic } from '../../core/enums/characteristic';
import { Collections } from '../../core/utils/collections';
import { DamageModifierType } from '../../core/enums/damage-modifier-type';
import { FeatureField } from '../../core/enums/feature-field';
import { FeatureType } from '../../core/enums/feature-type';
import { ModifierLogic } from '../../core/logic/modifier-logic';
import { MonsterInterface } from '../../core/models/monster';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { SummonInterface } from '../../core/models/summon';
import { Hero } from '../impl/hero';
import { Monster } from '../impl/monster';

export class CreatureLogic {
	static getCharacteristic = (creature: Hero | Monster | undefined, characteristic: Characteristic) => {
		if (!creature) {
			return 0;
		}
		return creature.getCharacteristic(characteristic);
	};

	static getField = (creature: Hero | Monster | undefined, field: FeatureField) => {
		if (!creature) {
			return 0;
		} else if (CreatureLogic.isMonster(creature)) {
			switch (field) {
				case FeatureField.Stamina:
					return creature.getStamina();
				default:
					return 0;
			}
		} else {
			switch (field) {
				case FeatureField.Stamina:
					return creature.getStamina();
				default:
					return 0;
			}
		}
	};

	static isMonster = (creature: unknown): creature is Monster => {
		return creature !== undefined && creature !== null && typeof creature === 'object' && 'withCaptain' in creature;
	};

	static isHero = (creature: unknown): creature is Hero => {
		return (
			creature !== undefined && creature !== null && typeof creature === 'object' && 'complication' in creature
		);
	};

	static isSummon = (creature: unknown): creature is SummonInterface => {
		return (
			creature !== undefined &&
			creature !== null &&
			typeof creature === 'object' &&
			'monster' in creature &&
			(creature.monster as MonsterInterface).role.organization === MonsterOrganizationType.Minion
		);
	};

	static isCompanion = (creature: unknown): creature is SummonInterface => {
		return (
			creature !== undefined &&
			creature !== null &&
			typeof creature === 'object' &&
			'monster' in creature &&
			(creature.monster as MonsterInterface).role.organization === MonsterOrganizationType.Companion
		);
	};

	static getEchelon = (level: number) => {
		switch (level) {
			case 1:
			case 2:
			case 3:
				return 1;
			case 4:
			case 5:
			case 6:
				return 2;
			case 7:
			case 8:
			case 9:
				return 3;
			case 10:
				return 4;
		}

		return 1;
	};

	static getSummonDamageModifiers = (summon: SummonInterface, summoner: Hero, type: DamageModifierType) => {
		const modifiers: { damageType: string; value: number }[] = [];
		const monster = new Monster(summon.monster);
		// Collate from features
		monster
			.getFeatures()
			.filter((f) => f.type === FeatureType.DamageModifier)
			.forEach((f) => {
				f.data.modifiers
					.filter((dm) => dm.type === type)
					.forEach((dm) => {
						const value = ModifierLogic.calculateModifierValue(dm, summoner);

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
	};
}
