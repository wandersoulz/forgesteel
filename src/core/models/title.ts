import { Element } from '@/core/models/element';
import { Feature } from '@/core/models/feature';

export interface Title extends Element {
	echelon: number;
	prerequisites: string;
	features: Feature[];
	selectedFeatureID: string;
}
