import {
	AbilityDistanceInterface,
	AbilitySectionFieldInterface,
	AbilitySectionPackageInterface,
	AbilitySectionRollInterface,
	AbilitySectionTextInterface,
	AbilityTypeInterface,
} from '../models/ability';
import { EncounterInterface, EncounterGroupInterface, EncounterObjectiveInterface } from '../models/encounter';
import { KitInterface, KitDamageBonusInterface } from '../models/kit';
import { MonsterFilterInterface } from '../models/filter';
import { MontageInterface, MontageChallengeInterface, MontageSectionInterface } from '../models/montage';
import { ProjectInterface, ProjectProgressInterface } from '../models/project';
import { AbilityKeyword } from '../enums/ability-keyword';
import { AdventureInterface } from '../models/adventure';
import { AncestryInterface } from '../models/ancestry';
import { AttitudeType } from '../enums/attitude-type';
import { CareerInterface } from '../models/career';
import { Characteristic } from '../enums/characteristic';
import { ComplicationInterface } from '../models/complication';
import { CultureInterface } from '../models/culture';
import { CultureType } from '../enums/culture-type';
import { DamageType } from '../enums/damage-type';
import { DomainInterface } from '../models/domain';
import { ElementInterface } from '../models/element';
import { EncounterDifficulty } from '../enums/encounter-difficulty';
import { EncounterSlotInterface } from '../models/encounter-slot';
import { AbilityTypeFactory } from './ability-type-factory';
import { DamageModifierFactory } from './damage-modifier-factory';
import { DistanceFactory } from './distance-factory';
import { FeatureFactory } from './feature-factory';
import { FeatureInterface } from '../models/feature';
import { FeatureField } from '../enums/feature-field';
import { FeatureType } from '../enums/feature-type';
import { FollowerInterface } from '../models/follower';
import { FollowerType } from '../enums/follower-type';
import { HeroInterface } from '../models/hero';
import { HeroClassInterface } from '../models/class';
import { HeroStateInterface } from '../models/hero-state';
import { ImbuementInterface } from '../models/imbuement';
import { ItemInterface } from '../models/item';
import { ItemType } from '../enums/item-type';
import { KitArmor } from '../enums/kit-armor';
import { KitWeapon } from '../enums/kit-weapon';
import { MonsterInterface } from '../models/monster';
import { MonsterGroupInterface } from '../models/monster-group';
import { MonsterOrganizationType } from '../enums/monster-organization-type';
import { MonsterRoleInterface } from '../models/monster-role';
import { MonsterRoleType } from '../enums/monster-role-type';
import { MonsterStateInterface } from '../models/monster-state';
import { NegotiationInterface } from '../models/negotiation';
import { PerkInterface } from '../models/perk';
import { PerkList } from '../enums/perk-list';
import { PlotInterface } from '../models/plot';
import { PowerRollInterface } from '../models/power-roll';
import { RetainerLogic } from '../logic/retainer-logic';
import { SizeInterface } from '../models/size';
import { SpeedInterface } from '../models/speed';
import { SubClassInterface } from '../models/subclass';
import { SummonInterface } from '../models/summon';
import { TipInterface } from '../models/tip';
import { TitleInterface } from '../models/title';
import { CoreUtils } from '../utils/core-utils';
import { Ability } from '../impl/ability';

export class ElementFactory {
	static createElement = (name?: string): ElementInterface => {
		return {
			id: CoreUtils.guid(),
			name: name || '',
			description: '',
		};
	};

	static createHero = (): HeroInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			picture: null,
			folder: '',
			settingIDs: [],
			ancestry: null,
			culture: null,
			class: null,
			career: null,
			complication: null,
			features: [
				ElementFactory.FeatureFactory.createLanguageChoice({
					id: 'default-language',
					name: 'Default Language',
					selected: ['Caelian'],
				}),
			],
			state: ElementFactory.createHeroState(),
			abilityCustomizations: [],
		};
	};

	static createHeroState = (): HeroStateInterface => {
		return {
			staminaDamage: 0,
			staminaTemp: 0,
			recoveriesUsed: 0,
			surges: 0,
			victories: 0,
			xp: 0,
			heroTokens: 0,
			renown: 0,
			wealth: 1,
			projectPoints: 0,
			conditions: [],
			inventory: [],
			projects: [],
			controlledSlots: [],
			notes: '',
			encounterState: 'ready',
			hidden: false,
			defeated: false,
		};
	};

	static createAncestry = (): AncestryInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			features: [
				ElementFactory.FeatureFactory.create({
					id: CoreUtils.guid(),
					name: 'Signature Trait',
					description: '',
				}),
				ElementFactory.FeatureFactory.createChoice({
					id: CoreUtils.guid(),
					name: 'Purchased Traits',
					options: [],
					count: 'ancestry',
				}),
			],
			ancestryPoints: 3,
		};
	};

	static createCulture = (
		name: string,
		description: string,
		type: CultureType,
		environment?: FeatureInterface,
		organization?: FeatureInterface,
		upbringing?: FeatureInterface,
		language?: string
	): CultureInterface => {
		const id = name ? `culture-${name.replace(' ', '-').toLowerCase()}` : CoreUtils.guid();

		return {
			id: id,
			name: name,
			description: description,
			type: type,
			language: ElementFactory.FeatureFactory.createLanguageChoice({
				id: id,
				selected: language ? [language] : [],
			}),
			environment: environment || null,
			organization: organization || null,
			upbringing: upbringing || null,
		};
	};

	static createCareer = (): CareerInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			features: [],
			incitingIncidents: {
				options: [],
				selected: null,
			},
		};
	};

	static createClass = (): HeroClassInterface => {
		const hc: HeroClassInterface = {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			type: 'standard',
			subclassName: '',
			subclassCount: 1,
			primaryCharacteristicsOptions: [],
			primaryCharacteristics: [],
			featuresByLevel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({ level: n, features: [] })),
			abilities: [],
			subclasses: [],
			level: 1,
			characteristics: [],
		};

		hc.featuresByLevel
			.filter((lvl) => lvl.level === 1)
			.forEach((lvl) => {
				lvl.features.push(
					ElementFactory.FeatureFactory.createBonus({
						id: CoreUtils.guid(),
						field: FeatureField.Stamina,
						value: 18,
						valuePerLevel: 9,
					})
				);
				lvl.features.push(
					ElementFactory.FeatureFactory.createBonus({
						id: CoreUtils.guid(),
						field: FeatureField.Recoveries,
						value: 8,
					})
				);
				lvl.features.push(
					ElementFactory.FeatureFactory.createHeroicResource({
						id: CoreUtils.guid(),
						name: 'Heroic Resource',
						gains: [
							{
								tag: 'start',
								trigger: 'Start of your turn',
								value: '2',
							},
						],
					})
				);
			});

		return hc;
	};

	static createSubclass = (): SubClassInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			featuresByLevel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
				level: n,
				features: [],
				optionalFeatures: [],
			})),
			abilities: [],
			selected: false,
		};
	};

	static createComplication = (): ComplicationInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			features: [],
		};
	};

	static createDomain = (): DomainInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			featuresByLevel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
				level: n,
				features: [],
				optionalFeatures: [],
			})),
			resourceGains: [],
			defaultFeatures: [],
		};
	};

	static createKit = (): KitInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			type: '',
			armor: [],
			weapon: [],
			stamina: 0,
			speed: 0,
			stability: 0,
			meleeDamage: null,
			rangedDamage: null,
			meleeDistance: 0,
			rangedDistance: 0,
			disengage: 0,
			features: [],
		};
	};

	static createKitDamageBonus = (tier1: number, tier2: number, tier3: number): KitDamageBonusInterface => {
		return {
			tier1: tier1,
			tier2: tier2,
			tier3: tier3,
		};
	};

	static createPerk = (): PerkInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			type: FeatureType.Text,
			data: null,
			list: PerkList.Crafting,
		};
	};

	static createTitle = (): TitleInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			echelon: 1,
			prerequisites: '',
			features: [],
			selectedFeatureID: '',
		};
	};

	static createItem = (data: {
		id: string;
		name: string;
		description: string;
		type: ItemType;
		keywords?: (AbilityKeyword | KitArmor | KitWeapon)[];
		crafting?: ProjectInterface;
		effect?: string;
		featuresByLevel?: { level: number; features: FeatureInterface[] }[];
		imbuements?: ImbuementInterface[];
	}): ItemInterface => {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			type: data.type,
			keywords: data.keywords || [],
			crafting: data.crafting || null,
			effect: data.effect || '',
			featuresByLevel: data.featuresByLevel || [
				{
					level: 1,
					features: [],
				},
				{
					level: 5,
					features: [],
				},
				{
					level: 9,
					features: [],
				},
			],
			imbuements: data.imbuements || [],
			count: 1,
		};
	};

	static createImbuement = (data: {
		type: ItemType;
		crafting?: ProjectInterface;
		level: number;
		feature: FeatureInterface;
	}): ImbuementInterface => {
		return {
			id: data.feature.id,
			name: data.feature.name,
			description: data.feature.description,
			type: data.type,
			crafting: data.crafting || null,
			level: data.level,
			feature: data.feature,
		};
	};

	static createProject = (data: {
		id?: string;
		name?: string;
		description?: string;
		prerequisites?: string;
		source?: string;
		characteristic?: Characteristic[];
		goal?: number;
		isCustom?: boolean;
	}): ProjectInterface => {
		return {
			id: data.id || CoreUtils.guid(),
			name: data.name || '',
			description: data.description || '',
			itemPrerequisites: data.prerequisites || '',
			source: data.source || '',
			characteristic: data.characteristic || [Characteristic.Reason],
			goal: data.goal || 0,
			isCustom: data.isCustom ?? false,
			progress: null,
		};
	};

	static createProjectProgress = (): ProjectProgressInterface => {
		return {
			prerequisites: false,
			source: false,
			followerID: null,
			points: 0,
		};
	};

	static createFollower = (type: FollowerType): FollowerInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			type: type,
			characteristics: [
				{ characteristic: Characteristic.Might, value: type === FollowerType.Artisan ? 1 : 0 },
				{ characteristic: Characteristic.Agility, value: 0 },
				{ characteristic: Characteristic.Reason, value: 1 },
				{ characteristic: Characteristic.Intuition, value: type === FollowerType.Sage ? 1 : 0 },
				{ characteristic: Characteristic.Presence, value: 0 },
			],
			skills: [],
			languages: [],
		};
	};

	static createMonsterGroup = (): MonsterGroupInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			picture: null,
			information: [],
			malice: [],
			addOns: [],
			monsters: [],
		};
	};

	static createCharacteristics = (
		might: number,
		agility: number,
		reason: number,
		intuition: number,
		presence: number
	) => {
		return [
			{ characteristic: Characteristic.Might, value: might },
			{ characteristic: Characteristic.Agility, value: agility },
			{ characteristic: Characteristic.Reason, value: reason },
			{ characteristic: Characteristic.Intuition, value: intuition },
			{ characteristic: Characteristic.Presence, value: presence },
		];
	};

	static createMonster = (data: {
		id: string;
		name: string;
		description?: string;
		level: number;
		role: MonsterRoleInterface;
		keywords: string[];
		encounterValue: number;
		size: SizeInterface;
		speed: SpeedInterface;
		stamina: number;
		stability: number;
		freeStrikeDamage: number;
		freeStrikeType?: DamageType;
		characteristics: { characteristic: Characteristic; value: number }[];
		features: FeatureInterface[];
		withCaptain?: string;
		retainer?: { level4?: FeatureInterface; level7?: FeatureInterface; level10?: FeatureInterface };
	}): MonsterInterface => {
		return {
			id: data.id,
			name: data.name,
			description: data.description || '',
			picture: null,
			level: data.level,
			role: data.role,
			keywords: data.keywords,
			encounterValue: data.encounterValue,
			size: data.size,
			speed: data.speed,
			stamina: data.stamina,
			stability: data.stability,
			freeStrikeDamage: data.freeStrikeDamage,
			freeStrikeType: data.freeStrikeType || DamageType.Damage,
			characteristics: data.characteristics,
			features: data.features,
			withCaptain: data.withCaptain || '',
			retainer: data.retainer
				? {
						level: data.level,
						level4: data.retainer.level4,
						level7: data.retainer.level7,
						level10: data.retainer.level10,
						featuresByLevel: RetainerLogic.getRetainerAdvancementFeatures(
							data.level,
							data.role.type,
							data.retainer.level4,
							data.retainer.level7,
							data.retainer.level10
						),
					}
				: null,
			state: ElementFactory.createMonsterState(),
		};
	};

	static createSummon = (data: {
		monster: MonsterInterface;
		isSignature?: boolean;
		cost: number;
		count: number;
		level3?: FeatureInterface[];
		level6?: FeatureInterface[];
		level10?: FeatureInterface[];
	}): SummonInterface => {
		return {
			id: data.monster.id,
			name: data.monster.name,
			description: data.monster.description,
			monster: data.monster,
			info: {
				isSignature: data.isSignature || false,
				cost: data.cost,
				count: data.count,
				level3: data.level3 || [],
				level6: data.level6 || [],
				level10: data.level10 || [],
			},
		};
	};

	static createMonsterRole = (
		organization: MonsterOrganizationType,
		type: MonsterRoleType = MonsterRoleType.NoRole
	): MonsterRoleInterface => {
		return {
			type: type,
			organization: organization,
		};
	};

	static createSize = (value: number, mod?: 'T' | 'S' | 'M' | 'L' | ''): SizeInterface => {
		return {
			value: value,
			mod: mod || '',
		};
	};

	static createSpeed = (value: number, modes?: string): SpeedInterface => {
		return {
			value: value,
			modes: modes ? modes.split(',').map((m) => m.trim()) : [],
		};
	};

	static createMonsterState = (): MonsterStateInterface => {
		return {
			staminaDamage: 0,
			staminaTemp: 0,
			recoveriesUsed: 0,
			conditions: [],
			reactionUsed: false,
			hidden: false,
			defeated: false,
			captainID: undefined,
		};
	};

	static createMonsterFilter = (): MonsterFilterInterface => {
		return {
			name: '',
			keywords: [],
			roles: [],
			organizations: [],
			level: [],
			size: [],
			ev: [],
		};
	};

	static createEncounter = (): EncounterInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			groups: [],
			heroes: [],
			objective: null,
			notes: [],
			initiative: undefined,
			round: 0,
			malice: 0,
			additionalTurnsTaken: [],
			hiddenMaliceFeatures: [],
		};
	};

	static createEncounterGroup = (): EncounterGroupInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			slots: [],
			encounterState: 'ready',
		};
	};

	static createEncounterSlot = (monsterID: string): EncounterSlotInterface => {
		return {
			id: CoreUtils.guid(),
			monsterID: monsterID,
			count: 1,
			customization: {
				addOnIDs: [],
				itemIDs: [],
				levelAdjustment: 0,
				convertToSolo: false,
			},
			monsters: [],
			state: {
				staminaDamage: 0,
				staminaTemp: 0,
				recoveriesUsed: 0,
				conditions: [],
				reactionUsed: false,
				hidden: false,
				defeated: false,
				captainID: undefined,
			},
		};
	};

	static createEncounterSlotFromMonster = (monster: MonsterInterface): EncounterSlotInterface => {
		const m = CoreUtils.copy(monster);
		m.id = CoreUtils.guid();

		return {
			id: CoreUtils.guid(),
			monsterID: monster.id,
			count: 1,
			customization: {
				addOnIDs: [],
				itemIDs: [],
				levelAdjustment: 0,
				convertToSolo: false,
			},
			monsters: [m],
			state: {
				staminaDamage: 0,
				staminaTemp: 0,
				recoveriesUsed: 0,
				conditions: [],
				reactionUsed: false,
				hidden: false,
				defeated: false,
				captainID: undefined,
			},
		};
	};

	static createEncounterObjective = (): EncounterObjectiveInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			difficultyModifier: '',
			successCondition: '',
			failureCondition: '',
			victories: '',
		};
	};

	static createNegotiation = (): NegotiationInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			attitude: AttitudeType.Neutral,
			impression: 0,
			interest: 1,
			patience: 1,
			motivations: [],
			pitfalls: [],
			languages: [],
			outcomes: ['', '', '', '', '', ''],
		};
	};

	static createMontage = (): MontageInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			difficulty: EncounterDifficulty.Standard,
			scene: '',
			sections: [ElementFactory.createMontageSection()],
			outcomes: {
				totalSuccess: '',
				partialSuccess: '',
				totalFailure: '',
			},
		};
	};

	static createMontageSection = (): MontageSectionInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			challenges: [],
			twistInfo: '',
			twists: [],
		};
	};

	static createMontageChallenge = (data: {
		id: string;
		name: string;
		description: string;
		characteristics?: Characteristic[];
		skills?: string;
		abilities?: string;
		uses?: number;
	}): MontageChallengeInterface => {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			characteristics: data.characteristics || [],
			skills: data.skills || '',
			abilities: data.abilities || '',
			uses: data.uses ?? 1,
			successes: 0,
			failures: 0,
		};
	};

	static createAdventure = (): AdventureInterface => {
		return {
			id: CoreUtils.guid(),
			name: '',
			description: '',
			party: {
				count: 4,
				level: 1,
			},
			introduction: [ElementFactory.createElement('Introduction'), ElementFactory.createElement('Hooks')],
			plot: ElementFactory.createAdventurePlot(),
		};
	};

	static createAdventurePlot = (name?: string): PlotInterface => {
		return {
			id: CoreUtils.guid(),
			name: name || '',
			description: '',
			content: [],
			plots: [],
			links: [],
		};
	};

	static createAbility = (data: {
		id: string;
		name: string;
		description?: string;
		type?: AbilityTypeInterface;
		keywords?: AbilityKeyword[];
		distance?: AbilityDistanceInterface[];
		target?: string;
		cost?: number | 'signature';
		repeatable?: boolean;
		minLevel?: number;
		sections: (
			| AbilitySectionTextInterface
			| AbilitySectionFieldInterface
			| AbilitySectionRollInterface
			| AbilitySectionPackageInterface
		)[];
	}): Ability => {
		return new Ability({
			id: data.id,
			name: data.name,
			description: data.description || '',
			type: data.type || ElementFactory.AbilityTypeFactory.createNoAction(),
			keywords: data.keywords || [],
			distance: data.distance || [],
			target: data.target || '',
			cost: data.cost || 0,
			repeatable: data.repeatable ?? false,
			minLevel: data.minLevel || 1,
			sections: data.sections,
		});
	};

	static createAbilitySectionText = (text: string): AbilitySectionTextInterface => {
		return {
			type: 'text',
			text: text,
		};
	};

	static createAbilitySectionField = (data: { name: string; effect: string }): AbilitySectionFieldInterface => {
		return {
			type: 'field',
			name: data.name,
			value: 0,
			repeatable: false,
			effect: data.effect,
		};
	};

	static createAbilitySectionSpend = (data: {
		name?: string;
		effect: string;
		value?: number;
		repeatable?: boolean;
	}): AbilitySectionFieldInterface => {
		return {
			type: 'field',
			name: data.name || 'Spend',
			value: data.value || 1,
			repeatable: data.repeatable || false,
			effect: data.effect,
		};
	};

	static createAbilitySectionRoll = (roll: PowerRollInterface): AbilitySectionRollInterface => {
		return {
			type: 'roll',
			roll: roll,
		};
	};

	static createAbilitySectionPackage = (tag: string): AbilitySectionPackageInterface => {
		return {
			type: 'package',
			tag: tag,
		};
	};

	static createPowerRoll = (data: {
		characteristic?: Characteristic | Characteristic[];
		bonus?: number;
		tier1: string;
		tier2: string;
		tier3: string;
		crit?: string;
	}): PowerRollInterface => {
		return {
			characteristic: data.characteristic
				? Array.isArray(data.characteristic)
					? data.characteristic
					: [data.characteristic]
				: [],
			bonus: data.bonus ?? 0,
			tier1: data.tier1,
			tier2: data.tier2,
			tier3: data.tier3,
		};
	};

	static createTip = (data: { content: string; image: string; isNew?: boolean }): TipInterface => {
		return {
			content: data.content,
			image: data.image,
			isNew: data.isNew || false,
		};
	};

	static DamageModifierFactory = new DamageModifierFactory();
	static DistanceFactory = new DistanceFactory();
	static FeatureFactory = new FeatureFactory();
	static AbilityTypeFactory = new AbilityTypeFactory();
}
