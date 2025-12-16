import { AbilityLogic } from '../../core/logic/ability-logic';
import { FeatureType } from '../../core/enums/feature-type';
import { Hero } from '../../core/models/hero';
import { Modifier } from '../../core/models/damage-modifier';
import { ModifierLogic } from '../../core/logic/modifier-logic';
import { Monster } from '../../core/models/monster';
import { MonsterLogic } from '../../core/logic/monster-logic';
import { CoreUtils } from '../../core/utils/core-utils';

export class SummonLogic {
	static getSummonedMonster = (monster: Monster, controller: Hero) => {
		const copy = CoreUtils.copy(monster);

		const handleModifier = (mod: Modifier) => {
			return mod.valueFromController || (mod.valueCharacteristics.length > 0) || (mod.valuePerEchelon > 0) || (mod.valuePerLevel > 0);
		};

		MonsterLogic.getFeatures(copy).forEach(f => {
			switch (f.type) {
				case FeatureType.Ability:
					f.data.ability.sections.forEach(s => {
						switch (s.type) {
							case 'field':
								s.effect = AbilityLogic.getTextEffect(s.effect, controller);
								break;
							case 'roll':
								s.roll.tier1 = AbilityLogic.getTextEffect(s.roll.tier1, controller);
								s.roll.tier2 = AbilityLogic.getTextEffect(s.roll.tier2, controller);
								s.roll.tier3 = AbilityLogic.getTextEffect(s.roll.tier3, controller);
								break;
							case 'text':
								s.text = AbilityLogic.getTextEffect(s.text, controller);
								break;
						}
					});
					break;
				case FeatureType.Bonus:
					if (handleModifier(f.data)) {
						const value = ModifierLogic.calculateModifierValue(f.data, controller);
						f.data.value = value;
						f.data.valueFromController = null;
						f.data.valueCharacteristics = [];
						f.data.valueCharacteristicMultiplier = 1;
						f.data.valuePerEchelon = 0;
						f.data.valuePerLevel = 0;
					}
					break;
				case FeatureType.DamageModifier:
					f.data.modifiers.forEach(dm => {
						if (handleModifier(dm)) {
							const value = ModifierLogic.calculateModifierValue(dm, controller);
							dm.value = value;
							dm.valueFromController = null;
							dm.valueCharacteristics = [];
							dm.valueCharacteristicMultiplier = 1;
							dm.valuePerEchelon = 0;
							dm.valuePerLevel = 0;
						}
					});
					break;
				case FeatureType.Text:
					f.description = AbilityLogic.getTextEffect(f.description, controller);
					break;
			}
		});

		return copy;
	};
}
