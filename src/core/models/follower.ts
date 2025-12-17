import { Characteristic } from '../../core/enums/characteristic';
import { ElementInterface } from '../../core/models/element';
import { FollowerType } from '../../core/enums/follower-type';

export interface FollowerInterface extends ElementInterface {
	type: FollowerType;
	characteristics: {
		characteristic: Characteristic;
		value: number;
	}[];
	skills: string[];
	languages: string[];
}
