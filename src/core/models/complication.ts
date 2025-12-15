import { Element } from '@/core/models/element';
import { Feature } from '@/core/models/feature';

export interface Complication extends Element {
	features: Feature[];
}
