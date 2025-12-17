import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';
import { ItemType } from '../../core/enums/item-type';
import { ProjectInterface } from '../../core/models/project';

export interface ImbuementInterface extends ElementInterface {
	type: ItemType;
	crafting: ProjectInterface | null;
	level: number;
	feature: FeatureInterface;
}
