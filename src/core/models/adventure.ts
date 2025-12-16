import { Element } from '../../core/models/element';
import { Plot } from '../../core/models/plot';

export interface Adventure extends Element {
	party: {
		count: number;
		level: number;
	};
	introduction: Element[];
	plot: Plot;
}

export interface AdventurePackage {
	adventure: Adventure;
	elements: {
		type: 'encounter' | 'montage' | 'negotiation' | 'map',
		data: Element
	}[];
}
