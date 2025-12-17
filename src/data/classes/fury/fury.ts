import { AbilityDistanceType } from '../../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { Characteristic } from '../../../core/enums/characteristic';
import { ElementFactory } from '../../../core/factory/element-factory';
import { FeatureField } from '../../../core/enums/feature-field';
import { HeroClassInterface } from '../../../core/models/class';
import { PerkList } from '../../../core/enums/perk-list';
import { SkillList } from '../../../core/enums/skill-list';
import { berserker } from '../../../data/classes/fury/berserker';
import { reaver } from '../../../data/classes/fury/reaver';
import { stormwight } from '../../../data/classes/fury/stormwight';

export const fury: HeroClassInterface = {
	id: 'class-fury',
	name: 'Fury',
	description: `
You do not temper the heat of battle within you. You unleash it! Your experience in the wild taught you the secrets of predators, and now, like the raptor, the panther, the wolf, you channel unfettered anger into martial prowess. Primordial Chaos is your ally. Let others use finesse to clean up the wreckage left in your wake.

As a fury, you devastate foes with overwhelming might, hurl yourself and enemies around the battlefield, and grow stronger as your ferocity increases. Nature has no concept of fairness — and neither do you..`,
	type: 'standard',
	subclassName: 'Primordial Aspect',
	subclassCount: 1,
	primaryCharacteristicsOptions: [[Characteristic.Might, Characteristic.Agility]],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				ElementFactory.FeatureFactory.createBonus({
					id: 'fury-stamina',
					field: FeatureField.Stamina,
					value: 21,
					valuePerLevel: 9,
				}),
				ElementFactory.FeatureFactory.createBonus({
					id: 'fury-recoveries',
					field: FeatureField.Recoveries,
					value: 10,
				}),
				ElementFactory.FeatureFactory.createHeroicResource({
					id: 'fury-resource',
					name: 'Ferocity',
					gains: [
						{
							tag: 'start',
							trigger: 'Start of your turn',
							value: '1d3',
						},
						{
							tag: 'take-damage',
							trigger: 'The first time each combat round that you take damage',
							value: '1',
						},
						{
							tag: 'winded',
							trigger: 'The first time you become winded or are dying in an encounter',
							value: '1d3',
						},
					],
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'fury-1-1',
					selected: ['Nature'],
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'fury-1-2',
					listOptions: [SkillList.Exploration, SkillList.Intrigue],
					count: 2,
				}),
				ElementFactory.FeatureFactory.create({
					id: 'fury-1-4',
					name: 'Mighty Leaps',
					description: 'You can’t obtain lower than a tier 2 outcome on any Might test made to jump.',
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'fury-1-5',
					cost: 'signature',
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'fury-1-6',
					cost: 3,
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'fury-1-7',
					cost: 5,
				}),
			],
		},
		{
			level: 2,
			features: [
				ElementFactory.FeatureFactory.createPerk({
					id: 'fury-2-1',
					lists: [PerkList.Crafting, PerkList.Exploration, PerkList.Intrigue],
				}),
			],
		},
		{
			level: 3,
			features: [
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'fury-3-1',
					cost: 7,
				}),
			],
		},
		{
			level: 4,
			features: [
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-4-1a',
					characteristic: Characteristic.Might,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-4-1b',
					characteristic: Characteristic.Agility,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'fury-4-2',
					name: 'Damaging Ferocity',
					tag: 'take-damage 2',
					trigger: 'The first time each combat round that you take damage',
					value: '2',
					replacesTags: ['take-damage'],
				}),
				ElementFactory.FeatureFactory.createPerk({
					id: 'fury-4-3',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'fury-4-4',
					name: 'Primordial Attunement',
					description:
						'As your ferocity manifests elemental forces created by the Primordial Chaos, you are aware of how elemental power interacts with those around you. You automatically sense whether any creature within 10 squares has damage immunity or damage weakness to acid, cold, corruption, fire, lightning, poison, or sonic damage, learning whether they have immunity or weakness, the value of that immunity or weakness, and the specific damage type. Additionally, you automatically sense any source of one of those damage types within 10 squares, such as a fire or a source of elemental power.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'fury-4-5',
					name: 'Primordial Strike',
					description:
						'You can manifest your ferocity directly as an elemental force created by the Primordial Chaos. As part of any strike, you can spend 1 ferocity to gain 1 surge that must be used for that strike. The extra damage dealt by the surge can be acid, cold, corruption, fire, lightning, poison, or sonic (your choice).',
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'fury-4-6',
				}),
			],
		},
		{
			level: 5,
			features: [
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'fury-5-1',
					cost: 9,
				}),
			],
		},
		{
			level: 6,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'fury-6-1',
					name: 'Marauder of the Primordial Chaos',
					description: `
As your connection to the power of the Primordial Chaos grows ever stronger, you automatically sense any elemental creatures or magic sources of elemental power, such as a lava pool or a lake overlapping with Quintessence, within 1 mile of you.

Additionally, you can speak with elemental creatures, and when you are in a negotiation with an elemental, you treat your Renown as 1 higher than usual. This stacks with the increase to your effective Renown provided by the Nature’s Knight aspect feature (see 3rd-Level Features). When any elemental first becomes aware of you in combat, if they have P < [average], they are frightened of you (save ends).`,
				}),
				ElementFactory.FeatureFactory.create({
					id: 'fury-6-2',
					name: 'Primordial Portal',
					description: `
As a main action, you can touch a magic source of elemental power and use it to create a portal to Quintessence. You can then use a main action to teleport yourself and any willing creatures within 10 squares of you through the portal and onto a safe island in Quintessence, or to teleport back again. You can maintain a number of portals equal to your Might score, each leading to the same safe island in Quintessence. If a portal in your network is destroyed, it is no longer part of the network. You can remove a portal from your network no matter your distance from it, including across different worlds (no action required).

(Exploring Quintessence is possible from your island, but continued safety is not guaranteed.)`,
				}),
				ElementFactory.FeatureFactory.createPerk({
					id: 'fury-6-3',
					lists: [PerkList.Crafting, PerkList.Exploration, PerkList.Intrigue],
				}),
			],
		},
		{
			level: 7,
			features: [
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-7-1a',
					characteristic: Characteristic.Might,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-7-1b',
					characteristic: Characteristic.Agility,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-7-1c',
					characteristic: Characteristic.Reason,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-7-1e',
					characteristic: Characteristic.Presence,
					value: 1,
				}),
				ElementFactory.FeatureFactory.create({
					id: 'fury-7-2',
					name: 'Elemental Form',
					description: `
You exhibit ever-stronger signs of how the force of the Primordial Chaos flows within you. Whenever you show strong emotion or increase your ferocity, elemental motes attuned to your mood flit around you, and your skin changes in appearance to reflect an element of your choice.

Additionally, if you are a berserker or reaver, you have immunity to acid, cold, corruption, fire, lightning, poison, and sonic damage equal to your Might score. If you are a stormwight, you have immunity to the damage type of your Primordial Storm feature equal to twice your Might score.`,
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'fury-7-3',
					name: 'Greater Ferocity',
					tag: 'start 2',
					trigger: 'Start of your turn',
					value: '1d3 + 1',
					replacesTags: ['start'],
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'fury-7-4',
				}),
			],
		},
		{
			level: 8,
			features: [
				ElementFactory.FeatureFactory.createPerk({
					id: 'fury-8-1',
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'fury-8-2',
					cost: 11,
				}),
			],
		},
		{
			level: 9,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'fury-9-1',
					name: 'Harbinger of the Primordial Chaos',
					description:
						'You can create a temporary source of elemental power as a respite activity. This source of elemental power lasts 24 hours after creation, and can be used to create a portal to Quintessence with your Primordial Portal feature. If you do so, the source of elemental power lasts as long as the portal is maintained in your network.',
				}),
			],
		},
		{
			level: 10,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'fury-10-1',
					name: 'Chaos Incarnate',
					description: `
Your mastery of elemental forces protects and emboldens you. If you are a berserker or reaver, you have immunity to acid, cold, corruption, fire, lightning, poison, and sonic damage equal to twice your Might score. If you are a stormwight, your damage immunity from your Primordial Storm feature (see Stormwight Kits) increases to three times your Might score.

When any elemental or any other creature whose abilities deal acid, cold, corruption, fire, lightning, poison, or sonic damage first becomes aware of you in combat, if they have P < [strong], they are frightened of you (save ends).

Additionally, when you use Primordial Strike, you can spend up to 3 ferocity, gaining 1 surge per ferocity spent to use for that strike.`,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-10-2a',
					characteristic: Characteristic.Might,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'fury-10-2b',
					characteristic: Characteristic.Agility,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createPerk({
					id: 'fury-10-3',
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'fury-10-4',
					name: 'Primordial Ferocity',
					tag: 'take-damage 3',
					trigger: 'The first time each combat round that you take damage',
					value: '3',
					replacesTags: ['take-damage', 'take-damage 2'],
				}),
				ElementFactory.FeatureFactory.createHeroicResource({
					id: 'fury-10-5',
					name: 'Primordial Power',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Finish a respite',
							value: 'XP gained',
						},
					],
					description: `
You can spend any amount of primordial power as a free maneuver, ending one effect on you for each primordial power spent.

You can also spend 3 primordial power to create a portal to Quintessence without needing a source of elemental power.

Primordial power remains until you spend it.`,
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'fury-10-6',
				}),
			],
		},
	],
	abilities: [
		ElementFactory.createAbility({
			id: 'fury-ability-1',
			name: 'Brutal Slam',
			description: 'The heavy impact of your weapon attacks drives your foes ever back.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature or object',
			cost: 'signature',
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + M damage; push 1',
						tier2: '6 + M damage; push 2',
						tier3: '9 + M damage; push 4',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-2',
			name: 'Hit And Run',
			description: 'Staying in constant motion helps you slip out of reach after a brutal assault.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature or object',
			cost: 'signature',
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '2 + M damage',
						tier2: '5 + M damage',
						tier3: '7 + M damage; A < [strong], slowed (save ends)',
					})
				),
				ElementFactory.createAbilitySectionText('You can shift 1 square.'),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-3',
			name: 'Impaled!',
			description: 'You skewer your enemy like a boar upon a spit.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature of your size or smaller',
			cost: 'signature',
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '2 + M damage; M < [weak], grabbed',
						tier2: '5 + M damage; M < [average], grabbed',
						tier3: '7 + M damage; M < [strong], grabbed',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-4',
			name: 'To the Death!',
			description: 'Your reckless assault leaves you tactically vulnerable.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature or object',
			cost: 'signature',
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + M damage',
						tier2: '6 + M damage',
						tier3: '9 + M damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'You gain 2 surges, and the target can make an opportunity attack against you as a free triggered action.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-5',
			name: 'Back!',
			description: 'You hew about you with your mighty weapon, hurling enemies backward.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 })],
			target: 'Each enemy in the area',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '5 damage',
						tier2: '8 damage; push 1',
						tier3: '11 damage; push 3',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-6',
			name: 'Out of the Way!',
			description: 'Your enemies will clear your path — whether they want to or not.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + M damage; slide 2',
						tier2: '5 + M damage; slide 3',
						tier3: '8 + M damage; slide 5',
					})
				),
				ElementFactory.createAbilitySectionText(
					'When you slide the target, you can move into any square they leave. If you take damage from an opportunity attack by moving this way, the target takes the same damage.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-7',
			name: 'Tide of Death',
			description: 'Teach them the folly of lining up for you.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self; see below',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionText(
					'You move up to your speed in a straight line, and enemy squares are not difficult terrain for this movement. You can end this movement in a creature’s space and move them to an adjacent unoccupied space. You make one power roll that targets each enemy whose space you move through.'
				),
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '2 damage',
						tier2: '3 damage',
						tier3: '5 damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'The last target you damage takes extra damage equal to your Might score for each opportunity attack you trigger during your move'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-8',
			name: 'Your Entrails Are Your Extrails!',
			description: 'Hard for them to fight when they’re busy holding in their giblets.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature or object',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + M damage; M < [weak], bleeding (save ends)',
						tier2: '5 + M damage; M < [average], bleeding (save ends)',
						tier3: '8 + M damage; M < [strong], bleeding (save ends)',
					})
				),
				ElementFactory.createAbilitySectionText(
					'While bleeding this way, the target takes damage equal to your Might score at the end of your turns.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-9',
			name: 'Blood for Blood!',
			description: 'See how well they fight after you’ve bled them dry.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature or object',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '4 + M damage; M < [weak], bleeding and weakened (save ends)',
						tier2: '6 + M damage; M < [average], bleeding and weakened (save ends)',
						tier3: '10 + M damage; M < [strong], bleeding and weakened (save ends)',
					})
				),
				ElementFactory.createAbilitySectionText(
					'You can deal 1d6 damage to yourself to deal an extra 1d6 damage to the target.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-10',
			name: 'Make Peace With Your God!',
			description: 'Anger is an energy.',
			type: ElementFactory.AbilityTypeFactory.createManeuver({ free: true }),
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionText(
					'You gain 1 surge, and the next ability roll you make this turn automatically obtains a tier 3 outcome.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-11',
			name: 'Thunder Roar',
			description: 'You unleash a howl that hurls your enemies back.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [
				ElementFactory.DistanceFactory.create({
					type: AbilityDistanceType.Line,
					value: 5,
					value2: 1,
					within: 1,
				}),
			],
			target: 'Each enemy in the area',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '6 damage; push 2',
						tier2: '9 damage; push 4',
						tier3: '13 damage; push 6',
					})
				),
				ElementFactory.createAbilitySectionText(
					'The targets are force moved one at a time, starting with the target nearest to you, and can be pushed into other targets in the same line.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-12',
			name: 'To the Uttermost End',
			description: 'You gut your life force to ensure a foe’s demise.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '7 + M damage',
						tier2: '11 + M damage',
						tier3: '16 + M damage',
					})
				),
				ElementFactory.createAbilitySectionSpend({
					repeatable: true,
					effect: 'While you are winded, this ability deals an extra 1d6 damage for each ferocity spent. While you are dying, it deals an extra 1d10 damage for each ferocity spent. In either case, you lose 1d6 Stamina after making this strike.',
				}),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-13',
			name: 'Demon Unleashed',
			description: 'Foes tremble at the sight of you.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Until the end of the encounter or until you are dying, each enemy who starts their turn adjacent to you and has P < [strong] is frightened until the end of their turn.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-14',
			name: 'Face the Storm!',
			description: 'Shocked in the face of your naked brutality, your enemy’s instincts take over.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Until the end of the encounter or until you are dying, each creature you make a melee strike against who has P < [average] is taunted until the end of their next turn. Additionally, when you use an ability that deals rolled damage against any enemy taunted by you, the ability deals extra damage equal to twice your Might score and increases its potency by 1.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-15',
			name: 'Steelbreaker',
			description: 'See how useless their weapons are!',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 7,
			sections: [ElementFactory.createAbilitySectionText('You gain 20 temporary Stamina.')],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-16',
			name: 'You Are Already Dead',
			description: 'Slash. Walk away.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionText(
					'If the target is not a leader or solo creature, they are reduced to 0 Stamina at the end of their next turn. If the target is a leader or solo creature, you gain 3 surges and can make a melee free strike against them.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-17',
			name: 'Debilitating Strike',
			description: 'You need just one blow to sabotage your target.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '10 + M damage; M < [weak], slowed (save ends)',
						tier2: '14 + M damage; M < [average], slowed (save ends)',
						tier3: '20 + M damage; M < [strong], slowed (save ends)',
					})
				),
				ElementFactory.createAbilitySectionText(
					'While slowed this way, the target takes 1 damage for every square they move, including from forced movement.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-18',
			name: 'My Turn!',
			description: 'You quickly strike back at a foe.',
			type: ElementFactory.AbilityTypeFactory.createTrigger(
				'A creature causes you to be winded or dying, or damages you while you are winded or dying.'
			),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'The triggering creature',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '6 + M damage;',
						tier2: '9 + M damage;',
						tier3: '13 + M damage;',
					})
				),
				ElementFactory.createAbilitySectionText('You can spend a Recovery.'),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-19',
			name: 'Rebounding Storm',
			description: 'You knock around enemies like playthings.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'Two creatures or objects',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '9 + M damage; push 3',
						tier2: '14 + M damage; push 5',
						tier3: '19 + M damage; push 7',
					})
				),
				ElementFactory.createAbilitySectionText(
					'When a target would end this forced movement by colliding with a creature or object, they take damage as usual, then are pushed the remaining distance away from the creature or object in the direction they came from. As long as forced movement remains, this effect continues if the target collides with another creature or object.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-20',
			name: 'To Stone!',
			description: 'You channel the Primordial Chaos into blows that petrify your foe … literally.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '9 + M damage; M < [weak], slowed (save ends)',
						tier2: '13 + M damage; M < [average], slowed (save ends)',
						tier3: '18 + M damage; M < [strong], restrained (save ends)',
					})
				),
				ElementFactory.createAbilitySectionText(
					'While the target is slowed this way, any other effect that would make the target slowed instead makes them restrained by this ability. Additionally, a creature who fails the saving throw while restrained this way is petrified until they are given a supernatural cure or you choose to reverse the effect (no action required).'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-21',
			name: 'Elemental Ferocity',
			description: 'Your primordial energy makes for instant retribution.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionText(
					'You gain 10 temporary Stamina. Additionally, choose acid, cold, corruption, fire, lightning, poison, or sonic damage. Until the end of the encounter or until you are dying, whenever an enemy damages you, they take 10 damage of the chosen type. If this damage reduces the enemy to 0 Stamina, you gain 10 temporary Stamina.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-22',
			name: 'Overkill',
			description: 'You strike so no damage is wasted.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '6 + M damage',
						tier2: '10 + M damage',
						tier3: '14 + M damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'If the target is a minion or is winded but isn’t a leader or solo creature, they are reduced to 0 Stamina before this ability’s damage is dealt. If the target is killed by this damage, you can deal any damage over what was required to kill them to another creature within 5 squares of the target.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-23',
			name: 'Primordial Rage',
			description: 'Your ferocity manifests into primordial power.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Magic],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Choose acid, cold, corruption, fire, lightning, poison, or sonic damage. Until the end of the encounter or until you are dying, you can choose one target of any ability you use, with that target taking an extra 15 damage of the chosen type. Additionally, whenever you gain ferocity from taking damage, the source of the damage takes 5 damage of the chosen type.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'fury-ability-24',
			name: 'Relentless Death',
			description: 'You won’t escape your fate.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self; see below',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionText(
					'You shift up to your speed. Each enemy you move adjacent to during this movement takes damage equal to twice your Might score. Then make one power roll that targets each enemy you move adjacent to during this shift. You gain 1 ferocity for each target who dies as a result of this ability (maximum 11 ferocity).'
				),
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: 'Any target whose Stamina is equal to or less than 8 dies.',
						tier2: 'Any target whose Stamina is equal to or less than 11 dies.',
						tier3: 'Any target whose Stamina is equal to or less than 17 dies.',
					})
				),
			],
		}),
	],
	subclasses: [berserker, reaver, stormwight],
	level: 1,
	characteristics: [],
};
