import {
	FeatureInterface,
	FeatureAbilityCostDataInterface,
	FeatureAbilityDamageInterface,
	FeatureAbilityDamageDataInterface,
	FeatureAbilityDataInterface,
	FeatureAbilityDistanceDataInterface,
	FeatureAddOnDataInterface,
	FeatureAncestryChoiceDataInterface,
	FeatureAncestryFeatureChoiceDataInterface,
	FeatureBonusInterface,
	FeatureBonusDataInterface,
	FeatureCharacteristicBonusDataInterface,
	FeatureChoiceDataInterface,
	FeatureClassAbilityDataInterface,
	FeatureCompanionDataInterface,
	FeatureConditionImmunityDataInterface,
	FeatureDamageModifierDataInterface,
	FeatureDomainDataInterface,
	FeatureDomainFeatureDataInterface,
	FeatureFixtureDataInterface,
	FeatureFollowerDataInterface,
	FeatureHeroicResourceDataInterface,
	FeatureHeroicResourceGainDataInterface,
	FeatureItemChoiceDataInterface,
	FeatureKitDataInterface,
	FeatureLanguageChoiceDataInterface,
	FeatureLanguageDataInterface,
	FeatureMaliceAbilityDataInterface,
	FeatureMaliceDataInterface,
	FeatureMovementModeDataInterface,
	FeatureMultipleDataInterface,
	FeaturePackageContentDataInterface,
	FeaturePackageDataInterface,
	FeaturePerkDataInterface,
	FeatureProficiencyDataInterface,
	FeatureRetainerDataInterface,
	FeatureSaveThresholdDataInterface,
	FeatureSizeDataInterface,
	FeatureSkillChoiceDataInterface,
	FeatureSpeedDataInterface,
	FeatureSummonChoiceDataInterface,
	FeatureSummonDataInterface,
	FeatureTaggedFeatureChoiceDataInterface,
	FeatureTaggedFeatureDataInterface,
	FeatureTitleChoiceDataInterface,
} from '../../core/models/feature';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { AbilityUsage } from '../../core/enums/ability-usage';
import { AncestryInterface } from '../../core/models/ancestry';
import { CareerInterface } from '../../core/models/career';
import { Characteristic } from '../../core/enums/characteristic';
import { Collections } from '../../core/utils/collections';
import { ComplicationInterface } from '../../core/models/complication';
import { CultureInterface } from '../../core/models/culture';
import { DamageType } from '../../core/enums/damage-type';
import { ElementFactory } from '../factory/element-factory';
import { FeatureAddOnType } from '../../core/enums/feature-addon-type';
import { FeatureField } from '../../core/enums/feature-field';
import { FeatureType } from '../../core/enums/feature-type';
import { FollowerType } from '../../core/enums/follower-type';
import { HeroClassInterface } from '../../core/models/class';
import { ItemInterface } from '../../core/models/item';
import { ItemType } from '../../core/enums/item-type';
import { MonsterFeatureCategory } from '../../core/enums/monster-feature-category';
import { CoreUtils } from '../../core/utils/core-utils';
import { Hero } from '../impl/hero';

export class FeatureLogic {
	static getFeaturesFromCulture = (culture: CultureInterface, heroLevel: number) => {
		const features: { feature: FeatureInterface; source: string }[] = [];

		features.push({
			feature: culture.language,
			source: culture.name,
		});

		if (culture.environment) {
			features.push({ feature: culture.environment, source: culture.name });
		}
		if (culture.organization) {
			features.push({ feature: culture.organization, source: culture.name });
		}
		if (culture.upbringing) {
			features.push({ feature: culture.upbringing, source: culture.name });
		}

		features.push({
			feature: ElementFactory.FeatureFactory.create({
				id: `${culture.name.toLocaleLowerCase().replaceAll(' ', '-')}-culture-lore-influence`,
				name: `${culture.name} Culture`.trim(),
				description:
					'You gain an edge on tests made to recall lore about your culture, and on tests made to influence and interact with people of your culture.',
			}),
			source: culture.name,
		});

		return FeatureLogic.simplifyFeatures(features, heroLevel);
	};

	static getFeaturesFromCareer = (career: CareerInterface, heroLevel: number) => {
		const features: { feature: FeatureInterface; source: string }[] = [];

		features.push(...career.features.map((f) => ({ feature: f, source: career.name })));

		return FeatureLogic.simplifyFeatures(features, heroLevel);
	};

	static getFeaturesFromClass = (heroClass: HeroClassInterface, heroLevel: number) => {
		const features: { feature: FeatureInterface; source: string; level: number }[] = [];

		const classLevel = heroClass.level;

		heroClass.featuresByLevel.forEach((lvl) => {
			if (lvl.level <= classLevel) {
				features.push(...lvl.features.map((f) => ({ feature: f, source: heroClass.name, level: lvl.level })));
			}
		});

		heroClass.subclasses
			.filter((sc) => sc.selected)
			.forEach((sc) => {
				sc.featuresByLevel.forEach((lvl) => {
					if (lvl.level <= classLevel) {
						features.push(...lvl.features.map((f) => ({ feature: f, source: sc.name, level: lvl.level })));
					}
				});
			});

		return FeatureLogic.simplifyFeatures(features, heroLevel);
	};

	static getFeaturesFromComplication = (complication: ComplicationInterface, heroLevel: number) => {
		const features: { feature: FeatureInterface; source: string }[] = [];

		features.push(...complication.features.map((f) => ({ feature: f, source: complication.name })));

		return FeatureLogic.simplifyFeatures(features, heroLevel);
	};

	static getFeaturesFromCustomization = (hero: Hero) => {
		const features: { feature: FeatureInterface; source: string }[] = [];

		features.push(
			...hero.features.map((f) => {
				let source = 'Customization';
				switch (f.type) {
					case FeatureType.TitleChoice:
						source = f.data.selected.length === 1 ? f.data.selected[0].name : 'Title';
						break;
					case FeatureType.Companion:
					case FeatureType.Follower:
						source = 'Follower';
						break;
				}
				return { feature: f, source: source };
			})
		);

		return FeatureLogic.simplifyFeatures(features, hero.class?.level || 1);
	};

	static getFeaturesFromItem = (item: ItemInterface, heroLevel: number) => {
		const features: { feature: FeatureInterface; source: string }[] = [];

		const ft = ElementFactory.FeatureFactory.create({
			id: item.id,
			name: item.count === 1 ? item.name : `${item.name} x${item.count}`,
			description: item.effect || item.description,
		});
		features.push({ feature: ft, source: item.name });

		item.featuresByLevel
			.filter((lvl) => lvl.level <= heroLevel)
			.forEach((lvl) => {
				lvl.features.forEach((f) => {
					if (f.type === FeatureType.Text) {
						if (f.description) {
							if (f.name) {
								ft.description += '\n\n';
								ft.description += `**${f.name}**`;
							}
							ft.description += '\n\n';
							ft.description += f.description;
						}
					} else {
						features.push({ feature: f, source: item.name });
					}
				});
			});

		item.imbuements
			.map((imbuement) => imbuement.feature)
			.forEach((feature) => {
				if (feature.type === FeatureType.Text) {
					if (feature.description) {
						if (feature.name) {
							ft.description += '\n\n';
							ft.description += `**${feature.name}**`;
						}
						ft.description += '\n\n';
						ft.description += feature.description;
					}
				} else {
					features.push({ feature: feature, source: item.name });
				}
			});

		const hasLvl1 = item.imbuements.filter((lvl) => lvl.level === 1).length > 0;
		const hasLvl5 = item.imbuements.filter((lvl) => lvl.level === 5).length > 0;
		const hasLvl9 = item.imbuements.filter((lvl) => lvl.level === 9).length > 0;
		if (item.type === ItemType.ImbuedArmor) {
			// Imbued armor grants +6 / +12 / +21 stamina based on highest enhancement tier
			if (hasLvl1) {
				features.push({
					feature: ElementFactory.FeatureFactory.createBonus({
						id: item.name + '-bonus-1',
						field: FeatureField.Stamina,
						value: 6,
					}),
					source: item.name,
				});
			}
			if (hasLvl5) {
				features.push({
					feature: ElementFactory.FeatureFactory.createBonus({
						id: item.name + '-bonus-5',
						field: FeatureField.Stamina,
						value: 6,
					}),
					source: item.name,
				});
			}
			if (hasLvl9) {
				features.push({
					feature: ElementFactory.FeatureFactory.createBonus({
						id: item.name + '-bonus-9',
						field: FeatureField.Stamina,
						value: 9,
					}),
					source: item.name,
				});
			}
		}
		if (item.type === ItemType.ImbuedImplement) {
			// Imbued implement grants +1 / +2 / +3 damage to magic / psionic abilities based on highest enhancement tier
			if (hasLvl1) {
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-1a',
						keywords: [AbilityKeyword.Magic],
						value: 1,
					}),
					source: item.name,
				});
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-1b',
						keywords: [AbilityKeyword.Psionic],
						value: 1,
					}),
					source: item.name,
				});
			}
			if (hasLvl5) {
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-5a',
						keywords: [AbilityKeyword.Magic],
						value: 1,
					}),
					source: item.name,
				});
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-5b',
						keywords: [AbilityKeyword.Psionic],
						value: 1,
					}),
					source: item.name,
				});
			}
			if (hasLvl9) {
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-9a',
						keywords: [AbilityKeyword.Magic],
						value: 1,
					}),
					source: item.name,
				});
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-9b',
						keywords: [AbilityKeyword.Psionic],
						value: 1,
					}),
					source: item.name,
				});
			}
		}
		if (item.type === ItemType.ImbuedWeapon) {
			// Imbued weapon grants +1 / +2 / +3 damage to weapon abilities based on highest enhancement tier
			if (hasLvl1) {
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-1',
						keywords: [AbilityKeyword.Weapon],
						value: 1,
					}),
					source: item.name,
				});
			}
			if (hasLvl5) {
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-5',
						keywords: [AbilityKeyword.Weapon],
						value: 1,
					}),
					source: item.name,
				});
			}
			if (hasLvl9) {
				features.push({
					feature: ElementFactory.FeatureFactory.createAbilityDamage({
						id: item.name + '-bonus-9',
						keywords: [AbilityKeyword.Weapon],
						value: 1,
					}),
					source: item.name,
				});
			}
		}

		return FeatureLogic.simplifyFeatures(features, heroLevel);
	};

	static simplifyFeatures = (
		features: { feature: FeatureInterface; source: string; level?: number }[],
		heroLevel: number
	) => {
		const list: { feature: FeatureInterface; source: string; level?: number }[] = [];

		const addFeature = (feature: FeatureInterface, source: string, level?: number) => {
			if (!feature) {
				return;
			}

			list.push({ feature: feature, source: source, level: level });

			switch (feature.type) {
				case FeatureType.AncestryFeatureChoice:
					if (feature.data.selected) {
						addFeature(feature.data.selected, source, level);
					}
					break;
				case FeatureType.Choice:
					feature.data.selected.forEach((f) => addFeature(f, source, level));
					break;
				case FeatureType.Domain:
					feature.data.selected.forEach((d) => {
						if (d.defaultFeatures) {
							d.defaultFeatures.forEach((f) => addFeature(f, `${d.name} Domain`, level));
						}
					});
					break;
				case FeatureType.DomainFeature:
					feature.data.selected.forEach((f) => addFeature(f, source, level));
					break;
				case FeatureType.ItemChoice:
					feature.data.selected.forEach((item) =>
						FeatureLogic.getFeaturesFromItem(item, heroLevel).forEach((f) =>
							addFeature(f.feature, f.source, level)
						)
					);
					break;
				case FeatureType.Kit:
					feature.data.selected.forEach((kit) => kit.features.forEach((f) => addFeature(f, kit.name, level)));
					break;
				case FeatureType.Multiple:
					feature.data.features.forEach((f) => addFeature(f, source, level));
					break;
				case FeatureType.Perk:
					feature.data.selected.forEach((f) => addFeature(f, source, level));
					break;
				case FeatureType.TaggedFeatureChoice:
					feature.data.selected.forEach((f) => addFeature(f, source, level));
					break;
				case FeatureType.TitleChoice:
					feature.data.selected.forEach((title) =>
						title.features
							.filter((f) => f.id === title.selectedFeatureID)
							.forEach((f) => addFeature(f, source, level))
					);
					break;
			}
		};

		features.forEach((f) => addFeature(f.feature, f.source, f.level));

		return list;
	};

	// Combine Features that do the 'same thing' - e.g. multiple Stamina bonuses into one
	static reduceFeatures = (features: FeatureInterface[]): FeatureInterface[] => {
		const reduced: FeatureInterface[] = [];

		features.forEach((f) => {
			switch (f.type) {
				case FeatureType.Bonus: {
					const match = reduced.find(
						(m) => m.type === FeatureType.Bonus && this.matchDataFields(m.data, f.data, ['field'])
					);
					if (match) {
						(match as FeatureBonusInterface).data.value += f.data.value;
					} else {
						reduced.push(CoreUtils.copy(f));
					}
					break;
				}
				case FeatureType.AbilityDamage: {
					const match = reduced.find(
						(m) =>
							m.type === FeatureType.AbilityDamage &&
							this.matchDataFields(m.data, f.data, ['damageType', 'keywords'])
					);
					if (match) {
						(match as FeatureAbilityDamageInterface).data.value += f.data.value;
					} else {
						reduced.push(CoreUtils.copy(f));
					}
					break;
				}
				default:
					reduced.push(CoreUtils.copy(f));
					break;
			}
		});

		return reduced;
	};

	static matchDataFields<T>(a: T, b: T, fields: string[]): boolean {
		return fields.every((field) => {
			if (Object.prototype.hasOwnProperty.call(a, field) && Object.prototype.hasOwnProperty.call(b, field)) {
				const aField = a[field as keyof T];
				const bField = b[field as keyof T];

				if (aField instanceof Array && bField instanceof Array) {
					return aField.every((x) => bField.includes(x));
				} else {
					return aField === bField;
				}
			} else {
				return false;
			}
		});
	}

	static switchFeatureCharacteristic = (
		feature: FeatureInterface,
		fromCharacteristic: Characteristic,
		toCharacteristic: Characteristic
	) => {
		const fromStr = fromCharacteristic.toString();
		const toStr = toCharacteristic.toString();

		const fromChar = fromStr[0];
		const toChar = toStr[0];

		feature.description = feature.description.replaceAll(fromStr, toStr);

		switch (feature.type) {
			case FeatureType.Ability:
				feature.data.ability.sections.forEach((s) => {
					switch (s.type) {
						case 'text':
							s.text = s.text.replaceAll(fromStr, toStr);
							break;
						case 'field':
							s.effect = s.effect.replaceAll(fromStr, toStr);
							break;
						case 'roll':
							s.roll.characteristic = [toCharacteristic];
							s.roll.tier1 = s.roll.tier1.replaceAll(fromStr, toStr);
							s.roll.tier1 = s.roll.tier1.replaceAll(`+ ${fromChar}`, `+ ${toChar}`);
							s.roll.tier2 = s.roll.tier2.replaceAll(fromStr, toStr);
							s.roll.tier2 = s.roll.tier2.replaceAll(`+ ${fromChar}`, `+ ${toChar}`);
							s.roll.tier3 = s.roll.tier3.replaceAll(fromStr, toStr);
							s.roll.tier3 = s.roll.tier3.replaceAll(`+ ${fromChar}`, `+ ${toChar}`);
							break;
					}
				});
				break;
			case FeatureType.Choice:
				[...feature.data.options.map((f) => f.feature), ...feature.data.selected].forEach((f) =>
					FeatureLogic.switchFeatureCharacteristic(f, fromCharacteristic, toCharacteristic)
				);
				break;
			case FeatureType.Multiple:
				feature.data.features.forEach((f) =>
					FeatureLogic.switchFeatureCharacteristic(f, fromCharacteristic, toCharacteristic)
				);
				break;
		}
	};

	///////////////////////////////////////////////////////////////////////////

	static getSelectableFeatureTypes = () => {
		return [
			FeatureType.Text,
			FeatureType.Ability,
			FeatureType.AbilityCost,
			FeatureType.AbilityDamage,
			FeatureType.AbilityDistance,
			FeatureType.AncestryChoice,
			FeatureType.AncestryFeatureChoice,
			FeatureType.Bonus,
			FeatureType.CharacteristicBonus,
			FeatureType.Choice,
			FeatureType.ClassAbility,
			FeatureType.Companion,
			FeatureType.ConditionImmunity,
			FeatureType.DamageModifier,
			FeatureType.Domain,
			FeatureType.DomainFeature,
			FeatureType.Follower,
			FeatureType.HeroicResource,
			FeatureType.HeroicResourceGain,
			FeatureType.ItemChoice,
			FeatureType.Kit,
			FeatureType.Language,
			FeatureType.LanguageChoice,
			FeatureType.MovementMode,
			FeatureType.Multiple,
			FeatureType.Package,
			FeatureType.PackageContent,
			FeatureType.Perk,
			FeatureType.Proficiency,
			FeatureType.Retainer,
			FeatureType.SaveThreshold,
			FeatureType.Size,
			FeatureType.SkillChoice,
			FeatureType.Speed,
			FeatureType.Summon,
			FeatureType.TaggedFeature,
			FeatureType.TaggedFeatureChoice,
			FeatureType.TitleChoice,
		];
	};

	static getFeatureData = (type: FeatureType) => {
		switch (type) {
			case FeatureType.Ability: {
				const data: FeatureAbilityDataInterface = {
					ability: ElementFactory.createAbility({
						id: CoreUtils.guid(),
						name: '',
						description: '',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: '',
						sections: [],
					}),
				};
				return data;
			}
			case FeatureType.AbilityCost: {
				const data: FeatureAbilityCostDataInterface = {
					keywords: [],
					modifier: -1,
				};
				return data;
			}
			case FeatureType.AbilityDamage: {
				const data: FeatureAbilityDamageDataInterface = {
					keywords: [],
					value: 0,
					valueFromController: null,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0,
					damageType: DamageType.Damage,
				};
				return data;
			}
			case FeatureType.AbilityDistance: {
				const data: FeatureAbilityDistanceDataInterface = {
					keywords: [],
					value: 0,
					valueFromController: null,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0,
				};
				return data;
			}
			case FeatureType.AddOn: {
				const data: FeatureAddOnDataInterface = {
					category: FeatureAddOnType.Defensive,
					cost: 1,
				};
				return data;
			}
			case FeatureType.AncestryChoice: {
				const data: FeatureAncestryChoiceDataInterface = {
					selected: null,
				};
				return data;
			}
			case FeatureType.AncestryFeatureChoice: {
				const data: FeatureAncestryFeatureChoiceDataInterface = {
					source: {
						current: true,
						former: true,
						customID: '',
					},
					value: 1,
					selected: null,
				};
				return data;
			}
			case FeatureType.Bonus: {
				const data: FeatureBonusDataInterface = {
					field: FeatureField.Recoveries,
					value: 0,
					valueFromController: null,
					valueCharacteristics: [],
					valueCharacteristicMultiplier: 1,
					valuePerLevel: 0,
					valuePerEchelon: 0,
				};
				return data;
			}
			case FeatureType.CharacteristicBonus: {
				const data: FeatureCharacteristicBonusDataInterface = {
					characteristic: Characteristic.Might,
					value: 1,
				};
				return data;
			}
			case FeatureType.Choice: {
				const data: FeatureChoiceDataInterface = {
					options: [],
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.ClassAbility: {
				const data: FeatureClassAbilityDataInterface = {
					classID: undefined,
					cost: 1,
					count: 1,
					source: {
						fromClassAbilities: true,
						fromSelectedSubclassAbilities: true,
						fromUnselectedSubclassAbilities: false,
						fromClassLevels: false,
						fromSelectedSubclassLevels: false,
						fromUnselectedSubclassLevels: false,
					},
					minLevel: 1,
					selectedIDs: [],
				};
				return data;
			}
			case FeatureType.Companion: {
				const data: FeatureCompanionDataInterface = {
					selected: null,
				};
				return data;
			}
			case FeatureType.ConditionImmunity: {
				const data: FeatureConditionImmunityDataInterface = {
					conditions: [],
				};
				return data;
			}
			case FeatureType.DamageModifier: {
				const data: FeatureDamageModifierDataInterface = {
					modifiers: [],
				};
				return data;
			}
			case FeatureType.Domain: {
				const data: FeatureDomainDataInterface = {
					characteristic: Characteristic.Intuition,
					levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.DomainFeature: {
				const data: FeatureDomainFeatureDataInterface = {
					level: 1,
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.Fixture: {
				const data: FeatureFixtureDataInterface = {
					fixture: {
						id: CoreUtils.guid(),
						name: '',
						description: '',
						baseStamina: 20,
						size: ElementFactory.createSize(2),
						featuresByLevel: [
							{
								level: 1,
								features: [],
							},
							{
								level: 2,
								features: [],
							},
							{
								level: 3,
								features: [],
							},
							{
								level: 4,
								features: [],
							},
							{
								level: 5,
								features: [],
							},
							{
								level: 6,
								features: [],
							},
							{
								level: 7,
								features: [],
							},
							{
								level: 8,
								features: [],
							},
							{
								level: 9,
								features: [],
							},
							{
								level: 10,
								features: [],
							},
						],
					},
				};
				return data;
			}
			case FeatureType.Follower: {
				const data: FeatureFollowerDataInterface = {
					follower: ElementFactory.createFollower(FollowerType.Artisan),
				};
				return data;
			}
			case FeatureType.HeroicResource: {
				const data: FeatureHeroicResourceDataInterface = {
					type: 'heroic',
					gains: [],
					details: '',
					canBeNegative: false,
					value: 0,
				};
				return data;
			}
			case FeatureType.HeroicResourceGain: {
				const data: FeatureHeroicResourceGainDataInterface = {
					tag: '',
					trigger: '',
					value: '1',
					replacesTags: [],
				};
				return data;
			}
			case FeatureType.ItemChoice: {
				const data: FeatureItemChoiceDataInterface = {
					types: [],
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.Kit: {
				const data: FeatureKitDataInterface = {
					types: [],
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.Language: {
				const data: FeatureLanguageDataInterface = {
					language: '',
				};
				return data;
			}
			case FeatureType.LanguageChoice: {
				const data: FeatureLanguageChoiceDataInterface = {
					options: [],
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.MovementMode: {
				const data: FeatureMovementModeDataInterface = {
					mode: '',
				};
				return data;
			}
			case FeatureType.Malice: {
				const data: FeatureMaliceDataInterface = {
					cost: 3,
					repeatable: false,
					sections: [''],
					echelon: 1,
					icon: undefined,
				};
				return data;
			}
			case FeatureType.MaliceAbility: {
				const data: FeatureMaliceAbilityDataInterface = {
					ability: ElementFactory.createAbility({
						id: CoreUtils.guid(),
						name: '',
						description: '',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: '',
						sections: [],
					}),
					echelon: 1,
				};
				return data;
			}
			case FeatureType.Multiple: {
				const data: FeatureMultipleDataInterface = {
					features: [],
				};
				return data;
			}
			case FeatureType.Package: {
				const data: FeaturePackageDataInterface = {
					tag: '',
				};
				return data;
			}
			case FeatureType.PackageContent: {
				const data: FeaturePackageContentDataInterface = {
					tag: '',
				};
				return data;
			}
			case FeatureType.Perk: {
				const data: FeaturePerkDataInterface = {
					lists: [],
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.Proficiency: {
				const data: FeatureProficiencyDataInterface = {
					weapons: [],
					armor: [],
				};
				return data;
			}
			case FeatureType.Retainer: {
				const data: FeatureRetainerDataInterface = {
					selected: null,
				};
				return data;
			}
			case FeatureType.SaveThreshold: {
				const data: FeatureSaveThresholdDataInterface = {
					value: 5,
				};
				return data;
			}
			case FeatureType.Size: {
				const data: FeatureSizeDataInterface = {
					size: {
						value: 1,
						mod: 'M',
					},
				};
				return data;
			}
			case FeatureType.SkillChoice: {
				const data: FeatureSkillChoiceDataInterface = {
					options: [],
					listOptions: [],
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.Speed: {
				const data: FeatureSpeedDataInterface = {
					speed: 5,
				};
				return data;
			}
			case FeatureType.Summon: {
				const data: FeatureSummonDataInterface = {
					summons: [],
				};
				return data;
			}
			case FeatureType.SummonChoice: {
				const data: FeatureSummonChoiceDataInterface = {
					options: [],
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.TaggedFeature: {
				const data: FeatureTaggedFeatureDataInterface = {
					tag: '',
					feature: ElementFactory.FeatureFactory.create({
						id: CoreUtils.guid(),
						name: '',
						description: '',
					}),
				};
				return data;
			}
			case FeatureType.TaggedFeatureChoice: {
				const data: FeatureTaggedFeatureChoiceDataInterface = {
					tag: '',
					count: 1,
					selected: [],
				};
				return data;
			}
			case FeatureType.TitleChoice: {
				const data: FeatureTitleChoiceDataInterface = {
					echelon: 1,
					count: 1,
					selected: [],
				};
				return data;
			}
		}

		return null;
	};

	///////////////////////////////////////////////////////////////////////////

	static isChoice = (feature: FeatureInterface) => {
		switch (feature.type) {
			case FeatureType.AncestryChoice:
			case FeatureType.AncestryFeatureChoice:
			case FeatureType.Choice:
			case FeatureType.ClassAbility:
			case FeatureType.Companion:
			case FeatureType.Domain:
			case FeatureType.DomainFeature:
			case FeatureType.ItemChoice:
			case FeatureType.Kit:
			case FeatureType.LanguageChoice:
			case FeatureType.Perk:
			case FeatureType.Retainer:
			case FeatureType.SkillChoice:
			case FeatureType.SummonChoice:
			case FeatureType.TaggedFeatureChoice:
			case FeatureType.TitleChoice:
				return true;
		}

		return false;
	};

	static isChosen = (feature: FeatureInterface, hero: Hero) => {
		switch (feature.type) {
			case FeatureType.AncestryChoice:
				return !!feature.data.selected;
			case FeatureType.AncestryFeatureChoice:
				return !!feature.data.selected;
			case FeatureType.Choice: {
				let availableOptions = [...feature.data.options];
				if (availableOptions.some((opt) => opt.feature.type === FeatureType.AncestryFeatureChoice)) {
					availableOptions = availableOptions.filter(
						(opt) => opt.feature.type !== FeatureType.AncestryFeatureChoice
					);
					const additionalOptions = hero
						.getFormerAncestries()
						.flatMap((a) => a.features)
						.filter((f) => f.type === FeatureType.Choice)
						.flatMap((f) => f.data.options)
						.filter((opt) => opt.feature.type !== FeatureType.AncestryFeatureChoice);
					availableOptions.push(...additionalOptions);
				}
				const selected = feature.data.selected
					.map((f) => availableOptions.find((opt) => opt.feature.id === f.id))
					.filter((opt) => !!opt);
				const count = feature.data.count === 'ancestry' ? hero.getAncestryPoints() : feature.data.count;
				return Collections.sum(selected, (i) => i.value) >= count;
			}
			case FeatureType.ClassAbility:
				return feature.data.selectedIDs.length >= feature.data.count;
			case FeatureType.Companion:
				return feature.data.selected !== null;
			case FeatureType.Domain:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.DomainFeature:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.ItemChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.Kit:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.LanguageChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.Perk:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.Retainer:
				return feature.data.selected !== null;
			case FeatureType.SkillChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.SummonChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.TaggedFeatureChoice:
				return feature.data.selected.length >= feature.data.count;
			case FeatureType.TitleChoice:
				return feature.data.selected.length >= feature.data.count;
		}

		return true;
	};

	///////////////////////////////////////////////////////////////////////////

	static getFeatureTag = (feature: FeatureInterface) => {
		if (feature.type === FeatureType.Ability) {
			if (feature.data.ability.cost === 'signature') {
				return 'Signature';
			}

			return feature.data.ability.type.usage;
		}

		return feature.type;
	};

	static getFeatureCategory = (feature: FeatureInterface) => {
		switch (feature.type) {
			case FeatureType.Ability:
				if (feature.data.ability.cost === 'signature') {
					return MonsterFeatureCategory.Signature;
				}
				switch (feature.data.ability.type.usage) {
					case AbilityUsage.MainAction:
						return MonsterFeatureCategory.Action;
					case AbilityUsage.Maneuver:
						return MonsterFeatureCategory.Maneuver;
					case AbilityUsage.Trigger:
						return MonsterFeatureCategory.Trigger;
				}
				return MonsterFeatureCategory.Other;
			case FeatureType.ConditionImmunity:
			case FeatureType.DamageModifier:
				return MonsterFeatureCategory.DamageMod;
		}

		return MonsterFeatureCategory.Text;
	};

	static getFeatureTypeDescription = (type: FeatureType) => {
		switch (type) {
			case FeatureType.Ability:
				return 'This feature grants you an ability.';
			case FeatureType.AbilityCost:
				return 'This feature modifies the cost to use an ability.';
			case FeatureType.AbilityDamage:
				return 'This feature modifies the damage of an ability.';
			case FeatureType.AbilityDistance:
				return 'This feature modifies the distance of an ability.';
			case FeatureType.AddOn:
				return 'This feature grants you a monster customization.';
			case FeatureType.AncestryChoice:
				return "This feature sets the hero's former ancestry.";
			case FeatureType.AncestryFeatureChoice:
				return 'This feature allows you to select a feature from an ancestry.';
			case FeatureType.Bonus:
				return 'This feature modifies a statistic.';
			case FeatureType.CharacteristicBonus:
				return 'This feature modifies a characteristic.';
			case FeatureType.Choice:
				return 'This feature allows you to choose from a collection of features.';
			case FeatureType.ClassAbility:
				return 'This feature allows you to choose an ability from your class.';
			case FeatureType.Companion:
				return 'This feature grants you a companion or mount.';
			case FeatureType.ConditionImmunity:
				return 'This feature grants you immunity to one or more condition types.';
			case FeatureType.DamageModifier:
				return 'This feature grants you an immunity or a weakness.';
			case FeatureType.Domain:
				return 'This feature allows you to choose a domain.';
			case FeatureType.DomainFeature:
				return 'This feature allows you to choose a feature from your domain.';
			case FeatureType.Fixture:
				return 'This feature allows you to summon a fixture.';
			case FeatureType.Follower:
				return 'This feature grants you a follower.';
			case FeatureType.HeroicResource:
				return 'This feature grants you a heroic (or epic) resource.';
			case FeatureType.HeroicResourceGain:
				return 'This feature grants you a way to gain your heroic resource.';
			case FeatureType.ItemChoice:
				return 'This feature allows you to choose an item.';
			case FeatureType.Kit:
				return 'This feature allows you to choose a kit.';
			case FeatureType.Language:
				return 'This feature grants you a language.';
			case FeatureType.LanguageChoice:
				return 'This feature allows you to choose a language.';
			case FeatureType.Malice:
				return 'This feature grants you a malice effect.';
			case FeatureType.MaliceAbility:
				return 'This feature grants you a malice ability.';
			case FeatureType.MovementMode:
				return 'This feature grants you an additional movement mode.';
			case FeatureType.Multiple:
				return 'This feature grants you a collection of features.';
			case FeatureType.Package:
				return 'This feature collates content from other features.';
			case FeatureType.PackageContent:
				return 'This feature provides content for a Package feature.';
			case FeatureType.Perk:
				return 'This feature allows you to choose a perk.';
			case FeatureType.Proficiency:
				return 'This feature grants you proficiency with weapons or armor.';
			case FeatureType.Retainer:
				return 'This feature grants you a retainer.';
			case FeatureType.SaveThreshold:
				return 'This feature modifies your threshold for saves.';
			case FeatureType.Size:
				return 'This feature sets your size.';
			case FeatureType.SkillChoice:
				return 'This feature allows you to choose a skill.';
			case FeatureType.Speed:
				return 'This feature sets your base speed.';
			case FeatureType.Summon:
				return 'This feature specifies monsters you can summon.';
			case FeatureType.SummonChoice:
				return 'This feature allows you to choose monsters you can summon.';
			case FeatureType.TaggedFeature:
				return 'This feature describes a tagged feature.';
			case FeatureType.TaggedFeatureChoice:
				return 'This feature allows you to select a tagged feature.';
			case FeatureType.Text:
				return 'This feature has no special properties, just a text description.';
			case FeatureType.TitleChoice:
				return 'This feature allows you to choose a title.';
		}
	};
}
