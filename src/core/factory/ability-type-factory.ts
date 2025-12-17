import { AbilityTypeInterface } from '../models/ability';
import { AbilityUsage } from '../enums/ability-usage';

export class AbilityTypeFactory {
	createMain = (options?: { free?: boolean; qualifiers?: string[]; freeStrike?: boolean }): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.MainAction,
			free: options?.free ?? false,
			trigger: '',
			time: '',
			qualifiers: options?.qualifiers || [],
			freeStrike: options?.freeStrike ?? false,
		};
	};

	createManeuver = (options?: {
		free?: boolean;
		qualifiers?: string[];
		freeStrike?: boolean;
	}): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.Maneuver,
			free: options?.free ?? false,
			trigger: '',
			time: '',
			qualifiers: options?.qualifiers || [],
			freeStrike: options?.freeStrike ?? false,
		};
	};

	createMove = (options?: { free?: boolean; qualifiers?: string[]; freeStrike?: boolean }): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.Move,
			free: options?.free ?? false,
			trigger: '',
			time: '',
			qualifiers: options?.qualifiers || [],
			freeStrike: options?.freeStrike ?? false,
		};
	};

	createTrigger = (
		trigger: string,
		options?: { free?: boolean; qualifiers?: string[]; freeStrike?: boolean }
	): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.Trigger,
			free: options?.free ?? false,
			trigger: trigger,
			time: '',
			qualifiers: options?.qualifiers || [],
			freeStrike: options?.freeStrike ?? false,
		};
	};

	createTime = (time: string): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.Other,
			free: false,
			trigger: '',
			time: time,
			qualifiers: [],
			freeStrike: false,
		};
	};

	createVillainAction = (order?: number): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.VillainAction,
			free: false,
			trigger: '',
			time: '',
			qualifiers: [],
			order: order,
			freeStrike: false,
		};
	};

	createChampionAction = (): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.ChampionAction,
			free: false,
			trigger: '',
			time: '',
			qualifiers: [],
			freeStrike: false,
		};
	};

	createNoAction = (): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.NoAction,
			free: false,
			trigger: '',
			time: '',
			qualifiers: [],
			freeStrike: false,
		};
	};

	createFreeStrike = (): AbilityTypeInterface => {
		return {
			usage: AbilityUsage.FreeStrike,
			free: false,
			trigger: '',
			time: '',
			qualifiers: [],
			freeStrike: false,
		};
	};
}
