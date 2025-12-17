import { AbilityInterface } from '../../core/models/ability';
import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';

export interface SubClassInterface extends ElementInterface {
	featuresByLevel: {
		level: number;
		features: FeatureInterface[];
	}[];
	abilities: AbilityInterface[];

	selected: boolean;
}
