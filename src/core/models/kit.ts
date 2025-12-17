import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export interface KitDamageBonusInterface {
	tier1: number;
	tier2: number;
	tier3: number;
}

export interface KitInterface extends ElementInterface {
	type: string;
	armor: KitArmor[];
	weapon: KitWeapon[];

	stamina: number;
	speed: number;
	stability: number;
	disengage: number;
	meleeDamage: KitDamageBonusInterface | null;
	rangedDamage: KitDamageBonusInterface | null;
	meleeDistance: number;
	rangedDistance: number;

	features: FeatureInterface[];
}
