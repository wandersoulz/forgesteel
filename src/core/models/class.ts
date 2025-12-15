import { Ability } from '@/core/models/ability';
import { Characteristic } from '@/core/enums/characteristic';
import { Element } from '@/core/models/element';
import { Feature } from '@/core/models/feature';
import { SubClass } from '@/core/models/subclass';

export interface HeroClass extends Element {
	type: 'standard' | 'master';
	subclassName: string;
	subclassCount: number;

	primaryCharacteristicsOptions: Characteristic[][];
	primaryCharacteristics: Characteristic[];

	featuresByLevel: {
		level: number;
		features: Feature[];
	}[];
	abilities: Ability[];
	subclasses: SubClass[];

	level: number;
	characteristics: {
		characteristic: Characteristic;
		value: number;
	}[];
}
