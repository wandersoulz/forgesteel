import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';

export interface CareerInterface extends ElementInterface {
	features: FeatureInterface[];
	incitingIncidents: {
		options: ElementInterface[];
		selected: ElementInterface | null;
	};
}
