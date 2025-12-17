import { ElementInterface } from '../../core/models/element';
import { EncounterSlotInterface } from '../../core/models/encounter-slot';
import { HeroInterface } from '../../core/models/hero';

export interface EncounterGroupInterface {
	id: string;
	name: string;
	slots: EncounterSlotInterface[];
	encounterState: 'ready' | 'current' | 'finished';
}

export interface EncounterObjectiveInterface extends ElementInterface {
	difficultyModifier: string;
	successCondition: string;
	failureCondition: string;
	victories: string;
}

export interface EncounterInterface extends ElementInterface {
	groups: EncounterGroupInterface[];
	heroes: HeroInterface[];
	objective: EncounterObjectiveInterface | null;
	notes: ElementInterface[];
	initiative: 'heroes' | 'monsters' | undefined;
	round: number;
	malice: number;
	additionalTurnsTaken: string[];
	hiddenMaliceFeatures: string[];
}
