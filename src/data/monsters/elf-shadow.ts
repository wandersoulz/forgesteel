import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const elfShadow: MonsterGroupInterface = {
	id: 'monster-group-elf-shadow',
	name: 'Elf, Shadow',
	description: `
Children of the Twilight Celestials, the shadow elves are the native denizens of the parasitic manifold of Equinox, also known as Dusk. Theirs is a world of perpetual twilight, a sun that never rises nor sets, a world that knows neither noon nor midnight.

Equinox is a dying world. The shadow elves plan to use their magic to rewrite Orden’s topography, creating a new home with themselves as rulers over all.`,
	picture: null,
	information: [
		{
			id: 'elf-shadow-info-1',
			name: "In Equinox's Shadow",
			description:
				'Shadow elves are lit by an unseen sun. In places like Orden, they appear washed out, silhouetted, or grayscale. In Equinox, they have lived in the shadow of their manifold’s eternal dusk, making them incompatible with other light sources. Their skills, magic, and weapons do not fare well in the sun. But in turn, they can blend in with existing darkness and dissolve out of sight.',
		},
		{
			id: 'elf-shadow-info-2',
			name: 'Manifold Weaponry',
			description:
				'The shadow elves have mastered the art of combining deep, ancient magic with cutting-edge technology. Their weaponsmiths craft blades of solid shadow that strike and wound in many dimensions at once. A creature hit by one of these blades is injured in multiple worlds at a time. Only a victim of strong mind can compartmentalize and end these effects on their body in the here and now.',
		},
		{
			id: 'elf-shadow-info-3',
			name: 'Brush Stalkers',
			description: `
When the shadow elves invade Orden, they often ride domesticated dwimmerbeasts known as brush stalkers—quadrupeds who carry entire ecosystems on their rack of antlers. Newly born brush stalkers do not survive translation into Orden, so the ones the shadow elves ride are old: overgrown with bioluminescent moss, cracks on their ancient cloven hooves.

A brush stalker’s glamor allows them to look like a mundane deer. But when the glamour falls, the creature devours the light around them and plunges their surroundings into darkness.`,
		},
		{
			id: 'elf-shadow-info-4',
			name: 'Fractured Factions',
			description:
				'Equinox is a small world, ruled by Every Strike of Lightning a Lover Betrayed, the Queen of Shadows. It is her shadow elf scouts and assassins who scour Orden seeking allies who might be persuaded that their lives would be better under a different master. But there are other factions of shadow elves in Equinox. Not all who dwell under the invisible sun seek conquest. Others are sages and pacifists who seek to heal their world or find an empty world somewhere in the timescape to resettle to.',
		},
		{
			id: 'elf-shadow-info-5',
			name: 'Dusk Calling',
			description: `
Certain shadow elf warriors have a natural link to the unseen sun that illuminates their world. With this link, a warrior can perform a Lay: a mix of humming and throat singing that aligns celestial bodies across manifolds. Some Lays can temporarily induce an eclipse on the manifold in which the duskcaller is performing, allowing their comrades to gain the advantage.

A skilled duskcaller can lead a band in a group song powerful enough to recreate the conditions of Equinox for a short time. Some shadow elf factions are researching this connection in earnest, considering it a viable step toward terraforming a second Equinox.`,
		},
		{
			id: 'elf-shadow-info-6',
			name: 'Shadow Tactics',
			description: `
Belief that Equinox is a dying world makes the shadow elves desperate, for soon they’ll have no home to retreat to. Their tactics rely on both impenetrable defense and a swift and decisive offense. Since they can’t benefit from a home advantage, all warriors are taught to create one. If there are no places to hide, form them. If the light is too bright, remove it.

In many shadow elf societies, all people are given basic combat training and are expected to serve at least one military tour in their life. Those who excel move on to become duskcallers, mournblades, and eclipses: paragons of strength who are venerated by the people. Research and discovery are employed for the primary purpose of furthering military goals. Even the popular children’s game hide-and-seek is a military device created to prepare a people for constant, imminent conflict.`,
		},
		{
			id: 'elf-shadow-info-7',
			name: 'Shadow Elf Languages',
			description:
				'Most shadow elves speak Illyvric, though platoon leaders might speak some Caelian or Hyrallic.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'elf-shadow-malice-1',
			name: 'Watch Me Disappear',
			cost: 3,
			icon: StatBlockIcon.Trait,
			sections: [
				'Each shadow elf acting this turn can attempt to hide as a free maneuver if they have concealment.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'elf-shadow-malice-2',
			name: 'Extra Dimension',
			cost: 5,
			icon: StatBlockIcon.Trait,
			sections: [
				'When any shadow elf acting this turn makes a strike against a target who has I<2 in addition to the strike’s regular effects, the target is bleeding (save ends) or slowed (save ends).',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'elf-shadow-malice-3',
			name: 'Home Is Where the Hurt Is',
			cost: 7,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'The shadow elves synthesize a concentrated pocket manifold reminiscent of Equinox and graft it onto the encounter map. Until the end of the encounter, all creatures can see shadow elves in full color, and shadow elves no longer benefit from their Of the Umbra trait. Additionally, the potency of all shadow elf abilities increases by 2, and any enemy making a saving throw against an effect imposed by a shadow elf ability must roll an 8 or higher as they feel the effect across two worlds.',
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'elf-shadow-1',
			name: 'Shadow Elf Cloak',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(8, 'climb'),
			stamina: 8,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: '+2 bonus to speed',
			characteristics: ElementFactory.createCharacteristics(3, 1, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-1-feature-1',
						name: 'Stick and Poke',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '2 damage',
									tier2: '4 damage',
									tier3: '6 damage',
								})
							),
							ElementFactory.createAbilitySectionText('The cloak shifts up to 2 squares.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-1-feature-2',
					name: 'Of the Umbra',
					description:
						'The cloak ignores concealment created by darkness. While the cloak is in direct sunlight, they have damage weakness 3. While the cloak has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-2',
			name: 'Shadow Elf Dusk Mage',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Hexer),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 7,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: 'Gain an edge on strikes',
			characteristics: ElementFactory.createCharacteristics(0, 3, 2, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-2-feature-1',
						name: 'Gloom Bolt',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '2 damage',
									tier2: '4 damage; A<2 slowed (save ends)',
									tier3: '6 damage; A<3 slowed (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-2-feature-2',
					name: 'Of the Umbra',
					description:
						'The dusk mage ignores concealment created by darkness. While the dusk mage is in direct sunlight, they have damage weakness 3. While the dusk mage has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-3',
			name: 'Shadow Elf Sniper',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Artillery),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 7,
			stability: 0,
			freeStrikeDamage: 3,
			withCaptain: '+2 damage bonus to strikes',
			characteristics: ElementFactory.createCharacteristics(1, 3, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-3-feature-1',
						name: 'Lumina Arrow',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(7)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The next strike made against the target gains an edge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-3-feature-2',
					name: 'Of the Umbra',
					description:
						'The sniper ignores concealment created by darkness. While the sniper is in direct sunlight, they have damage weakness 3. While the sniper has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-4',
			name: 'Shadow Elf Nightstrike',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Ambusher),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 8,
			stability: 0,
			freeStrikeDamage: 3,
			withCaptain: 'Gain an edge on strikes',
			characteristics: ElementFactory.createCharacteristics(1, 3, 0, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-4-feature-1',
						name: 'Vault',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The nightstrike shifts to leap over the target and into an unoccupied space adjacent to the target, opposite from the nightstrike’s original space.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-4-feature-2',
					name: 'Of the Umbra',
					description:
						'The nightstrike ignores concealment created by darkness. While the nightstrike is in direct sunlight, they have damage weakness 3. While the nightstrike has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-5',
			name: 'Shadow Elf Assassin',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Artillery),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 16,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 70,
			stability: 0,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(0, 3, 2, 1, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-5-feature-1',
						name: 'Lumina Assault',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '10 damage',
									tier2: '15 damage',
									tier3: '18 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The next ability made against the target has a double edge.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 5,
								effect: 'Each non-minion ally within 3 squares of the target can make a free strike against them.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-5-feature-2',
						name: 'Splitbow',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 2,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Line,
								value: 1,
								value2: 4,
								within: 10,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 damage; I<1 bleeding (save ends)',
									tier2: '10 damage; I<2 bleeding (save ends)',
									tier3: '12 damage; I<3 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText('Each target is pushed up to 4 squares.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-5-feature-3',
					name: 'Of the Umbra',
					description:
						'The assassin ignores concealment created by darkness. While the assassin is in direct sunlight, they have damage weakness 3. While the assassin has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-6',
			name: 'Shadow Elf Duskcaller',
			level: 5,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Controller),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 14,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 60,
			stability: 0,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(0, 3, 3, 2, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-6-feature-1',
						name: 'Night Knife',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '9 damage',
									tier2: '13 damage',
									tier3: '16 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the duskcaller has concealment, they can target one additional creature or object.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-6-feature-2',
						name: 'The Lay of Cor’thoroth',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 2,
								within: 3,
							}),
						],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the start of the duskcaller’s next turn, the area is filled with darkness.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The area of the cube increases by 3.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-6-feature-3',
					name: 'Of the Umbra',
					description:
						'The duskcaller ignores concealment created by darkness. While the duskcaller is in direct sunlight, they have damage weakness 3. While the duskcaller has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-7',
			name: 'Shadow Elf Knightfell',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Defender),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 70,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 3, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-7-feature-1',
						name: 'Suffusing Strike',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(3)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '8 corruption damage',
									tier2: '7 corruption damage; R<2 taunted (EoT)',
									tier3: '9 corruption damage; R<3 taunted (EoT)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-7-feature-2',
						name: 'Trick of the Eye',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An enemy within distance makes a strike against the target.'
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'One ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target takes half the damage and the knightfell takes the other half.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-7-feature-3',
					name: 'Of the Umbra',
					description:
						'The knightfell ignores concealment created by darkness. While the knightfell is in direct sunlight, they have damage weakness 3. While the knightfell has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-8',
			name: 'Shadow Elf Luminator',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Support),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 60,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(0, 1, 1, 3, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-8-feature-1',
						name: 'Lumina Mark',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(3)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '8 lightning damage',
									tier2: '12 lightning damage',
									tier3: '15 lightning damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The next strike made against the target deals an extra 5 damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-8-feature-2',
						name: 'Mourning Till Dusk',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 2,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: 'The target regains 6 Stamina',
									tier2: 'The target regains 9 Stamina',
									tier3: 'The target regains 12 Stamina and the Director gains 3 Malice',
								})
							),
							ElementFactory.createAbilitySectionText('Each target gains an edge on their next strike.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-8-feature-3',
					name: 'Of the Umbra',
					description:
						'The luminator ignores concealment created by darkness. While the luminator is in direct sunlight, they have damage weakness 3. While the luminator has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-9',
			name: 'Shadow Elf Moondancer',
			level: 5,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Harrier),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 14,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 70,
			stability: 0,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(1, 3, 1, 2, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-9-feature-1',
						name: 'Crescent Sweep',
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
									bonus: 3,
									tier1: '9 damage',
									tier2: '13 damage',
									tier3: '16 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the end of the current turn, the moondancer ignores opportunity attacks from the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-9-feature-2',
						name: 'Dissolve',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The moondancer takes damage from a strike'
						),
						keywords: [AbilityKeyword.Magic],
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The moondancer can teleport up to 10 squares to a space with concealment created by darkness.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-1-feature-3',
					name: 'Of the Umbra',
					description:
						'The moondancer ignores concealment created by darkness. While the moondancer is in direct sunlight, they have damage weakness 3. While the moondancer has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-10',
			name: 'Shadow Elf Mournblade',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Ambusher),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 16,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 80,
			stability: 0,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(2, 3, 1, 2, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-10-feature-1',
						name: 'Knife in the Dark',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '10 damage',
									tier2: '15 damage',
									tier3: '18 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The mournblade is invisible to the target until the start of the mournblade’s next turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-10-feature-2',
						name: 'Shadow Step',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Magic],
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'If the mournblade has concealment, they can teleport up to 10 squares to a space with concealment created by darkness.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-10-feature-3',
					name: 'Of the Umbra',
					description:
						'The mournblade ignores concealment created by darkness. While the mournblade is in direct sunlight, they have damage weakness 3. While the mournblade has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-11',
			name: 'Shadow Elf Noctis Mage',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Hexer),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 16,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 70,
			stability: 0,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(0, 2, 3, 1, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-11-feature-1',
						name: 'Blotting Bolt',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '9 damage',
									tier2: '14 damage',
									tier3: '17 damage',
								})
							),
							ElementFactory.createAbilitySectionText('The target takes a bane on their next strike.'),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The target instead has a double bane on the next ability they use.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-11-feature-2',
						name: 'Enemies in the Dark',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Two enemies',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '8 damage; R<1 the target makes a free strike against one enemy of the noctis mage’s choice.',
									tier2: '10 damage; R<2 the target makes a free strike against one enemy of the noctis mage’s choice.',
									tier3: '13 damage; R<3 the target uses a signature ability against one enemy of the noctis mage’s choice.',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-11-feature-3',
					name: 'Of the Umbra',
					description:
						'The noctis mage ignores concealment created by darkness. While the noctis mage is in direct sunlight, they have damage weakness 3. While the noctis mage has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-12',
			name: 'Shadow Elf Panther',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Brute),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 70,
			stability: 0,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(3, 2, -1, 1, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-12-feature-1',
						name: 'Dusk Cleave',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '9 damage',
									tier2: '13 damage',
									tier3: '16 damage; I<3 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The panther can make a free strike against a creature or object adjacent to the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-12-feature-2',
						name: 'Bladestorm',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 3,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 corruption damage',
									tier2: '8 corruption damage; I<2 dazed (save ends)',
									tier3: '10 corruption damage; I<3 dazed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The panther has a double edge on strikes against targets dazed this way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-12-feature-3',
					name: 'Of the Umbra',
					description:
						'The panther ignores concealment created by darkness. While the panther is in direct sunlight, they have damage weakness 3. While the panther has concealment, they have damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-13',
			name: 'Shadow Elf Eclipse',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 32,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(6, 'climb'),
			stamina: 180,
			stability: 1,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(4, 3, 2, 1, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-13-feature-1',
						name: 'Manifold Blade',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '11 damage; I<2 bleeding (save ends)',
									tier2: '16 damage; I<3 bleeding (save ends)',
									tier3: '19 damage; I<4 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The potency increases by 1.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-13-feature-2',
						name: 'Grasping Shadow',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 5,
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Three creatures or objects casting a shadow',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: 'pull 5; I<2 slowed (save ends)',
									tier2: 'pull 7; I<3 slowed (save ends)',
									tier3: 'pull 10; I<4 slowed (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-13-feature-3',
						name: 'Put It Out!',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An enemy within distance uses an ability that emits light, including abilities that deal fire or lightning damage.'
						),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'The triggering enemy',
						sections: [
							ElementFactory.createAbilitySectionText('The target has a double bane on the ability.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-13-feature-4',
					name: 'End Effect',
					description:
						'At the end of each of their turns, the eclipse can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can’t be reduced in any way.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-13-feature-5',
					name: 'Of the Umbra',
					description:
						'The eclipse ignores concealment created by darkness. While the eclipse is in direct sunlight, they have damage weakness 3. While the eclipse has concealment, they have damage immunity 3.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-13-feature-6',
						name: 'From the Shadows',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The eclipse calls forth one **brush stalker** into an unoccupied space within distance. Each ally within distance can then shift up to their speed and make a free strike.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-13-feature-7',
						name: 'Cast Away All Hope',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target loses all their surges. Additionally, until the end of the round, allies ignore edges and double edges on any targets’ abilities, and ignore any nondamaging effects of any target’s damage-dealing abilities.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-13-feature-8',
						name: 'Umbral Hunger',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 5,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '7 corruption damage; R<2 the target has speed 0 (save ends)',
									tier2: '12 corruption damage; R<3 the target has speed 0 (save ends)',
									tier3: '15 corruption damage; R<4 the target has speed 0 (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The area is shrouded in darkness that creates concealment until the end of the encounter. Any enemy who starts their turn in the area takes 5 corruption damage.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'elf-shadow-14',
			name: 'Brush Stalker',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Platoon, MonsterRoleType.Mount),
			keywords: ['Animal', 'Fey', 'Shadow Elf'],
			encounterValue: 12,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(8),
			stamina: 60,
			stability: 3,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(3, 2, -1, 1, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-14-feature-1',
						name: 'Gore',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '7 damage',
									tier2: '10 damage',
									tier3: '13 damage',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'elf-shadow-14-feature-2',
						name: 'Reclamation',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 2,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '4 corruption damage; M<1 weakened (save ends)',
									tier2: '7 corruption damage; M<2 weakened (save ends)',
									tier3: '10 corruption damage; M<3 weakened (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-14-feature-3',
					name: 'Suneater',
					description:
						'The area within 2 squares of the brush stalker is devoid of light and provides concealment.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'elf-shadow-14-feature-4',
					name: 'Wyrd Dyr',
					description:
						'While they have line of effect to the brush stalker, any animal except another brush stalker is frightened.',
				}),
			],
		}),
	],
	addOns: [],
};
