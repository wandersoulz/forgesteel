import type { Characteristic } from '@/core/enums/characteristic';

export interface PowerRoll {
	characteristic: Characteristic[];
	bonus: number;
	tier1: string;
	tier2: string;
	tier3: string;
}
