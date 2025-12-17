import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';
import { MonsterInterface } from '../../core/models/monster';

export interface SummoningInfoInterface {
	isSignature: boolean;
	cost: number;
	count: number;
	level3: FeatureInterface[];
	level6: FeatureInterface[];
	level10: FeatureInterface[];
}

export interface SummonInterface extends ElementInterface {
	monster: MonsterInterface;
	info: SummoningInfoInterface;
}
