import { ConditionInterface } from '../../core/models/condition';
import { EncounterSlotInterface } from '../../core/models/encounter-slot';
import { ItemInterface } from '../../core/models/item';
import { ProjectInterface } from '../../core/models/project';

export interface HeroStateInterface {
	staminaDamage: number;
	staminaTemp: number;
	recoveriesUsed: number;
	surges: number;
	victories: number;
	xp: number;
	heroTokens: number;
	renown: number;
	wealth: number;
	projectPoints: number;
	conditions: ConditionInterface[];
	inventory: ItemInterface[];
	projects: ProjectInterface[];
	controlledSlots: EncounterSlotInterface[];
	notes: string;
	hidden: boolean;
	encounterState: 'ready' | 'current' | 'finished';
	defeated: boolean;
}
