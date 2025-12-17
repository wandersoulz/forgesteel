import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';

export interface MonsterFilterInterface {
	name: string;
	keywords: string[];
	roles: MonsterRoleType[];
	organizations: MonsterOrganizationType[];
	size: number[];
	level: number[];
	ev: number[];
}
