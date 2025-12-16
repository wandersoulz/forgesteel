import { Ability } from '../../core/models/ability';
import { Element } from '../../core/models/element';
import { Feature } from '../../core/models/feature';

export interface SubClass extends Element {
	featuresByLevel: {
		level: number;
		features: Feature[];
	}[];
	abilities: Ability[];

	selected: boolean;
}
