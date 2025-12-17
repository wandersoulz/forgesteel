import { ConditionInterface } from '../../core/models/condition';

export interface MonsterStateInterface {
	staminaDamage: number;
	staminaTemp: number;
	recoveriesUsed: number;
	conditions: ConditionInterface[];
	reactionUsed: boolean;
	hidden: boolean;
	defeated: boolean;
	captainID: string | undefined;
}
