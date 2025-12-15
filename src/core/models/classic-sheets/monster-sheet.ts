import { AbilitySheet } from '@/core/models/classic-sheets/ability-sheet';
import { CharacteristicsSheet } from '@/core/models/classic-sheets/classic-sheets';
import { Feature } from '@/core/models/feature';

// #region Monster
export interface MonsterSheet {
	id: string;
	name: string;
	type: string;
	role: string;
	cost?: string;

	characteristics: CharacteristicsSheet;

	keywords: string;

	size: string;
	speed: number;
	stamina: number;
	stability: number;
	freeStrike: number;
	freeStrikeDamageType?: string;

	immunity: string;
	weakness: string;
	movement: string;

	withCaptain: string;

	features?: Feature[];
	abilities?: AbilitySheet[];
};
// #endregion
