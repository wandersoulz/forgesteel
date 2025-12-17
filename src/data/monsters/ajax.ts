import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const ajax: MonsterGroupInterface = {
	id: 'monster-group-ajax',
	name: 'Ajax the Invincible',
	description:
		'He bestrides the land like one of history’s great conquerors. A combination of ambition, courage, and study created a master tactician in command of a massive army collecting countless priceless treasures—and no one to stand in his way.',
	picture: null,
	information: [
		{
			id: 'ajax-info-1',
			name: 'By Might and Merit',
			description: `
Ajax the Invincible has earned his title. He graduated top of his class at Capital’s military academy, and then immediately launched into a campaign across his homeland of Phaedros. At his side was his advisor Mortum, a nefarious wizard who guided Ajax in the footsteps of the Caelian Empire’s conquests before them.

Together, Ajax and Mortum went on to subjugate and enlist hamlet after town after city after territory with little standing in their way. When they successfully returned the Chrysopolis—an ancient flying sky-elf city—to the sky, and their accomplishments literally rose above the country—no one could ignore their might any longer.`,
		},
		{
			id: 'ajax-info-2',
			name: 'Treasures Abound',
			description: `Ajax lays claims to many powerful treasures, both gifted to him in exchange for sanctuary and taken by his own hands. The Mantle of the Phoenix Queen, a harness that conjures the wings of a phoenix. Uthgryl, the Negotiator, Blade of the Gol King, a sword so sharp that it could cleave a person’s willpower in two. The Hand of Kukai, a gauntlet plated in jade that harbors powerful, forbidden magic.

His arsenal is vast and strategically picked to round out his strength. There are few situations he isn’t prepared to handle.`,
		},
		{
			id: 'ajax-info-3',
			name: 'The Iron Saint',
			description:
				'While some of his forces may refer to Ajax as the Iron Saint, the version of him presented here hasn’t taken up that title yet. Ajax the Invincible will continue to amass followers, treasures, and titles until he can ascend to his rightful status as a saint. It’s up to the heroes to make sure this will never come to pass.',
		},
		{
			id: 'ajax-info-4',
			name: 'Ajax’s Languages',
			description: 'Ajax speaks Caelian, Higaran, Khoursirian, Phaedran, Riojan, Vaniric, and Vaslorian.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'ajax-malice-1',
			name: 'Reason',
			cost: 2,
			icon: StatBlockIcon.Self,
			sections: [
				'Ajax attempts to instill doubt into a creature within line of effect through logic and reason. The creature and Ajax make an opposed **Reason test**. If Ajax wins, he chooses to either deal 11 extra damage to one target on his next strike or to gain an additional triggered action during the current round. Ajax can’t use this feature against the same creature during the same encounter.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'ajax-malice-2',
			name: 'Nexus Jewel',
			cost: 5,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				`
Until the end of the round, Ajax chooses one of the following environments he has previously visited and overlays that environment on top of the encounter map, temporarily merging multiple realities.

**Incredibly High Above the Ground**: The winds whip and bluster. Any creature who can’t fly takes a −3 penalty to stability, and forced movement effects gain a +3 bonus to their distance against such creatures. 

**Swamp**: The ground is difficult terrain for enemies. Any creature who starts and ends their turn in the same space is restrained (save ends).

**Volcanic Canyon**: The air is stiflingly hot. Each enemy takes 5 fire damage for each square they enter.`,
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'ajax-malice-3',
			name: 'Solo Action',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'Ajax takes an additional main action on his turn. He can use this feature even if he is dazed.',
			],
		}),
		ElementFactory.FeatureFactory.createMaliceAbility({
			ability: ElementFactory.createAbility({
				id: 'ajax-malice-4',
				name: 'Draw Steel',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				cost: 10,
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createSpecial('Four 3 cubes within 10')],
				target: 'Each target makes a test using their highest characteristic.',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [
								Characteristic.Agility,
								Characteristic.Intuition,
								Characteristic.Might,
								Characteristic.Presence,
								Characteristic.Reason,
							],
							tier1: '26 damage; bleeding and slowed (save ends)',
							tier2: '22 damage; bleeding (save ends)',
							tier3: '16 damage',
						})
					),
					ElementFactory.createAbilitySectionText(
						'Ajax then raises his Blade of the Gol King above his head as four giant blades emerge from the ground to fill the area. Each target is pushed into an unoccupied space adjacent to the area after the power roll is resolved. Each blade blocks line of effect and can be dismissed by Ajax at will (no action required).'
					),
				],
			}),
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'ajax-1',
			name: 'Ajax the Invincible',
			level: 11,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Human', 'Humanoid'],
			encounterValue: 156,
			size: ElementFactory.createSize(1, 'L'),
			speed: ElementFactory.createSpeed(7, 'fly, hover'),
			stamina: 700,
			stability: 2,
			freeStrikeDamage: 11,
			characteristics: ElementFactory.createCharacteristics(5, 4, 5, 5, 4),
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'ajax-1-feature-1',
					name: 'Ajax',
					description: `
- **Ajax Turns**: Ajax takes up to three turns each round. He can’t take turns consecutively. Additionally, he can use three triggered actions in a round while he isn’t dazed.
- **End Effect**: At the end of each of his turns, Ajax can take 20 damage to end up to two effects on him that can be ended by a saving throw. This damage can’t be reduced in any way.`,
				}),
				ElementFactory.FeatureFactory.create({
					id: 'ajax-1-feature-2',
					name: 'Tactical Stance',
					description: `At the start of each round, Ajax chooses a new stance from one of the following options and gains its benefits:
- **Insurgent** Ajax automatically treats his initial power roll as a 17. He can still roll to determine if he scores a critical hit.
- **Mastermind** Before he uses an ability, Ajax can either shift up to 2 squares, or can cause one creature within line of effect to slide up to 2 squares, ignoring stability.
- **Vanguard** Ajax has damage immunity 5. Additionally, any enemy who makes a power roll that includes Ajax as a target has a double bane on the roll.`,
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-3',
						name: 'Blade of the Gol King',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Magic,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '16 damage; M < 4 the target loses 1d3 recoveries',
									tier2: '22 damage; M < 5 the target loses 1d3 recoveries',
									tier3: '26 damage; M < 6 prone and the target loses 1d3 recoveries',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Ajax shifts up to 2 squares between striking each target.'
							),
							ElementFactory.createAbilitySectionSpend({
								repeatable: true,
								effect: 'Ajax can strike one additional target for each Malice spent.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-4',
						name: 'Decree by the Jade Hand',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 10,
							}),
						],
						target: 'Each enemy and object in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '11 holy damage; P < 4 the target is hexed (save ends)',
									tier2: '17 holy damage; P < 5 the target is hexed (save ends)',
									tier3: '21 holy damage; P < 6 the target is hexed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A hexed target glows green, and each of their heroic abilities has its cost increased by 2.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The potency increases by 1. Additionally, the ground beneath the area drops 3 squares and is difficult terrain. Each flying target who has <code>M < 5</code> is knocked prone.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-5',
						name: 'Divine Vine',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: 'No effect.',
									tier2: 'The target is grabbed.',
									tier3: '11 damage; the target is grabbed.',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the target is grabbed, Ajax can choose to keep the vine extended, pull the target adjacent to him, or pull himself adjacent to the target. The vine stays attached to a grabbed target until it takes damage from a strike, the target escapes the grab, or Ajax causes the vine to release the target (no action required).'
							),
							ElementFactory.createAbilitySectionText(
								'**Special:** This ability can be replaced with the features of a different treasure Ajax has acquired.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-6',
						name: 'Bead of Hell',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 2,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 5,
								within: 20,
							}),
						],
						target: '',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Ajax throws a glowing bead to a square within distance, which ignites at the start of Ajax’s next turn and creates an area around it that lasts until the start of Ajax’s following turn. Each enemy in the area when the bead ignites takes 20 fire damage, and if they have <code>A < 5</code>, they are dazed (save ends). Any enemy who starts their turn in the area takes 10 fire damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'ajax-1-feature-7',
					name: 'I’m Not Done Yet.',
					description:
						'Ajax dies only when his Stamina reaches -350. While his Stamina is below 0, Ajax is bleeding, he can choose any two options from his Tactical Stance trait each round, and the Director gains 2 additional Malice per round.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-8',
						name: 'Is This What They Taught You?',
						type: ElementFactory.AbilityTypeFactory.createTrigger('A creature within distance marks Ajax.'),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target is marked while Ajax is marked. While the target is marked this way, Ajax gains an edge on power rolls against them, and whenever the target uses a triggered action involving their mark on Ajax, he can make a free strike against them.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-9',
						name: 'Shieldbreaker Talisman',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An enemy within distance uses an ability to reduce damage.'
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee(5)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Ajax makes a free strike against the target, dealing extra damage equal to twice the amount that was reduced. This extra damage can’t be reduced in any way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-10',
						name: 'Who’s Hesitating?',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature uses the Hesitation is Weakness ability.'
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Ajax shifts up to his speed and can make a free strike. If the target has <code>R < 4</code>, this free strike also makes them weakened until the end of their next turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-11',
						name: 'Your Obsession With Me Betrays You',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'Ajax causes a creature within distance to gain ferocity or wrath.'
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'If the target has <code>I < 4</code>, they use a signature ability against a target of Ajax’s choice.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-12',
						name: 'You Would Flounder Your Assault?',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature within 10 squares regains Stamina.'
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [ElementFactory.createAbilitySectionText('Ajax regains the same amount of Stamina.')],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-13',
						name: 'Phoenix Wing King',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '11 fire damage; A < 4 weakended (save ends)',
									tier2: '17 fire damage; A < 5 weakended (save ends)',
									tier3: '21 fire damage; A < 6 weakended (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Ajax flies at high speed to cut through each target, then appears in an unoccupied space within distance.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-14',
						name: 'I’ve Learned Their Tricks ',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Ajax uses the shadow elf eclipse’s technique to reduce each target’s surges to 0. Additionally, until the end of the round, Ajax ignores edges and double edges on any target’s abilities, and ignores any nondamaging effects of any target’s damage-dealing abilities.'
							),
							ElementFactory.createAbilitySectionText(
								'**Special:** This villain action can be replaced with a villain action from a creature any target has previously encountered.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-1-feature-15',
						name: 'Awe of the Iron Crown',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 7 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target who has <code>I < 5</code> is knocked prone and can’t stand until Ajax deals damage to them. For each target not knocked prone, Ajax can move up to his speed toward that target and use Blade of the Gol King against them.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'ajax-2',
			name: 'Ajax the Leader',
			level: 11,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Human', 'Humanoid'],
			encounterValue: 52,
			size: ElementFactory.createSize(1, 'L'),
			speed: ElementFactory.createSpeed(7, 'fly, hover'),
			stamina: 280,
			stability: 2,
			freeStrikeDamage: 11,
			characteristics: ElementFactory.createCharacteristics(5, 4, 5, 5, 4),
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'ajax-2-feature-1',
					name: 'Tactical Stance',
					description: `At the start of each round, Ajax chooses a new stance from one of the following options and gains its benefits:
- **Insurgent** Ajax automatically treats his initial power roll as a 17. He can still roll to determine if he scores a critical hit.
- **Mastermind** Before he uses an ability, Ajax can either shift up to 2 squares, or can cause one creature within line of effect to slide up to 2 squares, ignoring stability.
- **Vanguard** Ajax has damage immunity 5. Additionally, any enemy who makes a power roll that includes Ajax as a target has a double bane on the roll.`,
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-2',
						name: 'Blade of the Gol King',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Magic,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '16 damage; M < 4 the target loses 1d3 recoveries',
									tier2: '22 damage; M < 5 the target loses 1d3 recoveries',
									tier3: '26 damage; M < 6 prone and the target loses 1d3 recoveries',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Ajax shifts up to 2 squares between striking each target.'
							),
							ElementFactory.createAbilitySectionSpend({
								repeatable: true,
								effect: 'Ajax can strike one additional target for each Malice spent.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-3',
						name: 'Decree by the Jade Hand',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 10,
							}),
						],
						target: 'Each enemy and object in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '11 holy damage; P < 4 the target is hexed (save ends)',
									tier2: '17 holy damage; P < 5 the target is hexed (save ends)',
									tier3: '21 holy damage; P < 6 the target is hexed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A hexed target glows green, and each of their heroic abilities has its cost increased by 2.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The potency increases by 1. Additionally, the ground beneath the area drops 3 squares and is difficult terrain. Each flying target who has <code>M < 5</code> is knocked prone.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-4',
						name: 'Strike Them Down',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Two allies',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each ally can move up to their speed and can use a signature ability.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'ajax-2-feature-5',
					name: 'I’m Not Done Yet.',
					description:
						'Ajax dies only when his Stamina reaches -140. While his Stamina is below 0, Ajax is bleeding, he can choose any two options from his Tactical Stance trait each round, and the Director gains 2 additional Malice per round.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-6',
						name: 'Is This What They Taught You?',
						type: ElementFactory.AbilityTypeFactory.createTrigger('A creature within distance marks Ajax.'),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target is marked while Ajax is marked. While the target is marked this way, Ajax gains an edge on power rolls against them, and whenever the target uses a triggered action involving their mark on Ajax, he can make a free strike against them.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-7',
						name: 'Shieldbreaker Talisman',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An enemy within distance uses an ability to reduce damage.'
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee(5)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Ajax makes a free strike against the target, dealing extra damage equal to twice the amount that was reduced. This extra damage can’t be reduced in any way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-8',
						name: 'Who’s Hesitating?',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature uses the Hesitation is Weakness ability.'
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Ajax shifts up to his speed and can make a free strike. If the target has <code>R < 4</code>, this free strike also makes them weakened until the end of their next turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-9',
						name: 'Your Obsession With Me Betrays You',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'Ajax causes a creature within distance to gain ferocity or wrath.'
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'If the target has <code>I < 4</code>, they use a signature ability against a target of Ajax’s choice.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-10',
						name: 'You Would Flounder Your Assault?',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature within 10 squares regains Stamina.'
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [ElementFactory.createAbilitySectionText('Ajax regains the same amount of Stamina.')],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-11',
						name: 'Phoenix Wing King',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '11 fire damage; A < 4 weakended (save ends)',
									tier2: '17 fire damage; A < 5 weakended (save ends)',
									tier3: '21 fire damage; A < 6 weakended (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Ajax flies at high speed to cut through each target, then appears in an unoccupied space within distance.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-12',
						name: 'I’ve Learned Their Tricks ',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Ajax uses the shadow elf eclipse’s technique to reduce each target’s surges to 0. Additionally, until the end of the round, Ajax ignores edges and double edges on any target’s abilities, and ignores any nondamaging effects of any target’s damage-dealing abilities.'
							),
							ElementFactory.createAbilitySectionText(
								'**Special:** This villain action can be replaced with a villain action from a creature any target has previously encountered.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'ajax-2-feature-13',
						name: 'Awe of the Iron Crown',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 7 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target who has <code>I < 5</code> is knocked prone and can’t stand until Ajax deals damage to them. For each target not knocked prone, Ajax can move up to his speed toward that target and use Blade of the Gol King against them.'
							),
						],
					}),
				}),
			],
		}),
	],
	addOns: [],
};
