import { ElementInterface } from '../../core/models/element';
import { PlotInterface } from '../../core/models/plot';

export interface AdventureInterface extends ElementInterface {
	party: {
		count: number;
		level: number;
	};
	introduction: ElementInterface[];
	plot: PlotInterface;
}

export interface AdventurePackageInterface {
	adventure: AdventureInterface;
	elements: {
		type: 'encounter' | 'montage' | 'negotiation' | 'map';
		data: ElementInterface;
	}[];
}
