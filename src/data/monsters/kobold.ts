import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { DamageModifierType } from '../../core/enums/damage-modifier-type';
import { DamageType } from '../../core/enums/damage-type';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const kobold: MonsterGroupInterface = {
	id: 'monster-group-kobold',
	name: 'Kobold',
	description:
		'Kobold communities, called legions, are found in every biome and across the timescape. Gravitating toward powerful allies and defensible locations, kobolds are equally common in walled cities, secluded temples, subterranean tunnel-mazes, and dragon lairs. Most legions strive to be good neighbors or to go entirely unnoticed, but when a community falls under the sway of a malevolent wyrm or power-hungry kobold centurion, they can pose a significant threat.',
	picture: null,
	information: [
		{
			id: 'kobold-info-1',
			name: 'Defensive Masters',
			description: `
In a world filled with bigger, hungrier creatures, kobolds survived by becoming experts in collective defense. Kobold shield tactics are legendary, with every warrior carrying a shield into battle and soldiers defending each other in tightly choreographed formations. More than a tool, a kobold’s shield is a symbol of their commitment to defending their legion, and they decorate these treasured possessions with battle trophies and illustrations of great deeds.

Kobold legionaries might join worthy adventurers as retainers, lending their defensive prowess to their new allies as they ko-boldly go where no kobold has gone before.`,
		},
		{
			id: 'kobold-info-2',
			name: 'Unconventional Tactics',
			description:
				'Relentless innovators, kobolds can easily outsmart anyone who doesn’t take them seriously. Their foes haven’t experienced a true kobold battle until they survive exploding javelins or flaming nets. Kobold homes are protected with deadly hazards and ambush points. In open warfare, legions deploy iron dragons and flaming spike pit traps (see the Dynamic Terrain section).',
		},
		{
			id: 'kobold-info-3',
			name: 'Tiny Dragons',
			description:
				'Most kobolds believe their ancestors were created by powerful dragons—and with sharp, angular features and prominent dorsal crests, they certainly look the part! Newborn kobolds have brilliant, pearlescent scales, but as kobolds age, their scales dim and mottle. Owing to a deep magical connection, a legion that lives in the domain of a dragon adopts the color of that dragon’s scales over several generations.',
		},
		{
			id: 'kobold-info-4',
			name: 'Domain Expansion',
			description:
				'When kobolds settle into the domain of a dragon, they grow more like that dragon in other ways than just coloration. Some groups worship the dragon as a god. Others revere them as an ancestor or a leader, or admire them like a really, REALLY big sibling. This manifests as a desire to understand the dragon’s affinity so as to embody it. Kobolds see themselves as an extension of the domain, working with and for it. Meteor kobolds, for example, rely more on hanging traps. Bloodthirsty omen kobolds deny themselves material pleasures and might end up wasting away into little more than skeletons. It has been speculated that kobolds living in a domain influence the strength of the dragon’s hold on the territory.',
		},
		{
			id: 'kobold-info-5',
			name: 'Kobold and Dragon Symbiosis',
			description:
				'Most dragons are solitary creatures, but kobolds living in a dragon’s domain provide both parties with clear benefits. A dragon can establish their domain over an area in half the time if they allow kobolds to settle in the area as well. Meanwhile, a kobold who spends 1 week or more living in the domain of a dragon becomes immune to the hazardous and negative effects of that domain. The kobold’s physical appearance might also change the longer they stay in the area.',
		},
		{
			id: 'kobold-info-6',
			name: 'Terrain Mastery',
			description:
				'The kobolds’ affinity for their terrain, creative tactics, group defenses, and innovative spirit gives a kobold legion mastery of the area in which they live. Though they employ traps and tricks of their own creation, kobolds also know the ins and outs of nature’s traps. For example, a sagittarion might shoot at a nearby hive of angry bees instead of their opponent. If your kobold opponents retreat over desert sands or a frozen lake, don’t give chase. They likely know something you don’t about these terrain hazards.',
		},
		{
			id: 'kobold-info-7',
			name: 'Cute Pets',
			description:
				'The gummy brick is a deadly ooze—a monster shaped of acidic goo and driven by endless hunger. But when properly trained, kobolds find these mindless predators good company. They also love the company of shieldscale drangolins—draconic pangolins—who they train to dig residential tunnel networks, neutralize enemy fortifications, and burrow up into the center of an enemy camp with a dozen kobold minions at their side.',
		},
		{
			id: 'kobold-info-8',
			name: 'Kobold Languages',
			description: 'Most kobolds speak Kethaic and can understand Caelian.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'kobold-malice-1',
			name: 'Maniple Tactics',
			cost: 3,
			icon: StatBlockIcon.Trait,
			sections: [
				'Up to 3 kobolds make a free strike, swaps positions with an adjacent kobold, and then that kobold makes a free strike.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'kobold-malice-2',
			name: 'Set the Initiative',
			cost: 5,
			icon: StatBlockIcon.SpecialArea,
			sections: ['Two kobolds take their turns in a row.'],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'kobold-malice-3',
			name: 'Shield Wall',
			cost: 7,
			icon: StatBlockIcon.Trait,
			sections: [
				'Until the end of the round, all kobolds with Shield? Shield! Impose an additional bane on incoming strikes and abilities.',
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'kobold-1',
			name: 'Kobold Princeps',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Support),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: '+2 bonus to Stamina',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-1-feature-1',
						name: 'Hasta',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
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
								'One ally within 3 squares of the princeps shifts up to 2 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-1-feature-2',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the princeps has stability 1, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-2',
			name: 'Kobold Sagittarion',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Artillery),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 3,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: '+5 bonus to ranged distance',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-2-feature-1',
						name: 'Composite Bow',
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
								'While adjacent to any ally, the sagittarion gains an edge on this ability.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-2-feature-2',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the sagittarion has stability 1, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-3',
			name: 'Kobold Tiro',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Defender),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 5,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: '+1 bonus to speed',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-3-feature-1',
						name: 'Pugio',
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
									tier2: '2 damage; the tiro can shift 1 square',
									tier3: '3 damage; the tiro can shift 2 square',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The target can’t shift until the start of the tiro’s next turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-3-feature-2',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the tiro has stability 1, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-4',
			name: 'Kobold Veles',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(6),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: '+1 bonus to speed',
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-1-feature-1',
						name: 'Pilium',
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
									tier1: '1 damage',
									tier2: '2 damage',
									tier3: '3 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the start of the veles’s next turn, the target can’t make opportunity attacks against any kobold.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-1-feature-2',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the veles has stability 1, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-5',
			name: 'Kobold Adeptus',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Artillery),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 10,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(0, 1, 2, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-5-feature-1',
						name: 'Shocking Bolt',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 lightning damage',
									tier2: '6 lightning damage',
									tier3: '7 lightning damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While the target is adjacent to any enemy, the adeptus gains an edge on this ability. Each enemy adjacent to the target takes 2 lighting damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-5-feature-2',
						name: 'Arcane Telum',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'Three creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '6 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'This ability ignores banes, double banes, and damage immunity.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-5-feature-3',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the adeptus has stability 1, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-6',
			name: 'Kobold Artifax',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Controller),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 10,
			stability: 0,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(0, 2, 1, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-6-feature-1',
						name: 'Chain Hook',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '3 damage; pull 1',
									tier2: '4 damage; pull 2',
									tier3: '5 damage; pull 3',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If this forced movement triggers a trap that uses a power roll, that roll has a double edge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-6-feature-2',
						name: 'Activate Trap',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One trap or other terrain object',
						sections: [
							ElementFactory.createAbilitySectionText('The trap or terrain object instantly triggers.'),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The artifex places a new trap in the encounter and can instantly trigger it. The artifex prefers working with angry beehives, flammable oil, snare traps, and spike traps.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-6-feature-3',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the artifex has stability 1, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-7',
			name: 'Kobold Legionary',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Defender),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 20,
			stability: 0,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(2, 1, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-7-feature-1',
						name: 'Gladius',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '3 damage; taunted (EoT)',
									tier2: '4 damage; taunted (EoT)',
									tier3: '5 damage; taunted (EoT)',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'If the legionary is acting as a captain, they and each member of their squad shift up to 2 squares before this ability is used.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-7-feature-2',
						name: 'Shield Bash',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage; push 1; M<0 prone',
									tier2: '3 damage; push 2; M<1 prone',
									tier3: '4 damage; push 3; M<2 prone',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-7-feature-3',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the legionary has stability 1, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-8',
			name: 'Kobold Signifier',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Support),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 15,
			stability: 0,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(0, 1, 0, 0, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-8-feature-1',
						name: 'Signum',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '3 damage',
									tier2: '4 damage',
									tier3: '5 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'One ally within 10 squares of the signifer can shift up to their speed if they end that shift adjacent to an ally.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								repeatable: true,
								effect: 'One additional ally can shift for each 2 Malice spent.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-8-feature-2',
						name: 'Glory to the Legion',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 5,
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each ally in the area',
						sections: [ElementFactory.createAbilitySectionText('Each target regains 5 Stamina.')],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-8-feature-3',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the signifer has stability 1, has cover, and grants cover to allies.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-8-feature-4',
					name: 'Upholding High Standards',
					description:
						'Any ally who starts their turn within 5 squares of the signifer gains a +2 bonus to speed and a +2 damage bonus to strikes until the end of their turn. Additionally, if the signifer is killed, any kobold minion can enter their space during the same encounter to retrieve the signum battle standard they carry (no action required) and replace their stat block with the signifer stat block.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-9',
			name: 'Kobold Venator',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Ambusher),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 15,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-9-feature-1',
						name: 'Dolabra and Net',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 damage',
									tier2: '6 damage; M<1 restrained (save ends)',
									tier3: '7 damage; M<2 restrained (save ends)',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The venator lights their net on fire, and a target restrained this way takes 2 fire damage at the start of each of their turns.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-9-feature-2',
					name: 'Lost in the Crowd',
					description:
						'While the venator is adjacent to any ally who is not hiding, the venator can attempt to hide as if they had concealment, even if observed.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-9-feature-3',
					name: 'Not What I Seem',
					description:
						'The venator starts the encounter disguised as a minion. They have a double edge on their first main action of the encounter, after which they reveal themself.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-9-feature-4',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the venator has stability 1, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-trained-gelatinous-cube',
			name: 'Trained Gummy Brick',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Hexer),
			keywords: ['Kobold', 'Ooze', 'Soulless'],
			encounterValue: 12,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(5),
			stamina: 40,
			stability: 2,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(2, -1, -3, 0, -2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-trained-gelatinous-cube-feature-1',
						name: 'Engulf',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 acid damage; A < 0 dazed (save ends)',
									tier2: '10 acid damage; A < 1 dazed (save ends)',
									tier3: '14 acid damage; A < 2 restrained (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A size 2 or smaller creature restrained this way is pulled into the brick’s space, moves with the brick, and takes 4 acid damage at the start of each of their turns. An engulfed creature who is no longer restrained moves to the nearest unoccupied space adjacent to the brick. The brick can have as many creatures or objects engulfed as will fit within their space.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'This ability targets one additional target.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-trained-gelatinous-cube-feature-2',
						name: 'You Didn’t Pay Attention!',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature moves or is force moved adjacent to the brick.',
							{ free: true }
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The brick uses Engulf against the triggering creature and has a double edge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-trained-gelatinous-cube-feature-3',
					name: 'Translucent Brick',
					description:
						'The brick completely occupies their space, blocking line of effect for enemies. The brick is hidden until they act.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'kobold-trained-gelatinous-cube-feature-4',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Acid,
							modifierType: DamageModifierType.Immunity,
							value: 3,
						}),
					],
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-10',
			name: 'Kobold Centurion',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 80,
			stability: 2,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(2, 3, 2, 0, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-10-feature-1',
						name: 'Pilum',
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
							ElementFactory.DistanceFactory.createRanged(10),
						],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '7 damage; M<1 weakened (save ends)',
									tier2: '10 damage; M<2 weakened (save ends)',
									tier3: '13 damage; M<3 weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Each ally adjacent to a target can make a free strike against that target.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'While weakened this way, a target is also restrained.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-10-feature-2',
						name: 'Concentrate All Fire on That Hero!',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One enemy',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the start of the centurion’s next turn, the centurion and their allies gain an edge on power rolls against the target.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								repeatable: true,
								effect: 'This ability targets one additional target for each 3 Malice spent.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-10-feature-3',
						name: 'Testudo!',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature uses an ability that targets the centurion or an ally of the centurion within distance.'
						),
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target shifts up to 2 squares before the damage is resolved. Each kobold with the Shield? Shield! trait gains damage immunity 2 against the triggering ability.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-10-feature-4',
					name: 'End Effect',
					description:
						'At the end of each of their turns, the centurion can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can’t be reduced in any way.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-10-feature-5',
						name: 'Firetail Pilum',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						distance: [ElementFactory.DistanceFactory.createSpecial('Special')],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The centurion moves up to their speed, ignoring difficult terrain, and uses Pilum against each creature whose space they move through. They make one power roll against all targets, and the ability deals an extra 5 damage. While weakened by that ability, each target takes 2 fire damage at the start of each of their turns.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-10-feature-6',
						name: 'Boom Pilum!',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 5,
								within: 10,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The centurion uses Pilum against each target and has a double edge. Each target is then pushed up to 3 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-10-feature-7',
						name: 'Are You Not Entertained?',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 10 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'A target who has P<2 is taunted (save ends). Each ally within distance can make a free strike. Additionally, until the end of the encounter, the centurion has damage immunity 2.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-10-feature-8',
					name: 'Shield? Shield!',
					description:
						'While adjacent to an ally who also has this trait, the centurion has stability 3, has cover, and grants cover to allies.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'kobold-shieldscale-drangolin',
			name: 'Shieldscale Drangolin',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Brute),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 12,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(7, 'burrow'),
			stamina: 80,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(2, 1, -3, 0, -2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-shieldscale-drangolin-feature-1',
						name: 'Fiery Claws',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '7 fire damage',
									tier2: '10 fire damage',
									tier3: '13 fire damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'**Special:** If the drangolin is size 3, the distance becomes Melee 2.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-shieldscale-drangolin-feature-2',
						name: 'Drangolin Plume',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 5,
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The drangolin shifts up to their speed and uses Fiery Claws against each creature who comes adjacent to them during the shift. The drangolin makes one power roll against all targets.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kobold-shieldscale-drangolin-feature-3',
						name: 'Erupt',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 3,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each creature in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The drangolin uses the Dig maneuver to breach the surface before using this ability. Each target in the area where the drangolin breaches takes an extra 2 fire damage.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '6 damage; push 1; A<0 prone',
									tier2: '8 damage; push 3; A<0 prone',
									tier3: '11 damage; push 5; A<0 prone',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-shieldscale-drangolin-feature-4',
					name: 'Ashen Cloud',
					description: 'Any ally adjacent to the drangolin has concealment.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kobold-shieldscale-drangolin-feature-5',
					name: 'Burrow Bond',
					description:
						'When the drangolin burrows, each adjacent size 1S or smaller ally can move with them.',
				}),
			],
		}),
	],
	addOns: [],
};
