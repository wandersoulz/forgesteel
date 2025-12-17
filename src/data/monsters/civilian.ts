import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';

export const civilian: MonsterGroupInterface = {
	id: 'monster-group-civilian',
	name: 'Civilian',
	description: '',
	picture: null,
	information: [],
	malice: [],
	monsters: [
		ElementFactory.createMonster({
			id: 'civilian-1',
			name: 'Civilian',
			level: 0,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.NoOrganization),
			keywords: ['Humanoid or Animal'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 8,
			stability: 0,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(0, 0, 0, 0, 0),
			features: [],
		}),
	],
	addOns: [],
};
