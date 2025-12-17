import { AbilityDistanceInterface } from '../models/ability';
import { AbilityDistanceType } from '../enums/abiity-distance-type';

export class DistanceFactory {
	create = (data: {
		type: AbilityDistanceType;
		value: number;
		value2?: number;
		within?: number;
		qualifier?: string;
		special?: string;
	}): AbilityDistanceInterface => {
		return {
			type: data.type,
			value: data.value,
			value2: data.value2 || 0,
			within: data.within || 0,
			special: data.special || '',
			qualifier: data.qualifier ?? '',
		};
	};

	createSelf = (qualifier = ''): AbilityDistanceInterface => {
		return {
			type: AbilityDistanceType.Self,
			value: 0,
			value2: 0,
			within: 0,
			special: '',
			qualifier: qualifier,
		};
	};

	createMelee = (value = 1): AbilityDistanceInterface => {
		return {
			type: AbilityDistanceType.Melee,
			value: value,
			value2: 0,
			within: 0,
			special: '',
			qualifier: '',
		};
	};

	createRanged = (value: number): AbilityDistanceInterface => {
		return {
			type: AbilityDistanceType.Ranged,
			value: value,
			value2: 0,
			within: 0,
			special: '',
			qualifier: '',
		};
	};

	createSummoner = (): AbilityDistanceInterface => {
		return {
			type: AbilityDistanceType.Summoner,
			value: 0,
			value2: 0,
			within: 0,
			special: '',
			qualifier: '',
		};
	};

	createSpecial = (special: string): AbilityDistanceInterface => {
		return {
			type: AbilityDistanceType.Special,
			value: 0,
			value2: 0,
			within: 0,
			special: special,
			qualifier: '',
		};
	};
}
