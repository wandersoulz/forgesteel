import type { Characteristic } from '../../core/enums/characteristic';

export interface PowerRollInterface {
	characteristic: Characteristic[];
	bonus: number;
	tier1: string;
	tier2: string;
	tier3: string;
}
