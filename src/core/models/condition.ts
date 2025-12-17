import { ConditionEndType, ConditionType } from '../../core/enums/condition-type';

export interface ConditionInterface {
	id: string;
	type: ConditionType;
	text: string;
	ends: ConditionEndType;
}
