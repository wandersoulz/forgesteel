import { Characteristic } from '../../core/enums/characteristic';
import { FollowerType } from '../../core/enums/follower-type';
import { SkillList } from '../../core/enums/skill-list';
import { SourcebookInterface } from '../../core/models/sourcebook';
import { ActiveSourcebooks } from '../impl/sourcebook';

export class FollowerLogic {
	static getCharacteristicArrays = (type: FollowerType) => {
		switch (type) {
			case FollowerType.Artisan:
				return [
					[
						{ characteristic: Characteristic.Might, value: 1 },
						{ characteristic: Characteristic.Agility, value: 0 },
						{ characteristic: Characteristic.Reason, value: 1 },
						{ characteristic: Characteristic.Intuition, value: 0 },
						{ characteristic: Characteristic.Presence, value: 0 },
					],
					[
						{ characteristic: Characteristic.Might, value: 0 },
						{ characteristic: Characteristic.Agility, value: 1 },
						{ characteristic: Characteristic.Reason, value: 1 },
						{ characteristic: Characteristic.Intuition, value: 0 },
						{ characteristic: Characteristic.Presence, value: 0 },
					],
				];
			case FollowerType.Sage:
				return [
					[
						{ characteristic: Characteristic.Might, value: 0 },
						{ characteristic: Characteristic.Agility, value: 0 },
						{ characteristic: Characteristic.Reason, value: 1 },
						{ characteristic: Characteristic.Intuition, value: 1 },
						{ characteristic: Characteristic.Presence, value: 0 },
					],
				];
		}
	};

	static getSkillOptions = (type: FollowerType, sourcebooks: SourcebookInterface[]) => {
		const lists: SkillList[] = [];
		switch (type) {
			case FollowerType.Artisan:
				lists.push(SkillList.Crafting);
				break;
			case FollowerType.Sage:
				lists.push(SkillList.Lore);
				break;
		}

		return ActiveSourcebooks.getInstance()
			.getSkills()
			.filter((s) => lists.includes(s.list));
	};

	static getLanguageOptions = (sourcebooks: SourcebookInterface[]) => {
		return ActiveSourcebooks.getInstance()
			.getLanguages()
			.filter((l) => l.name !== 'Caelian');
	};
}
