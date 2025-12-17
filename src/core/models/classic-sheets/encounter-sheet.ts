import { FeatureMaliceInterface, FeatureMaliceAbilityInterface } from '../../../core/models/feature';
import { MonsterInterface } from '../../../core/models/monster';
import { MonsterSheetInterface } from '../../../core/models/classic-sheets/monster-sheet';

export interface EncounterSheetInterface {
	id: string;
	name: string;
	description: string;

	notes?: string;

	heroCount: number;
	heroLvl: number;
	heroVictories: number;

	difficulty: string;
	encounterVictories: number;
	encounterEv: number;

	objective?: string;
	successCondition?: string;
	failureCondition?: string;

	malice?: { monster: string; malice: (FeatureMaliceInterface | FeatureMaliceAbilityInterface)[] }[];
	groups?: EncounterGroupSheetInterface[];

	monsters?: MonsterSheetInterface[];
}

// #region Encounter Group
export interface EncounterGroupSheetInterface {
	id: string;
	name: string;
	slots: EncounterSlotSheetInterface[];
}

export interface EncounterSlotSheetInterface {
	id: string;
	monster: MonsterInterface;
	count: number;
	isMinion: boolean;
}
// #endregion
