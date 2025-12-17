import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';
import { SizeInterface } from '../../core/models/size';

export interface FixtureInterface extends ElementInterface {
	baseStamina: number;
	size: SizeInterface;
	featuresByLevel: { level: number; features: FeatureInterface[] }[];
}
