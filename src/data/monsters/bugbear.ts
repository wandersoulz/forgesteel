import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const bugbear: MonsterGroupInterface = {
	id: 'monster-group-bugbear',
	name: 'Bugbear',
	description: `
Bugbears are the bu’gath in the Khelt language, or “the bearers of the great fear.” Modern bugbears come from early goblins who first stepped into the wode centuries ago. Fey magic twisted their bodies, making them grow imposingly tall and hairy while removing all sound from their footsteps.

 Many bugbears become legendary hunters and mercenaries. Many more become reclusive and hide their whole lives in the shadows. A rare few dive into their magic potential and become living nightmares who haunt the wode.`,
	picture: null,
	information: [
		{
			id: 'bugbear-info-1',
			name: 'Thrown Into The Fray',
			description: `
Bugbears seldom seek the settlements of others for trade or allyship, and are known to tenaciously defend their own homes or their neighbors’ homes. This has given them a reputation of being covert, insurgent warriors, when in reality, bugbears simply fight to maintain their quiet solitude.

When bugbears are compelled to take action, they take to the high ground and use their powerful arms to throw anything they can down at the problem. This includes daggers, heavy iron balls, each other, and sometimes throwing the enemy at the enemy.`,
		},
		{
			id: 'bugbear-info-2',
			name: 'Goblin Bond',
			description:
				'Bugbears value their shared origin with goblins and hobgoblins despite the three lines branching apart so dramatically. They think of themselves as goblinoids first and humanoids second, with that relationship providing a sense of common ground when cloistered bugbears come out of isolation. ',
		},
		{
			id: 'bugbear-info-3',
			name: 'Bu’gathic Magic',
			description:
				'Most bugbears have some control over their inherent magic, enabling them to perform a trick or two. Dedicated bugbear channelers have learned to evoke powerful shadow and rot magic. These mages can reshape the appearance of the world around them and temporarily alter their foes as defensive tactics, providing ample warning to enemies that they are capable of far worse if those enemies push onward. Bu’gathic magic also enables bugbears to hide their settlements behind shadowy veils within canyons and impenetrable swamplands.',
		},
		{
			id: 'bugbear-info-4',
			name: 'Bugbear Languages',
			description: 'Most bugbears speak Caelian, Khelt, and Szetch.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'bugbear-malice-1',
			name: 'Goblin Malice Features',
			cost: 1,
			icon: StatBlockIcon.Trait,
			repeatable: true,
			sections: ['The bugbear activates a Malice Feature available to goblins.'],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'bugbear-malice-2',
			name: 'Grab Iron Ball',
			cost: 3,
			icon: StatBlockIcon.Self,
			repeatable: true,
			sections: [
				'For every 3 Malice spent, one non-minion bugbear acting this turn grabs an iron ball and can use a maneuver to throw it at a creature within 5 squares of them. The creature takes damage equal to  8 – the number of squares the iron ball was thrown, and if they have M<1, they are slowed (save ends).',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'bugbear-malice-3',
			name: 'Grab Javelin',
			cost: 5,
			icon: StatBlockIcon.Self,
			repeatable: true,
			sections: [
				' For every 5 Malice spent, one non-minion bugbear acting this turn grabs a javelin and can use a maneuver to throw it at a creature within 5 squares of them. The creature takes damage equal to  12 – the number of squares the javelin was thrown, and if they have M<1, they are bleeding (save ends). While a creature is bleeding this way, any ally of the bugbear within 2 squares of them can use a free maneuver to pull the bleeding creature up to 2 squares.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'bugbear-malice-4',
			name: 'Show Them the Great Fear',
			cost: 10,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				' A bugbear infuses the encounter map with bu’gathic magic. Until the end of the encounter, all bugbears and allies have their speed doubled and can automatically climb at full speed while moving. Additionally, if the target of any bugbear or ally’s strike has I<1, the target is also frightened (save ends) and must move their speed in a straight line away from the creature who made the strike.',
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'bugbear-1',
			name: 'Bugbear Channeler',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Controller),
			keywords: ['Bugbear', 'Goblin', 'Humanoid', 'Fey'],
			encounterValue: 16,
			speed: ElementFactory.createSpeed(5),
			stamina: 60,
			stability: 0,
			size: ElementFactory.createSize(1, 'L'),
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(1, 1, 2, 2, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-1-feature-1',
						name: 'Shadow Drag',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(8)],
						target: 'Two creatures or objects on the ground',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 damage; pull 2',
									tier2: '10 damage; pull 3',
									tier3: '13 damage; pull 4',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Each target must be on the ground, and each square a target is pulled through is difficult terrain for enemies.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-1-feature-2',
						name: 'Blistering Element',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage; M<0 bleeding (save ends)',
									tier2: '3 damage; M<1 bleeding (save ends)',
									tier3: '4 damage; M<2 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The channeler chooses one of the following damage types for the damage: acid, cold, corruption, fire, or poison.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-1-feature-3',
						name: 'Twist Shape',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature',
						cost: 5,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 corruption damage; P<0 slowed (save ends)',
									tier2: '8 corruption damage; P<1 the target is shapechanged (save ends)',
									tier3: '11 corruption damage; P<2 the target is shapechanged (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A shapechanged creature is slowed and has fire weakness 10 as their limbs stretch and their skin becomes paper thin.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-1-feature-4',
						name: 'Throw',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'*Special*: The target must be grabbed by the channeler.'
							),
							ElementFactory.createAbilitySectionText(
								'The target is vertical pushed up to 3 squares. An ally doesn’t take damage from being force moved this way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-1-feature-5',
						name: 'Catcher',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance.',
							{ free: true }
						),
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'The triggering creature or object',
						sections: [ElementFactory.createAbilitySectionText('The target is grabbed by the channeler.')],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-1-feature-6',
						name: 'Shadow Veil',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally within distance takes damage.'),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'The triggering ally',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target is wrapped in shadow and halves the damage. The target can’t be targeted by strikes until the start of their next turn.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'bugbear-2',
			name: 'Bugbear Commander',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Support),
			keywords: ['Bugbear', 'Goblin', 'Humanoid', 'Fey'],
			encounterValue: 16,
			speed: ElementFactory.createSpeed(5),
			stamina: 80,
			stability: 0,
			size: ElementFactory.createSize(1, 'L'),
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(2, 1, 2, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-2-feature-1',
						name: 'Inspiring Swordplay',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 damage',
									tier2: '10 damage',
									tier3: '13 damage; one target is grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'One ally within 5 squares of the commander gains an edge on their next strike until the start of the commander’s next turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-2-feature-2',
						name: 'You Next!',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						distance: [ElementFactory.DistanceFactory.createRanged(8)],
						target: 'One ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target moves up to their speed and uses a signature action.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-2-feature-3',
						name: 'Fall Back!',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each ally in the area',
						cost: 5,
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target shifts up to their speed, then can use the Throw maneuver.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-2-feature-4',
						name: 'Throw',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'*Special*: The target must be grabbed by the commander.'
							),
							ElementFactory.createAbilitySectionText(
								'The target is vertical pushed up to 4 squares. An ally doesn’t take damage from being force moved this way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-2-feature-5',
						name: 'Catcher',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance.',
							{ free: true }
						),
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'The triggering creature or object',
						sections: [ElementFactory.createAbilitySectionText('The target is grabbed by the commander.')],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'bugbear-2-feature-6',
					name: 'The Commander’s Watching',
					description:
						'Any ally who has line of effect to the commander can end one condition on themself at the start of each of their turns.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'bugbear-3',
			name: 'Bugbear Roughneck',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Brute),
			keywords: ['Bugbear', 'Goblin', 'Humanoid', 'Fey'],
			encounterValue: 16,
			speed: ElementFactory.createSpeed(6),
			stamina: 109,
			stability: 0,
			size: ElementFactory.createSize(1, 'L'),
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(2, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-3-feature-1',
						name: 'Haymaker',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 damage',
									tier2: '11 damage; one target is grabbed; one target is pushed up to 2 squares',
									tier3: '14 damage; one target is grabbed; one target is vertical pushed up to 3 squares',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 5,
								effect: 'The ability takes the Area keyword and loses the Strike keyword, its distance becomes a 1 burst, and it targets each enemy in the area.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-3-feature-2',
						name: 'Leaping Fury',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '8 damage; M<1 prone',
									tier2: '13 damage; M<2 prone',
									tier3: '16 damage; M<3 prone',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The roughneck can jump up to 5 squares to an unoccupied space within distance of the target before making this strike.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-3-feature-3',
						name: 'Drag Through Hell',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionText(
								'*Special*: The target must be grabbed by the roughneck.'
							),
							ElementFactory.createAbilitySectionText(
								'The roughneck moves up to their speed across the ground, dragging the target with them. The target takes 2 damage for each square they were dragged through. When this movement ends, the target is no longer grabbed and falls prone. Each square the target was dragged through is difficult terrain for enemies.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-3-feature-4',
						name: 'Throw',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'*Special*: The target must be grabbed by the roughneck.'
							),
							ElementFactory.createAbilitySectionText(
								'The target is vertical pushed up to 5 squares. An ally doesn’t take damage from being force moved this way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-3-feature-5',
						name: 'Catcher',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'The triggering creature or object',
						sections: [ElementFactory.createAbilitySectionText('The target is grabbed by the roughneck.')],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-3-feature-6',
						name: 'Flying Sawblade',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The roughneck is vertical force moved by another creature.'
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The roughneck uses Haymaker against a creature or object at any point during the forced movement, or after falling as a result of it.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'bugbear-4',
			name: 'Bugbear Sneak',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Ambusher),
			keywords: ['Bugbear', 'Goblin', 'Humanoid', 'Fey'],
			encounterValue: 16,
			speed: ElementFactory.createSpeed(7),
			stamina: 80,
			stability: 0,
			size: ElementFactory.createSize(1, 'L'),
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(2, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-4-feature-1',
						name: 'Sucker Punch',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '8 damage; A<1 grabbed',
									tier2: '13 damage; A<2 grabbed',
									tier3: '16 damage; grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The target can’t use triggered actions until the start of the next round. Additionally, if the sneak started their turn hidden from the target, this ability deals an extra 4 damage. '
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-4-feature-2',
						name: 'Shadow Cloak',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage; I<0 the sneak has concealment from the target (save ends)',
									tier2: '3 damage; I<1 the sneak has concealment from the target (save ends)',
									tier3: '4 damage; I<2 the sneak has concealment from the target (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The sneak shifts up to their speed and can attempt to hide.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-4-feature-3',
						name: 'Carving Dagger',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(8)],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 damage; M<0 bleeding (save ends)',
									tier2: '11 damage; M<1 bleeding (save ends)',
									tier3: '14 damage; M<2 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While bleeding this way, the target can’t hide from the sneak or their allies.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-4-feature-4',
						name: 'Throw',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'*Special*: The target must be grabbed by the sneak.'
							),
							ElementFactory.createAbilitySectionText(
								'The target is vertical pushed up to 4 squares. An ally doesn’t take damage from being force moved this way'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-4-feature-5',
						name: 'Catcher',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'The triggering creature or object',
						sections: [ElementFactory.createAbilitySectionText('The target is grabbed by the sneak.')],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-4-feature-6',
						name: 'Clever Trick',
						type: ElementFactory.AbilityTypeFactory.createTrigger('The sneak is targeted by a strike.'),
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One enemy',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText(
								'The sneak chooses one enemy within distance of the strike to become the target of the strike.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'bugbear-5',
			name: 'Bugbear Knightmare',
			level: 8,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Hexer),
			keywords: ['Bugbear', 'Goblin', 'Humanoid', 'Fey'],
			encounterValue: 10,
			speed: ElementFactory.createSpeed(5),
			stamina: 12,
			stability: 2,
			size: ElementFactory.createSize(1, 'L'),
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(4, 3, 1, 1, 4),
			withCaptain: 'Gain an edge on strikes',
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-5-feature-1',
						name: 'Corrosive Blade',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [
							AbilityKeyword.Magic,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '3 corruption damage',
									tier2: '6 corruption damage; P<3 bleeding (save ends)',
									tier3: '8 corruption damage; grabbed; P<4 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A target grabbed this way or already grabbed by the knightmare can be vertical pushed up to 5 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'bugbear-5-feature-2',
					name: 'Bu’gathic Inspiration',
					description:
						'Any ally has a +1 bonus to power rolls, saving throws, or damage rolled as a d6 or a d3 for each knightmare adjacent to them. ',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'bugbear-5-feature-3',
					name: 'Magic Terror',
					description:
						'Each enemy has a −1 penalty to power rolls, saving throws, or damage rolled as a d6 or a d3 for each knightmare adjacent to them.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'bugbear-6',
			name: 'Bugbear Mob',
			level: 5,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Brute),
			keywords: ['Bugbear', 'Goblin', 'Humanoid', 'Fey'],
			encounterValue: 7,
			speed: ElementFactory.createSpeed(6),
			stamina: 10,
			stability: 2,
			size: ElementFactory.createSize(3),
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(3, -1, 0, 1, 0),
			withCaptain: '+2 damage bonus to strikes',
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-6-feature-1',
						name: 'Mug and Tear',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 damage; pull 2',
									tier2: '6 damage; pull 3',
									tier3: '7 damage; pull 4; grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the target is pulled into the mob, that forced movement deals damage only at the Director’s determination.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'bugbear-6-feature-2',
					name: 'Swarm',
					description:
						'The mob can move through spaces as if they were a size 1L creature, and can occupy other creatures’ spaces. At the start of each of the mob’s turns, they can make a free strike against each creature whose space they share.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'bugbear-7',
			name: 'Bugbear Snare',
			level: 5,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Ambusher),
			keywords: ['Bugbear', 'Goblin', 'Humanoid', 'Fey'],
			encounterValue: 7,
			speed: ElementFactory.createSpeed(6),
			stamina: 9,
			stability: 2,
			size: ElementFactory.createSize(1, 'L'),
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(2, 3, 0, 0, 1),
			withCaptain: '+3 bonus to speed',
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'bugbear-7-feature-1',
						name: 'Cut Em Low!',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 damage',
									tier2: '6 damage',
									tier3: '7 damage; A<3 slowed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the snare started their turn hidden from the target, the target is automatically grabbed. A target grabbed this way or already grabbed by the snare can be vertical pushed up to 4 squares.'
							),
						],
					}),
				}),
			],
		}),
	],
	addOns: [],
};
