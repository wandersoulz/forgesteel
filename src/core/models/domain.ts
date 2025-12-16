import { Element } from '../../core/models/element';
import { Feature } from '../../core/models/feature';

export interface Domain extends Element {
	featuresByLevel: {
		level: number;
		features: Feature[];
	}[];
	resourceGains: {
		resource: string;
		tag: string;
		trigger: string;
		value: string;
	}[];
	defaultFeatures: Feature[];
}
