import { Element } from '../../core/models/element';
import { Feature } from '../../core/models/feature';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export interface KitDamageBonus {
	tier1: number;
	tier2: number;
	tier3: number;
};

export interface Kit extends Element {
	type: string;
	armor: KitArmor[];
	weapon: KitWeapon[];

	stamina: number;
	speed: number;
	stability: number;
	disengage: number;
	meleeDamage: KitDamageBonus | null;
	rangedDamage: KitDamageBonus | null;
	meleeDistance: number;
	rangedDistance: number;

	features: Feature[];
};
