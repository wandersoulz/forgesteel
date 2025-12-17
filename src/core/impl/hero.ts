import { AbilityCustomizationInterface, HeroInterface } from '../models/hero';
import { CareerInterface } from '../../core/models/career';
import { Characteristic } from '../enums/characteristic';
import { ComplicationInterface } from '../../core/models/complication';
import { CultureInterface } from '../../core/models/culture';
import {
	FeatureAbilityInterface,
	FeatureClassAbilityInterface,
	FeatureInterface,
	FeatureLanguageChoiceInterface,
} from '../../core/models/feature';
import { HeroClassInterface } from '../../core/models/class';
import { HeroStateInterface } from '../../core/models/hero-state';
import { Ancestry } from './ancestry';
import { FeatureLogic } from '../logic/feature-logic';
import { Collections } from '../utils/collections';
import { CoreUtils } from '../utils/core-utils';
import { AbilityData } from '../../data/ability-data';
import {
	FeatureType,
	LanguageType,
	SkillList,
	ConditionType,
	DamageModifierType,
	FeatureField,
	AbilityDistanceType,
	DamageType,
	AbilityKeyword,
	ItemType,
} from '../enums';
import { SummonLogic, ModifierLogic, CreatureLogic } from '../logic';
import {
	AbilityInterface,
	LanguageInterface,
	SkillInterface,
	SizeInterface,
	KitInterface,
	ItemInterface,
} from '../models';
import { Monster } from './monster';
import { ActiveSourcebooks } from './sourcebook';
import { ElementFactory } from '../factory/element-factory';

export class Hero implements HeroInterface {
	id: string;
	name: string;
	picture: string | null;
	folder: string;
	settingIDs: string[];
	ancestry: Ancestry | null;
	culture: CultureInterface | null;
	class: HeroClassInterface | null;
	career: CareerInterface | null;
	complication: ComplicationInterface | null;
	features: FeatureInterface[];
	state: HeroStateInterface;
	abilityCustomizations: AbilityCustomizationInterface[];

	constructor(hero: HeroInterface) {
		this.id = hero.id;
		this.name = hero.name;
		this.picture = hero.picture;
		this.folder = hero.folder;
		this.settingIDs = hero.settingIDs;
		this.ancestry = hero.ancestry ? new Ancestry(hero.ancestry) : null;
		this.culture = hero.culture;
		this.class = hero.class;
		this.career = hero.career;
		this.complication = hero.complication;
		this.features = hero.features;
		this.state = hero.state;
		this.abilityCustomizations = hero.abilityCustomizations;
	}

	getDescription() {
		if (!this.class || !this.ancestry) {
			return 'Hero';
		}

		return `Level ${this.class.level} ${this.ancestry.name} ${this.class.name}`;
	}

	getFeatures() {
		const heroLevel = this.class?.level || 1;
		const features: { feature: FeatureInterface; source: string }[] = [];

		if (this.ancestry) {
			features.push(...this.ancestry.getFeatures(heroLevel));
		}

		if (this.culture) {
			features.push(...FeatureLogic.getFeaturesFromCulture(this.culture, heroLevel));
		}

		if (this.career) {
			features.push(...FeatureLogic.getFeaturesFromCareer(this.career, heroLevel));
		}

		if (this.class) {
			features.push(...FeatureLogic.getFeaturesFromClass(this.class, heroLevel));
		}

		if (this.complication) {
			features.push(...FeatureLogic.getFeaturesFromComplication(this.complication, heroLevel));
		}

		features.push(...FeatureLogic.getFeaturesFromCustomization(this));

		this.state.inventory.forEach((item) => {
			try {
				features.push(...FeatureLogic.getFeaturesFromItem(item, heroLevel));
			} catch (ex) {}
		});

		return Collections.sort(features, (f) => f.feature.name).map((f) => {
			const customization = this.abilityCustomizations.find((ac) => ac.abilityID === f.feature.id) || null;
			if (customization) {
				const feature = CoreUtils.copy(f.feature);

				feature.name = customization.name || feature.name;
				feature.description = customization.description || feature.description;

				if (customization.notes) {
					feature.description += `\n\n${customization.notes}`;
				}

				return { feature: feature, source: f.source };
			}

			return f;
		});
	}

	getAbilities(standardAbilityIDs: string[]) {
		const choices: { ability: AbilityInterface; source: string }[] = [];

		this.getFeatures()
			.filter((f) => f.feature.type === FeatureType.Ability)
			.forEach((f) => {
				choices.push({ ability: (f.feature as FeatureAbilityInterface).data.ability, source: f.source });
			});

		this.getFeatures()
			.filter((f) => f.feature.type === FeatureType.ClassAbility)
			.forEach((f) => {
				const feature = f.feature as FeatureClassAbilityInterface;
				let heroClass = this.class;
				if (feature.data.classID) {
					heroClass =
						ActiveSourcebooks.getInstance()
							.getClasses()
							.find((c) => c.id === feature.data.classID) || null;
				}
				if (heroClass) {
					const abilities = ActiveSourcebooks.getInstance().getAbilitiesFromClass(
						heroClass,
						feature.data.source.fromClassAbilities,
						feature.data.source.fromSelectedSubclassAbilities,
						feature.data.source.fromUnselectedSubclassAbilities,
						feature.data.source.fromClassLevels,
						feature.data.source.fromSelectedSubclassLevels,
						feature.data.source.fromUnselectedSubclassLevels
					);
					feature.data.selectedIDs.forEach((abilityID) => {
						const ability = abilities.find((a) => a.id === abilityID);
						if (ability) {
							choices.push({ ability: ability, source: f.source });
						}
					});
				}
			});

		const abilities = choices
			.sort((a, b) => a.ability.name.localeCompare(b.ability.name))
			.sort((a, b) => {
				if (a.ability.cost === 'signature' && b.ability.cost === 'signature') {
					return 0;
				}
				if (a.ability.cost === 'signature') {
					return -1;
				}
				if (b.ability.cost === 'signature') {
					return 1;
				}
				return a.ability.cost - b.ability.cost;
			})
			.sort((a, b) => a.ability.type.usage.localeCompare(b.ability.type.usage));

		AbilityData.standardAbilities
			.filter((a) => standardAbilityIDs.includes(a.id))
			.forEach((a) => abilities.push({ ability: a, source: 'Standard' }));

		return abilities.map((a) => {
			const customization = this.abilityCustomizations.find((ac) => ac.abilityID === a.ability.id) || null;
			if (customization) {
				const ability = CoreUtils.copy(a.ability);

				ability.name = customization.name || ability.name;
				ability.description = customization.description || ability.description;

				if (ability.cost !== 'signature') {
					ability.cost += customization.costModifier;
				}

				// Distance bonus / damage bonus are handled separately

				if (customization.characteristic) {
					ability.sections
						.filter((s: any) => s.type === 'roll')
						.forEach((s: any) => (s.roll.characteristic = [customization.characteristic!]));
				}

				if (customization.notes) {
					ability.sections.push(
						ElementFactory.createAbilitySectionField({ name: 'Notes', effect: customization.notes })
					);
				}

				return { ability: ability, source: a.source };
			}

			return a;
		});
	}

	getPerks() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Perk)
			.flatMap((f) => f.data.selected);
	}

	getKits() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Kit)
			.flatMap((f) => f.data.selected);
	}

	getTitles() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.TitleChoice)
			.flatMap((f) => f.data.selected);
	}

	getDomains() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Domain)
			.flatMap((f) => f.data.selected);
	}

	getItems() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.ItemChoice)
			.flatMap((f) => f.data.selected);
	}

	getFormerAncestries() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.AncestryChoice)
			.map((f) => f.data.selected)
			.filter((a) => !!a);
	}

	getAncestryPoints() {
		if (this.ancestry) {
			let points = this.ancestry.ancestryPoints;
			if (this.ancestry.id === 'ancestry-revenant') {
				const size = this.getSize();
				if (size.value == 1 && size.mod === 'S') {
					points += 1;
				}
			}

			return points;
		}

		return 0;
	}

	getCompanions() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Companion)
			.map((f) => f.data.selected)
			.filter((a) => !!a)
			.sort((a, b) => a.name.localeCompare(b.name));
	}

	getFollowers() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Follower)
			.map((f) => f.data.follower)
			.filter((a) => !!a)
			.sort((a, b) => a.name.localeCompare(b.name));
	}

	getRetainers() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Retainer)
			.map((f) => f.data.selected)
			.filter((a) => !!a)
			.sort((a, b) => a.name.localeCompare(b.name));
	}

	getSummons() {
		return this.getFeatures()
			.map((f) => f.feature)
			.flatMap((f) => {
				switch (f.type) {
					case FeatureType.Summon:
						return f.data.summons;
					case FeatureType.SummonChoice:
						return f.data.selected;
				}
				return [];
			})
			.map((s) => {
				const copy = CoreUtils.copy(s);
				copy.monster = SummonLogic.getSummonedMonster(new Monster(copy.monster), this);
				return copy;
			})
			.sort((a, b) => {
				let result = a.info.cost - b.info.cost;
				if (result === 0) {
					result = a.name.localeCompare(b.name);
				}
				return result;
			});
	}

	getCharacteristic = (characteristic: Characteristic) => {
		let value = 0;

		if (this.class) {
			const ch = this.class.characteristics.find((ch) => ch.characteristic === characteristic);
			if (ch) {
				value += ch.value;
			}
		}

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.CharacteristicBonus)
			.filter((f) => f.data.characteristic === characteristic)
			.forEach((f) => (value += f.data.value));

		return value;
	};

	getLanguages = () => {
		const languageNames: string[] = [];

		// Collate from features
		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Language)
			.forEach((f) => {
				languageNames.push(f.data.language);
			});
		this.getFeatures()
			.filter((f) => f.feature.type === FeatureType.LanguageChoice)
			.forEach((f) => {
				const feature = f.feature as FeatureLanguageChoiceInterface;
				const selected = CoreUtils.copy(feature.data.selected);
				if (selected.length < feature.data.count) {
					selected.push(`I Speak Their Language (${f.source})`);
				}
				languageNames.push(...selected);
			});

		const allLanguages = ActiveSourcebooks.getInstance().getLanguages();

		const languages: LanguageInterface[] = [];
		Collections.distinct(languageNames, (l) => l).forEach((name) => {
			const language = allLanguages.find((l) => l.name === name);
			if (language) {
				languages.push(language);
			} else {
				languages.push({ name: name, description: '', type: LanguageType.Custom, related: [] });
			}
		});

		return Collections.sort(languages, (l) => l.name);
	};

	getSkills = () => {
		const skillNames: string[] = [];

		// Collate from features
		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.SkillChoice)
			.forEach((f) => {
				skillNames.push(...f.data.selected);
			});

		const allSkills = ActiveSourcebooks.getInstance().getSkills();
		const skills: SkillInterface[] = [];
		Collections.distinct(skillNames, (s) => s).forEach((name) => {
			const skill = allSkills.find((skill) => skill.name == name);
			if (skill) {
				skills.push(skill);
			} else {
				skills.push({ name: name, description: '', list: SkillList.Custom });
			}
		});

		return Collections.sort(skills, (s) => s.name);
	};

	getConditionImmunities() {
		const conditions: ConditionType[] = [];

		// Collate from features
		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.ConditionImmunity)
			.forEach((f) => {
				f.data.conditions.forEach((c: any) => {
					if (!conditions.includes(c)) {
						conditions.push(c);
					}
				});
			});

		return Collections.sort(conditions, (c) => c);
	}

	getDamageModifiers = (type: DamageModifierType) => {
		const modifiers: { damageType: string; value: number }[] = [];

		// Collate from features
		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.DamageModifier)
			.forEach((f) => {
				f.data.modifiers
					.filter((dm: any) => dm.type === type)
					.forEach((dm: any) => {
						const value = ModifierLogic.calculateModifierValue(dm, this);

						const existing = modifiers.find((x) => x.damageType === dm.damageType);
						if (existing) {
							existing.value = Math.max(existing.value, value);
						} else {
							modifiers.push({
								damageType: dm.damageType,
								value: value,
							});
						}
					});
			});

		return Collections.sort(modifiers, (dm) => dm.damageType);
	};

	///////////////////////////////////////////////////////////////////////////

	getStamina() {
		let value = 0;

		// Add maximum from kits
		const kits = this.getKits();
		const v =
			Collections.max(
				kits.map((kit) => kit.stamina),
				(value) => value
			) || 0;
		if (this.class) {
			value += v * CreatureLogic.getEchelon(this.class.level);
		}

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.Stamina)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	getWindedThreshold() {
		return Math.floor(this.getStamina() / 2);
	}

	getDeadThreshold() {
		return -this.getWindedThreshold();
	}

	getRecoveryValue() {
		let value = Math.floor(this.getStamina() / 3);

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.RecoveryValue)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	getRecoveries() {
		let value = 0;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.Recoveries)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	getSize() {
		const featureSizes = this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Size)
			.map((f) => f.data.size);
		if (featureSizes.length > 0) {
			const value = Collections.max(
				featureSizes.map((s) => s.value),
				(v) => v
			);
			const mods = Collections.distinct(
				featureSizes.map((s) => s.mod),
				(m) => m
			);
			return {
				value: value,
				mod: value === 1 ? mods[0] : '',
			} as SizeInterface;
		}

		const ancestrySizes = this.getFormerAncestries()
			.flatMap((a: any) => a.features.filter((f: any) => f.type === FeatureType.Size))
			.map((f: any) => f.data.size);
		if (ancestrySizes.length > 0) {
			const value = Collections.max(
				ancestrySizes.map((s) => s.value),
				(v) => v
			);
			const mods = Collections.distinct(
				ancestrySizes.map((s) => s.mod),
				(m) => m
			);
			return {
				value: value,
				mod: value === 1 ? mods[0] : '',
			} as SizeInterface;
		}

		return {
			value: 1,
			mod: 'M',
		} as SizeInterface;
	}

	getSpeed() {
		const getValue = () => {
			let value = 5;

			const features = this.getFeatures()
				.map((f) => f.feature)
				.filter((f) => f.type === FeatureType.Speed);
			if (features.length > 0) {
				const datas = features.map((f) => f.data);
				value =
					Collections.max(
						datas.map((d) => d.speed),
						(v) => v
					) || 0;
			}

			// Add maximum from kits
			const kits = this.getKits();
			value +=
				Collections.max(
					kits.map((kit) => kit.speed),
					(value) => value
				) || 0;

			this.getFeatures()
				.map((f) => f.feature)
				.filter((f) => f.type === FeatureType.Bonus)
				.map((f) => f.data)
				.filter((data) => data.field === FeatureField.Speed)
				.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

			if (this.state.conditions.some((c) => [ConditionType.Grabbed, ConditionType.Restrained].includes(c.type))) {
				value = 0;
			}
			if (this.state.conditions.some((c) => [ConditionType.Slowed].includes(c.type))) {
				value = Math.min(value, 2);
			}

			return value;
		};

		const getModes = () => {
			const modes = this.getFeatures()
				.map((f) => f.feature)
				.filter((f) => f.type === FeatureType.MovementMode)
				.map((f) => f.data.mode);
			return (
				Collections.sort(
					Collections.distinct(modes, (m) => m),
					(m) => m
				) || []
			);
		};

		return {
			value: getValue(),
			modes: getModes(),
		};
	}

	getSpeedModified() {
		if (
			this.state.conditions.some((c) =>
				[ConditionType.Grabbed, ConditionType.Restrained, ConditionType.Slowed].includes(c.type)
			)
		) {
			return true;
		}

		return false;
	}

	getStability() {
		let value = 0;

		// Add maximum from kits
		const kits = this.getKits();
		value +=
			Collections.max(
				kits.map((kit) => kit.stability),
				(value) => value
			) || 0;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.Stability)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	getDisengage() {
		let value = 1;

		// Add maximum from kits
		const kits = this.getKits();
		value +=
			Collections.max(
				kits.map((kit) => kit.disengage),
				(value) => value
			) || 0;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.Disengage)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	getSaveThreshold() {
		const values = [6];

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.SaveThreshold)
			.forEach((f) => values.push(f.data.value));

		return Math.min(...values);
	}

	getSaveBonus() {
		let value = 0;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.Save)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	getRenown() {
		let value = this.state.renown;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.Renown)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	getProjectPoints() {
		let value = this.state.projectPoints;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.ProjectPoints)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	getWealth() {
		let value = this.state.wealth;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.Bonus)
			.map((f) => f.data)
			.filter((data) => data.field === FeatureField.Wealth)
			.forEach((data) => (value += ModifierLogic.calculateModifierValue(data, this)));

		return value;
	}

	///////////////////////////////////////////////////////////////////////////

	getKitDamageBonuses() {
		const kits: { name: string; type: 'melee' | 'ranged'; tier1: number; tier2: number; tier3: number }[] = [];

		this.getKits().forEach((kit) => {
			if (kit.meleeDamage) {
				kits.push({
					name: kit.name,
					type: 'melee',
					tier1: kit.meleeDamage.tier1,
					tier2: kit.meleeDamage.tier2,
					tier3: kit.meleeDamage.tier3,
				});
			}
			if (kit.rangedDamage) {
				kits.push({
					name: kit.name,
					type: 'ranged',
					tier1: kit.rangedDamage.tier1,
					tier2: kit.rangedDamage.tier2,
					tier3: kit.rangedDamage.tier3,
				});
			}
		});

		const kitToString = (info: {
			name: string;
			type: 'melee' | 'ranged';
			tier1: number;
			tier2: number;
			tier3: number;
		}) => {
			return `${info.type} ${info.tier1} ${info.tier2} ${info.tier3}`;
		};

		// Collate functionally identical kits together
		const uniqueKits = Collections.distinct(kits.map(kitToString), (x) => x).map((str) => {
			const toCombine = kits.filter((k) => kitToString(k) === str);
			return {
				name: toCombine.map((k) => k.name).join(' / '),
				type: toCombine[0].type,
				tier1: toCombine[0].tier1,
				tier2: toCombine[0].tier2,
				tier3: toCombine[0].tier3,
			};
		});

		// Remove any kit that's strictly worse than another
		const worse: { name: string; type: string }[] = [];
		uniqueKits.forEach((k) => {
			const isWorse = uniqueKits
				.filter((k2) => k.name !== k2.name)
				.filter((k2) => k.type === k2.type)
				.some((k2) => k.tier1 < k2.tier1 && k.tier2 < k2.tier2 && k.tier3 < k2.tier3);
			if (isWorse) {
				worse.push({ name: k.name, type: k.type });
			}
		});
		const reducedKits = uniqueKits.filter((k) => !worse.some((wk) => k.name === wk.name && k.type === wk.type));

		return reducedKits;
	}

	getBonusFromModifier = (attrFn: (kit: KitInterface) => number): number => {
		const kits = this.getKits();
		const result = Collections.max(kits.map(attrFn), (s) => s) || 0;

		return result;
	};

	getFeatureDamageBonuses = (ability: AbilityInterface, distance: AbilityDistanceType | undefined) => {
		const array: { feature: string; value: number; type: DamageType }[] = [];

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.AbilityDamage)
			.filter((f) => {
				if (distance === AbilityDistanceType.Melee) {
					return f.data.keywords.includes(AbilityKeyword.Melee);
				}

				if (distance === AbilityDistanceType.Ranged) {
					return f.data.keywords.includes(AbilityKeyword.Ranged);
				}
				return true;
			})
			.filter((f: any) => f.data.keywords.every((kw: any) => ability.keywords.includes(kw)))
			.forEach((f: any) => {
				const mod = ModifierLogic.calculateModifierValue(f.data, this);
				array.push({
					feature: f.name,
					value: mod,
					type: f.data.damageType,
				});
			});

		this.abilityCustomizations
			.filter((ac) => ac.abilityID === ability.id)
			.filter((ac) => ac.damageBonus !== 0)
			.forEach((ac) => {
				array.push({
					feature: 'Customization',
					value: ac.damageBonus,
					type: DamageType.Damage,
				});
			});

		return array;
	};

	getDistanceBonus = (ability: AbilityInterface) => {
		let value = 0;

		const kitBonuses: number[] = [];
		if (ability.keywords.includes(AbilityKeyword.Melee) && ability.keywords.includes(AbilityKeyword.Weapon)) {
			// Add melee distance bonus from kits
			kitBonuses.push(...this.getKits().map((kit) => kit.meleeDistance));
		}
		if (ability.keywords.includes(AbilityKeyword.Ranged) && ability.keywords.includes(AbilityKeyword.Weapon)) {
			// Add ranged distance bonus from kits
			kitBonuses.push(...this.getKits().map((kit) => kit.rangedDistance));
		}
		value += Collections.max(kitBonuses, (x) => x) || 0;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.AbilityDistance)
			.filter((f: any) => f.data.keywords.every((kw: any) => ability.keywords.includes(kw)))
			.forEach((f: any) => {
				const mod = ModifierLogic.calculateModifierValue(f.data, this);
				value += mod;
			});

		this.abilityCustomizations
			.filter((ac) => ac.abilityID === ability.id)
			.forEach((ac) => (value += ac.distanceBonus));

		return value;
	};

	getHeroicResources() {
		return this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.HeroicResource)
			.map((f) => {
				let gains = [];
				switch (f.data.type) {
					case 'heroic': {
						const gainsFromFeatures = this.getFeatures()
							.map((f) => f.feature)
							.filter((f) => f.type === FeatureType.HeroicResourceGain)
							.map((f) => f.data);

						const gainsFromDomains = this.getDomains()
							.flatMap((d) => d.resourceGains)
							.filter((g) => g.resource === f.name)
							.map((g) => g);

						const replacedTags = gainsFromFeatures.flatMap((g) => g.replacesTags);

						gains = [...f.data.gains, ...gainsFromFeatures, ...gainsFromDomains].filter(
							(g) => !replacedTags.includes(g.tag)
						);
						break;
					}
					case 'epic': {
						gains = f.data.gains;
						break;
					}
				}

				return {
					id: f.id,
					name: f.name,
					type: f.data.type,
					gains: gains,
					details: f.data.details,
					canBeNegative: f.data.canBeNegative,
					value: f.data.value,
				};
			});
	}

	///////////////////////////////////////////////////////////////////////////

	getProficiencies() {
		return [...this.getArmorProficiencies(), ...this.getWeaponProficiencies()];
	}

	getArmorProficiencies() {
		return Collections.distinct(
			[
				...this.getKits().flatMap((k) => k.armor),
				...this.getFeatures()
					.map((f) => f.feature)
					.filter((f) => f.type === FeatureType.Proficiency)
					.flatMap((f) => f.data.armor),
			],
			(x) => x
		);
	}

	getWeaponProficiencies() {
		return Collections.distinct(
			[
				...this.getKits().flatMap((k) => k.weapon),
				...this.getFeatures()
					.map((f) => f.feature)
					.filter((f) => f.type === FeatureType.Proficiency)
					.flatMap((f) => f.data.weapons),
			],
			(x) => x
		);
	}

	canUseItem = (item: ItemInterface) => {
		switch (item.type) {
			case ItemType.LeveledArmor: {
				const profs = this.getArmorProficiencies();
				return profs.some((a) => item.keywords.includes(a));
			}
			case ItemType.LeveledWeapon: {
				const profs = this.getWeaponProficiencies();
				return profs.some((w) => item.keywords.includes(w));
			}
		}

		return true;
	};

	getCharacteristicArrays = (primaryCount: number) => {
		if (primaryCount === 2) {
			return [
				[2, -1, -1],
				[1, 0, 0],
				[1, 1, -1],
			];
		}

		if (primaryCount === 1) {
			return [
				[2, 2, -1, -1],
				[2, 1, 1, -1],
				[2, 1, 0, 0],
				[1, 1, 1, 0],
			];
		}

		return [];
	};

	calculateCharacteristicArrays = (array: number[], primary: Characteristic[]) => {
		const all = [
			Characteristic.Might,
			Characteristic.Agility,
			Characteristic.Reason,
			Characteristic.Intuition,
			Characteristic.Presence,
		];
		const others = all.filter((c) => !primary.includes(c));

		return Collections.distinct(Collections.getPermutations(array), (item) => item.join(', ')).map((arr) => {
			return all.map((ch) => {
				let value = 0;
				if (primary.includes(ch)) {
					value = 2;
				} else {
					const index = others.indexOf(ch);
					value = arr[index];
				}
				return {
					characteristic: ch,
					value: value,
				};
			});
		});
	};

	getPotency = (strength: 'weak' | 'average' | 'strong') => {
		const value = Math.max(
			this.getCharacteristic(Characteristic.Might),
			this.getCharacteristic(Characteristic.Agility),
			this.getCharacteristic(Characteristic.Reason),
			this.getCharacteristic(Characteristic.Intuition),
			this.getCharacteristic(Characteristic.Presence)
		);

		switch (strength) {
			case 'weak':
				return value - 2;
			case 'average':
				return value - 1;
			case 'strong':
				return value;
		}
	};

	calculateSurgeDamage() {
		return this.class && this.class.characteristics.length > 0
			? Math.max(...this.class.characteristics.map((c) => this.getCharacteristic(c.characteristic)))
			: 0;
	}

	getCombatState() {
		const maxStamina = this.getStamina();
		if (maxStamina > 0) {
			const winded = this.getWindedThreshold();
			const dead = this.getDeadThreshold();
			const currentStamina = maxStamina - this.state.staminaDamage;

			if (currentStamina <= dead) {
				return 'dead';
			}

			if (currentStamina <= 0) {
				return 'dying';
			}

			if (currentStamina <= winded) {
				return 'winded';
			}

			if (currentStamina < maxStamina) {
				return 'injured';
			}
		}

		return 'healthy';
	}

	takeRespite() {
		this.state.staminaDamage = 0;
		this.state.staminaTemp = 0;
		this.state.recoveriesUsed = 0;
		this.state.surges = 0;
		this.state.xp += this.state.victories;
		this.state.victories = 0;
		this.state.conditions = [];
		this.state.hidden = false;
		this.state.encounterState = 'ready';
		this.state.defeated = false;

		this.getFeatures()
			.map((f) => f.feature)
			.filter((f) => f.type === FeatureType.HeroicResource)
			.filter((f) => f.data.type === 'heroic')
			.forEach((f) => (f.data.value = 0));
	}
}
