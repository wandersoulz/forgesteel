import {
	FeatureAddOnInterface,
	FeatureMaliceInterface,
	FeatureMaliceAbilityInterface,
} from '../../core/models/feature';
import { ElementInterface } from '../../core/models/element';
import { MonsterInterface } from '../../core/models/monster';

export interface MonsterGroupInterface extends ElementInterface {
	picture: string | null;
	information: ElementInterface[];
	malice: (FeatureMaliceInterface | FeatureMaliceAbilityInterface)[];
	monsters: MonsterInterface[];
	addOns: FeatureAddOnInterface[];
}
