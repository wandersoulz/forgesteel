import { Condition } from '../../core/models/condition';

export interface MonsterState {
	staminaDamage: number;
	staminaTemp: number;
	recoveriesUsed: number;
	conditions: Condition[];
	reactionUsed: boolean;
	hidden: boolean;
	defeated: boolean;
	captainID: string | undefined;
};
