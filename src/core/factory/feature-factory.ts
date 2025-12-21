import {
	FeatureInterface,
	FeatureAbilityInterface,
	FeatureAbilityCostInterface,
	FeatureAbilityDamageInterface,
	FeatureAbilityDataInterface,
	FeatureAbilityDistanceInterface,
	FeatureAddOnInterface,
	FeatureAncestryChoiceInterface,
	FeatureAncestryFeatureChoiceInterface,
	FeatureBonusInterface,
	FeatureCharacteristicBonusInterface,
	FeatureChoiceInterface,
	FeatureClassAbilityInterface,
	FeatureCompanionInterface,
	FeatureConditionImmunityInterface,
	FeatureDamageModifierInterface,
	FeatureDomainInterface,
	FeatureDomainFeatureInterface,
	FeatureFixtureInterface,
	FeatureFollowerInterface,
	FeatureHeroicResourceInterface,
	FeatureHeroicResourceGainInterface,
	FeatureItemChoiceInterface,
	FeatureKitInterface,
	FeatureLanguageInterface,
	FeatureLanguageChoiceInterface,
	FeatureMaliceInterface,
	FeatureMaliceAbilityInterface,
	FeatureMovementModeInterface,
	FeatureMultipleInterface,
	FeaturePackageInterface,
	FeaturePackageContentInterface,
	FeaturePerkInterface,
	FeatureProficiencyInterface,
	FeatureRetainerInterface,
	FeatureSaveThresholdInterface,
	FeatureSizeInterface,
	FeatureSkillChoiceInterface,
	FeatureSpeedInterface,
	FeatureSummonInterface,
	FeatureSummonChoiceInterface,
	FeatureTaggedFeatureInterface,
	FeatureTaggedFeatureChoiceInterface,
	FeatureTextInterface,
	FeatureTitleChoiceInterface,
} from '../models/feature';
import { AbilityInterface } from '../models/ability';
import { AbilityKeyword } from '../enums/ability-keyword';
import { Characteristic } from '../enums/characteristic';
import { ConditionType } from '../enums/condition-type';
import { DamageModifierInterface } from '../models/damage-modifier';
import { DamageType } from '../enums/damage-type';
import { FeatureAddOnType } from '../enums/feature-addon-type';
import { FeatureField } from '../enums/feature-field';
import { FeatureType } from '../enums/feature-type';
import { FixtureInterface } from '../models/fixture';
import { FollowerInterface } from '../models/follower';
import { Format } from '../utils/format';
import { FormatLogic } from '../logic/format-logic';
import { ItemType } from '../enums/item-type';
import { KitArmor } from '../enums/kit-armor';
import { KitWeapon } from '../enums/kit-weapon';
import { PerkInterface } from '../models/perk';
import { PerkList } from '../enums/perk-list';
import { PowerRollInterface } from '../models/power-roll';
import { SkillList } from '../enums/skill-list';
import { StatBlockIcon } from '../enums/stat-block-icon';
import { SummonInterface } from '../models/summon';

export class FeatureFactory {
	create = (data: { id: string; name: string; description: string }): FeatureTextInterface => {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			type: FeatureType.Text,
			data: null,
		};
	};

	createAbility = (data: FeatureAbilityDataInterface): FeatureAbilityInterface => {
		return {
			id: data.ability.id,
			name: data.ability.name,
			description: data.ability.description,
			type: FeatureType.Ability,
			data: {
				ability: data.ability,
			},
		};
	};

	createAbilityCost = (data: {
		id: string;
		name?: string;
		description?: string;
		keywords: AbilityKeyword[];
		modifier: number;
	}): FeatureAbilityCostInterface => {
		return {
			id: data.id,
			name: data.name || 'AbilityInterface cost modifier',
			description: data.description || '',
			type: FeatureType.AbilityCost,
			data: {
				keywords: data.keywords,
				modifier: data.modifier,
			},
		};
	};

	createAbilityDamage = (data: {
		id: string;
		name?: string;
		description?: string;
		keywords: AbilityKeyword[];
		value?: number;
		valueFromController?: FeatureField;
		valueCharacteristics?: Characteristic[];
		valueCharacteristicMultiplier?: number;
		valuePerLevel?: number;
		valuePerEchelon?: number;
		damageType?: DamageType;
	}): FeatureAbilityDamageInterface => {
		return {
			id: data.id,
			name: data.name || 'AbilityInterface damage modifier',
			description: data.description || '',
			type: FeatureType.AbilityDamage,
			data: {
				keywords: data.keywords,
				value: data.value || 0,
				valueFromController: data.valueFromController || null,
				valueCharacteristics: data.valueCharacteristics || [],
				valueCharacteristicMultiplier: data.valueCharacteristicMultiplier || 0,
				valuePerLevel: data.valuePerLevel || 0,
				valuePerEchelon: data.valuePerEchelon || 0,
				damageType: data.damageType || DamageType.Damage,
			},
		};
	};

	createAbilityDistance = (data: {
		id: string;
		name?: string;
		description?: string;
		keywords: AbilityKeyword[];
		value?: number;
		valueFromController?: FeatureField;
		valueCharacteristics?: Characteristic[];
		valueCharacteristicMultiplier?: number;
		valuePerLevel?: number;
		valuePerEchelon?: number;
	}): FeatureAbilityDistanceInterface => {
		return {
			id: data.id,
			name: data.name || 'AbilityInterface distance modifier',
			description: data.description || '',
			type: FeatureType.AbilityDistance,
			data: {
				keywords: data.keywords,
				value: data.value || 0,
				valueFromController: data.valueFromController || null,
				valueCharacteristics: data.valueCharacteristics || [],
				valueCharacteristicMultiplier: data.valueCharacteristicMultiplier || 0,
				valuePerLevel: data.valuePerLevel || 0,
				valuePerEchelon: data.valuePerEchelon || 0,
			},
		};
	};

	createAddOn = (data: {
		id: string;
		name: string;
		description: string;
		category: FeatureAddOnType;
		cost: number;
	}): FeatureAddOnInterface => {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			type: FeatureType.AddOn,
			data: {
				category: data.category,
				cost: data.cost,
			},
		};
	};

	createAncestry = (data: { id: string; name?: string; description?: string }): FeatureAncestryChoiceInterface => {
		return {
			id: data.id,
			name: data.name || 'Ancestry',
			description: data.description || '',
			type: FeatureType.AncestryChoice,
			data: {
				selected: null,
			},
		};
	};

	createAncestryFeature = (data: {
		id: string;
		name?: string;
		description?: string;
		current: boolean;
		former: boolean;
		customID: string;
		value: number;
	}): FeatureAncestryFeatureChoiceInterface => {
		return {
			id: data.id,
			name: data.name || 'Ancestry Feature',
			description: data.description || '',
			type: FeatureType.AncestryFeatureChoice,
			data: {
				source: {
					current: data.current,
					former: data.former,
					customID: data.customID,
				},
				value: data.value,
				selected: null,
			},
		};
	};

	createBonus = (data: {
		id: string;
		name?: string;
		description?: string;
		field: FeatureField;
		value?: number;
		valueFromController?: FeatureField;
		valueCharacteristics?: Characteristic[];
		valueCharacteristicMultiplier?: number;
		valuePerLevel?: number;
		valuePerEchelon?: number;
	}): FeatureBonusInterface => {
		return {
			id: data.id,
			name: data.name || data.field.toString(),
			description: data.description || '',
			type: FeatureType.Bonus,
			data: {
				field: data.field,
				value: data.value || 0,
				valueFromController: data.valueFromController || null,
				valueCharacteristics: data.valueCharacteristics || [],
				valueCharacteristicMultiplier: data.valueCharacteristicMultiplier || 1,
				valuePerLevel: data.valuePerLevel || 0,
				valuePerEchelon: data.valuePerEchelon || 0,
			},
		};
	};

	createCharacteristicBonus = (data: {
		id: string;
		name?: string;
		description?: string;
		characteristic: Characteristic;
		value: number;
	}): FeatureCharacteristicBonusInterface => {
		return {
			id: data.id,
			name: data.name || data.characteristic.toString(),
			description: data.description || '',
			type: FeatureType.CharacteristicBonus,
			data: {
				characteristic: data.characteristic,
				value: data.value,
			},
		};
	};

	createChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		options: { feature: FeatureInterface; value: number }[];
		count?: number | 'ancestry';
	}): FeatureChoiceInterface => {
		return {
			id: data.id,
			name: data.name || 'Choice',
			description: data.description || '',
			type: FeatureType.Choice,
			data: {
				options: data.options,
				count: data.count || 1,
				selected: [],
			},
		};
	};

	createClassAbilityChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		cost: number | 'signature';
		fromClass?: boolean;
		fromSubclass?: boolean;
		minLevel?: number;
		count?: number;
	}): FeatureClassAbilityInterface => {
		return {
			id: data.id,
			name: data.name || `${data.cost === 'signature' ? 'Signature' : `${data.cost}pt`} Ability`,
			description: data.description || '',
			type: FeatureType.ClassAbility,
			data: {
				classID: undefined,
				cost: data.cost,
				source: {
					fromClassAbilities: (data.fromClass ?? true) ? true : false,
					fromSelectedSubclassAbilities: (data.fromSubclass ?? true) ? true : false,
					fromUnselectedSubclassAbilities: false,
					fromClassLevels: false,
					fromSelectedSubclassLevels: false,
					fromUnselectedSubclassLevels: false,
				},
				minLevel: data.minLevel || 1,
				count: data.count || 1,
				selectedIDs: [],
			},
		};
	};

	createCompanion = (data: { id: string; name?: string; description?: string }): FeatureCompanionInterface => {
		return {
			id: data.id,
			name: data.name || 'Companion / Mount',
			description: data.description || '',
			type: FeatureType.Companion,
			data: {
				selected: null,
			},
		};
	};

	createConditionImmunity = (data: {
		id: string;
		name?: string;
		description?: string;
		conditions: ConditionType[];
	}): FeatureConditionImmunityInterface => {
		return {
			id: data.id,
			name: data.name || 'Condition Immunity',
			description: data.description || '',
			type: FeatureType.ConditionImmunity,
			data: {
				conditions: data.conditions,
			},
		};
	};

	createDamageModifier = (data: {
		id: string;
		name?: string;
		description?: string;
		modifiers: DamageModifierInterface[];
	}): FeatureDamageModifierInterface => {
		return {
			id: data.id,
			name: data.name || 'Damage Modifier',
			description: data.description || data.modifiers.map(FormatLogic.getDamageModifier).join(', '),
			type: FeatureType.DamageModifier,
			data: {
				modifiers: data.modifiers,
			},
		};
	};

	createDomainChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		characteristic?: Characteristic;
		levels?: number[];
		count?: number;
	}): FeatureDomainInterface => {
		return {
			id: data.id,
			name: data.name || 'Domain',
			description: data.description || '',
			type: FeatureType.Domain,
			data: {
				characteristic: data.characteristic || Characteristic.Intuition,
				levels: data.levels || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				count: data.count || 1,
				selected: [],
			},
		};
	};

	createDomainFeature = (data: {
		id: string;
		name?: string;
		description?: string;
		level: number;
		count?: number;
	}): FeatureDomainFeatureInterface => {
		return {
			id: data.id,
			name: data.name || 'Domain FeatureInterface Choice',
			description: data.description || '',
			type: FeatureType.DomainFeature,
			data: {
				level: data.level,
				count: data.count || 1,
				selected: [],
			},
		};
	};

	createFixture = (data: { fixture: FixtureInterface }): FeatureFixtureInterface => {
		return {
			id: data.fixture.id,
			name: `FixtureInterface: ${data.fixture.name}`,
			description: '',
			type: FeatureType.Fixture,
			data: {
				fixture: data.fixture,
			},
		};
	};

	createFollower = (data: {
		id: string;
		name?: string;
		description?: string;
		follower: FollowerInterface;
	}): FeatureFollowerInterface => {
		return {
			id: data.id,
			name: data.name || 'Follower',
			description: data.description || '',
			type: FeatureType.Follower,
			data: {
				follower: data.follower,
			},
		};
	};

	createHeroicResource = (data: {
		id: string;
		name: string;
		description?: string;
		type?: 'heroic' | 'epic';
		gains: { tag: string; trigger: string; value: string }[];
		details?: string;
		canBeNegative?: boolean;
	}): FeatureHeroicResourceInterface => {
		return {
			id: data.id,
			name: data.name,
			description: data.description || '',
			type: FeatureType.HeroicResource,
			data: {
				type: data.type || 'heroic',
				gains: data.gains,
				details: data.details || '',
				canBeNegative: data.canBeNegative ?? false,
				value: 0,
			},
		};
	};

	createHeroicResourceGain = (data: {
		id: string;
		name: string;
		tag: string;
		trigger: string;
		value: string;
		replacesTags?: string[];
	}): FeatureHeroicResourceGainInterface => {
		return {
			id: data.id,
			name: data.name,
			description: '',
			type: FeatureType.HeroicResourceGain,
			data: {
				tag: data.tag,
				trigger: data.trigger,
				value: data.value,
				replacesTags: data.replacesTags || [],
			},
		};
	};

	createItemChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		types?: ItemType[];
		count?: number;
	}): FeatureItemChoiceInterface => {
		const type = data.types && data.types.length === 1 ? data.types[0] : 'Item';
		return {
			id: data.id,
			name: data.name || type,
			description: data.description || '',
			type: FeatureType.ItemChoice,
			data: {
				types: data.types || [
					ItemType.Artifact,
					ItemType.Consumable1st,
					ItemType.Consumable2nd,
					ItemType.Consumable3rd,
					ItemType.Consumable4th,
					ItemType.Leveled,
					ItemType.Trinket1st,
					ItemType.Trinket2nd,
					ItemType.Trinket3rd,
					ItemType.Trinket4th,
				],
				count: data.count || 1,
				selected: [],
			},
		};
	};

	createKitChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		types?: string[];
		count?: number;
	}): FeatureKitInterface => {
		return {
			id: data.id,
			name: data.name || 'Kit',
			description: data.description || '',
			type: FeatureType.Kit,
			data: {
				types: data.types || [''],
				count: data.count || 1,
				selected: [],
			},
		};
	};

	createLanguage = (data: {
		id: string;
		name?: string;
		description?: string;
		language: string;
	}): FeatureLanguageInterface => {
		return {
			id: data.id,
			name: data.name || data.language,
			description: data.description || '',
			type: FeatureType.Language,
			data: {
				language: data.language,
			},
		};
	};

	createLanguageChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		options?: string[];
		count?: number;
		selected?: string[];
	}): FeatureLanguageChoiceInterface => {
		const count = data.count || 1;
		return {
			id: data.id,
			name: data.name || (count === 1 ? 'Language' : 'Languages'),
			description: data.description || '',
			type: FeatureType.LanguageChoice,
			data: {
				options: data.options || [],
				count: count,
				selected: data.selected || [],
			},
		};
	};

	createMalice = (data: {
		id: string;
		name: string;
		cost: number;
		repeatable?: boolean;
		sections: (string | PowerRollInterface)[];
		echelon?: number;
		icon?: StatBlockIcon;
	}): FeatureMaliceInterface => {
		return {
			id: data.id,
			name: data.name,
			description: '',
			type: FeatureType.Malice,
			data: {
				cost: data.cost,
				repeatable: data.repeatable || false,
				sections: data.sections,
				echelon: data.echelon || 1,
				icon: data.icon,
			},
		};
	};

	createMaliceAbility = (data: { ability: AbilityInterface; echelon?: number }): FeatureMaliceAbilityInterface => {
		return {
			id: data.ability.id,
			name: data.ability.name,
			description: data.ability.description,
			type: FeatureType.MaliceAbility,
			data: {
				ability: data.ability,
				echelon: data.echelon || 1,
			},
		};
	};

	createMovementMode = (data: { id: string; name?: string; mode: string }): FeatureMovementModeInterface => {
		return {
			id: data.id,
			name: data.name || 'Movement Mode',
			description: '',
			type: FeatureType.MovementMode,
			data: {
				mode: data.mode,
			},
		};
	};

	createMultiple = (data: {
		id: string;
		name?: string;
		description?: string;
		features: FeatureInterface[];
	}): FeatureMultipleInterface => {
		return {
			id: data.id,
			name: data.name || data.features.map((f) => f.name || 'Unnamed Feature').join(', '),
			description: data.description || data.features.map((f) => f.name || 'Unnamed Feature').join(', '),
			type: FeatureType.Multiple,
			data: {
				features: data.features,
			},
		};
	};

	createPackage = (data: { id: string; name: string; description: string; tag: string }): FeaturePackageInterface => {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			type: FeatureType.Package,
			data: {
				tag: data.tag,
			},
		};
	};

	createPackageContent = (data: {
		id: string;
		name: string;
		description: string;
		tag: string;
	}): FeaturePackageContentInterface => {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			type: FeatureType.PackageContent,
			data: {
				tag: data.tag,
			},
		};
	};

	createPerk = (data: {
		id: string;
		name?: string;
		description?: string;
		lists?: PerkList[];
		count?: number;
		selected?: PerkInterface[];
	}): FeaturePerkInterface => {
		const count = data.count || 1;
		const lists = data.lists || [];

		const prefix = lists.length > 0 && lists.length < 6 ? `${lists.join(' / ')} ` : '';

		return {
			id: data.id,
			name: data.name || (count > 1 ? `${prefix}Perks` : `${prefix}Perk`),
			description: data.description || '',
			type: FeatureType.Perk,
			data: {
				lists: data.lists || [
					PerkList.Crafting,
					PerkList.Exploration,
					PerkList.Interpersonal,
					PerkList.Intrigue,
					PerkList.Lore,
					PerkList.Supernatural,
				],
				count: count,
				selected: data.selected || [],
			},
		};
	};

	createProficiency = (data: {
		id: string;
		name?: string;
		description?: string;
		weapons?: KitWeapon[];
		armor?: KitArmor[];
	}): FeatureProficiencyInterface => {
		return {
			id: data.id,
			name: data.name || 'Proficiency',
			description: data.description || '',
			type: FeatureType.Proficiency,
			data: {
				weapons: data.weapons || [],
				armor: data.armor || [],
			},
		};
	};

	createRetainer = (data: { id: string; name?: string; description?: string }): FeatureRetainerInterface => {
		return {
			id: data.id,
			name: data.name || 'Retainer',
			description: data.description || '',
			type: FeatureType.Retainer,
			data: {
				selected: null,
			},
		};
	};

	createSaveThreshold = (data: {
		id: string;
		name?: string;
		description?: string;
		value: number;
	}): FeatureSaveThresholdInterface => {
		return {
			id: data.id,
			name: data.name || 'Save Threshold',
			description: data.description || '',
			type: FeatureType.SaveThreshold,
			data: {
				value: data.value,
			},
		};
	};

	createSize = (data: {
		id: string;
		name?: string;
		description?: string;
		sizeValue: number;
		sizeMod?: 'T' | 'S' | 'M' | 'L';
	}): FeatureSizeInterface => {
		return {
			id: data.id,
			name: data.name || 'Size',
			description: data.description || '',
			type: FeatureType.Size,
			data: {
				size: {
					value: data.sizeValue,
					mod: data.sizeMod || '',
				},
			},
		};
	};

	createSkillChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		options?: string[];
		listOptions?: SkillList[];
		count?: number;
		selected?: string[];
	}): FeatureSkillChoiceInterface => {
		const count = data.count || 1;
		const options = data.options || [];
		let listOptions = data.listOptions || [];

		const prefix =
			listOptions.length < 5
				? options.length === 0 && listOptions.length > 0
					? `${listOptions.join(' / ')} `
					: ''
				: '';

		if (options.length === 0 && listOptions.length === 0) {
			// No options provided - let the user choose any skill
			listOptions = [
				SkillList.Crafting,
				SkillList.Exploration,
				SkillList.Interpersonal,
				SkillList.Intrigue,
				SkillList.Lore,
			];
		}

		return {
			id: data.id,
			name: data.name || (count === 1 ? `${prefix}Skill` : `${prefix}Skills`),
			description: data.description || '',
			type: FeatureType.SkillChoice,
			data: {
				options: data.options || [],
				listOptions: listOptions || [],
				count: count,
				selected: data.selected || [],
			},
		};
	};

	createSoloMonster = (data: {
		id: string;
		name: string;
		gender?: 'm' | 'f' | 'n';
		endEffect?: number;
	}): FeatureTextInterface => {
		const capitalizedName = data.name
			.split(' ')
			.map((n, i) => (i === 0 ? Format.capitalize(n) : n))
			.join(' ');
		const genderWithDefault = data.gender ?? 'n';
		const heSheThey = ({ m: 'he', f: 'she', n: 'they' } as const)[genderWithDefault];
		const hisHerTheir = ({ m: 'his', f: 'her', n: 'their' } as const)[genderWithDefault];
		const himHerThem = ({ m: 'him', f: 'her', n: 'them' } as const)[genderWithDefault];
		return {
			id: data.id,
			name: 'Solo Monster',
			description: `
* **End Effect** At the end of each of ${hisHerTheir} turns, ${data.name} can take ${data.endEffect || 5} damage to end one effect on ${himHerThem} that can be ended by a saving throw. This damage can’t be reduced in any way.
* **Solo Turns** ${capitalizedName} can take two turns each round. ${Format.capitalize(heSheThey)} can’t take turns consecutively.`,
			type: FeatureType.Text,
			data: null,
		};
	};

	createSpeed = (data: { id: string; name?: string; description?: string; speed: number }): FeatureSpeedInterface => {
		return {
			id: data.id,
			name: data.name || 'Speed',
			description: data.description || '',
			type: FeatureType.Speed,
			data: {
				speed: data.speed,
			},
		};
	};

	createSummon = (data: {
		id: string;
		name?: string;
		description?: string;
		summons: SummonInterface[];
	}): FeatureSummonInterface => {
		return {
			id: data.id,
			name: data.name || 'SummonInterface Choice',
			description: data.description || '',
			type: FeatureType.Summon,
			data: {
				summons: data.summons,
			},
		};
	};

	createSummonChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		options: SummonInterface[];
		count?: number;
	}): FeatureSummonChoiceInterface => {
		return {
			id: data.id,
			name: data.name || 'SummonInterface Choice',
			description: data.description || '',
			type: FeatureType.SummonChoice,
			data: {
				options: data.options,
				count: data.count || 1,
				selected: [],
			},
		};
	};

	createTaggedFeature = (data: { tag: string; feature: FeatureInterface }): FeatureTaggedFeatureInterface => {
		return {
			id: data.feature.id,
			name: data.feature.name,
			description: data.feature.description,
			type: FeatureType.TaggedFeature,
			data: {
				tag: data.tag,
				feature: data.feature,
			},
		};
	};

	createTaggedFeatureChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		tag: string;
		count?: number;
	}): FeatureTaggedFeatureChoiceInterface => {
		return {
			id: data.id,
			name: data.name || 'Tagged Feature',
			description: data.description || '',
			type: FeatureType.TaggedFeatureChoice,
			data: {
				tag: data.tag,
				count: data.count || 1,
				selected: [],
			},
		};
	};

	createTitleChoice = (data: {
		id: string;
		name?: string;
		description?: string;
		echelon?: number;
		count?: number;
	}): FeatureTitleChoiceInterface => {
		const count = data.count || 1;
		return {
			id: data.id,
			name: data.name || 'Title',
			description: data.description || (count > 1 ? `Choose ${count} titles.` : 'Choose a title.'),
			type: FeatureType.TitleChoice,
			data: {
				echelon: data.echelon || 1,
				count: count,
				selected: [],
			},
		};
	};
}
