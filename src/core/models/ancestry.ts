import { CultureInterface } from '../../core/models/culture';
import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';

export interface AncestryInterface extends ElementInterface {
	features: FeatureInterface[];
	ancestryPoints: number;
	culture?: CultureInterface;
}
