import { Element } from '@/core/models/element';
import { Feature } from '@/core/models/feature';
import { Monster } from '@/core/models/monster';

export interface SummoningInfo {
	isSignature: boolean;
	cost: number;
	count: number;
	level3: Feature[];
	level6: Feature[];
	level10: Feature[];
};

export interface Summon extends Element {
	monster: Monster;
	info: SummoningInfo;
};
