import { Culture } from '../../core/models/culture';
import { Element } from '../../core/models/element';
import { Feature } from '../../core/models/feature';

export interface Ancestry extends Element {
	features: Feature[];
	ancestryPoints: number;
	culture?: Culture
}
