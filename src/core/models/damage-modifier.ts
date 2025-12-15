import { Characteristic } from '@/core/enums/characteristic';
import { DamageModifierType } from '@/core/enums/damage-modifier-type';
import { DamageType } from '@/core/enums/damage-type';
import { FeatureField } from '@/core/enums/feature-field';

export interface Modifier {
	value: number;
	valueFromController: FeatureField | null;
	valueCharacteristics: Characteristic[];
	valueCharacteristicMultiplier: number;
	valuePerLevel: number;
	valuePerEchelon: number;
}

export interface DamageModifier extends Modifier {
	damageType: DamageType;
	type: DamageModifierType;
}
