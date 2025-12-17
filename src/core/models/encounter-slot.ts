import { MonsterInterface } from '../../core/models/monster';
import { MonsterStateInterface } from '../../core/models/monster-state';

export interface EncounterSlotCustomizationInterface {
	addOnIDs: string[];
	itemIDs: string[];
	levelAdjustment: number;
	convertToSolo: boolean;
}

export interface EncounterSlotInterface {
	id: string;
	monsterID: string;
	count: number;
	customization: EncounterSlotCustomizationInterface;
	monsters: MonsterInterface[];
	state: MonsterStateInterface;
}
