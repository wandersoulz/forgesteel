import { FeatureInterface } from '../../core/models/feature';

export interface RetainerInfoInterface {
	level: number;
	level4?: FeatureInterface;
	level7?: FeatureInterface;
	level10?: FeatureInterface;
	featuresByLevel: {
		level: number;
		feature: FeatureInterface;
	}[];
}
