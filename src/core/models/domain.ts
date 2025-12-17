import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';

export interface DomainInterface extends ElementInterface {
	featuresByLevel: {
		level: number;
		features: FeatureInterface[];
	}[];
	resourceGains: {
		resource: string;
		tag: string;
		trigger: string;
		value: string;
	}[];
	defaultFeatures: FeatureInterface[];
}
