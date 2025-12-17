import { LanguageType } from '../../core/enums/language-type';

export interface LanguageInterface {
	name: string;
	description: string;
	type: LanguageType;
	related: string[];
}
