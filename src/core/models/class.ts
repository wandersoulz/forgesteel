import { AbilityInterface } from '../../core/models/ability';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';
import { SubClassInterface } from '../../core/models/subclass';

export interface HeroClassInterface extends ElementInterface {
	type: 'standard' | 'master';
	subclassName: string;
	subclassCount: number;

	primaryCharacteristicsOptions: Characteristic[][];
	primaryCharacteristics: Characteristic[];

	featuresByLevel: {
		level: number;
		features: FeatureInterface[];
	}[];
	abilities: AbilityInterface[];
	subclasses: SubClassInterface[];

	level: number;
	characteristics: {
		characteristic: Characteristic;
		value: number;
	}[];
}
