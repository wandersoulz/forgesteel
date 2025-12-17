import { ElementInterface } from '../../core/models/element';
import { PowerRollInterface } from '../../core/models/power-roll';
import { SourcebookElementKindInterface } from '../../core/models/sourcebook';

export interface PlotContentTextInterface {
	id: string;
	contentType: 'text';
	format: 'standard' | 'read-aloud' | 'director';
	text: string;
}

export interface PlotContentImageInterface {
	id: string;
	contentType: 'image';
	title: string;
	data: string;
}

export interface PlotContentRollInterface {
	id: string;
	contentType: 'roll';
	roll: PowerRollInterface;
}

export interface PlotContentReferenceInterface {
	id: string;
	contentType: 'reference';
	type: SourcebookElementKindInterface;
	contentID: string;
}

export type PlotContent =
	| PlotContentTextInterface
	| PlotContentImageInterface
	| PlotContentRollInterface
	| PlotContentReferenceInterface;

export interface PlotLinkInterface {
	id: string;
	plotID: string;
	label: string;
}

export interface PlotInterface extends ElementInterface {
	content: PlotContent[];
	plots: PlotInterface[];
	links: PlotLinkInterface[];
}
