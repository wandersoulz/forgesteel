import { Characteristic } from '@/core/enums/characteristic';
import { Element } from '@/core/models/element';
import { FollowerType } from '@/core/enums/follower-type';

export interface Follower extends Element {
	type: FollowerType;
	characteristics: {
		characteristic: Characteristic;
		value: number;
	}[];
	skills: string[];
	languages: string[];
}
