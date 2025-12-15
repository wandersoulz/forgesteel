import { Feature, FeatureLanguageChoice } from '@/core/models/feature';
import { CultureType } from '@/core/enums/culture-type';
import { Element } from '@/core/models/element';

export interface Culture extends Element {
	type: CultureType;
	language: FeatureLanguageChoice;
	environment: Feature | null;
	organization: Feature | null;
	upbringing: Feature | null;

	/**
	 * @deprecated This field has been subsumed into the language field.
	 */
	languages: string[];
}
