import { FeatureAddOn, FeatureMalice, FeatureMaliceAbility } from '../../core/models/feature';
import { Element } from '../../core/models/element';
import { Monster } from '../../core/models/monster';

export interface MonsterGroup extends Element {
	picture: string | null;
	information: Element[];
	malice: (FeatureMalice | FeatureMaliceAbility)[];
	monsters: Monster[];
	addOns: FeatureAddOn[];
};
