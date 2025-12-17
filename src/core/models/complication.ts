import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';

export interface ComplicationInterface extends ElementInterface {
	features: FeatureInterface[];
}
