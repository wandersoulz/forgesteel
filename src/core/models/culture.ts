import { FeatureInterface, FeatureLanguageChoiceInterface } from '../../core/models/feature';
import { CultureType } from '../../core/enums/culture-type';
import { ElementInterface } from '../../core/models/element';

export interface CultureInterface extends ElementInterface {
	type: CultureType;
	language: FeatureLanguageChoiceInterface;
	environment: FeatureInterface | null;
	organization: FeatureInterface | null;
	upbringing: FeatureInterface | null;
}
