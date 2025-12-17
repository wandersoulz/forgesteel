import { AbilitySheetInterface } from '../../../core/models/classic-sheets/ability-sheet';
import { CharacteristicsSheetInterface } from '../../../core/models/classic-sheets/classic-sheets';
import { ConditionInterface } from '../../../core/models/condition';
import { ConditionType } from '../../../core/enums/condition-type';
import { CultureInterface } from '../../../core/models/culture';
import { ElementInterface } from '../../../core/models/element';
import { FeatureInterface } from '../../../core/models/feature';
import { HeroInterface } from '../../../core/models/hero';
import { ItemInterface } from '../../../core/models/item';
import { MonsterSheetInterface } from '../../../core/models/classic-sheets/monster-sheet';
import { PerkInterface } from '../../../core/models/perk';
import { TitleInterface } from '../../../core/models/title';

// #region Character
export interface HeroSheetInterface {
	hero: HeroInterface;
	name?: string;
	ancestryName?: string;
	className?: string;
	subclassTypeName?: string;
	subclassName?: string;
	level?: number;

	currentVictories?: number;
	wealth?: number;
	renown?: number;
	xp?: number;

	inventory?: ItemSheetInterface[];

	might?: number;
	agility?: number;
	reason?: number;
	intuition?: number;
	presence?: number;

	size?: string;
	speed?: string;
	disengage?: number;
	stability?: number;

	stamina: StaminaSheetInterface;
	recoveries: RecoveriesSheetInterface;

	heroicResourceName?: string;
	heroicResourceCurrent?: number;
	heroicResourceGains?: {
		tag: string;
		trigger: string;
		value: string;
	}[];

	surgeDamageAmount?: string;
	surgesCurrent?: number;

	// Modifiers (Kits, Prayers, Wards, etc)
	modifierTypes: string[];
	modifierName?: string;
	modifierWeaponImplement?: string;
	modifierArmorWard?: string;

	modifierSpeed?: number;
	modifierMeleeDistance?: number;
	modifierRangedDistance?: number;
	modifierDisengage?: number;
	modifierStability?: number;
	modifierStamina?: number;

	modifierMeleeDamageT1?: number;
	modifierMeleeDamageT2?: number;
	modifierMeleeDamageT3?: number;

	modifierRangedDamageT1?: number;
	modifierRangedDamageT2?: number;
	modifierRangedDamageT3?: number;

	modifierBenefits?: FeatureInterface[];

	// Immunities and Weaknesses
	immunities: { damageType: string; value: number }[];
	weaknesses: { damageType: string; value: number }[];
	conditionImmunities?: ConditionType[];

	// Potencies
	potencyStrong?: number;
	potencyAverage?: number;
	potencyWeak?: number;

	// Conditions
	conditions?: ConditionInterface[];
	condition1Name?: string;
	condition2Name?: string;
	saveTarget?: number;
	saveBonus?: number;

	// Class Features
	classFeatures?: FeatureInterface[];

	// Ancestry Traits
	ancestryTraits?: FeatureInterface[];

	// Career
	career?: CareerSheetInterface;

	// Complication
	complication?: ComplicationSheetInterface;

	// Skills
	allSkills?: Map<string, string[]>;
	skills?: string[];

	// CultureInterface
	culture?: CultureInterface;

	languages?: string[];

	// Perks & Titles
	perks?: PerkInterface[];
	titles?: TitleInterface[];

	// Ancestry & Perks combined
	ancestryTraitsPerksCombined?: FeatureInterface[];

	// Projects
	projects: ProjectSheetInterface[];

	// Abilities
	abilities: AbilitySheetInterface[];
	standardAbilities: AbilitySheetInterface[];

	// Followers
	followers: FollowerSheetInterface[];
	// companions: FollowerSheet[];
	summons: MonsterSheetInterface[];

	// Other Features and Reference
	featuresReferenceOther: {
		feature: FeatureInterface;
		source: string;
	}[];

	extraReferenceItems: {
		title: string;
		content: string;
		wide: boolean;
		section: string;
	}[];

	notes: string;
}
// #endregion

// #region Sub-sheets
export interface StaminaSheetInterface {
	max?: number;
	current?: number;
	temp?: number;
	windedAt?: number;
	deadAt?: number;
}

export interface RecoveriesSheetInterface {
	max?: number;
	value?: number;
	current?: number;
}

export interface CareerSheetInterface {
	id: string;
	name: string;
	benefits: FeatureInterface[];
	incitingIncident?: ElementInterface;
}

export interface ComplicationSheetInterface {
	id: string;
	name: string;
	description: string;
	benefits: FeatureInterface[];
	drawbacks: FeatureInterface[];
}

export interface ProjectSheetInterface {
	id: string;
	name: string;
	description: string;
	assignee: string;
	characteristic: string;
	prerequisites: string;
	havePrerequisites: boolean;
	source: string;
	haveSource: boolean;
	pointsGoal: number;
	pointsCurrent?: number;
}

export interface ItemSheetInterface {
	id: string;
	item: ItemInterface;
	effect: string;
	features?: FeatureInterface[];
}
// #endregion

// #region Follower, Retainer, & Companion
export interface FollowerSheetInterface {
	id: string;
	name: string;
	classification: string;
	type: string;
	role: string;

	characteristics: CharacteristicsSheetInterface;

	skills?: string[];
	languages?: string[];

	keywords?: string;

	size?: string;
	speed?: number;
	stability?: number;
	freeStrike?: number;

	immunity?: string;
	weakness?: string;
	movement?: string;

	stamina?: StaminaSheetInterface;
	recoveries?: RecoveriesSheetInterface;

	features?: FeatureInterface[];
	abilities?: AbilitySheetInterface[];

	advancement?: {
		level: number;
		ability?: AbilitySheetInterface;
		features?: FeatureInterface[];
	}[];
}
// #endregion
