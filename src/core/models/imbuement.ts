import { Element } from '../../core/models/element';
import { Feature } from '../../core/models/feature';
import { ItemType } from '../../core/enums/item-type';
import { Project } from '../../core/models/project';

export interface Imbuement extends Element {
	type: ItemType;
	crafting: Project | null;
	level: number;
	feature: Feature;
}
