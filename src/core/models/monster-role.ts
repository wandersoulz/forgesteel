import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';

export interface MonsterRole {
	type: MonsterRoleType;
	organization: MonsterOrganizationType;
};
