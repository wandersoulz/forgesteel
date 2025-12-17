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

export const elfHigh: MonsterGroupInterface = {
	id: 'monster-group-elf-high',
	name: 'Elf, High',
	description:
		'The children of the solar celestials, the high elves were created to tend to the sun elves as librarians and heralds. Now they sequester themselves away from the world amid the fallen cities of the sky elves, remembering a better age, before the arrival of humans and war to the world made the high elves who they are today.',
	picture: null,
	information: [
		{
			id: 'elf-high-info-1',
			name: 'Glamorous',
			description:
				'The high elves hold an unwavering poise worthy of a noble background. They also emit a glamor that allows them to take on physical features and aspects of personality as they desire. Each person sees this glamor slightly differently, emphasizing some details over others based on one’s own values and fascinations.',
		},
		{
			id: 'elf-high-info-2',
			name: 'Loremasters',
			description: `
The adage “knowledge is power” is a rough translation of an ancient Hyrallic saying. A closer translation is “knowledge before power.” High elves believe knowledge is the pursuit from which all good things flow: life, power, legacy.

In their ruined towers, they study ancient history and magic thought long extinct. They revive dead spells and languages and manipulate their use to suit their means. High elves can use this magic for wondrous creations. They can also use it to kill by lifting a finger.`,
		},
		{
			id: 'elf-high-info-3',
			name: 'Elemental Summoners',
			description: `
Through their studies of ancient magic, many high elves have cultivated a strong bond to elemental creatures and can call upon their aid. In service to high elves, soot crows scout from the sky, living vine walls called brambleguards create labyrinthine barricades, and ceramic horses provide fast transport over long distances.

Many high elves can also summon magical wisps called elemental motes. These sprites enervate their foes against high elf magic and revive fallen elementals in a brilliant flash by sacrificing their own energy.`,
		},
		{
			id: 'elf-high-info-4',
			name: 'Surround and Suppress',
			description:
				'Foes who threaten high elf armies are dealt with quickly and entirely. High elves take advantage of each other’s magic to corral enemies together and throw huge waves of destruction upon them. The more exposure a victim has to high elf magic, the more effective that magic is in destroying them. High elf wyrds ensure there’s no escape, warping the environment into treacherous pits—and eventually, graveyards.',
		},
		{
			id: 'elf-high-info-5',
			name: 'Magical Manipulation',
			description: `
The high elves practice a tradition of group-casting magic that empowers their abilities as more elves participate. This enables them to extend their spells farther, sometimes even miles away from the caster when an entire platoon works in unison.

Many high elves have also collected extensive libraries of tomes over the centuries. Even on the battlefield, an elf can turn to a book to transform a mundane weapon volley into a magical one.`,
		},
		{
			id: 'elf-high-info-6',
			name: 'The Unseen Hands',
			description:
				'The Unseen Hands is a sect of high elf radicals who believe they have stumbled upon sky elf texts detailing their downfall at the hands of the sun elves. The story surrounding their purported discoveries has twisted into a narrative decrying modern society for benefiting from the lore accumulated in service to the sun elves. The sect hides among high elf society in plain sight, slowly manipulating nobles as they attempt to dismantle that society and plunge the world into anarchy.',
		},
		{
			id: 'elf-high-info-7',
			name: 'The Ordinator',
			description:
				'Being in the presence of a high elf ordinator inspires an ancient fear in those who know high elf history. Occupying a position of both military and clerical authority, an ordinator is capable of focusing a force of high elves to precisely strike an arrow’s tip from the other end of the battlefield. These spellcasters are among the most studied elves in their communities and courts, and their strategic minds are matched only by their affinity with elementals. The ordinator is not only an illuminating beacon of command for their platoon; they are a spiritual beacon of hope for their people.',
		},
		{
			id: 'elf-high-info-8',
			name: 'High Elf Languages',
			description: 'Most high elves speak Caelian and Hyrallic, with some also speaking Yllyric.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'elf-high-malice-1',
			name: 'Chaincast',
			cost: 3,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'Until the end of the round, whenever a high elf uses a magic ability, they can use it as if they were occupying the square of another high elf on the encounter map to whom they have line of effect.',
			],
		}),
		ElementFactory.FeatureFactory.createMaliceAbility({
			ability: ElementFactory.createAbility({
				id: 'elf-high-malice-2',
				name: 'Gift From an Accursed Tome',
				type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Non-minion'] }),
				cost: 5,
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [
					ElementFactory.DistanceFactory.create({
						type: AbilityDistanceType.Line,
						value: 5,
						value2: 1,
						within: 1,
					}),
				],
				target: 'Each enemy in the area',
				sections: [
					ElementFactory.createAbilitySectionText(
						'The high elf chooses a damage type and condition from one of the following combinations: cold damage and slowed, poison damage and weakened, or corruption damage and frightened.'
					),
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							bonus: 2,
							tier1: '5 damage; R<1 chosen condition (save ends)',
							tier2: '9 damage; R<2 chosen condition (save ends)',
							tier3: '12 damage; R<3 chosen condition (save ends)',
						})
					),
					ElementFactory.createAbilitySectionText('**Special:** This ability can’t be used by a minion.'),
				],
			}),
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'elf-high-malice-3',
			name: 'In Defiance of Time',
			cost: 7,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'Until the end of the round, each high elf in the encounter gains a +4 bonus to speed, and whenever a high elf uses an ability against an enemy, each high elf adjacent to that enemy can make a free strike against them.',
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'elf-high-1',
			name: 'Elemental Mote',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Hexer),
			keywords: ['Elemental', 'High Elf', 'Soulless'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'T'),
			speed: ElementFactory.createSpeed(5, 'fly'),
			stamina: 3,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: '+2 bonus to speed',
			characteristics: ElementFactory.createCharacteristics(0, 0, 0, 0, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-1-feature-1',
						name: 'Dweomer Plume',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 damage',
									tier2: '2 damage; R<1 damage weakness 3 (save ends)',
									tier3: '3 damage; R<2 damage weakness 3 (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-1-feature-2',
					name: 'Spark of Life',
					description:
						'On their turn, the mote can leave the encounter in a flash of light to revive one adjacent dead soot crow, brambleguard, or ceramic horse. The revived creature returns with 3 Stamina.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-2',
			name: 'High Elf Dawn Mage',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Controller),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 3,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: '+5 bonus to ranged distance',
			characteristics: ElementFactory.createCharacteristics(0, 0, 2, -1, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-2-feature-1',
						name: 'Bright Bolt',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 holy damage',
									tier2: '2 holy damage',
									tier3: '3 holy damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the start of the dawn mage’s next turn, the target can’t hide.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-2-feature-2',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the dawn mage can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-3',
			name: 'High Elf Quiver',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Artillery),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 3,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: '+5 bonus to ranged distance',
			characteristics: ElementFactory.createCharacteristics(0, 2, 1, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-3-feature-1',
						name: 'Heavy Arrow',
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
								'Each ally adjacent to the target shifts up to 2 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-3-feature-2',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the quiver can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-4',
			name: 'Soot Crow',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Elemental', 'High Elf'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'T'),
			speed: ElementFactory.createSpeed(7, 'fly'),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: 'Gain an edge on strikes',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-4-feature-1',
						name: 'Heckle',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 damage',
									tier2: '2 damage',
									tier3: '3 damage; taunted (EoT)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the end of their turn, the soot crow ignores opportunity attacks from the target.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-5',
			name: 'Brambleguard',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Defender),
			keywords: ['Elemental', 'High Elf'],
			encounterValue: 8,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(4),
			stamina: 59,
			stability: 3,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(2, 0, 0, 0, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-5-feature-1',
						name: 'Wall of Roses',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [ElementFactory.DistanceFactory.createSpecial('Special; see below')],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the start of the brambleguard’s next turn, their speed is 0 and they extend themself into a 5 wall. Each ally who starts their turn adjacent to the brambleguard regains 5 Stamina and can apply the Magic keyword to their weapon abilities until the end of their turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-5-feature-2',
						name: 'Whip Frenzy',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 damage',
									tier2: '7 damage; push 3',
									tier3: '10 damage; push 3; A<2 bleeding (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-5-feature-3',
					name: 'Thicket and Thorns',
					description:
						'The brambleguard blocks line of effect for enemies. Each enemy who starts their turn adjacent to a brambleguard takes 4 damage.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-6',
			name: 'High Elf Bloodletter',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Ambusher),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 30,
			stability: 0,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-6-feature-1',
						name: "Razor's Edge",
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
									tier3: '12 damage; R<2 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The bloodletter and each of their allies has a double edge on abilities targeting a creature bleeding this way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-6-feature-2',
						name: 'Blood Haze',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 2,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the end of the next round, a cloud of blood vapor fills the area. The cloud blocks line of effect for enemies, and any enemy has damage weakness 3 while in the area. The bloodletter can then shift up to their speed, and can attempt to hide if they end that shift with concealment.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-6-feature-4',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the bloodletter can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-7',
			name: 'High Elf Deathtouch',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Artillery),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 8,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 30,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(2, 0, 1, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-7-feature-1',
						name: 'Heartpiercer',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 damage',
									tier2: '10 damage',
									tier3: '13 damage; R<1 bleeding (save ends); I<1 frightened (save ends); P<1 restrained (save ends)',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 5,
								effect: 'The ability takes the Area keyword and loses the Strike keyword, its distance becomes a 3 cube within 10, and it targets each enemy in the area.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-7-feature-2',
						name: 'Kiss of Death',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One willing ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target has a +5 bonus to speed and automatically obtains a tier 3 outcome on power rolls. They can still roll to determine if they score a critical hit. At the end of their next turn, the target immediately dies.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-7-feature-3',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the deathtouch can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-8',
			name: 'High Elf Orbweaver',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Hexer),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 10,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 40,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(0, 0, 2, 2, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-8-feature-1',
						name: 'Awash',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 1,
							}),
						],
						target: 'Each creature in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 cold damage; M<0 push 3',
									tier2: '6 cold damage; M<1 push 4 or prone',
									tier3: '9 cold damage; M<2 slide 5 or prone',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-8-feature-2',
						name: 'Aetherweb',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(8)],
						target: 'Two enemies or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 damage; R<0 slowed (save ends)',
									tier2: '8 damage; R<1 slowed (save ends)',
									tier3: '11 damage; R<2 restrained (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Each enemy within 3 squares of a target suffers the same potency effect as the target unless they are already adjacent to them, or if they immediately shift into an unoccupied space adjacent to the target (no action required).'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-8-feature-3',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the orbweaver can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-9',
			name: 'High Elf Palinode',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Support),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 30,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(0, 0, 0, 2, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-9-feature-1',
						name: 'Instill Regret',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(8)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '5 psychic damage',
									tier2: '7 psychic damage; I<1 weakened (save ends)',
									tier3: '9 psychic damage; I<2 weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The potency increases by 1. If the target is weakened this way at the end of the encounter, they can’t take a respite activity during their next respite.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-9-feature-2',
						name: 'Recall',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Two allies',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target can teleport to an unoccupied space adjacent to the palinode. The palinode and each target then gain 5 temporary Stamina.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-9-feature-3',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the palinode can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'elf-high-9-feature-4',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 5,
						}),
					],
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-10',
			name: 'High Elf Wyrd',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Controller),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 10,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 40,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(0, 1, 2, -1, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-10-feature-1',
						name: 'Twystrd',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 1,
								within: 5,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: 'Vertical push 3',
									tier2: 'Vertical push 5',
									tier3: 'Vertical push 6',
								})
							),
							ElementFactory.createAbilitySectionText(
								'For each elemental mote adjacent to the wyrd, the size of the cube increases by 1.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-10-feature-2',
						name: 'Summon Elemental',
						cost: 2,
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The wyrd summons two **elemental motes** or two **soot crows** into unoccupied spaces within distance.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-10-feature-3',
						name: 'Wyrd Warp',
						cost: 2,
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Wall,
								value: 8,
								within: 8,
							}),
						],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The wyrd shapes the land in the area as if it were loose clay, either raising the ground or pushing it down to create a trench. Any creature in the area moves with the terrain to its new higher elevation, or falls if the ground is lowered beneath them.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-10-feature-4',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the wyrd can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'elf-high-10-feature-5',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 5,
						}),
					],
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-11',
			name: 'High Elf Zephyr',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Harrier),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
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
						id: 'elf-high-11-feature-1',
						name: 'Sweeping Blade',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
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
								'On a tier 3 outcome, the zephyr can make a free strike against a creature adjacent to the target. If they do so and that creature and the target both have A<2, the creature and the target are both prone. On any tier outcome, the zephyr can then shift up to 2 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-11-feature-2',
						name: 'Windwalk',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The zephyr flies up to their speed. If they don’t end this movement on solid ground, they are prone.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-11-feature-3',
					name: 'Like the Wind',
					description: 'The zephyr doesn’t provoke opportunity attacks by moving.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-11-feature-4',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the zephyr can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-12',
			name: 'High Elf Ordinator',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 20,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'fly'),
			stamina: 120,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(0, 2, 3, 2, 3),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-12-feature-1',
						name: 'Lightning Rod',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '9 lightning damage; R<1 dazed (save ends)',
									tier2: '14 lightning damage; R<2 dazed (save ends)',
									tier3: '17 lightning damage; R<3 dazed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the start of the ordinator’s next turn, each ally high elf in the encounter gains an edge on ability rolls against the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-12-feature-2',
						name: 'Elemental Uproar',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 10 }),
						],
						target: 'Each elemental ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target can move up to their speed or make a free strike. Elemental mote targets can, instead, use their Spark of Life trait.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-12-feature-3',
						name: 'Summon Elemental',
						cost: 2,
						repeatable: true,
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The ordinator summons four **elemental motes** or four **soot crows** into unoccupied space within distance.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The ordinator instead summons one **ceramic horse** or one winded **brambleguard** into an unoccupied space within distance.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-12-feature-4',
						name: 'Enough!',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An enemy within distance uses an ability against the ordinator or any ally within distance.'
						),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'The triggering enemy',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The ordinator uses Lightning Rod against the target after the ability is resolved.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-12-feature-5',
					name: 'Otherworldly Blessing',
					description:
						'At the start of each of their turns, the ordinator can choose one or more effects on them that can be ended by a saving throw. The effects instead end at the end of the ordinator’s turn.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-12-feature-6',
					name: 'Magic Beacon',
					description:
						'Whenever a high elf ordinator appears on an encounter map, the Chaincast Malice feature is improved and always active. When any elf uses a magic ability as if they were in the ordinator’s space, that ability has a double edge.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-12-feature-7',
						name: 'Fountains Roar, Now Free From the Earth',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 10 }),
						],
						target: 'Each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target glows briefly, and can end one effect on themself, then move up to their speed.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-12-feature-8',
						name: 'And the Sun Forsook Her Children',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 5,
								within: 10,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText('Each target makes a **Presence test**.'),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: Characteristic.Presence,
									tier1: '12 corruption damage; pull 5 towards the center of the cube',
									tier2: '9 corruption damage; pull 3 towards the center of the cube',
									tier3: 'Pull 1 towards the center of the cube',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The area turns dark and distorted, and is difficult terrain for enemies.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-12-feature-9',
						name: 'But We Will Change Her Mind.',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 10 }),
						],
						target: 'Self and each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target’s free strike now has the Magic keyword and can target two creatures or objects. Additionally, each target glows with magic.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-high-13',
			name: 'Ceramic Horse',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Mount),
			keywords: ['Elemental', 'High Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(10),
			stamina: 30,
			stability: 2,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(2, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-13-feature-1',
						name: 'Elemental Charge',
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
									tier2: '7 fire damage',
									tier3: '9 lightning damage; M<2 prone',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-13-feature-2',
						name: 'Stomp',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText('Any target who is prone takes an extra 2 damage.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-high-13-feature-3',
						name: 'Buck',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 2,
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: "The horse's rider",
						sections: [
							ElementFactory.createAbilitySectionText(
								'The horse vertical slides the target up to 3 squares, ignoring stability. The target can use a ranged ability at any point during this forced movement, and takes no damage if they then fall.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-high-13-feature-4',
					name: 'Shared Otherworldly Grace',
					description:
						'If the ceramic horse’s rider has the Otherworldly Grace trait, the ceramic horse also has that trait.',
				}),
			],
		}),
	],
	addOns: [],
};
