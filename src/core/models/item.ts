import { AbilityKeyword } from '@/core/enums/ability-keyword';
import { Element } from '@/core/models/element';
import { Feature } from '@/core/models/feature';
import { Imbuement } from '@/core/models/imbuement';
import { ItemType } from '@/core/enums/item-type';
import { KitArmor } from '@/core/enums/kit-armor';
import { KitWeapon } from '@/core/enums/kit-weapon';
import { Project } from '@/core/models/project';

export interface Item extends Element {
	type: ItemType;
	keywords: (AbilityKeyword | KitArmor | KitWeapon)[];
	crafting: Project | null;
	effect: string;
	featuresByLevel: {
		level: number;
		features: Feature[];
	}[];
	imbuements: Imbuement[];
	count: number;

	/**
	 * @deprecated This field has been subsumed into the imbuements field.
	 */
	customizationsByLevel: {
		level: number;
		features: { feature: Feature, selected: boolean }[];
	}[],
}
