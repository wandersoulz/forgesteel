import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';
import { ImbuementInterface } from '../../core/models/imbuement';
import { ItemType } from '../../core/enums/item-type';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';
import { ProjectInterface } from '../../core/models/project';

export interface ItemInterface extends ElementInterface {
	type: ItemType;
	keywords: (AbilityKeyword | KitArmor | KitWeapon)[];
	crafting: ProjectInterface | null;
	effect: string;
	featuresByLevel: {
		level: number;
		features: FeatureInterface[];
	}[];
	imbuements: ImbuementInterface[];
	count: number;
}
