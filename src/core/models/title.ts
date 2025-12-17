import { ElementInterface } from './element';
import { FeatureInterface } from './feature';

export interface TitleInterface extends ElementInterface {
	echelon: number;
	prerequisites: string;
	features: FeatureInterface[];
	selectedFeatureID: string;
}
