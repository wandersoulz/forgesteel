import { Characteristic } from '../enums/characteristic';
import { DamageModifierInterface } from '../models/damage-modifier';
import { DamageModifierType } from '../enums/damage-modifier-type';
import { DamageType } from '../enums/damage-type';

export class DamageModifierFactory {
	create = (data: {
		damageType: DamageType;
		modifierType: DamageModifierType;
		value: number;
	}): DamageModifierInterface => {
		return {
			damageType: data.damageType,
			type: data.modifierType,
			value: data.value,
			valueFromController: null,
			valueCharacteristics: [],
			valueCharacteristicMultiplier: 1,
			valuePerLevel: 0,
			valuePerEchelon: 0,
		};
	};

	createPerLevel = (data: {
		damageType: DamageType;
		modifierType: DamageModifierType;
		value: number;
	}): DamageModifierInterface => {
		return {
			damageType: data.damageType,
			type: data.modifierType,
			value: data.value,
			valueFromController: null,
			valueCharacteristics: [],
			valueCharacteristicMultiplier: 1,
			valuePerLevel: data.value,
			valuePerEchelon: 0,
		};
	};

	createValuePlusPerLevel = (data: {
		damageType: DamageType;
		modifierType: DamageModifierType;
		value: number;
		perLevel: number;
	}): DamageModifierInterface => {
		return {
			damageType: data.damageType,
			type: data.modifierType,
			value: data.value + data.perLevel,
			valueFromController: null,
			valueCharacteristics: [],
			valueCharacteristicMultiplier: 1,
			valuePerLevel: data.perLevel,
			valuePerEchelon: 0,
		};
	};

	createFirstLevelHigherLevel = (data: {
		damageType: DamageType;
		modifierType: DamageModifierType;
		first: number;
		higher: number;
	}): DamageModifierInterface => {
		return {
			damageType: data.damageType,
			type: data.modifierType,
			value: data.first,
			valueFromController: null,
			valueCharacteristics: [],
			valueCharacteristicMultiplier: 1,
			valuePerLevel: data.higher,
			valuePerEchelon: 0,
		};
	};

	createPerEchelon = (data: {
		damageType: DamageType;
		modifierType: DamageModifierType;
		value: number;
	}): DamageModifierInterface => {
		return {
			damageType: data.damageType,
			type: data.modifierType,
			value: 0,
			valueFromController: null,
			valueCharacteristics: [],
			valueCharacteristicMultiplier: 1,
			valuePerLevel: 0,
			valuePerEchelon: data.value,
		};
	};

	createCharacteristic = (data: {
		damageType: DamageType;
		modifierType: DamageModifierType;
		characteristics: Characteristic[];
		multiplier?: number;
	}): DamageModifierInterface => {
		return {
			damageType: data.damageType,
			type: data.modifierType,
			value: 0,
			valueFromController: null,
			valueCharacteristics: data.characteristics,
			valueCharacteristicMultiplier: data.multiplier || 1,
			valuePerLevel: 0,
			valuePerEchelon: 0,
		};
	};
}
