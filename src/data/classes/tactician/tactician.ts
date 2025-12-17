import { AbilityDistanceType } from '../../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { Characteristic } from '../../../core/enums/characteristic';
import { ElementFactory } from '../../../core/factory/element-factory';
import { FeatureField } from '../../../core/enums/feature-field';
import { HeroClassInterface } from '../../../core/models/class';
import { PerkList } from '../../../core/enums/perk-list';
import { SkillList } from '../../../core/enums/skill-list';
import { insurgent } from '../../../data/classes/tactician/insurgent';
import { mastermind } from '../../../data/classes/tactician/mastermind';
import { vanguard } from '../../../data/classes/tactician/vanguard';

export const tactician: HeroClassInterface = {
	id: 'class-tactician',
	name: 'Tactician',
	description: `
Strategist. Defender. Leader. With sword in hand, you lead allies into the maw of battle, barking out commands that inspire your fellow heroes to move faster and strike more precisely. All the while, you stand between your compatriots and death, taunting the followers of evil to best you if they can.

As a tactician, you have abilities that heal your allies and grant them increased damage, movement, and attacks.`,
	type: 'standard',
	subclassName: 'Tactical Doctrine',
	subclassCount: 1,
	primaryCharacteristicsOptions: [[Characteristic.Might, Characteristic.Reason]],
	primaryCharacteristics: [],
	featuresByLevel: [
		{
			level: 1,
			features: [
				ElementFactory.FeatureFactory.createBonus({
					id: 'tatician-stamina',
					field: FeatureField.Stamina,
					value: 21,
					valuePerLevel: 9,
				}),
				ElementFactory.FeatureFactory.createBonus({
					id: 'tactician-recoveries',
					field: FeatureField.Recoveries,
					value: 10,
				}),
				ElementFactory.FeatureFactory.createHeroicResource({
					id: 'tactician-resource',
					name: 'Focus',
					gains: [
						{
							tag: 'start',
							trigger: 'Start of your turn',
							value: '2',
						},
						{
							tag: 'deal-damage',
							trigger: 'The first time each round that you or an ally damages a creature you have marked',
							value: '1',
						},
						{
							tag: 'ability',
							trigger:
								'The first time in a round that an ally within 10 squares of you uses a heroic ability',
							value: '1',
						},
					],
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'tactician-1-1',
					selected: ['Lead'],
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'tactician-1-2',
					options: [
						'Alertness',
						'Architecture',
						'Blacksmithing',
						'Brag',
						'Culture',
						'Empathize',
						'Fletching',
						'Mechanics',
						'Monsters',
						'Search',
						'Strategy',
					],
					listOptions: [SkillList.Exploration],
					count: 2,
				}),
				ElementFactory.FeatureFactory.createKitChoice({
					id: 'tactician-1-4',
					name: 'Field Arsenal',
					description:
						'You have drilled with a broad array of arms and armor, and have developed techniques to optimize their use. You can use and gain the benefits of two kits, including both their signature abilities. Whenever you would choose or change one kit, you can choose or change your second kit as well.',
					count: 2,
				}),
				ElementFactory.FeatureFactory.createMultiple({
					id: 'tactician-1-5',
					name: 'Mark',
					features: [
						ElementFactory.FeatureFactory.createAbility({
							ability: ElementFactory.createAbility({
								id: 'tactician-1-5a',
								name: 'Mark',
								description:
									'You draw your allies’ attention to a specific foe—with devastating effect.',
								type: ElementFactory.AbilityTypeFactory.createManeuver(),
								keywords: [AbilityKeyword.Ranged],
								distance: [ElementFactory.DistanceFactory.createRanged(10)],
								target: 'One creature',
								sections: [
									ElementFactory.createAbilitySectionText(`
The target is marked by you until the end of the encounter, until you are dying, or until you use this ability again. You can willingly end your mark on a creature (no action required), and if another tactician marks a creature, your mark on that creature ends. When a creature marked by you is reduced to 0 Stamina, you can use a free triggered action to mark a new target within distance.

You can initially mark only one creature using this ability, though other tactician abilities allow you to mark additional creatures at the same time.

While a creature marked by you is within your line of effect, you and allies within your line of effect gain an edge on power rolls made against that creature.`),
									ElementFactory.createAbilitySectionPackage('mark'),
								],
							}),
						}),
						ElementFactory.FeatureFactory.createAbility({
							ability: ElementFactory.createAbility({
								id: 'tactician-1-5b',
								name: 'Mark: Trigger',
								type: ElementFactory.AbilityTypeFactory.createTrigger(
									'You or any ally uses an ability to deal rolled damage to a creature marked by you',
									{ free: true }
								),
								distance: [ElementFactory.DistanceFactory.createSpecial('Special')],
								target: 'Special',
								cost: 1,
								sections: [
									ElementFactory.createAbilitySectionText(`
You gain one of the following benefits:

* The ability deals extra damage equal to twice your Reason score.
* The creature dealing the damage can spend a Recovery.
* The creature dealing the damage can shift up to a number of squares equal to your Reason score.
* If you damage a creature marked by you with a melee ability, the creature is taunted by you until the end of their next turn.

You can’t gain more than one benefit from the same trigger.`),
									ElementFactory.createAbilitySectionPackage('mark'),
								],
							}),
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'tactician-1-6',
						name: '“Strike Now!”',
						description: 'Your foe left an opening. You point this out to an ally!',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target can use a signature ability as a free triggered action.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 5,
								effect: 'You target two allies instead of one.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'tactician-1-7',
					cost: 3,
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'tactician-1-8',
					cost: 5,
				}),
			],
		},
		{
			level: 2,
			features: [
				ElementFactory.FeatureFactory.createPerk({
					id: 'tactician-2-1',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue],
				}),
			],
		},
		{
			level: 3,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'tactician-3-1',
					name: 'Out of Position',
					description:
						'Even before battle begins, your enemies struggle to keep up with your tactics. At the start of an encounter, you can use a free triggered action to use your Mark ability against one enemy you have line of effect to, even if you are surprised. You can then slide the marked target up to 3 squares, ignoring stability. The target can’t be moved in a way that would harm them (such as over a cliff), leave them dying, or result in them suffering a condition or other negative effect.',
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'tactician-3-2',
					cost: 7,
				}),
			],
		},
		{
			level: 4,
			features: [
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-4-1a',
					characteristic: Characteristic.Might,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-4-1b',
					characteristic: Characteristic.Reason,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'tactician-4-2',
					name: 'Focus on Their Weakness',
					tag: 'deal-damage 2',
					trigger: 'The first time each round that you or an ally damages a creature you have marked',
					value: '2',
					replacesTags: ['deal-damage'],
				}),
				ElementFactory.FeatureFactory.create({
					id: 'tactician-4-3',
					name: 'Improved Field Arsenal',
					description:
						'Your expertise with weapons has grown. Whenever you use a signature ability from one of your equipped kits or make a free strike using a weapon from one of your equipped kits, you gain an edge.',
				}),
				ElementFactory.FeatureFactory.createPerk({
					id: 'tactician-4-4',
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'tactician-4-5',
				}),
			],
		},
		{
			level: 5,
			features: [
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'tactician-5-1',
					cost: 9,
				}),
			],
		},
		{
			level: 6,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'tactician-6-1',
					name: 'Master of Arms',
					description:
						'Your expertise with weapons has grown to true mastery. Whenever you use a signature ability from one of your equipped kits or make a free strike using a weapon from one of your equipped kits, you can negate a bane on the power roll or reduce a double bane to a bane.',
				}),
				ElementFactory.FeatureFactory.createPerk({
					id: 'tactician-6-2',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue],
				}),
			],
		},
		{
			level: 7,
			features: [
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-7-1a',
					characteristic: Characteristic.Might,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-7-1b',
					characteristic: Characteristic.Agility,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-7-1c',
					characteristic: Characteristic.Reason,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-7-1d',
					characteristic: Characteristic.Intuition,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-7-1e',
					characteristic: Characteristic.Presence,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'tactician-7-2',
					name: 'Heightened Focus',
					tag: 'start 2',
					trigger: 'Start of your turn',
					value: '3',
					replacesTags: ['start'],
				}),
				ElementFactory.FeatureFactory.create({
					id: 'tactician-7-3',
					name: 'Seize the Initiative',
					description:
						'If you are not surprised when combat begins, your side gets to go first. If an enemy has an ability that allows their side to go first, you roll as usual to determine who goes first.',
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'tactician-7-4',
				}),
			],
		},
		{
			level: 8,
			features: [
				ElementFactory.FeatureFactory.createPerk({
					id: 'tactician-8-1',
				}),
				ElementFactory.FeatureFactory.createClassAbilityChoice({
					id: 'tactician-8-2',
					cost: 11,
				}),
			],
		},
		{
			level: 9,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'tactician-9-1',
					name: 'Grandmaster of Arms',
					description:
						'Your expertise with weapons has grown to true mastery. Whenever you use a signature ability from one of your equipped kits or make a free strike using a weapon from one of your equipped kits, you automatically obtain a tier 3 outcome on the power roll. You can still roll to determine if you score a critical hit.',
				}),
			],
		},
		{
			level: 10,
			features: [
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-10-1a',
					characteristic: Characteristic.Might,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createCharacteristicBonus({
					id: 'tactician-10-1b',
					characteristic: Characteristic.Reason,
					value: 1,
				}),
				ElementFactory.FeatureFactory.createHeroicResource({
					id: 'tactician-10-2',
					name: 'Command',
					type: 'epic',
					gains: [
						{
							tag: '',
							trigger: 'Finish a respite',
							value: 'XP gained',
						},
					],
					description: `
Whenever you or any ally uses an ability to deal rolled damage to a creature marked by you, you can spend 1 command as a free triggered action to increase the power roll outcome for that target by one tier. Whenever an enemy marked by you makes an ability roll, you can spend 1 command as a free triggered action to decrease the power roll outcome by one tier.

Command remains until you spend it.`,
				}),
				ElementFactory.FeatureFactory.createPerk({
					id: 'tactician-10-3',
					name: 'Perk',
					lists: [PerkList.Exploration, PerkList.Interpersonal, PerkList.Intrigue],
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'tactician-10-4',
					name: 'Skill',
				}),
				ElementFactory.FeatureFactory.createHeroicResourceGain({
					id: 'tactician-10-5',
					name: 'True Focus',
					tag: 'start 3',
					trigger: 'Start of your turn',
					value: '4',
					replacesTags: ['start', 'start 2'],
				}),
				ElementFactory.FeatureFactory.create({
					id: 'tactician-10-6',
					name: 'Warmaster',
					description: `
You have mastered the entirety of possible strategies and tactics. Whenever you or any ally makes an ability roll against a target marked by you, the character making the roll can roll three dice and choose which two to use.

Additionally, whenever an ally uses a heroic ability that targets one or more creatures marked by you, they spend 2 fewer of their Heroic Resource on that ability (minimum 1).`,
				}),
			],
		},
	],
	abilities: [
		ElementFactory.createAbility({
			id: 'tactician-ability-1',
			name: 'Battle Cry',
			description: 'You shout a phrase that galvanizes your team.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'Three allies',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Reason],
						tier1: 'Each target gains 1 surge.',
						tier2: 'Each target gains 2 surges.',
						tier3: 'Each target gains 3 surges.',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-2',
			name: 'Concussive Strike',
			description: 'Your precise strike leaves your foe struggling to respond.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature or object',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + M damage; M < [weak], dazed (save ends)',
						tier2: '5 + M damage; M < [average], dazed (save ends)',
						tier3: '8 + M damage; M < [strong], dazed (save ends)',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-3',
			name: 'Inspiring Strike',
			description: 'Your attack gives an ally hope.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature or object',
			cost: 3,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '3 + M damage; you or one ally within 10 squares of you can spend a Recovery',
						tier2: '5 + M damage; you or one ally within 10 squares of you can spend a Recovery',
						tier3: '8 + M damage; you and one ally within 10 squares of you can spend a Recovery, and each of you gains an edge on the next ability roll you make during the encounter',
					})
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-4',
			name: 'Squad! Forward!',
			description: 'On your command, you and your allies force back the enemy line.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'Self and two allies',
			cost: 3,
			sections: [ElementFactory.createAbilitySectionText('Each target can move up to their speed.')],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-5',
			name: 'Hammer And Anvil',
			description: '“Let’s not argue about who’s the hammer and who’s the anvil!',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature or object',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '5 + M damage; one ally within 10 squares of you can use a strike signature ability against the target as a free triggered action',
						tier2: '9 + M damage; one ally within 10 squares of you can use a strike signature ability that gains an edge against the target as a free triggered action',
						tier3: '12 + M damage; two allies within 10 squares of you can each use a strike signature ability that gains an edge against the target as a free triggered action',
					})
				),
				ElementFactory.createAbilitySectionText(
					'If the target is reduced to 0 Stamina before one or both chosen allies has made their strike, the ally or allies can pick a different target.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-6',
			name: 'Mind Game',
			description: 'Your attack demoralizes your foe. Your allies begin to think you can win.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature or object',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionText('You mark the target.'),
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: [Characteristic.Might],
						tier1: '4 + M damage; R < [weak], weakened (save ends)',
						tier2: '6 + M damage; R < [average], weakened (save ends)',
						tier3: '10 + M damage; R < [strong], weakened (save ends)',
					})
				),
				ElementFactory.createAbilitySectionText(
					'Before the start of your next turn, the first time any ally deals damage to any target marked by you, that ally can spend a Recovery.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-7',
			name: 'Now!',
			description: 'Your allies wait for your command - then unleash death!',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'Three allies',
			cost: 5,
			sections: [ElementFactory.createAbilitySectionText('Each target can make a free strike.')],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-8',
			name: 'This Is What We Planned For',
			description: 'All those coordination drills you made them do finally pay off.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'Two allies',
			cost: 5,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Each target who hasn’t acted yet this combat round can take their turn in any order immediately after yours.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-9',
			name: 'Frontal Assault',
			description: 'The purpose of a charge is to break their morale and force a retreat.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Until the end of the encounter or until you are dying, the first time on a turn that you or any ally deals damage to a target marked by you, the creature who dealt the damage can push the target up to 2 squares and then shift up to 2 squares. Additionally, any ally using the Charge main action to target a creature marked by you can use a melee strike signature ability or a melee strike heroic ability instead of a melee free strike.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-10',
			name: 'Hit ’Em Hard!',
			description: 'Your allies see the advantages in attacking the targets you select.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Until the end of the encounter or until you are dying, whenever you or any ally deals damage to a target marked by you, that creature gains 2 surges, which they can use immediately.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-11',
			name: 'Rout',
			description: 'The tide begins to turn.',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Until the end of the encounter or until you are dying, whenever you or any ally deals damage to a target marked by you who has R < [average], the target is frightened of the creature who dealt the damage (save ends).'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-12',
			name: 'Stay Strong and Focus!',
			description: 'We can do this! Keep faith and hold fast!',
			type: ElementFactory.AbilityTypeFactory.createManeuver(),
			distance: [ElementFactory.DistanceFactory.createSelf()],
			target: 'Self',
			cost: 7,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Until the end of the encounter or until you are dying, whenever you or any ally deals damage to a target marked by you, the creature who dealt the damage can spend a Recovery.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-13',
			name: 'Squad! Gear Check!',
			description: 'You distract a foe while your allies secure their defensive gear.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee()],
			target: 'One creature',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '9 + M damage',
						tier2: '13 + M damage',
						tier3: '18 + M damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'You and each ally adjacent to the target gain 10 temporary Stamina.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-14',
			name: 'Squad! Remember Your Training!',
			description: 'You remind your allies how to best use their gear.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'Self and two allies',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Each target gains 1 surge and can use a signature ability that has a double edge.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-15',
			name: 'Win This Day!',
			description: 'You inspire your allies to recover and gather their strength.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Area],
			distance: [ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 })],
			target: 'Self and each ally in the area',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Each target gains 2 surges. Additionally, they can spend a Recovery, remove any conditions or effects on them, and stand up if they are prone.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-16',
			name: 'You’ve Still Got Something Left',
			description: 'You push an ally to use a heroic ability sooner than they otherwise would.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'One ally',
			cost: 9,
			sections: [
				ElementFactory.createAbilitySectionText(
					'The target uses a heroic ability with the Strike keyword as a free triggered action, and deals extra damage with that ability equal to your Reason score. The ability has its Heroic Resource cost reduced by 1 + your Reason score (minimum cost 0).'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-17',
			name: 'Go Now and Speed Well',
			description: 'You direct an attack to strike true.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'Self or one ally',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionText(
					'The target gains 2 surges and can use a signature or heroic ability as a free triggered action. The ability has a double edge on the power roll, ignores damage immunity, and increases the potency of any potency effects by 1.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-18',
			name: 'Finish Them!',
			description: 'You point out an opening to your ally so they can land a killing blow.',
			type: ElementFactory.AbilityTypeFactory.createTrigger(
				'The target is not a leader or solo creature, and becomes winded.',
				{ free: true }
			),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'One creature',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionText(
					'The target is killed. Additionally, the creature who caused the target to be winded can spend a Recovery.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-19',
			name: 'Floodgates Open',
			description: 'You direct your squad to strike in unison and with devastating effect.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Ranged],
			distance: [ElementFactory.DistanceFactory.createRanged(10)],
			target: 'Three allies',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionText(
					'Each target gains 1 surge and can use a signature ability as a free triggered action. That ability gains an edge on the power roll and increases the potency of any potency effects by 1.'
				),
			],
		}),
		ElementFactory.createAbility({
			id: 'tactician-ability-20',
			name: 'I’ll Open and You’ll Close',
			description: 'You create an opening for an ally.',
			type: ElementFactory.AbilityTypeFactory.createMain(),
			keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
			distance: [ElementFactory.DistanceFactory.createMelee(), ElementFactory.DistanceFactory.createRanged(5)],
			target: 'One creature',
			cost: 11,
			sections: [
				ElementFactory.createAbilitySectionRoll(
					ElementFactory.createPowerRoll({
						characteristic: Characteristic.Might,
						tier1: '6 + M damage',
						tier2: '10 + M damage',
						tier3: '14 + M damage',
					})
				),
				ElementFactory.createAbilitySectionText(
					'One ally within 10 squares of you can use a heroic ability against the target as a free triggered action without spending any of their Heroic Resource, as long as they have enough Heroic Resource to pay for the ability. If the target is reduced to 0 Stamina before the chosen ally has used their ability, the ally can pick a different target.'
				),
			],
		}),
	],
	subclasses: [insurgent, mastermind, vanguard],
	level: 1,
	characteristics: [],
};
