import { DamageModifierInterface, ModifierInterface } from '../../core/models/damage-modifier';
import { AbilityInterface } from '../../core/models/ability';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { AncestryInterface } from '../../core/models/ancestry';
import { Characteristic } from '../../core/enums/characteristic';
import { ConditionType } from '../../core/enums/condition-type';
import { DamageType } from '../../core/enums/damage-type';
import { DomainInterface } from '../../core/models/domain';
import { ElementInterface } from '../../core/models/element';
import { FeatureAddOnType } from '../../core/enums/feature-addon-type';
import { FeatureField } from '../../core/enums/feature-field';
import { FeatureType } from '../../core/enums/feature-type';
import { FixtureInterface } from '../../core/models/fixture';
import { FollowerInterface } from '../../core/models/follower';
import { ItemInterface } from '../../core/models/item';
import { ItemType } from '../../core/enums/item-type';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';
import { MonsterInterface } from '../../core/models/monster';
import { PerkInterface } from '../../core/models/perk';
import { PerkList } from '../../core/enums/perk-list';
import { PowerRollInterface } from '../../core/models/power-roll';
import { SizeInterface } from '../../core/models/size';
import { SkillList } from '../../core/enums/skill-list';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';
import { SummonInterface } from '../../core/models/summon';
import { TitleInterface } from '../../core/models/title';

interface _FeatureDataInterface {}

type FeatureOf<Type extends FeatureType, Data extends _FeatureDataInterface | null = null> = ElementInterface & {
	type: Type;
	data: Data;
};

export interface FeatureAbilityDataInterface extends _FeatureDataInterface {
	ability: AbilityInterface;
}
export type FeatureAbilityInterface = FeatureOf<FeatureType.Ability, FeatureAbilityDataInterface>;

export interface FeatureAbilityCostDataInterface extends _FeatureDataInterface {
	keywords: AbilityKeyword[];
	modifier: number;
}
export type FeatureAbilityCostInterface = FeatureOf<FeatureType.AbilityCost, FeatureAbilityCostDataInterface>;

export interface FeatureAbilityDamageDataInterface extends _FeatureDataInterface, ModifierInterface {
	keywords: AbilityKeyword[];
	damageType: DamageType;
}
export type FeatureAbilityDamageInterface = FeatureOf<FeatureType.AbilityDamage, FeatureAbilityDamageDataInterface>;

export interface FeatureAbilityDistanceDataInterface extends _FeatureDataInterface, ModifierInterface {
	keywords: AbilityKeyword[];
}
export type FeatureAbilityDistanceInterface = FeatureOf<
	FeatureType.AbilityDistance,
	FeatureAbilityDistanceDataInterface
>;

export interface FeatureAddOnDataInterface extends _FeatureDataInterface {
	category: FeatureAddOnType;
	cost: number;
}
export type FeatureAddOnInterface = FeatureOf<FeatureType.AddOn, FeatureAddOnDataInterface>;

export interface FeatureAncestryChoiceDataInterface extends _FeatureDataInterface {
	selected: AncestryInterface | null;
}
export type FeatureAncestryChoiceInterface = FeatureOf<FeatureType.AncestryChoice, FeatureAncestryChoiceDataInterface>;

export interface FeatureAncestryFeatureChoiceDataInterface extends _FeatureDataInterface {
	source: {
		current: boolean;
		former: boolean;
		customID: string;
	};
	value: number;
	selected: FeatureInterface | null;
}
export type FeatureAncestryFeatureChoiceInterface = FeatureOf<
	FeatureType.AncestryFeatureChoice,
	FeatureAncestryFeatureChoiceDataInterface
>;

export interface FeatureBonusDataInterface extends _FeatureDataInterface, ModifierInterface {
	field: FeatureField;
}
export type FeatureBonusInterface = FeatureOf<FeatureType.Bonus, FeatureBonusDataInterface>;

export interface FeatureCharacteristicBonusDataInterface extends _FeatureDataInterface {
	characteristic: Characteristic;
	value: number;
}
export type FeatureCharacteristicBonusInterface = FeatureOf<
	FeatureType.CharacteristicBonus,
	FeatureCharacteristicBonusDataInterface
>;

export interface FeatureChoiceDataInterface extends _FeatureDataInterface {
	options: { feature: FeatureInterface; value: number }[];
	count: number | 'ancestry';
	selected: FeatureInterface[];
}
export type FeatureChoiceInterface = FeatureOf<FeatureType.Choice, FeatureChoiceDataInterface>;

export interface FeatureClassAbilityDataInterface extends _FeatureDataInterface {
	classID: string | undefined;
	cost: number | 'signature';
	source: {
		fromClassAbilities: boolean;
		fromSelectedSubclassAbilities: boolean;
		fromUnselectedSubclassAbilities: boolean;
		fromClassLevels: boolean;
		fromSelectedSubclassLevels: boolean;
		fromUnselectedSubclassLevels: boolean;
	};
	minLevel: number;
	count: number;
	selectedIDs: string[];
}
export type FeatureClassAbilityInterface = FeatureOf<FeatureType.ClassAbility, FeatureClassAbilityDataInterface>;

export interface FeatureConditionImmunityDataInterface extends _FeatureDataInterface {
	conditions: ConditionType[];
}
export type FeatureConditionImmunityInterface = FeatureOf<
	FeatureType.ConditionImmunity,
	FeatureConditionImmunityDataInterface
>;

export interface FeatureCompanionDataInterface extends _FeatureDataInterface {
	selected: MonsterInterface | null;
}
export type FeatureCompanionInterface = FeatureOf<FeatureType.Companion, FeatureCompanionDataInterface>;

export interface FeatureDamageModifierDataInterface extends _FeatureDataInterface {
	modifiers: DamageModifierInterface[];
}
export type FeatureDamageModifierInterface = FeatureOf<FeatureType.DamageModifier, FeatureDamageModifierDataInterface>;

export interface FeatureDomainDataInterface extends _FeatureDataInterface {
	characteristic: Characteristic;
	levels: number[];
	count: number;
	selected: DomainInterface[];
}
export type FeatureDomainInterface = FeatureOf<FeatureType.Domain, FeatureDomainDataInterface>;

export interface FeatureDomainFeatureDataInterface extends _FeatureDataInterface {
	level: number;
	count: number;
	selected: FeatureInterface[];
}
export type FeatureDomainFeatureInterface = FeatureOf<FeatureType.DomainFeature, FeatureDomainFeatureDataInterface>;

export interface FeatureFixtureDataInterface extends _FeatureDataInterface {
	fixture: FixtureInterface;
}
export type FeatureFixtureInterface = FeatureOf<FeatureType.Fixture, FeatureFixtureDataInterface>;

export interface FeatureFollowerDataInterface extends _FeatureDataInterface {
	follower: FollowerInterface;
}
export type FeatureFollowerInterface = FeatureOf<FeatureType.Follower, FeatureFollowerDataInterface>;

export interface FeatureHeroicResourceDataInterface extends _FeatureDataInterface {
	type: 'heroic' | 'epic';
	gains: { tag: string; trigger: string; value: string }[];
	details: string;
	canBeNegative: boolean;
	value: number;
}
export type FeatureHeroicResourceInterface = FeatureOf<FeatureType.HeroicResource, FeatureHeroicResourceDataInterface>;

export interface FeatureHeroicResourceGainDataInterface extends _FeatureDataInterface {
	tag: string;
	trigger: string;
	value: string;
	replacesTags: string[];
}
export type FeatureHeroicResourceGainInterface = FeatureOf<
	FeatureType.HeroicResourceGain,
	FeatureHeroicResourceGainDataInterface
>;

export interface FeatureItemChoiceDataInterface extends _FeatureDataInterface {
	types: ItemType[];
	count: number;
	selected: ItemInterface[];
}
export type FeatureItemChoiceInterface = FeatureOf<FeatureType.ItemChoice, FeatureItemChoiceDataInterface>;

export interface FeatureKitDataInterface extends _FeatureDataInterface {
	types: string[];
	count: number;
	selected: KitInterface[];
}
export type FeatureKitInterface = FeatureOf<FeatureType.Kit, FeatureKitDataInterface>;

export interface FeatureLanguageDataInterface extends _FeatureDataInterface {
	language: string;
}
export type FeatureLanguageInterface = FeatureOf<FeatureType.Language, FeatureLanguageDataInterface>;

export interface FeatureLanguageChoiceDataInterface extends _FeatureDataInterface {
	options: string[];
	count: number;
	selected: string[];
}
export type FeatureLanguageChoiceInterface = FeatureOf<FeatureType.LanguageChoice, FeatureLanguageChoiceDataInterface>;

export interface FeatureMaliceDataInterface extends _FeatureDataInterface {
	cost: number;
	repeatable?: boolean;
	sections: (string | PowerRollInterface)[];
	echelon: number;
	icon?: StatBlockIcon;
}
export type FeatureMaliceInterface = FeatureOf<FeatureType.Malice, FeatureMaliceDataInterface>;

export interface FeatureMaliceAbilityDataInterface extends _FeatureDataInterface {
	ability: AbilityInterface;
	echelon: number;
}
export type FeatureMaliceAbilityInterface = FeatureOf<FeatureType.MaliceAbility, FeatureMaliceAbilityDataInterface>;

export interface FeatureMovementModeDataInterface extends _FeatureDataInterface {
	mode: string;
}
export type FeatureMovementModeInterface = FeatureOf<FeatureType.MovementMode, FeatureMovementModeDataInterface>;

export interface FeatureMultipleDataInterface extends _FeatureDataInterface {
	features: FeatureInterface[];
}
export type FeatureMultipleInterface = FeatureOf<FeatureType.Multiple, FeatureMultipleDataInterface>;

export interface FeaturePackageDataInterface extends _FeatureDataInterface {
	tag: string;
}
export type FeaturePackageInterface = FeatureOf<FeatureType.Package, FeaturePackageDataInterface>;

export interface FeaturePackageContentDataInterface extends _FeatureDataInterface {
	tag: string;
}
export type FeaturePackageContentInterface = FeatureOf<FeatureType.PackageContent, FeaturePackageContentDataInterface>;

export interface FeaturePerkDataInterface extends _FeatureDataInterface {
	lists: PerkList[];
	count: number;
	selected: PerkInterface[];
}
export type FeaturePerkInterface = FeatureOf<FeatureType.Perk, FeaturePerkDataInterface>;

export interface FeatureProficiencyDataInterface extends _FeatureDataInterface {
	weapons: KitWeapon[];
	armor: KitArmor[];
}
export type FeatureProficiencyInterface = FeatureOf<FeatureType.Proficiency, FeatureProficiencyDataInterface>;

export interface FeatureRetainerDataInterface extends _FeatureDataInterface {
	selected: MonsterInterface | null;
}
export type FeatureRetainerInterface = FeatureOf<FeatureType.Retainer, FeatureRetainerDataInterface>;

export interface FeatureSaveThresholdDataInterface extends _FeatureDataInterface {
	value: number;
}
export type FeatureSaveThresholdInterface = FeatureOf<FeatureType.SaveThreshold, FeatureSaveThresholdDataInterface>;

export interface FeatureSizeDataInterface extends _FeatureDataInterface {
	size: SizeInterface;
}
export type FeatureSizeInterface = FeatureOf<FeatureType.Size, FeatureSizeDataInterface>;

export interface FeatureSkillChoiceDataInterface extends _FeatureDataInterface {
	options: string[];
	listOptions: SkillList[];
	count: number;
	selected: string[];
}
export type FeatureSkillChoiceInterface = FeatureOf<FeatureType.SkillChoice, FeatureSkillChoiceDataInterface>;

export interface FeatureSpeedDataInterface extends _FeatureDataInterface {
	speed: number;
}
export type FeatureSpeedInterface = FeatureOf<FeatureType.Speed, FeatureSpeedDataInterface>;

export interface FeatureSummonDataInterface extends _FeatureDataInterface {
	summons: SummonInterface[];
}
export type FeatureSummonInterface = FeatureOf<FeatureType.Summon, FeatureSummonDataInterface>;

export interface FeatureSummonChoiceDataInterface extends _FeatureDataInterface {
	options: SummonInterface[];
	count: number;
	selected: SummonInterface[];
}
export type FeatureSummonChoiceInterface = FeatureOf<FeatureType.SummonChoice, FeatureSummonChoiceDataInterface>;

export interface FeatureTaggedFeatureDataInterface extends _FeatureDataInterface {
	tag: string;
	feature: FeatureInterface;
}
export type FeatureTaggedFeatureInterface = FeatureOf<FeatureType.TaggedFeature, FeatureTaggedFeatureDataInterface>;

export interface FeatureTaggedFeatureChoiceDataInterface extends _FeatureDataInterface {
	tag: string;
	count: number;
	selected: FeatureInterface[];
}
export type FeatureTaggedFeatureChoiceInterface = FeatureOf<
	FeatureType.TaggedFeatureChoice,
	FeatureTaggedFeatureChoiceDataInterface
>;

export type FeatureTextInterface = FeatureOf<FeatureType.Text>;

export interface FeatureTitleChoiceDataInterface extends _FeatureDataInterface {
	echelon: number;
	count: number;
	selected: TitleInterface[];
}
export type FeatureTitleChoiceInterface = FeatureOf<FeatureType.TitleChoice, FeatureTitleChoiceDataInterface>;

export type FeatureInterface =
	| FeatureAbilityInterface
	| FeatureAbilityCostInterface
	| FeatureAbilityDamageInterface
	| FeatureAbilityDistanceInterface
	| FeatureAddOnInterface
	| FeatureAncestryChoiceInterface
	| FeatureAncestryFeatureChoiceInterface
	| FeatureBonusInterface
	| FeatureCharacteristicBonusInterface
	| FeatureChoiceInterface
	| FeatureClassAbilityInterface
	| FeatureCompanionInterface
	| FeatureConditionImmunityInterface
	| FeatureDamageModifierInterface
	| FeatureDomainInterface
	| FeatureDomainFeatureInterface
	| FeatureFixtureInterface
	| FeatureFollowerInterface
	| FeatureHeroicResourceInterface
	| FeatureHeroicResourceGainInterface
	| FeatureItemChoiceInterface
	| FeatureKitInterface
	| FeatureLanguageInterface
	| FeatureLanguageChoiceInterface
	| FeatureMaliceInterface
	| FeatureMaliceAbilityInterface
	| FeatureMovementModeInterface
	| FeatureMultipleInterface
	| FeaturePackageInterface
	| FeaturePackageContentInterface
	| FeaturePerkInterface
	| FeatureProficiencyInterface
	| FeatureRetainerInterface
	| FeatureSaveThresholdInterface
	| FeatureSizeInterface
	| FeatureSkillChoiceInterface
	| FeatureSpeedInterface
	| FeatureSummonInterface
	| FeatureSummonChoiceInterface
	| FeatureTextInterface
	| FeatureTaggedFeatureInterface
	| FeatureTaggedFeatureChoiceInterface
	| FeatureTitleChoiceInterface;

export type FeatureDataInterface = FeatureInterface['data'];
