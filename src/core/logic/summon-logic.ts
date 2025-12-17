import { FeatureType } from '../../core/enums/feature-type';
import { Hero } from '../../core/impl/hero';
import { ModifierInterface } from '../../core/models/damage-modifier';
import { ModifierLogic } from '../../core/logic/modifier-logic';
import { Monster } from '../../core/impl/monster';
import { CoreUtils } from '../../core/utils/core-utils';
import { Ability } from '../impl/ability';

export class SummonLogic {
	static getSummonedMonster = (monster: Monster, controller: Hero) => {
		const copy = new Monster(CoreUtils.copy(monster));

		const handleModifier = (mod: ModifierInterface) => {
			return (
				mod.valueFromController ||
				mod.valueCharacteristics.length > 0 ||
				mod.valuePerEchelon > 0 ||
				mod.valuePerLevel > 0
			);
		};

		copy.getFeatures().forEach((f) => {
			switch (f.type) {
				case FeatureType.Ability:
					f.data.ability.sections.forEach((s) => {
						switch (s.type) {
							case 'field':
								s.effect = Ability.getTextEffect(s.effect, controller);
								break;
							case 'roll':
								s.roll.tier1 = Ability.getTextEffect(s.roll.tier1, controller);
								s.roll.tier2 = Ability.getTextEffect(s.roll.tier2, controller);
								s.roll.tier3 = Ability.getTextEffect(s.roll.tier3, controller);
								break;
							case 'text':
								s.text = Ability.getTextEffect(s.text, controller);
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
					f.data.modifiers.forEach((dm) => {
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
					f.description = Ability.getTextEffect(f.description, controller);
					break;
			}
		});

		return copy;
	};
}
