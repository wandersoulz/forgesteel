import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { DamageModifierType } from '../../core/enums/damage-modifier-type';
import { DamageType } from '../../core/enums/damage-type';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const voicelessTalker: MonsterGroupInterface = {
	id: 'monster-group-voiceless-talker',
	name: 'Voiceless Talker',
	description:
		'Among the most powerful psions in the timescape, synlirii (*sin-LEER-ee*, singular: synliroi) are known as the “voiceless talkers” to the denizens of the World Below—and to surface dwellers unfortunate enough to encounter them. Descended from boneless aquatic cephalopods, they are alien in thought and motivation to the humanoid species they loathe. Synlirii consider the “barking ones” (their label for creatures who squeeze air through meat flaps to communicate) an abomination that must be corrected.',
	picture: null,
	information: [
		{
			id: 'voiceless-talker-info-1',
			name: 'Uneasy Alliances',
			description:
				'Though synlirii and overminds are hereditary enemies, their mutual obsession with the barking ones often leads to uneasy alliances. Both synlirii and overminds employ humanoids from the World Below as agents, trading lore and technology for information on their surface foes.',
		},
		{
			id: 'voiceless-talker-info-2',
			name: 'Olothec Hatred',
			description:
				'The synlirii’s visceral antipathy toward the barking ones is surpassed only by their deep enmity toward (and fear of) olothec. Ancient myths say that the olothec created both synlirii and overminds. To overminds, this is a harmless fable. But synlirii, who style themselves as the future masters of the timescape, rage against implications that their powers come from any source other than their own superior development.',
		},
		{
			id: 'voiceless-talker-info-3',
			name: 'Psionic Spies',
			description:
				'Despite their mental powers, voiceless talkers consider information their greatest weapon. They use their psionic talents to manipulate memory and perception, obscure their forms, and pass undetected among other cultures.',
		},
		{
			id: 'voiceless-talker-info-4',
			name: 'Psi-Tech',
			description:
				'Synlirii breed mollusks that secrete plastic-like substances, using them to fashion weapons and similar technology powered by psionic crystals. The voiceless talkers’ handheld psionic pistols and portable psionic rifles can be used only by their alien minds.',
		},
		{
			id: 'voiceless-talker-info-5',
			name: 'Creature Engineers',
			description:
				'Synlirii are obsessed with manipulating the natural development of other organisms. They create hulking brains, mindkillers, and other servants using a psionic technique they call the Interlace. Many synlirii experiments don’t live long and aren’t intended to. But the World Below is littered with unnatural creatures who escaped the voiceless talkers’ Body Banks—most of them singular life forms who can’t reproduce and might never die.',
		},
		{
			id: 'voiceless-talker-info-6',
			name: 'Graywarper',
			description:
				'Graywarpers are voiceless talkers who were drained of most of their psionic abilities—and free will—as punishment for insolence or incompetence. They are viewed solely as expendable tools who enhance the power of other voiceless talkers.',
		},
		{
			id: 'voiceless-talker-info-7',
			name: 'Hulking Brain',
			description:
				'The voiceless talkers have engineered pearlescent-skinned, humanoid-shaped horrors with four massive arms and a large pulsing brain in place of a head. Called thylinça by voiceless talkers and hulking brains by everyone else, these creatures serve as bodyguards and psionic batteries for their synlirii creators.',
		},
		{
			id: 'voiceless-talker-info-8',
			name: 'Mindkiller',
			description: `Floating clawed brains with a trailing spinal column and nerves, mindkillers serve as the voiceless talkers’ pets and lackeys. These amorphous parasites can force themselves into a humanoid’s body through the ear, eye, or nose, then devour the victim’s central nervous system while replacing it with their own tissue. When the process is complete, the mindkiller gains all the victim’s knowledge and memories and can puppet their body, becoming the perfect spy for the mindkiller’s synlirii overlords.

Mindkiller whelps are a lesser form of mindkiller who can be created in a fraction of the time. While they can’t inhabit bodies, their mere presence weakens their foes’ mental defenses against psionics.`,
		},
		{
			id: 'voiceless-talker-info-9',
			name: 'Voiceless Talker Languages',
			description: 'Most voiceless talkers communicate telepathically using Mindspeech and speak Variac.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'voiceless-talker-malice-1',
			name: 'Guise',
			cost: 3,
			icon: StatBlockIcon.Self,
			sections: [
				'One non-minion voiceless talker projects a psionic screen over their body, preventing other creatures from treating them as an enemy until the end of the voiceless talker’s next turn.',
			],
		}),
		ElementFactory.FeatureFactory.createMaliceAbility({
			ability: ElementFactory.createAbility({
				id: 'voiceless-talker-malice-2',
				name: 'Memory Thief',
				type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Non-minion'] }),
				cost: 5,
				keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
				distance: [ElementFactory.DistanceFactory.createRanged(5)],
				target: 'One creature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							bonus: 3,
							tier1: '6 psychic damage; R<1 target cannot identify allies as allies (save ends)',
							tier2: '10 psychic damage; R<2 target identifies allies as enemies (save ends)',
							tier3: '13 psychic damage; R<3 target identifies allies as enemies (save ends)',
						})
					),
					ElementFactory.createAbilitySectionField({
						name: 'Special',
						effect: 'This ability can’t be used by a minion.',
					}),
				],
			}),
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'voiceless-talker-malice-3',
			name: 'Evolutionary Circuit',
			cost: 10,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'All voiceless talkers link their minds, creating a circuit that empowers them while two or more voiceless talkers remain in the encounter. While this circuit is active, any psionic strike made by a voiceless talker deals an extra 5 damage. Additionally, when a non-minion voiceless talker takes damage, they can use a free triggered action to swap places with any voiceless talker minion on the encounter map. The minion takes the damage instead.',
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'voiceless-talker-1',
			name: 'Voiceless Talker Graywarper',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Controller),
			keywords: ['Horror', 'Voiceless Talker'],
			encounterValue: 8,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 9,
			stability: 0,
			freeStrikeDamage: 3,
			withCaptain: '+2 bonus to Stamina',
			characteristics: ElementFactory.createCharacteristics(-1, 0, 3, 1, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-1-feature-1',
						name: 'Phase Chant',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(8)],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 psychic damage',
									tier2: '5 psychic damage; slide 2',
									tier3: '7 psychic damage; slide 4',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-1-feature-5',
					name: 'Psionic Conductor',
					description:
						'Whenever a non-minion voiceless talker within 5 squares of the graywarper uses a psionic ability, they can do so as if they were in the graywarper’s space.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'voiceless-talker-2',
			name: 'Mindkiller Whelp',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Hexer),
			keywords: ['Horror', 'Voiceless Talker'],
			encounterValue: 8,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(4, 'fly, hover'),
			stamina: 9,
			stability: 0,
			freeStrikeDamage: 3,
			withCaptain: '+2 damage bonus to strikes',
			characteristics: ElementFactory.createCharacteristics(-1, 3, 1, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'voiceless-talker-2-feature-3',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 6,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-2-feature-1',
						name: 'Eager Claws',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 damage',
									tier2: '5 damage; the target takes a bane on their next strike',
									tier3: '7 damage; the target takes a bane on their next strike',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-2-feature-2',
						name: 'Feast',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The whelp reduces a non-minion creature to 0 Stamina'
						),
						keywords: [AbilityKeyword.Psionic],
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The whelp transforms into a **mindkiller** whose Stamina equals their squad’s Stamina pool before transforming. The Stamina pool then loses the whelp’s Stamina.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-1-feature-5',
					name: 'Psionic Conductor',
					description:
						'Whenever a non-minion voiceless talker within 5 squares of the whelp uses a psionic ability, they can do so as if they were in the whelp’s space.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'voiceless-talker-3',
			name: 'Hulking Brain',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Brute),
			keywords: ['Horror', 'Voiceless Talker'],
			encounterValue: 32,
			size: ElementFactory.createSize(1, 'L'),
			speed: ElementFactory.createSpeed(5),
			stamina: 180,
			stability: 4,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(3, 1, -2, -2, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-3-feature-1',
						name: 'Four-Way Grasp',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Four creatures or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '7 damage',
									tier2: '10 damage; A<2 grabbed',
									tier3: '11 damage; A<3 grabbed',
								})
							),
							ElementFactory.createAbilitySectionField({
								name: 'Special',
								effect: 'The hulking brain can have up to four size 1 creatures grabbed.',
							}),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The potency increases by 1.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-3-feature-2',
						name: 'Cerebral Suplex',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Each enemy',
						sections: [
							ElementFactory.createAbilitySectionText(
								'A target must be grabbed by the hulking brain, and is no longer grabbed after the power roll is resolved.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '7 damage; M<1 3 damage',
									tier2: '10 damage; M<2 3 damage',
									tier3: '13 damage; M<3 6 damage',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-3-feature-3',
						name: 'Lumber',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The hulking brain shifts up to 4 squares, ignoring difficult terrain.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-3-feature-4',
						name: 'Brawny Buffer',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An ally voiceless talker within 5 squares takes damage from an enemy ability.',
							{ free: true, qualifiers: [] }
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText(
								'The hulking brain shifts to a square adjacent to the ally and takes the damage instead.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The enemy is knocked prone.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-3-feature-6',
					name: 'Psionic Conductor',
					description:
						'Whenever a non-minion voiceless talker within 5 squares of the hulking brain uses a psionic ability, they can do so as if they were in the hulking brain’s space.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'voiceless-talker-4',
			name: 'Mindkiller',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Hexer),
			keywords: ['Horror', 'Voiceless Talker'],
			encounterValue: 32,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(6, 'fly, hover'),
			stamina: 140,
			stability: 2,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(-1, 3, 3, 2, 0),
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'qqRknE96pIBK9FRK',
					name: 'Brain Latch',
					description:
						'The mindkiller can grab creatures who are size 4 or smaller, using their Reason score in place of Might. A creature grabbed by the mindkiller takes a bane on ability rolls made to escape the grab.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-4-feature-1',
						name: 'Killer Claws',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '11 damage',
									tier2: '17 damage; A<2 grabbed',
									tier3: '21 damage; A<3 grabbed',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-4-feature-2',
						name: 'Concealing Strike',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Two creatures',
						cost: 2,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '10 damage; R<1 the mindkiller is invisible to the target (save ends)',
									tier2: '15 damage; R<2 the mindkiller is invisible to the target (save ends)',
									tier3: '18 damage; R<3 the mindkiller is invisible to the target (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-4-feature-3',
						name: 'Mindwipe',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target must be grabbed by the mindkiller. If the target has `R<2`, they take a −1 penalty to their Reason, Intuition, or Presence score and the mindkiller has a +1 bonus to the same score, all until the end of the encounter.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-4-feature-4',
						name: 'Meat Shield',
						type: ElementFactory.AbilityTypeFactory.createTrigger('The mindkiller takes damage.'),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The mindkiller halves the damage. If the mindkiller has a creature grabbed, that creature takes the other half of the damage.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'A grabbed creature takes the damage instead of the mindkiller.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-4-feature-5',
					name: 'Psionic Conductor',
					description:
						'Whenever a non-minion voiceless talker within 5 squares of the mindkiller uses a psionic ability, they can do so as if they were in the mindkiller’s space.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-4-feature-6',
					name: 'Nimble',
					description: 'The mindkiller can move through enemies’ spaces at their usual speed.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'voiceless-talker-4-feature-7',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 6,
						}),
					],
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'voiceless-talker-5',
			name: 'Voiceless Talker Artillerist',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Artillery),
			keywords: ['Horror', 'Voiceless Talker'],
			encounterValue: 32,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'hover, teleport'),
			stamina: 140,
			stability: 2,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(0, 3, 3, 2, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-5-feature-1',
						name: 'Psionic Rifle Burst',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [
							AbilityKeyword.Psionic,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '11 damage',
									tier2: '19 damage; the strike spreads 1 square',
									tier3: '22 damage; the strike spreads 2 squares',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The strike’s spread is the distance it expands from a target to nearby enemies. Each enemy within that distance takes 3 damage.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'Each enemy within the strike spread takes an extra 3 damage.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-5-feature-2',
						name: 'Mind Jolt',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Line,
								value: 1,
								value2: 10,
								within: 10,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '6 lightning damage',
									tier2: '10 lightning damage; I<2 slowed (save ends)',
									tier3: '13 lightning damage; I<3 slowed (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-5-feature-3',
						name: 'In Our Sights',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the start of the artillerist’s next turn, the next psionic ability used against the target automatically treats its initial power roll as a 17. The creature using the ability can still roll to determine if they score a critical hit.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-5-feature-4',
						name: 'Tactical Reposition',
						type: ElementFactory.AbilityTypeFactory.createTrigger('The artillerist takes damage.'),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText(
								'The artillerist can teleport up to 5 squares and ignores any effects associated with the damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-5-feature-5',
					name: 'Psionic Conductor',
					description:
						'Whenever a non-minion voiceless talker within 5 squares of the artillerist uses a psionic ability, they can do so as if they were in the artillerist’s space.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-5-feature-6',
					name: 'Locked On',
					description:
						'The artillerist ignores invisibility, cover, and concealment. A creature can’t hide from the artillerist while the artillerist has line of effect to them.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'voiceless-talker-5-feature-7',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 6,
						}),
					],
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'voiceless-talker-6',
			name: 'Voiceless Talker Invader',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Controller),
			keywords: ['Horror', 'Voiceless Talker'],
			encounterValue: 32,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'hover, teleport'),
			stamina: 140,
			stability: 2,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(-1, 1, 3, 2, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-6-feature-1',
						name: 'Tentacle',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'Two creature or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '10 damage',
									tier2: '15 damage; M<2 grabbed',
									tier3: '18 damage; M<3 grabbed',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-6-feature-2',
						name: 'Psionic Boom',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '6 psychic damage; R<1 push 2',
									tier2: '10 psychic damage; R<2 push 3',
									tier3: '12 psychic damage; R<3 push 4 and prone',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The size of the burst increases to 5.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-6-feature-3',
						name: 'Tentacle Toss',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText('The target must be grabbed by the invader.'),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '6 damage; vertical slide 2',
									tier2: '10 damage; vertical slide 2',
									tier3: '12 damage; vertical slide 3',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-6-feature-4',
						name: 'Brain Drain',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature grabbed by the invader resists an ability’s potency.'
						),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Psionic],
						distance: [ElementFactory.DistanceFactory.createSpecial('')],
						target: 'The triggering creature',
						sections: [ElementFactory.createAbilitySectionText('The potency increases by 2.')],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-6-feature-5',
					name: 'Psionic Amplifier',
					description:
						'Whenever a non-minion voiceless talker within 5 squares of the invader uses a psionic ability, they can do so as if they were in the invader’s space, and the ability has a double edge',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'voiceless-talker-6-feature-6',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 6,
						}),
					],
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'voiceless-talker-7',
			name: 'Voiceless Talker Evolutionist',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Horror', 'Voiceless Talker'],
			encounterValue: 32,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'hover, teleport'),
			stamina: 180,
			stability: 2,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(0, 3, 4, 1, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-7-feature-1',
						name: 'Psionic Intrusion',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [
							AbilityKeyword.Melee,
							AbilityKeyword.Psionic,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(),
							ElementFactory.DistanceFactory.createRanged(5),
						],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '11 psychic damage; R<2 slowed (save ends)',
									tier2: '16 psychic damage; R<3 slowed (save ends)',
									tier3: '19 psychic damage; R<4 slowed (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-7-feature-2',
						name: 'Carpe Quadratum',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The evolutionist teleports to swap places with the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-7-feature-3',
						name: 'Adaptability',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The evolutionist takes damage that has a damage type.'
						),
						keywords: [AbilityKeyword.Psionic],
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the start of their next turn, the evolutionist has damage immunity 5 to the triggering damage type.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-7-feature-4',
					name: 'End Effect',
					description:
						'At the end of each of their turns, the evolutionist can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can’t be reduced in any way.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'voiceless-talker-7-feature-5',
					name: 'Witness Evolutionary Superiority',
					description:
						'The evolutionist has any trait of the Director’s choice from any ally minion in the encounter.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'voiceless-talker-7-feature-7',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 8,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-7-feature-8',
						name: 'Show Me Who You Are',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText('Each target makes an **Intuition test**.'),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: Characteristic.Intuition,
									tier1: 'The target uses a signature ability against the nearest enemy within distance.',
									tier2: 'The target makes a free strike against the nearest enemy within distance.',
									tier3: 'Frightened (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-7-feature-9',
						name: 'Release the Thralls',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The evolutionist teleports eight minions of level 4 or lower into unoccupied spaces within distance. All eight minions can be of any monster type but must share the same name.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'voiceless-talker-7-feature-10',
						name: 'Brainstorm',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '7 lightning damage',
									tier2: '12 lightning damage',
									tier3: '15 lightning damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the end of the encounter, the evolutionist is surrounded by a psionic electrical storm that is a 5 aura. The area is difficult terrain for enemies, and any enemy who enters the area for the first time in a round or starts their turn there takes 8 lightning damage.'
							),
						],
					}),
				}),
			],
		}),
	],
	addOns: [],
};
