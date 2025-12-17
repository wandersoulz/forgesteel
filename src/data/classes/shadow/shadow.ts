import { AbilityDistanceType } from '../../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { Characteristic } from '../../../core/enums/characteristic';
import { ElementFactory } from '../../../core/factory/element-factory';
import { FeatureField } from '../../../core/enums/feature-field';
import { HeroClassInterface } from '../../../core/models/class';
import { PerkList } from '../../../core/enums/perk-list';
import { SkillList } from '../../../core/enums/skill-list';
import { blackAsh } from '../../../data/classes/shadow/black-ash';
import { causticAlchemy } from '../../../data/classes/shadow/caustic-alchemy';
import { harlequinMask } from '../../../data/classes/shadow/harlequin-mask';

export const shadow: HeroClassInterface = {
	id: 'class-shadow',
	name: 'Shadow',
	description: `
Subtlety is your art, the tip of the blade your brush. You studied at a secret college, specializing in alchemy, illusion, or shadow-magics. Your training and knowledge place you among the elite ranks of assassins, spies, and commandos. But more potent than any weapon or sorcery is your insight into your enemies’ weaknesses.

As a shadow, you possess abilities that deal significant damage, enable you to move swiftly across the battlefield and evade hazards, and allow you to fade from notice even in the midstof the most intense combat encounters. You also possess more skills than any other hero.`,
	type: 'standard',
	subclassName: 'Shadow College',
	subclassCount: 1,
	primaryCharacteristicsOptions: [[Characteristic.Agility]],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				ElementFactory.FeatureFactory.createBonus({
					id: 'shadow-stamina',
					field: FeatureField.Stamina,
					value: 18,
					valuePerLevel: 6,
				}),
				ElementFactory.FeatureFactory.createBonus({
					id: 'shadow-recoveries',
					field: FeatureField.Recoveries,
					value: 8,
				}),
				ElementFactory.FeatureFactory.createHeroicResource({
					id: 'shadow-resource',
					name: 'Insight',
					gains: [
						{
							tag: 'start',
							trigger: 'Start of your turn',
							value: '1d3',
						},
						{
							tag: 'deal-damage',
							trigger:
								'The first time each combat round that you deal damage incorporating 1 or more surges',
							value: '1',
						},
					],
					details: `
When you use a heroic ability that has a power roll, that ability costs 1 less insight if you have an edge or double edge on it.

If the ability has multiple targets, the cost is reduced even if the ability has an edge or double edge against only one target.`,
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'shadow-1-1',
					count: 2,
					selected: ['Hide', 'Sneak'],
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'shadow-1-3',
					options: ['Criminal Underworld'],
					listOptions: [SkillList.Exploration, SkillList.Interpersonal, SkillList.Intrigue],
					count: 5,
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'shadow-1-5',
						name: 'Hesitation Is Weakness',
						description: 'Keep up the attack. Never give them a moment’s grace.',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'Another hero ends their turn. That hero can’t have used this ability to start their turn.',
							{ free: true }
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText('You take your turn after the triggering hero.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createKitChoice({
					id: 'shadow-1-5.5',
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'shadow-1-6',
					cost: 'signature',
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'shadow-1-7',
					cost: 3,
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'shadow-1-8',
					cost: 5,
				}),
			],
		},
		{
			level: 2,
			features: [
				ElementFactory.FeatureFactory.createPerk({
					id: 'shadow-2-1',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue],
				}),
			],
		},
		{
			level: 3,
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'shadow-3-1',
						name: 'Careful Observation',
						description: 'A moment of focus leaves a foe firmly in your sights.',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSpecial('20 squares')],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'As long as you remain within distance of the target, maintain line of effect to them, and strike no other creature first, you gain a surge and an edge on the next strike you make against the assessed creature.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'shadow-3-2',
					cost: 7,
				}),
			],
		},
		{
			level: 4,
			features: [
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'shadow-4-1a',
					name: 'Characteristic Increase: Agility',
					description: 'Your Agility score increases to 3',
					characteristic: Characteristic.Agility,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createChoice({
					id: 'shadow-4-1b',
					name: 'Characteristic Increase: Additional',
					description:
						'Additionally, you can increase one of your characteristic scores by 1, to a maximum of 3.',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'shadow-4-1b-1',
								characteristic: Characteristic.Might,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'shadow-4-1b-2',
								characteristic: Characteristic.Reason,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'shadow-4-1b-3',
								characteristic: Characteristic.Intuition,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'shadow-4-1b-4',
								characteristic: Characteristic.Presence,
								value: 1,
							}),
							value: 1,
						},
					],
				}),
				ElementFactory.FeatureFactory.create({
					id: 'shadow-4-2',
					name: 'Keep It Down',
					description:
						'While conversing with any creature you share a language with, you can decide whether anyone else can perceive what you’re conveying, even while yelling.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'shadow-4-3a',
					name: 'Night Watch',
					description:
						'Your sense for stealth shows those around you how to evade notice. While you are hidden, enemies take a bane on tests made to search for you or other hidden creatures within 10 squares of you.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'shadow-4-3b',
						name: 'Night Watch',
						description: 'A steely dagger from out of the blue knocks another weapon off course.',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The target takes damage from another creature’s ability while you are hidden.'
						),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target takes half the damage. You remain hidden.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createPerk({
					id: 'shadow-4-4',
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'shadow-4-5',
					listOptions: [
						SkillList.Crafting,
						SkillList.Exploration,
						SkillList.Interpersonal,
						SkillList.Intrigue,
						SkillList.Lore,
					],
					count: 1,
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'shadow-4-6',
					name: 'Surge of Insight',
					tag: 'deal-damage 2',
					trigger: 'The first time each combat round that you deal damage incorporating 1 or more surges',
					value: '2',
					replacesTags: ['deal-damage'],
				}),
			],
		},
		{
			level: 5,
			features: [
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'shadow-5-1',
					cost: 9,
				}),
			],
		},
		{
			level: 6,
			features: [
				ElementFactory.FeatureFactory.createPerk({
					id: 'shadow-6-1',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'shadow-6-2',
						name: 'Umbral Form',
						description: 'You lose control of yourself, becoming a shadow creature dripping with ash.',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'This transformation lasts until the end of the encounter, until you are dying, or after 1 uninterrupted hour of quiet focus outside of combat. You gain the following effects while in this form:'
							),
							ElementFactory.createAbilitySectionText(
								'- You can automatically climb at full speed while moving.'
							),
							ElementFactory.createAbilitySectionText(
								'- Enemies’ spaces don’t count as difficult terrain for you. An enemy takes corruption damage equal to your Agility score the first time you pass through their space on a turn.'
							),
							ElementFactory.createAbilitySectionText(
								'- If you end your turn with cover or concealment from another creature, you are automatically hidden from that creature.'
							),
							ElementFactory.createAbilitySectionText(
								'- You gain 1 surge at the start of each of your turns.'
							),
							ElementFactory.createAbilitySectionText(
								'- You have corruption immunity equal to 5 + your level.'
							),
							ElementFactory.createAbilitySectionText('- Creatures gain an edge on strikes against you.'),
							ElementFactory.createAbilitySectionText(
								'- You take a bane on Presence tests made to interact with other creatures.'
							),
						],
					}),
				}),
			],
		},
		{
			level: 7,
			features: [
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'shadow-7-1a',
					characteristic: Characteristic.Might,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'shadow-7-1b',
					characteristic: Characteristic.Agility,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'shadow-7-1c',
					characteristic: Characteristic.Reason,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'shadow-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'shadow-7-1e',
					characteristic: Characteristic.Presence,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'shadow-7-2',
					name: 'Keen Insight',
					tag: 'start 2',
					trigger: 'Start of your turn',
					value: '1d3 + 1',
					replacesTags: ['start'],
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'shadow-7-3',
					listOptions: [
						SkillList.Crafting,
						SkillList.Exploration,
						SkillList.Interpersonal,
						SkillList.Intrigue,
						SkillList.Lore,
					],
				}),
				ElementFactory.FeatureFactory.create({
					id: 'shadow-7-4',
					name: 'Careful Observation Improvement',
					description:
						'You can target two creatures simultaneously with your Careful Observation ability, observing both simultaneously. Making a strike against one target doesn’t end your observation of the other target.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'shadow-7-5',
					name: 'Ventriloquist',
					description:
						'Whenever you communicate, you can throw your voice so that it seems to originate from a creature or object within 10 squares. If you are hidden, talking this way doesn’t cause you to be revealed.',
				}),
			],
		},
		{
			level: 8,
			features: [
				ElementFactory.FeatureFactory.createPerk({
					id: 'shadow-8-1',
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'shadow-8-2',
					cost: 11,
				}),
			],
		},
		{
			level: 9,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'shadow-9-1',
					name: 'Gloom Squad',
					description: `
At the start of each of your turns, you can forgo gaining insight to create 1d6 clones of yourself in unoccupied adjacent spaces. A clone acts on your turn and uses your statistics, except they have 1 Stamina. They are affected by any conditions and effects on you, and last until the start of your next turn. A clone doesn’t have insight and can’t use the Careful Observation ability, the Umbral Form feature, or any triggered actions. On their turn, a clone has a move action, a maneuver, and a main action that they can use only to make a free strike. While making a free strike, a clone must choose targets that you or another clone aren’t also striking.

Outside of combat, you can have one clone active for every 2 Victories you have. If a clone is destroyed, you must wait 1 hour before creating another one.`,
				}),
			],
		},
		{
			level: 10,
			features: [
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'shadow-10-1a',
					name: 'Characteristic Increase: Agility',
					description: 'Your Agility score increases to 5',
					characteristic: Characteristic.Agility,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createChoice({
					id: 'shadow-10-1b',
					name: 'Characteristic Increase: Additional',
					description:
						'Additionally, you can increase one of your characteristic scores by 1, to a maximum of 5.',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'shadow-10-1b-1',
								characteristic: Characteristic.Might,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'shadow-10-1b-2',
								characteristic: Characteristic.Reason,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'shadow-10-1b-3',
								characteristic: Characteristic.Intuition,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'shadow-10-1b-4',
								characteristic: Characteristic.Presence,
								value: 1,
							}),
							value: 1,
						},
					],
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'shadow-10-2',
					name: 'Death Pool',
					tag: 'deal-damage 3',
					trigger: 'The first time each combat round that you deal damage incorporating 1 or more surges',
					value: '3',
					replacesTags: ['deal-damage', 'deal-damage 2'],
				}),
				ElementFactory.FeatureFactory.createPerk({
					id: 'shadow-10-3',
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'shadow-10-4',
					listOptions: [
						SkillList.Crafting,
						SkillList.Exploration,
						SkillList.Interpersonal,
						SkillList.Intrigue,
						SkillList.Lore,
					],
				}),
				ElementFactory.FeatureFactory.create({
					id: 'shadow-10-5',
					name: 'Careful Observation Improvement',
					description: 'You can target three creatures simultaneously with your Careful Observation ability.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'shadow-10-6',
					name: 'Improved Umbral Form',
					description: `
You gain full control over the shadow creature you become with your Umbral Form feature, and you can end the transformation at will (no action required). Additionally, you are always wreathed in darkness that grants you concealment while in this form, and creatures no longer gain an edge on strikes against you.

While you are in your umbral form, you can spend 1 uninterrupted minute concentrating on a location where you’ve been before. At the end of that minute, you and each willing creature of your choice within 10 squares of you can teleport to unoccupied spaces of your choice within that location. Each creature who teleports this way is invisible for 1 hour or until they use an ability.`,
				}),
				ElementFactory.FeatureFactory.createHeroicResource({
					id: 'shadow-10-7',
					name: 'Subterfuge',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Finish a respite',
							value: 'XP gained',
						},
					],
					description: `
You can spend subterfuge on your abilities as if it were insight. Additionally, you can spend subterfuge to take additional maneuvers on your turn. You can use one maneuver for each subterfuge you spend.

Subterfuge remains until you spend it.`,
				}),
			],
		},
	],
	abilities: [
		ElementFactory.createAbility({
			id: 'shadow-ability-1',
			name: 'Gasping in Pain',
			description: 'Your precise strikes let your allies take advantage of a target’s agony.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 'signature',
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + A damage',
						tier2: '5 + A damage',
						tier3: '8 + A damage; I < [strong], prone',
					})
				),
				ElementFactory.createAbilitySectionText(
					'One ally of your choice within 5 squares of the target gains 1 surge.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-2',
			name: 'I Work Better Alone',
			description: 'It’s better, just you and me. Isn’t it?',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 'signature',
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + A damage',
						tier2: '6 + A damage',
						tier3: '9 + A damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'If the target has none of your allies adjacent to them, you gain 1 surge before making the power roll.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-3',
			name: 'Teamwork Has Its Place',
			description: 'You attack an enemy as an ally exposes their weakness.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature or object',
			cost: 'signature',
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + A damage',
						tier2: '6 + A damage',
						tier3: '9 + A damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'If any ally is adjacent to the target, you gain 1 surge before making the power roll.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-4',
			name: 'You Were Watching The Wrong One',
			description: 'They can’t watch both of you at once.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 'signature',
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 + A damage',
						tier2: '5 + A damage',
						tier3: '8 + A damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'As long as you have one or more allies within 5 squares of the target, you gain 1 surge. If you are flanking the target when you use this ability, choose one ally who is flanking with you. That ally also gains 1 surge.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-5',
			name: 'Disorienting Strike',
			description: 'Your attack leaves them reeling, allowing you to follow up.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '4 + A damage; slide 2',
						tier2: '6 + A damage; slide 3',
						tier3: '10 + A damage; slide 5',
					})
				),
				ElementFactory.createAbilitySectionText(
					'You can shift into any square the target leaves when you slide them.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-6',
			name: 'Eviscerate',
			description: 'You leave your foe bleeding out after a devastating attack.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '4 + A damage; A < [weak], bleeding (save ends)',
						tier2: '6 + A damage; A < [average], bleeding (save ends)',
						tier3: '10 + A damage; A < [strong], bleeding (save ends)',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-7',
			name: 'Get In Get Out',
			description: 'Move unexpectedly, strike fast, and be gone!',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '5 + A damage',
						tier2: '8 + A damage',
						tier3: '11 + A damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'You can shift up to your speed, dividing that movement before or after your strike as desired.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-8',
			name: 'Two Throats At Once',
			description: 'A bargain.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'Two creatures or objects',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '4 damage',
						tier2: '6 damage',
						tier3: '10 damage',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-9',
			name: 'Coup de Grâce',
			description: 'Your blade might be the last thing they see.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '2d6 + 7 + A damage',
						tier2: '2d6 + 11 + A damage',
						tier3: '2d6 + 16 + A damage',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-10',
			name: 'One Hundred Throats',
			description: 'As you move across the battlefield, every foe within reach feels your wrath.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionText(
					'You shift up to your speed and make one power roll that targets up to three enemies who came adjacent to you during the move.'
				),
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '3 damage',
						tier2: '6 damage',
						tier3: '9 damage',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-11',
			name: 'Setup',
			description: 'Your friends will thank you.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '6 + A damage; R < [weak], the target has damage weakness 5 (save ends)',
						tier2: '9 + A damage; R < [average], the target has damage weakness 5 (save ends)',
						tier3: '13 + A damage; R < [strong], the target has damage weakness 5 (save ends)',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-12',
			name: 'Shadowstrike',
			description: 'They have no idea what the college taught you.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 5,
			sections: [ElementFactory.createAbilitySectionText('You use a strike signature ability twice.')],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-13',
			name: 'Dancer',
			description: 'You enter a flow state that makes you nearly impossible to pin down.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Until the end of the encounter, whenever an enemy moves or is force moved adjacent to you or damages you, you can take the Disengage move action as a free triggered action.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-14',
			name: 'Misdirecting Strike',
			description: 'Why are you looking at ME?!',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '9 + A damage',
						tier2: '13 + A damage',
						tier3: '18 + A damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'The target is taunted by a willing ally within 5 squares of you until the end of the target’s next turn.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-15',
			name: 'Pinning Shot',
			description: 'One missile - placed well and placed hard.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '8 + A damage; A < [weak], restrained (save ends)',
						tier2: '12 + A damage; A < [average], restrained (save ends)',
						tier3: '16 + A damage; A < [strong], restrained (save ends)',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-16',
			name: 'Staggering Blow',
			description: 'There’s no recovering from this.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '7 + A damage; M < [weak], slowed (save ends)',
						tier2: '11 + A damage; M < [average], prone and can’t stand (save ends)',
						tier3: '16 + A damage; M < [strong], prone and can’t stand (save ends)',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-17',
			name: 'Blackout',
			description: 'You cause a plume of shadow to erupt from your eyes and create a cloud of darkness.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 })],
			target: 'Self',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionText(
					'A black cloud fills the area until the end of your next turn, granting you and your allies concealment against enemies. While you are in the area, whenever an enemy ends their turn in the area, you can use a free triggered action to shift to a new location within the area and make a free strike against them.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-18',
			name: 'Into the Shadows',
			description: 'You sweep your foe off their feet and plunge them into absolute darkness.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature or object',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionText(
					'You and the target are removed from the encounter map until the start of your next turn. You reappear in the spaces you left or the nearest unoccupied spaces. Make a power roll upon your return.'
				),
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '8 + A corruption damage',
						tier2: '13 + A corruption damage',
						tier3: '17 + A corruption damage',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-19',
			name: 'Shadowfall',
			description: 'You vanish. They fall. You reappear.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
			distance: [
				ElementFactory.DistanceFactory.create({
					type: AbilityDistanceType.Line,
					value: 10,
					value2: 1,
					within: 1,
				}),
			],
			target: 'Each enemy in the area',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '10 damage',
						tier2: '14 damage',
						tier3: '20 damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'You disappear before making the power roll. After the power roll is resolved, you appear in the first unoccupied space at the far end of the line.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-20',
			name: 'You Talk Too Much',
			description: 'Silence is a virtue. A knife pinning their mouth shut is the next best thing.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '10 + A damage; P < [weak], dazed (save ends)',
						tier2: '15 + A damage; P < [average], dazed (save ends)',
						tier3: '21 + A damage; P < [strong], dazed (save ends)',
					})
				),
				ElementFactory.createAbilitySectionText(
					'The target can’t communicate with anyone until the end of the encounter.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-21',
			name: 'Assassinate',
			description: 'A practiced attack will instantly kill an already weakened foe.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature or object',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '12 + A damage',
						tier2: '18 + A damage',
						tier3: '24 + A damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'A target who is not a minion, leader, or solo creature and who is winded after taking this damage is reduced to 0 Stamina.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-22',
			name: 'Shadowgrasp',
			description:
				'The shadows around you give way, allowing the shadow creature within you to grasp at your foes.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
			distance: [ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 })],
			target: 'Each enemy in the area',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '11 corruption damage; A < [weak] , restrained (save ends)',
						tier2: '16 corruption damage; A < [average] , restrained (save ends)',
						tier3: '21 corruption damage; A < [strong] , restrained (save ends)',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-23',
			name: 'Speed of Shadows',
			description: 'You make multiple strikes against a foe before they even notice they’re dead.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Magic],
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionText(
					'You can use a strike signature ability four times, use a strike signature ability that gains an edge three times, or use a strike signature ability that has a double edge twice. You can shift up to 2 squares between each use.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'shadow-ability-24',
			name: 'They Always Line Up',
			description: 'You fire a projectile so fast that it passes through a line of foes, hamstringing them.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
			distance: [
				ElementFactory.DistanceFactory.create({
					type: AbilityDistanceType.Line,
					value: 5,
					value2: 1,
					within: 5,
				}),
			],
			target: 'Each enemy in the area',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Agility],
						tier1: '12 damage; M < [weak] , slowed (save ends)',
						tier2: '18 damage; M < [average] , slowed (save ends)',
						tier3: '24 damage; M < [strong] , slowed (save ends)',
					})
				),
			],
		}),
	],
	subclasses: [blackAsh, causticAlchemy, harlequinMask],
	level: 1,
	characteristics: [],
};
