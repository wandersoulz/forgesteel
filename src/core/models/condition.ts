import { ConditionEndType, ConditionType } from '@/core/enums/condition-type';

export interface Condition {
	id: string;
	type: ConditionType;
	text: string;
	ends: ConditionEndType;
}
