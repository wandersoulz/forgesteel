import { AbilitySheetInterface } from '../../../core/models/classic-sheets/ability-sheet';
import { CharacteristicsSheetInterface } from '../../../core/models/classic-sheets/classic-sheets';
import { FeatureInterface } from '../../../core/models/feature';

// #region Monster
export interface MonsterSheetInterface {
	id: string;
	name: string;
	type: string;
	role: string;
	cost?: string;

	characteristics: CharacteristicsSheetInterface;

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

	features?: FeatureInterface[];
	abilities?: AbilitySheetInterface[];
}
// #endregion
