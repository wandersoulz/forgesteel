import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { DamageModifierType } from '../../core/enums/damage-modifier-type';
import { DamageType } from '../../core/enums/damage-type';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';

export const retainer: MonsterGroupInterface = {
	id: 'monster-group-retainer',
	name: 'Retainer',
	description:
		'A retainer is a type of NPC follower who fights alongside the heroes. Retainer creatures can gain levels just as heroes do, so their battlefield contributions remain relevant as the heroes grow in status and power. A lowly level 1 goblin guide can advance up to level 10 if they adventure with a heroic party for long enough!',
	picture: null,
	information: [],
	malice: [],
	monsters: [
		ElementFactory.createMonster({
			id: 'retainer-1',
			name: 'Angulotl Hopper',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Harrier),
			keywords: ['Angulotl', 'Humanoid'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(6, 'Climb, swim'),
			stamina: 21,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(1, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-1-feature-1',
						name: 'Leapfrog',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Before or after making this strike, the hopper jumps up to 2 squares, or up to 4 squares if they jump over their mentor’s space.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-1-feature-2',
					name: 'Toxiferous',
					description:
						'Whenever an adjacent enemy grabs the hopper or uses a melee ability against them, that enemy takes 3 poison damage.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'retainer-1-feature-3',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 2,
						}),
					],
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-1-retainer-4',
						name: 'Leaping Attack',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 damage; M < [weak] prone',
									tier2: '9 damage; M < [average] prone',
									tier3: '12 damage; M < [strong] prone',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The hopper can jump in a straight line up to their speed before the attack without provoking opportunity attacks. If they jump at least 2 squares this way, they gain a surge.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-1-retainer-7',
						name: 'Three-Poison Dart',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 damage; M < [weak] weakened (save ends)',
									tier2: '9 damage; M < [average] slowed and weakened (save ends)',
									tier3: '12 damage; M < [strong] dazed, slowed, and weakened (save ends)',
								})
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-1-retainer-10',
						name: 'Trip of the Tongue',
						type: ElementFactory.AbilityTypeFactory.createTrigger('A creature moves within distance', {
							qualifiers: ['Encounter'],
						}),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee(5)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'If the target has M < [average], their movement ends, they are knocked prone, and one ally within distance gains 2 surges.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-2',
			name: 'Bugbear Commando',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Ambusher),
			keywords: ['Bugbear', 'Goblin', 'Humanoid', 'Fey'],
			encounterValue: 0,
			speed: ElementFactory.createSpeed(5),
			stamina: 30,
			stability: 0,
			size: ElementFactory.createSize(1, 'L'),
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(2, 2, 0, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-2-feature-1',
						name: 'Bear Hug',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 damage',
									tier2: '6 damage',
									tier3: '11 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the commando started their turn with concealment from the target or hidden from them, they gain 1 surge that can be used immediately.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-2-feature-2',
						name: 'Throw',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'**Special**: The target must be grabbed by the commando.'
							),
							ElementFactory.createAbilitySectionText(
								'The target is vertical pushed up to 5 squares. An ally doesn’t take damage from being force moved this way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-2-feature-3',
						name: 'Catcher',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A size 1 creature or object is force moved within distance, or a size 1 ally willingly moves within distance.',
							{ free: true }
						),
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'The triggering creature or object',
						sections: [ElementFactory.createAbilitySectionText('The target is grabbed by the commando.')],
					}),
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-2-retainer-4',
						name: 'Face Grab',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 damage; M < [weak] grabbed',
									tier2: '9 damage; M < [average] grabbed',
									tier3: '13 damage; M < [strong] grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While the target is grabbed this way, they can’t communicate and all creatures and objects have concealment from them.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-2-retainer-7',
						name: 'Shadow Drag',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: 'pulled 8',
									tier2: 'pulled 10',
									tier3: 'pulled 12',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The target takes 1 damage for each square they are pulled.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-2-retainer-10',
						name: 'Neck Snap',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature grabbed by the commando',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '12 damage',
									tier2: '18 damage',
									tier3: '24 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The target takes 15 damage, they are no longer grabbed, and they fall prone.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-3',
			name: 'Devil Defector',
			level: 5,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Hexer),
			keywords: ['Devil', 'Infernal'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(6, 'fly'),
			stamina: 60,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(3, 2, 3, 1, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-3-feature-1',
						name: 'Black Flame',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 fire or corruption damage',
									tier2: '10 fire or corruption damage',
									tier3: '13 fire or corruption damage',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-3-retainer-2',
						name: 'Tempting Offer',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A sapient enemy is reduced to 0 Stamina.',
							{ free: true, qualifiers: ['Encounter'] }
						),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'If the creature takes the defector’s offer, the creature is reduced to 1 Stamina instead of 0. If they do so, on their next turn the defector controls the creature’s move action, and the creature must use a Signature Action against a creature of the defector’s choice or immediately die. The Director must spend 3 Malice to have the creature turn down this offer.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-3-feature-3',
					name: 'True Name',
					description:
						'If a creature within 10 squares of the defector speaks the defector’s true name aloud, the defector loses their immunities, the additional effects on their signature attack, and their Tempting Offer triggered action.',
				}),
			],
			retainer: {
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-3-retainer-7',
						name: 'Flames of Revenge',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
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
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 corruption damage',
									tier2: '10 corruption damage',
									tier3: '14 corruption damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the defector’s mentor is in the area, they burn with harmless flame until the end of the defector’s next turn. While this fire burns, the mentor has fire immunity 10 and any creature that hits the mentor takes 10 fire damage.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-3-retainer-10',
						name: 'Hell On Earth',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 5,
								within: 10,
							}),
						],
						target: '-',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The area burns with infernal fire until the end of the devil’s next turn. An enemy of the defector that ends their turn in the area takes 10 fire damage and is P (medium) frightened (save ends).'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-4',
			name: 'The Nameless',
			level: 6,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Defender),
			keywords: ['Draconian', 'Dragon', 'Humanoid'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'fly'),
			stamina: 66,
			stability: 4,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(3, 2, 1, 1, 2),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-4-feature-1',
						name: 'Baneful Blade',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 damage',
									tier2: '11 damage',
									tier3: '14 damage; push 2',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-4-retainer-2',
						name: "I'm Not a Steed, You're Equipment",
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: "The Nameless's mentor",
						sections: [
							ElementFactory.createAbilitySectionText(
								'The Nameless’s mentor enters the Nameless’s space and rides on their back. The Nameless or the mentor can move the mentor to an adjacent space as a free maneuver. While in the Nameless’s space, the mentor moves with them and can’t use their move action, and ability rolls against the mentor take a bane.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-4-feature-3',
					name: 'Wing Block',
					description: 'Ranged attacks against the Nameless take a bane.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'retainer-4-feature-4',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 6,
						}),
					],
				}),
			],
			retainer: {
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-4-retainer-7',
						name: 'Looming Wings',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 corruption damage; I < [weak] weakened (save ends)',
									tier2: '9 corruption damage; I < [average] weakened (save ends)',
									tier3: '12 corruption damage; I < [strong] weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the Nameless’s mentor is in the area, ability rolls against the mentor have a double bane until the start of their next turn.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-4-retainer-10',
						name: 'Spew Death',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '11 corruption damage',
									tier2: '16 corruption damage',
									tier3: '21 corruption damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Any living minions reduced to 0 Stamina by this ability regain all their Stamina and become corporeal undead under the Nameless’s control until the end of the Nameless’s next turn, after which they are destroyed.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-5',
			name: 'Dwarf Mortar',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Hexer),
			keywords: ['Dwarf', 'Humanoid'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 21,
			stability: 3,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(2, 0, 0, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-5-feature-1',
						name: 'Armor-Piercing Shell',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'This ability ignores cover and bypasses temporary Stamina.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-5-feature-2',
					name: 'Voice Thrower',
					description:
						'The mortar can use a magical rune inscribed on their skin to talk to their mentor over any distance as long as both are in the same world.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-5-retainer-4',
						name: 'Signal Shell',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createSpecial('See below')],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The mortar fires a shell straight upward, which hovers 3 squares up in the air and sheds light below it in a 3 cube. Enemies illuminated by this light can’t hide or turn invisible and can’t benefit from concealment or cover. At the start of the mortar’s next turn, the shell explodes to deal damage to enemies in the area.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 fire damage',
									tier2: '8 fire damage',
									tier3: '11 fire damage',
								})
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-5-retainer-7',
						name: 'Screaming Shell',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Line,
								value: 10,
								value2: 1,
								within: 1,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 damage; P < [weak] frightened',
									tier2: '9 damage; P < [average] frightened',
									tier3: '13 damage; P < [strong] frightened',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the start of the mortar’s next turn, strikes made against the mortar or any ally adjacent to them take a bane.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-5-retainer-10',
						name: 'Pacifier Shell',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 15,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '8 damage; I < [weak] dazed (save ends)',
									tier2: '12 damage; I < [average] dazed (save ends)',
									tier3: '16 damage; I < [strong] dazed (save ends) and prone',
								})
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-6',
			name: 'High Elf Weatherwise',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Controller),
			keywords: ['Fey', 'High Elf', 'Humanoid'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 21,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(-1, 1, 2, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-6-feature-1',
						name: "Summer's Bolt",
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 fire damage',
									tier2: '5 fire damage',
									tier3: '7 fire damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the weatherwise targets their mentor, the mentor ignores the damage and instead gains temporary Stamina equal to the damage dealt.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-6-feature-2',
					name: 'Otherworldly Grace',
					description:
						'At the start of each of their turns, the weatherwise can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-6-retainer-4',
						name: "Winter's Breath",
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 1,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 cold damage; push 2',
									tier2: '5 cold damage; push 3',
									tier3: '8 cold damage; push 5',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The weatherwise can teleport up to 5 squares before or after using this ability.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-6-retainer-7',
						name: 'Spring’s Rebirth',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each ally in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target can spend a Recovery, and can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-6-retainer-10',
						name: "Autumn's Decay",
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 1,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: "6 corruption damage; P < [weak] prone and can't stand (save ends)",
									tier2: "10 corruption damage; P < [average] prone and can't stand (save ends)",
									tier3: "14 corruption damage; P < [strong] prone and can't stand (save ends)",
								})
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-7',
			name: 'Shadow Elf Shade',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Ambusher),
			keywords: ['Fey', 'Humanoid', 'Shadow Elf'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 48,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(1, 3, 0, 2, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-7-feature-1',
						name: 'Gloom Dagger',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(1),
							ElementFactory.DistanceFactory.createRanged(3),
						],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 damage',
									tier2: '10 damage',
									tier3: '13 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Whenever the shade starts their turn with concealment from the target, they gain 1 surge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-7-feature-2',
						name: 'Duskfall',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 1,
							}),
						],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the end of the next turn, the area is filled with darkness. The shade’s mentor ignores concealment created by this darkness.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-7-feature-3',
					name: 'Of the Umbra',
					description:
						'The shade ignores concealment created by darkness. While the shade is in direct sunlight, they have damage weakness 3. While the shade has concealment, they have damage immunity 3.',
				}),
			],
			retainer: {
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-7-retainer-7',
						name: 'Slow-Poison Needle',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '8 poison damage; weakened (save ends)',
									tier2: '12 poison damage; weakened (save ends)',
									tier3: '16 poison damage; weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The slow-poison needle is initially painless, with the damage and effect delayed until the start of the target’s next turn. If the shade is hidden, using this ability doesn’t cause them to be revealed.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-7-retainer-10',
						name: 'Shadow Dagger',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '12 poison damage; the target has shadowed vision (save ends)',
									tier2: '17 poison damage; the target has shadowed vision (save ends)',
									tier3: '23 poison damage; the target has shadowed vision (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While a creature has shadowed vision, all creatures have concealment from them.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-8',
			name: 'Wode Elf Arrowswift',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Artillery),
			keywords: ['Fey', 'Humanoid', 'Wode Elf'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 21,
			stability: 1,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-8-feature-1',
						name: 'Longshot',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '4 damage',
									tier2: '7 damage',
									tier3: '10 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The arrowswift can take a bane on this ability to gain a +5 bonus to ranged distance.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-8-feature-2',
					name: 'Masking Glamor',
					description:
						'Abilities targeting the arrowswift that would take a bane from cover or concealment have a double bane instead.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-8-retainer-4',
						name: 'Snipe',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '7 damage',
									tier2: '11 damage',
									tier3: '16 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the arrowswift is hidden when they use this ability, they gain 2 surges that can be used immediately.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-8-retainer-7',
						name: 'Magic Arrows',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Encounter'] }),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the end of the encounter, whenever the arrowswift makes a ranged strike, the strike gains an edge and the arrowswift gains 1 surge that must be used immediately. While the arrowswift’s mentor is adjacent to them, the mentor also gains this benefit.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-8-retainer-10',
						name: 'Double Shot',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '12 damage',
									tier2: '17 damage',
									tier3: '23 damage',
								})
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-9',
			name: 'Gnoll Gnasher',
			level: 2,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Harrier),
			keywords: ['Fiend', 'Gnoll'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 30,
			stability: 1,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(1, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-9-feature-1',
						name: 'Gnash',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '4 damage',
									tier2: '7 damage',
									tier3: '10 damage; M < [strong] bleeding (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-9-feature-2',
					name: 'Death Frenzy',
					description:
						'Whenever a non-minion ally within 7 squares of the gnasher is reduced to 0 Stamina, the gnasher moves up to their speed and can make a melee free strike.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-9-retainer-3',
						name: 'Frenzied Bite',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An enemy within 5 squares is reduced to 0 Stamina.',
							{ qualifiers: ['Encounter'] }
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The gnasher moves up to their speed and can use their signature ability.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-9-retainer-4',
						name: 'Flurry of Fangs',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'Three creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '7 damage',
									tier2: '11 damage',
									tier3: '16 damage',
								})
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-9-retainer-5',
						name: 'Horrific Feast',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The gnasher reduces a creature to 0 Stamina.',
							{ qualifiers: ['Encounter'] }
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The gnasher consumes part of the target’s body. The gnasher can spend a Recovery, and each enemy within 5 squares of the gnasher who has I < [average] is frightened (save ends).'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-10',
			name: 'Goblin Guide',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Harrier),
			keywords: ['Goblin', 'Humanoid'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 21,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(-1, 1, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-10-feature-1',
						name: 'Stabbity Stab',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The target can’t make opportunity attacks until the end of the guide’s turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-10-feature-2',
					name: 'Crafty',
					description: 'The guide doesn’t provoke opportunity attacks by moving.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-10-retainer-4',
						name: 'Weaving Knives',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 damage',
									tier2: '9 damage',
									tier3: '12 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The guide shifts up to their speed before and after the strike.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-10-retainer-7',
						name: 'Sneak and Stab',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '8 damage',
									tier2: '12 damage; the guide and their mentor can each move up to their speed',
									tier3: '16 damage; the guide and their mentor can each move up to their speed, then attempt to hide',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the guide is hidden from the target, this ability has a double edge.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-10-retainer-10',
						name: 'Poison Blade',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Encounter'] }),
						distance: [ElementFactory.DistanceFactory.createSpecial('Special')],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The guide applies poison to their weapon. The next time the guide obtains a tier 2 or tier 3 outcome on a weapon strike, the strike deals an extra 10 poison damage, and if the target has M < [average], they are weakened (save ends). If the guide is adjacent to their mentor when they use Poison Blade, they apply poison to the mentor’s weapon in the same way.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-11',
			name: 'Hobgoblin Flameslinger',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Controller),
			keywords: ['Goblin', 'Hobgoblin', 'Humanoid', 'Infernal'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 48,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(1, 0, 2, 1, 3),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'retainer-11-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Fire,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-11-feature-2',
						name: 'Fire Curse',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 fire damage',
									tier2: '9 fire damage',
									tier3: '12 fire damage; A < [strong] the target is burning (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-11-feature-3',
						name: 'Fuel for the Fire',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the end of the flameslinger’s next turn, the target has fire weakness equal to the flameslinger’s level. If the target is the flameslinger’s mentor, they instead have fire immunity equal to the flameslinger’s level.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-11-feature-5',
					name: 'Infernal Ichor',
					description:
						'When the flameslinger is reduced to 0 Stamina, they spray burning blood. Each creature adjacent to the flameslinger takes 3 fire damage.',
				}),
			],
			retainer: {
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-11-retainer-7',
						name: 'Unholy Attraction',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
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
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '8 damage; pull 1',
									tier2: '12 damage; pull 2',
									tier3: '16 damage; pull 4',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A target who is pulled adjacent to the flameslinger and who has P < [average] is knocked prone.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-11-retainer-10',
						name: 'Fire Spiral',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '8 fire damage; push 2',
									tier2: '12 fire damage; push 3',
									tier3: '16 fire damage; push 5',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the fireslinger’s mentor is within 10, the mentor can be the source of the burst instead of the fireslinger.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-12',
			name: 'Human Warrior',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Defender),
			keywords: ['Human', 'Humanoid'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 21,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(2, 0, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-12-feature-1',
						name: 'Chop',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the warrior is adjacent to their mentor, this ability gains an edge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-12-feature-2',
					name: 'Supernatural Insight',
					description: 'The warrior ignores concealment if it’s granted by a supernatural effect.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-12-retainer-4',
						name: '‘Scuse Me, Boss',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The warrior’s mentor is targeted by a strike while within distance.',
							{ qualifiers: ['Encounter'] }
						),
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'The warrior’s mentor',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The warrior and the mentor switch places. The warrior is the strike’s new target and the strike has a double bane.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-12-retainer-7',
						name: 'Defensive Fighting',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '7 damage',
									tier2: '11 damage',
									tier3: '16 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the start of the warrior’s next turn, ability rolls against the warrior or any ally adjacent to the warrior have a double bane.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-12-retainer-10',
						name: 'Whirlwind of Steel',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Charge, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '12 damage',
									tier2: '18 damage',
									tier3: '24 damage',
								})
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-13',
			name: 'Kobold Shieldbearer',
			description: '',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Defender),
			keywords: ['Humanoid', 'Kobold'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5),
			stamina: 21,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(2, 1, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-13-feature-1',
						name: 'Gladius',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage; taunted (EoT)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-13-feature-2',
					name: 'Shield, Boss?',
					description:
						'While the shieldbearer is adjacent to their mentor, both have a +1 bonus to stability, have cover, and grant cover to allies.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-13-retainer-4',
						name: 'Shield Block',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The mentor takes damage from a strike while within distance.',
							{ qualifiers: ['Encounter'] }
						),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'The shieldbearer’s mentor',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The shieldbearer blocks the strike (if adjacent to the mentor) or throws their shield into the mentor’s space. The triggering strike’s damage is halved and the potency of any potency effects is reduced by 1. If the shieldbearer threw their shield, it bounces back to their hand.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-13-retainer-7',
						name: 'Living Backpack',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'The shieldbearer’s mentor',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The shieldbearer straps their shield on their back and climbs onto their mentor’s back, entering the mentor’s space. While the shieldbearer is on their mentor’s back, each of them gains 10 temporary Stamina and can use Shield Block as a triggered action targeting an ally instead of the shieldbearer’s mentor. Additionally, the shieldbearer moves with the mentor, and they can’t use main actions, maneuvers, or move actions except to end this effect as a maneuver. The effect also ends if the shieldbearer is force moved away from their mentor or knocked prone. If the shieldbearer is still in their mentor’s space when the effect ends, they move into an adjacent unoccupied space of their choice.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-13-retainer-10',
						name: "Let's Go Sledding",
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'Three enemies',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 damage; M < [weak] prone',
									tier2: '10 damage; M < [average] prone',
									tier3: '14 damage; M < [strong] prone',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If this ability is used as part of the Charge main action, the shieldbearer gains 2 surges that can be used immediately.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-14',
			name: 'Minotaur Gorer',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Brute),
			keywords: ['Accursed', 'Humanoid', 'Minotaur'],
			encounterValue: 0,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(6),
			stamina: 39,
			stability: 2,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(2, 1, 0, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-14-feature-1',
						name: 'Gore',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 damage',
									tier2: '9 damage',
									tier3: '12 damage; M < [strong] prone',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-14-feature-2',
						name: 'Retaliatory Strike',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature within distance deals damage to the gorer.'
						),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(6)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The gorer uses the Charge main action and Gore against the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-14-feature-3',
					name: 'Minotaur Sense',
					description:
						'The gorer can’t obtain less than a tier 2 outcome when making tests to navigate, search, or seek.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-14-retainer-4',
						name: 'Horn Toss',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The gorer damages a creature within distance using Gore.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target is pushed up to 3 squares. If the target has stability 0, they are also knocked prone.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-14-retainer-7',
						name: 'Triumphant Bay',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Encounter'] }),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The gorer gains 3 surges, and until the start of the gorer’s next turn, strikes made against them and their mentor take a bane.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-14-retainer-10',
						name: 'Horn Rake',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '11 damage; M < [weak] bleeding (save ends)',
									tier2: '16 damage; M < [average] bleeding (save ends)',
									tier3: '21 damage; M < [strong] prone and can’t stand (save ends).',
								})
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-15',
			name: 'Orc Charger',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Harrier),
			keywords: ['Humanoid', 'Orc'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(8),
			stamina: 21,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(2, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-15-feature-1',
						name: 'Notched Axe',
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
							ElementFactory.DistanceFactory.createMelee(1),
							ElementFactory.DistanceFactory.createRanged(5),
						],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-15-feature-2',
					name: 'Relentless',
					description:
						'If the charger is reduced to 0 Stamina, they can make a free strike before dying. If the target of the free strike is reduced to 0 Stamina, the charger is reduced to 1 Stamina instead.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-15-retainer-4',
						name: 'Blood Oath',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Encounter'] }),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Until the start of the charger’s next turn, the charger and their mentor each have temporary Stamina equal to their Recovery value and a +2 bonus to speed, and they each gain an edge on reactive tests.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-15-retainer-7',
						name: 'Mow ’Em Down',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The charger moves in a straight line up to their speed. During this move, they ignore enemy free strikes, and they can make a melee free strike against any creature they move adjacent to.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-15-retainer-10',
						name: 'Vein Burst',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Strike],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '12 damage',
									tier2: '18 damage',
									tier3: '24 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The charger takes psychic damage equal to the number of enemies affected. This damage can’t be reducetd in any way.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-16',
			name: 'Radenwight Sidekick',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Support),
			keywords: ['Humanoid', 'Radenwight'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'S'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 21,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-16-feature-1',
						name: "Dagger's Bite",
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(1),
							ElementFactory.DistanceFactory.createRanged(5),
						],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-16-feature-2',
						name: 'Ready Rodent',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An ally deals damage to the target.'),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The sidekick makes a free strike against the target.'
							),
						],
					}),
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-16-retainer-4',
						name: 'Boost',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'If the sidekick’s mentor moves adjacent to the sidekick at any point during the mentor’s turn, the mentor gains a +1 bonus to speed and can automatically climb at full speed while moving until the end of their turn.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-16-retainer-7',
						name: 'Bug Bag',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 3,
							}),
						],
						target: 'Each creature in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 poison damage; M < [weak] weakened (save ends)',
									tier2: '9 poison damage; M < [medium] weakened (save ends)',
									tier3: '13 poison damage; M < [strong] weakened (save ends)',
								})
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-16-retainer-10',
						name: 'Triumphant Squeak',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Encounter'] }),
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Self and each ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target can spend a Recovery, and ends the dazed, frightened, and weakened conditions on themself.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-17',
			name: 'Time Raider Mind Healer',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Support),
			keywords: ['Humanoid', 'Time Raider'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 39,
			stability: 0,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(0, 2, 2, 2, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-17-feature-1',
						name: 'Laser Lancet',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(3)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 fire damage',
									tier2: '8 fire damage',
									tier3: '11 fire damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the mind healer targets an ally, the ability deals no damage. Additionally, the target can end one effect on them that can be ended by a saving throw or that ends at the end of their turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-17-feature-2',
					name: 'Foresight',
					description: 'The mind healer doesn’t take a bane on strikes against creatures with concealment.',
				}),
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'retainer-17-feature-3',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Psychic,
							modifierType: DamageModifierType.Immunity,
							value: 5,
						}),
					],
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-17-feature-4',
						name: 'Stim Charge',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(3)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target can spend 1 Recovery, and has their speed doubled until the end of their next turn.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-17-feature-5',
						name: 'Mind Whelm',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(3)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '8 psychic damage; R < [weak] frightened (save ends)',
									tier2: '13 psychic damage; R < [average] frightened (save ends)',
									tier3: '17 psychic damage; R < [strong] frightened (save ends)',
								})
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-17-feature-6',
						name: 'Psychic Short Circuit',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '11 psychic damage',
									tier2: '16 psychic damage',
									tier3: '21 psychic damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the mind healer is dazed, frightened, or taunted, they can end one of those conditions and impose the same condition on one enemy in the area. Additionally, they can do the same for their mentor if the mentor is in the area and is dazed, frightened, or taunted.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-18',
			name: 'Troll Mercenary',
			level: 5,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Brute),
			keywords: ['Giant', 'Troll'],
			encounterValue: 0,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(6),
			stamina: 57,
			stability: 4,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(3, 1, -1, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'retainer-18-feature-0',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Acid,
							modifierType: DamageModifierType.Weakness,
							value: 5,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Fire,
							modifierType: DamageModifierType.Weakness,
							value: 5,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-18-feature-1',
						name: 'Big Bite',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 damage',
									tier2: '11 damage',
									tier3: '14 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The mercenary regains Stamina equal to half the damage dealt.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-18-feature-2',
						name: 'Troll Roar',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: 'P < [weak] frightened (save ends)',
									tier2: 'P < [average] frightened (save ends)',
									tier3: 'P < [strong] frightened (save ends); push 3; prone',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-18-feature-3',
					name: 'Relentless Hunger',
					description:
						'The mercenary dies only if they are reduced to 0 Stamina by acid or fire damage, if they end their turn with 0 Stamina, or if they take acid or fire damage while at 0 Stamina.',
				}),
			],
			retainer: {
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-18-retainer-7',
						name: 'Hangry Frenzy',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'Three creatures',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The mercenary must be winded to use this ability. The mercenary uses Big Bite against each target.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-18-retainer-10',
						name: 'Fire Bad',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An ability deals acid or fire damage to the mercenary.',
							{ qualifiers: ['Encounter'] }
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The mercenary moves up to their speed. If this movement takes them beyond the distance of the triggering ability, the ability has no effect on them.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-19',
			name: 'Undead Servitor',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Brute),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 21,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(2, -1, -3, -1, 0),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-19-feature-1',
						name: 'Lunching Swipe',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '4 damage',
									tier2: '7 damage',
									tier3: '10 damage',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-19-feature-2',
					name: 'Arise',
					description:
						'The first time in an encounter that the servitor is reduced to 0 Stamina by damage that isn’t fire damage or holy damage and their body isn’t destroyed, they regain half their Stamina maximum and fall prone.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-19-retainer-4',
						name: 'Grab and Bite',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '7 damage; M < [weak] grabbed',
									tier2: '11 damage; M < [average] grabbed',
									tier3: '16 damage; M < [strong] grabbed',
								})
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-19-retainer-7',
						name: 'Death to Death',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '8 corruption damage; P < [weak] weakened (save ends)',
									tier2: '13 corruption damage; P < [average] weakened (save ends)',
									tier3: '17 corruption damage; P < [strong] weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Before making the strike, the servitor can teleport up to 10 squares to a space containing a dead creature, then burst out of the creature’s body.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-19-retainer-10',
						name: 'Death Miasma',
						type: ElementFactory.AbilityTypeFactory.createTrigger('The servitor is reduced to 0 Stamina.', {
							free: true,
							qualifiers: ['Encounter'],
						}),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText('The servitor explodes'),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 corruption damage',
									tier2: '10 corruption damage',
									tier3: '14 corruption damage',
								})
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-20',
			name: 'Unquiet Spirit',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Hexer),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'fly, hover'),
			stamina: 21,
			stability: 1,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(-4, 1, 0, 0, 2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'retainer-20-feature-0',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Weakness,
							value: 3,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Weakness,
							value: 3,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-20-feature-1',
						name: 'Chill of Death',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '3 cold damage',
									tier2: '5 cold damage',
									tier3: '7 cold damage; P < [strong] slowed (EoT)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-20-feature-2',
						name: 'Spirit Meld',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'While adjacent to their mentor, the unquiet spirit enters the mentor’s space. A spirit who enters their mentor’s space this way moves with the mentor, can’t be sensed, and can’t affect or be affected by other creatures or objects. They can’t take main actions, maneuvers, or move actions, except to use this ability to leave their mentor’s space and appear in an adjacent space.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-20-feature-3',
					name: 'Corruptive Phasing',
					description:
						'The unquiet spirit can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. The first time in a round that the spirit moves through a creature other than their mentor, that creature takes 2 corruption damage.',
				}),
			],
			retainer: {
				level4: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-20-retainer-4',
						name: 'Enervating Curse',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '6 corruption damage; the target has 1 level of drain',
									tier2: '10 corruption damage; the target has 2 levels of drain',
									tier3: '14 corruption damage; the target has 3 levels of drain',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The next creature to make a strike against the target gains 1 surge for each level of drain, which must be used on that strike.'
							),
						],
					}),
				}),
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-20-retainer-7',
						name: 'Ectoplasm',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: 'A < [weak] slowed and weakened (save ends)',
									tier2: 'A < [average] slowed and weakened (save ends)',
									tier3: 'A < [strong] slowed and weakened (save ends)',
								})
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-20-retainer-10',
						name: 'Death Phase',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'If the target has P < [strong], they are phased until the end of their next turn. A phased target gains the unquiet spirit’s Corruptive Phasing trait and can fly. They are visible but can’t affect or be affected by other creatures or objects. A willing creature not subject to the ability’s potency can choose to automatically be affected.'
							),
						],
					}),
				}),
			},
		}),
		ElementFactory.createMonster({
			id: 'retainer-21',
			name: 'Vampire Rebel',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Retainer, MonsterRoleType.Harrier),
			keywords: ['Undead', 'Vampire'],
			encounterValue: 0,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 48,
			stability: 0,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(2, 3, 0, 0, 3),
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-21-feature-1',
						name: 'Flashing Fangs',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '5 damage',
									tier2: '5 damage, 3 corruption damage',
									tier3: '5 damage, 6 corruption damage; M < [strong] bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The vampire rebel gains temporary Stamina equal to any corruption damage dealt.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-21-feature-2',
						name: 'Bat Form',
						type: ElementFactory.AbilityTypeFactory.createMove({ qualifiers: ['Encounter'] }),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The vampire rebel changes their form into a bat. In bat form, their size is 1T and they can fly. The vampire rebel then shifts up to their speed, then regains their true form. If they can’t fit in their current space when they return to their true form, they take 10 damage and are pushed to the nearest unoccupied space.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'retainer-21-feature-3',
					name: 'Agonizing Bloodthirst',
					description:
						'The vampire rebel has speed 10 while any creature within 10 squares of them is bleeding. If the vampire rebel is able to deal damage to a bleeding creature on their turn and does not do so, they take 5 corruption damage at the end of their turn.',
				}),
			],
			retainer: {
				level7: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-21-retainer-7',
						name: 'Blood Surge',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(1)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '7 damage; M < [weak] bleeding (save ends)',
									tier2: '11 damage; M < [average] bleeding (save ends)',
									tier3: '16 damage; M < [strong] bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Before the strike, the vampire rebel shifts up to their speed. If the vampire rebel has temporary Stamina, they can expend it, dealing an extra 2 corruption damage for each point of temporary Stamina expended this way.'
							),
						],
					}),
				}),
				level10: ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'retainer-21-retainer-10',
						name: 'Exsanguination',
						type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['Encounter'] }),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 1,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: [
										Characteristic.Might,
										Characteristic.Agility,
										Characteristic.Reason,
										Characteristic.Intuition,
										Characteristic.Presence,
									],
									tier1: '7 corruption damage; M < [weak] bleeding (save ends)',
									tier2: '11 corruption damage; M < [average] bleeding (save ends)',
									tier3: '16 corruption damage; M < [strong] bleeding (save ends)',
								})
							),
						],
					}),
				}),
			},
		}),
	],
	addOns: [],
};
