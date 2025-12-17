import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const elfWode: MonsterGroupInterface = {
	id: 'monster-group-elf-wode',
	name: 'Elf, Wode',
	description: `
Children of the Sylvan Celestials and masters of the elf-haunted wilds for which they are named, wode elves see all forests as their domain by birthright. They know and enjoy their reputation among humans for snatching children who wander too far into the woods. In their eyes, humans should fear the trees.

Wode elves’ natural ability to mask their presence, called glamor, complements their guerrilla fighting style, letting them strike quickly from cover and then meld back into the underbrush. These traits also make those few wode elves who dwell in cities naturally adept at urban warfare.`,
	picture: null,
	information: [
		{
			id: 'elf-wode-info-1',
			name: 'Heart of the Wode',
			description:
				'The primary value of wode elf culture is respect and reverence for their home, the wode in which they live. They speak of the wode as though it is alive and conscious, dangerous and delightful. Wode elves are receptive to strangers who respect the land upon which they trespass. However, those who seek to harm the wilds ruin their only chance of treating peacefully with the wode’s beating heart.',
		},
		{
			id: 'elf-wode-info-2',
			name: 'Wodeworking',
			description: `
Wode elves practice a secret technique to use the trees of the wode to craft materials as strong as metal, and to create magical plant creatures that serve them, including the wodenelgs, their trusted mounts. To breathe life into these creations, the wode elves lift their voices in song. The more intricate the song, the more durable and autonomous the creation becomes. A wodenelg’s rider is typically also its singer, creating a connection between the two that lasts a lifetime.

Legends tell of ancient beings, older than the forests themselves, sung to life by an entire wode elf civilization joined in sixteen-part harmony. These beings outlived their creators, and if they truly exist, they now roam the world as unknown and unknowable guardians who answer to nothing but their final set of instructions.`,
		},
		{
			id: 'elf-wode-info-3',
			name: 'Sylvan Surveillance',
			description: `
The wode elves’ natural connection to the wode allows them to stay aware of the forest’s goings-on while inside it. This isn’t a telepathic connection, but rather a great understanding of every corner of the wode and a hypersensitivity to changes within it. The stench of a badly set campfire, the sudden squawk of a raven, the forced march of a hungry ant colony: all of this information comes together to form a wode elf’s understanding of their surroundings.

A wode elf develops this sense for their home over time, meaning that a wode elf who lives in an urban environment has just as much understanding of the streets, alleys, and structures of their neighborhood as their cousin in the forest does of the deer paths, streams, and trees.`,
		},
		{
			id: 'elf-wode-info-4',
			name: 'Blightless Ambition',
			description:
				'Not all wode elves are happy to negotiate with peaceful interlopers in their realms. Some groups view even the very presence of such intruders as a direct threat to their way of life. One group of hunters known as the Blightless searches the forest for trespassing mortals, seeking to eliminate their potential threat by any means possible. Overzealous and aggressive, the Blightless also focus on expanding their home’s boundaries, attacking civilizations close to the forest’s edge. Because Blightless attacks constitute the majority of mortal interaction with the wode elves, they set the tone for mortal perception of an otherwise peaceful people.',
		},
		{
			id: 'elf-wode-info-5',
			name: 'Chirugeons',
			description:
				'When wode elves in combat control the terrain, their primary strategy is divide and conquer. Chirurgeons (kai-RUR-jinz) are master strategists who enact their picture-perfect plans in the thick of battle. Enemies will never know how many wode elves they truly face if the crafty chirurgeon can help it.',
		},
		{
			id: 'elf-wode-info-6',
			name: 'Warleader',
			description: `
The warleader of a wode elf court is usually their finest tactician. One warleader alone can command dozens of squadrons across miles of forest with such precision that they can appear to predict an enemy’s movements without ever laying an eye on them. In times of peace, a warleader’s role is primarily that of teacher—a mentor who scouts and soldiers regard almost as an additional parent.

The wode elves send their warleaders into battle only if the situation is dire. Characters who encounter one should be flattered, for the presence of a warleader means the wode elves consider the heroes a formidable threat.`,
		},
		{
			id: 'elf-wode-info-7',
			name: 'Wode Elf Languages',
			description: 'Most wode elves speak Caelian and Yllyric.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'elf-wode-malice-1',
			name: 'Forest Network',
			cost: 3,
			icon: StatBlockIcon.Trait,
			sections: ['Each wode elf who ends this turn hidden can shift up to their speed while remaining hidden.'],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'elf-wode-malice-2',
			name: 'Punishing Regrowth',
			cost: 5,
			icon: StatBlockIcon.Trait,
			sections: [
				'Until the end of the round, each wode elf gains an edge on abilities, and their strikes can slide a target up to 2 squares in addition to their usual effects. If a strike already imposes forced movement, this slide happens after that forced movement. A creature force moved by a wode elf’s strike who ends this forced movement in difficult terrain is restrained until the end of their next turn.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'elf-wode-malice-3',
			name: 'Vines Everywhere',
			cost: 7,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'Vines rapidly grow across the entire encounter map. Each enemy in the encounter makes an **Agility test**.',
				ElementFactory.createPowerRoll({
					characteristic: Characteristic.Agility,
					tier1: '8 damage; restrained (save ends)',
					tier2: 'Restrained (EoT)',
					tier3: 'No effect',
				}),
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'elf-wode-1',
			name: 'Wode Elf Lookout',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Support),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: '+2 bonus to speed',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-1-feature-1',
						name: 'Longbow',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(8)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 damage',
									tier2: '2 damage',
									tier3: '3 damage',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-1-feature-2',
					name: 'There!',
					description:
						'Any wode elf within 5 squares of the lookout can make ranged strikes as if occupying the lookout’s space.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-1-feature-3',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the lookout that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-2',
			name: 'Wode Elf Runner',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: 'Gain an edge on strikes',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-2-feature-1',
						name: 'Spear',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(),
							ElementFactory.DistanceFactory.createRanged(5),
						],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 damage',
									tier2: '2 damage',
									tier3: '3 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If this ability is used as part of the Charge main action, the runner shifts up to 2 squares first.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-2-feature-2',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the runner that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-3',
			name: 'Wode Elf Scout',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Ambusher),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(10),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: 'Gain an edge on strikes',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-3-feature-1',
						name: 'Daggers',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(),
							ElementFactory.DistanceFactory.createRanged(5),
						],
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
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-3-feature-2',
					name: 'Into the Green',
					description: 'The scout can attempt to hide at the end of each of their turns.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-3-feature-3',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the scout that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-4',
			name: 'Wode Elf Yeoman',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Artillery),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 3,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: '+1 damage bonus to strikes',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-4-feature-1',
						name: 'Heavy Longbow',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(12)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage; push 1',
									tier2: '4 damage; push 2',
									tier3: '5 damage; push 3',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-4-feature-2',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the yeoman that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-5',
			name: 'Wode Elf Chirurgeon',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Harrier),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 8,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 40,
			stability: 0,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(1, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-5-feature-1',
						name: 'Wild Ax',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(),
							ElementFactory.DistanceFactory.createRanged(5),
						],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '6 damage; push 1',
									tier2: '9 damage; push 3',
									tier3: '12 damage; push 5',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The chirurgeon can make a ranged free strike before using this ability.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 5,
								effect: 'The chirurgeon uses this ability again.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-5-feature-2',
						name: 'The Wode Protects Us',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Self and three allies',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target can teleport up to 10 squares to a space that has cover or concealment.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-5-feature-3',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the chirurgeon that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-6',
			name: 'Wode Elf Druid',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Controller),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 8,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 30,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(0, 1, 0, 0, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-6-feature-1',
						name: 'Entangling Vines',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 10,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 damage; pull 1',
									tier2: '8 damage; pull 3; M<1 slowed (save ends)',
									tier3: '10 damage; pull 5; M<2 slowed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While slowed this way, a target can’t search for hidden creatures.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The size of the cube and the potency both increase by 1.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-6-feature-2',
						name: 'The Wode Protects Us',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Self and three allies',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target can teleport up to 10 squares to a space that has cover or concealment.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-6-feature-3',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the druid that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-7',
			name: 'Wode Elf Green Seer',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Hexer),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 20,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(0, 1, 0, 2, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-7-feature-1',
						name: 'The Forest’s Embrace',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 damage',
									tier2: '7 damage; I<1 restrained (save ends)',
									tier3: '9 damage; I<2 restrained (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While restrained this way, a target can’t search for hidden creatures.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-7-feature-2',
						name: 'The Natural Cycle',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Two creatures',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage',
									tier2: '4 damage; P<1 weakened (save ends)',
									tier3: '6 damage; P<2 bleeding (save ends), target has a double bane on strikes (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While bleeding or weakened this way, a target is covered in lichen.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-7-feature-3',
						name: 'Foreseen Punishment',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature uses a triggered action targeting the green seer or an ally within distance.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The green seer makes a free strike against the target after the target’s triggered action is resolved.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-7-feature-4',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the green seer that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-8',
			name: 'Wode Elf Greenskeeper',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Defender),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 40,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-8-feature-1',
						name: 'Growing Longsword',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 damage',
									tier2: '7 damage',
									tier3: '9 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The target is taunted until the end of their next turn, and the greenskeeper shifts up to 3 squares.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The distance increases to Melee 5.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-8-feature-2',
						name: 'Overgrowth',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 10,
							}),
						],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The area is overgrown with heavy brush and brambles until the end of the encounter, providing cover and concealment for the greenskeeper and their allies. The area is difficult terrain for enemies, and any enemy who starts their turn in the area takes 3 damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-8-feature-3',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the greenskeeper that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-9',
			name: 'Wode Elf Guerilla',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Ambusher),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 10,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'teleport'),
			stamina: 50,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-9-feature-1',
						name: 'Splinter Dagger',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Magic,
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(),
							ElementFactory.DistanceFactory.createRanged(5),
						],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 damage',
									tier2: '11 damage',
									tier3: '14 damage; M<2 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText('The guerilla can teleport up to 3 squares.'),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'This ability targets one additional target, and deals an additional 3 damage if both targets are adjacent to each other.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-9-feature-2',
						name: 'Do Not Hesitate in the wode',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An ally ends their turn while the guerrilla hasn’t acted this round.',
							{ free: true }
						),
						cost: 3,
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(20)],
						target: 'Self and each ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'**Special:** The guerrilla must be acting as a captain.'
							),
							ElementFactory.createAbilitySectionText(
								'The targets take their turn immediately. Each target gains an edge on abilities until the end of their turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-9-feature-3',
					name: 'Into the Green',
					description: 'The guerrilla can attempt to hide at the end of each of their turns.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-9-feature-4',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the guerrilla that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-10',
			name: 'Wode Elf Gweiadur',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Artillery),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 10,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 40,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-10-feature-1',
						name: 'Snare Bow',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 damage',
									tier2: '11 damage',
									tier3: '14 damage; A<2 restrained (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText('The gweiadur shifts up to 3 squares.'),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'If this ability restrains the target, one enemy adjacent to the target is also restrained (save ends).',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-10-feature-2',
						name: 'You Activated My Trap!',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 10,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 damage; R<0 the target is marked (save ends)',
									tier2: '6 damage; R<1 slowed and the target is marked (save ends)',
									tier3: '9 damage; R<2 slowed and the target is marked (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Allies gain an edge on abilities against a target marked by any wode elf.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-10-feature-3',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the gweiadur that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-11',
			name: 'Wode Elf Sentry',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Support),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 30,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-11-feature-1',
						name: 'Tracer Longbow',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 damage',
									tier2: '7 damage',
									tier3: '9 damage; the target is marked (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Allies gain an edge on abilities against a target marked by any wode elf.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The sentry targets two additional creatures or objects.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-11-feature-2',
						name: 'Death Blossom',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 2,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each marked enemy',
						sections: [ElementFactory.createAbilitySectionText('Each target takes 3 damage.')],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-11-feature-3',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the sentry that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-12',
			name: 'Wode Elf Warleader',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 20,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'teleport'),
			stamina: 120,
			stability: 2,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(2, 3, 2, 2, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-12-feature-1',
						name: 'Wodeblade',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
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
									bonus: 3,
									tier1: '8 damage; M<1 restrained (save ends)',
									tier2: '12 damage; M<2 restrained (save ends)',
									tier3: '15 damage; M<3 restrained (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The warleader can teleport up to 3 squares between each strike.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'A target restrained by this ability takes an extra 3 damage.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-12-feature-2',
						name: 'Fairness Is a Human Concept',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 5,
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 10 }),
						],
						target: 'Each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each non-minion target can make a free strike, then each target shifts up to 3 squares. A target who has cover or concealment at the end of this shift can attempt to hide at the end of the warleader’s turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-12-feature-3',
						name: 'Wode Sickness',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally ends their turn.'),
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One enemy',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target must not have taken their turn this round. The target takes their turn immediately, and if they have P<2 they are bleeding and take a bane on strikes until the end of their turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-12-feature-4',
					name: 'End Effect',
					description:
						'At the end of each of their turns, the warleader can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can’t be reduced in any way.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-12-feature-5',
					name: 'Into the Green',
					description: 'The warleader can attempt to hide at the end of each of their turns.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-12-feature-6',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the warleader that would take a bane from cover or concealment have a double bane instead.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-12-feature-7',
						name: 'You Will All Witness My Blade',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The warleader uses Wodeblade against each target and gains an edge on the power roll.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-12-feature-8',
						name: 'Suppressing Volley',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The warleader can use Wodeblade. Each target can then make a free strike.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-12-feature-9',
						name: 'Is It Now or Is It Then?',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Self and each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target is invisible until the start of the next round. The warleader then uses Wodeblade.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-wode-13',
			name: 'Wodenelg',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Mount),
			keywords: ['Plant', 'Wode Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(10),
			stamina: 30,
			stability: 1,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(2, 1, -1, 0, -1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-13-feature-1',
						name: 'Gore',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 damage',
									tier2: '7 damage',
									tier3: '9 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The wodenelg’s rider can make a free strike at any point during the charge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-13-feature-2',
					name: 'Sure Footed',
					description:
						'The wodenelg ignores difficult terrain and doesn’t provoke opportunity attacks by moving.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-wode-13-feature-3',
						name: 'Where I End the Woods Begin',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The wodenelg and their rider become invisible until the start of the wodenelg’s next turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-13-feature-4',
					name: 'Mounted Stability',
					description: 'The wodenelg’s rider has damage immunity 2.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-wode-13-feature-5',
					name: 'Shared Glamor',
					description:
						'If the wodenelg’s rider has the Masking Glamor trait, the wodenelg also has that trait.',
				}),
			],
		}),
	],
	addOns: [],
};
