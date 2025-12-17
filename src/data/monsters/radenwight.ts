import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const radenwight: MonsterGroupInterface = {
	id: 'monster-group-radenwight',
	name: 'Radenwight',
	description: `
The ratfolk known as radenwights are blessed with coordination and acrobatics so impressive and effective that they might be a highly trained and practiced circus act. They enjoy building their warrens, known as “meddles,” under cities where the chaos of daily life makes raiding the people above fun and easy.

When the radenwights’ enemies expect them to scurry away like rats, they are painfully surprised to see the combined arrows, bodies, and blades of a meddle thrown against them all at once. Whatever the ratfolk do, they do it fearlessly, with deeply cherished values of bravery and fair play shining through for even the most rakish and roguish of them. Radenwights aren’t above banditry if it would support the meddle, but they greatly prefer to overwhelm, knock down, and knock out their targets rather than engage in deadly violence. They prefer weapons of precision and look for opportunities to strike as they and their comrades create openings for one another.`,
	picture: null,
	information: [
		{
			id: 'radenwight-info-1',
			name: 'Bonds and Bravado',
			description:
				'It’s a big world out there for a bunch of small ratfolk, and radenwights learned long ago that trying to survive by running away or climbing to safety gets you only so far. Radenwights learn boldness from birth, and are taught to hurl themselves fearlessly against any challenge that stands in their way. The key to this bravery is the intense bond of trust that exists between every radenwight, their comrades, and their community—as well as the knowledge that every other radenwight will act just as decisively as they do. In a scrap, it’s not one radenwight’s blade or arrow that brings down the foe, but the instant and instinctual follow-up from their fellows.',
		},
		{
			id: 'radenwight-info-2',
			name: 'The Magic of Music',
			description:
				'The pursuit of arcane studies is unusual among radenwights, though the community throws their support behind any child who happens to show that talent. Somewhat more common is the spontaneous discovery of magical aptitude through music, as the culture of radenwight meddles strongly emphasizes both music and dance. Radenwights are particularly drawn to flutes and panpipes, inspired by the legend of a flutist whose playing enraptured an evil dragon—even as others in her meddle lined up a suitably sized boulder to be dropped on the creature from the cliff above.',
		},
		{
			id: 'radenwight-info-3',
			name: 'The Great Maclette',
			description: `
The name Maclette is never uttered by radenwights without “The Great” before it. That maestro leads his band in complex city-wide robberies while always staying one step ahead of any would-be ratcatchers. Some say Maclette leads his life of crime to provide for his meddle, while others claim he strives to be king of the criminal world.

In truth, the Great Maclette finds beauty in the thrill of the heist. Robbery is as euphonious as music to his ears, and the maestro treats every operation like a new composition. As long as his band remains at large, he’ll always be looking to outdo himself with his next great overture.`,
		},
		{
			id: 'radenwight-info-4',
			name: 'Radenwight Languages',
			description: 'Most radenwights speak Caelian and Szetch.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMaliceAbility({
			ability: ElementFactory.createAbility({
				id: 'radenwight-malice-1',
				name: 'Trouser Cut',
				type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Non-minion'] }),
				cost: 3,
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee()],
				target: 'One creature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							bonus: 2,
							tier1: '7 damage; push 3',
							tier2: '10 damage; push 3; taunted (EoT)',
							tier3: '13 damage; push 5; taunted (EoT)',
						})
					),
					ElementFactory.createAbilitySectionText(
						'If the target is wearing clothing covering the lower half of their body, they must use a maneuver once to pull that clothing up before they can move.'
					),
				],
			}),
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'radenwight-malice-2',
			name: 'Rat Race',
			cost: 5,
			icon: StatBlockIcon.Trait,
			sections: [
				'Each radenwight in the encounter shifts up to their speed. If a radenwight ends this shift adjacent to one or more radenwights, they can make a melee free strike against each enemy adjacent to them.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'radenwight-malice-3',
			name: 'Rally the Rodents',
			cost: 7,
			icon: StatBlockIcon.Area,
			sections: [
				'A radenwight uses music to coordinate living rats, forming a 10 wall of rats scurrying atop one another into unoccupied spaces anywhere on the encounter map. The wall doesn’t block line of effect for radenwights and their allies, but it does for other creatures as the rats coordinate their movements with the radenwights. Each square of the wall has 10 Stamina. If the last radenwight in the encounter dies and the wall is still standing, the rats let out a hideous screech as they disperse. Each enemy on the encounter map makes an **Intuition test**.',
				ElementFactory.createPowerRoll({
					characteristic: Characteristic.Intuition,
					tier1: '7 sonic damage; target can’t take a respite activity during their next respite',
					tier2: '5 sonic damage',
					tier3: 'No effect',
				}),
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'radenwight-1',
			name: 'Radenwight Mischiever',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Ambusher),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(-1, 2, 0, 1, 0),
			withCaptain: '+1 damage bonus to strikes',
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-1-feature-1',
						name: 'Dagger Dance',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.createMelee(),
							ElementFactory.DistanceFactory.createRanged(5),
						],
						target: 'One creature per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage',
									tier2: '4 damage',
									tier3: '5 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the mischiever is hidden when they use this ability, they can target two creatures.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-1-feature-2',
						name: 'Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally deals damage to the target.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The mischiever makes a free strike against the target.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'radenwight-2',
			name: 'Radenwight Scrapper',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Defender),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 5,
			stability: 1,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(-1, 1, 0, 0, 2),
			withCaptain: '+2 bonus to melee distance',
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-2-feature-1',
						name: 'Buckler Bash',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 damage',
									tier2: '2 damage; taunted (EoT)',
									tier3: '3 damage; taunted (EoT)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-2-feature-2',
						name: 'Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally deals damage to the target.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The scrapper makes a free strike against the target.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'radenwight-3',
			name: 'Radenwight Swiftpaw',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(0, 2, 1, 0, -1),
			withCaptain: 'Gain an edge on strikes',
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-3-feature-1',
						name: 'Rapier Flunge',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 damage; slide 1; the swiftpaw can shift 1 square',
									tier2: '2 damage; slide 2; the swiftpaw can shift up to 2 squares',
									tier3: '3 damage; slide 3; the swiftpaw can shift up to 3 squares',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-3-feature-2',
						name: 'Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally deals damage to the target.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The swiftpaw makes a free strike against the target.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'radenwight-4',
			name: 'Radenwight Redeye',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Artillery),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 3,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(1, 2, -1, 0, 0),
			withCaptain: 'Gain an edge on strikes',
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-4-feature-1',
						name: 'Eyes-On-Me Shot',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage',
									tier2: '4 damage',
									tier3: '5 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'One ally of the redeye within 2 squares of the target shifts up to 2 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-4-feature-2',
						name: 'Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally deals damage to the target.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The redeye makes a free strike against the target.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'radenwight-5',
			name: 'Radenwight Bruxer',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Brute),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 40,
			stability: 2,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(2, 1, -1, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-5-feature-1',
						name: 'Lockjaw',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '6 damage',
									tier2: '9 damage',
									tier3: '12 damage; grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A target grabbed this way takes 2 damage at the start of each of the bruxer’s turns.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-5-feature-2',
						name: 'Flurry of Bites',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '3 damage; A<0 bleeding (save ends)',
									tier2: '5 damage; A<1 bleeding (save ends)',
									tier3: '8 damage; A<2 bleeding (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-5-feature-3',
						name: 'Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally deals damage to the target.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The bruxer makes a free strike against the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'radenwight-5-feature-4',
					name: 'Lockdown',
					description:
						'Any enemy who shifts adjacent to the bruxer has that shift end. Additionally, any enemy adjacent to the bruxer can’t shift.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'radenwight-6',
			name: 'Radenwight Piper',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Support),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 30,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(0, 0, 0, 2, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-6-feature-1',
						name: 'Piercing Trill',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Magic,
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(),
							ElementFactory.DistanceFactory.createRanged(10),
						],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 sonic damage; push 1',
									tier2: '7 sonic damage; push 3',
									tier3: '9 sonic damage; push 4',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The piper or one ally within distance regains Stamina equal to the damage dealt.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-6-feature-2',
						name: 'Vivace Vivace!',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each ally in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target who has used their Ready Rodent ability this round regains the use of their triggered action.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The area increases to 6 burst.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-6-feature-3',
						name: 'Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally deals damage to the target.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The piper makes a free strike against the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'radenwight-6-feature-4',
					name: 'Musical Suggestion',
					description:
						'At the end of the piper’s turn, they can slide one adjacent creature up to 2 squares, ignoring stability.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'radenwight-7',
			name: 'Radenwight Ratcrobat',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Harrier),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 30,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(-1, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-7-feature-2',
						name: 'En Garde!',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 damage',
									tier2: '6 damage',
									tier3: '8 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The ratcrobat shifts up to 2 squares after striking the first target, then can shift 1 square after striking the second target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-7-feature-3',
						name: 'Over Here, Thanks',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One enemy',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The ratcrobat slides the target up to 3 squares, then can shift into any square the target left.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-7-feature-4',
						name: 'Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally deals damage to the target.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The ratcrobat makes a free strike against the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'radenwight-7-feature-1',
					name: 'Gymratstics',
					description: 'The ratcrobat gains an edge on strikes against larger creatures.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'radenwight-8',
			name: 'Radenwight Maestro',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 80,
			stability: 1,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(-2, 2, 0, 0, 3),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-8-feature-1',
						name: 'Cacophony',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 sonic damage; slide 1, the maestro can shift 1 square',
									tier2: '6 sonic damage; slide 3, the maestro shifts up to 3 squares',
									tier3: '8 sonic damage; slide 5, the maestro shifts up to 5 squares',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Each ally within distance can use Ready Rodent as a free triggered action once before the end of the round.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-8-feature-2',
						name: 'Tempo Change',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Two enemies',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: 'P<1 Slowed (save ends)',
									tier2: 'P<2 Slowed (save ends)',
									tier3: 'P<3 Slowed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'Each ally within 3 squares of any target has a +2 bonus to speed until the end of their next turn.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-8-feature-3',
						name: 'Ever-Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature within distance deals damage to an ally or takes damage from an ally.',
							{ free: true }
						),
						cost: 2,
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The maestro makes a free strike against the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'radenwight-8-feature-4',
					name: 'End Effect',
					description:
						'At the end of each of their turns, the maestro can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can’t be reduced in any way.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-8-feature-5',
						name: 'Overture',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 10 }),
						],
						target: 'Each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target can shift up to their speed or take the Defend action.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-8-feature-6',
						name: 'Solo Act',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the end of their next turn, the target halves any damage they take, gains a +4 damage bonus to strikes, and has their speed doubled.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'radenwight-8-feature-7',
						name: 'Rondo of Rat',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 10 }),
						],
						target: 'Each dead ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target stands, makes a free strike, then falls dead again. Any ally of the targets can use Ready Rodent as a free triggered action once in conjunction with these free strikes.'
							),
						],
					}),
				}),
			],
		}),
	],
	addOns: [],
};
