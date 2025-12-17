import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../factory/element-factory';
import { FeatureInterface } from '../../core/models/feature';
import { MonsterRoleType } from '../../core/enums/monster-role-type';

export class RetainerLogic {
	static getRetainerAdvancementFeatures = (
		level: number,
		role: MonsterRoleType,
		level4?: FeatureInterface,
		level7?: FeatureInterface,
		level10?: FeatureInterface
	): { level: number; feature: FeatureInterface }[] => {
		const options4 = level4 ? [level4] : [];
		const options7 = level7 ? [level7] : [];
		const options10 = level10 ? [level10] : [];

		const std = RetainerLogic.getRetainerStandardAbilities(role);
		if (std) {
			options4.push(std.level4);
		}
		if (std) {
			options7.push(std.level7);
		}
		if (std) {
			options10.push(std.level10);
		}

		const levels = [
			{
				level: 2,
				feature: ElementFactory.FeatureFactory.createChoice({
					id: 'retainer-2',
					name: 'Level 2 Characteristic Increase',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-2-1',
								characteristic: Characteristic.Might,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-2-2',
								characteristic: Characteristic.Agility,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-2-3',
								characteristic: Characteristic.Reason,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-2-4',
								characteristic: Characteristic.Intuition,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-2-5',
								characteristic: Characteristic.Presence,
								value: 1,
							}),
							value: 1,
						},
					],
				}),
			},
			{
				level: 4,
				feature: ElementFactory.FeatureFactory.createChoice({
					id: 'retainer-4',
					name: 'Level 4 Choice',
					options: options4.map((o) => ({ feature: o, value: 1 })),
				}),
			},
			{
				level: 5,
				feature: ElementFactory.FeatureFactory.createMultiple({
					id: 'retainer-5',
					name: 'Level 5 Characteristic Increase',
					features: [
						ElementFactory.FeatureFactory.createCharacteristicBonus({
							id: 'retainer-5-1',
							characteristic: Characteristic.Might,
							value: 1,
						}),
						ElementFactory.FeatureFactory.createCharacteristicBonus({
							id: 'retainer-5-2',
							characteristic: Characteristic.Agility,
							value: 1,
						}),
						ElementFactory.FeatureFactory.createCharacteristicBonus({
							id: 'retainer-5-3',
							characteristic: Characteristic.Reason,
							value: 1,
						}),
						ElementFactory.FeatureFactory.createCharacteristicBonus({
							id: 'retainer-5-4',
							characteristic: Characteristic.Intuition,
							value: 1,
						}),
						ElementFactory.FeatureFactory.createCharacteristicBonus({
							id: 'retainer-5-5',
							characteristic: Characteristic.Presence,
							value: 1,
						}),
					],
				}),
			},
			{
				level: 7,
				feature: ElementFactory.FeatureFactory.createChoice({
					id: 'retainer-7',
					name: 'Level 7 Choice',
					options: options7.map((o) => ({ feature: o, value: 1 })),
				}),
			},
			{
				level: 8,
				feature: ElementFactory.FeatureFactory.createChoice({
					id: 'retainer-8',
					name: 'Level 8 Characteristic Increase',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-8-1',
								characteristic: Characteristic.Might,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-8-2',
								characteristic: Characteristic.Agility,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-8-3',
								characteristic: Characteristic.Reason,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-8-4',
								characteristic: Characteristic.Intuition,
								value: 1,
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createCharacteristicBonus({
								id: 'retainer-8-5',
								characteristic: Characteristic.Presence,
								value: 1,
							}),
							value: 1,
						},
					],
				}),
			},
			{
				level: 10,
				feature: ElementFactory.FeatureFactory.createChoice({
					id: 'retainer-10',
					name: 'Level 10 Choice',
					options: options10.map((o) => ({ feature: o, value: 1 })),
				}),
			},
		];

		return levels.filter((lvl) => lvl.level > level);
	};

	static getRetainerStandardAbilities = (role: MonsterRoleType) => {
		switch (role) {
			case MonsterRoleType.Ambusher:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-ambusher-4',
							name: 'Go for the Jugular',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [ElementFactory.DistanceFactory.createMelee()],
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
										tier1: '5 damage; M < [weak] bleeding (save ends)',
										tier2: '9 damage; M < [average] bleeding (save ends)',
										tier3: '12 damage; M [strong] bleeding (save ends)',
									})
								),
								ElementFactory.createAbilitySectionText(
									'If the target is grabbed or the retainer had an edge on the power roll, the retainer gains 2 surges.'
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-ambusher-7',
							name: 'Hamstring Slice',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
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
										tier1: '7 damage; M < [weak] slowed (EoT)',
										tier2: '10 damage; M < [average] slowed (save ends)',
										tier3: '15 damage; M < [strong] slowed and target can’t use triggered actions (save ends)',
									})
								),
								ElementFactory.createAbilitySectionText(
									'The retainer and their mentor can each move up to their speed.'
								),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-ambusher-10',
							name: 'Hold ’Em Down',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
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
										tier1: '11 damage; if the target is size 1 or smaller, who has M < [weak] is grabbed',
										tier2: '16 damage; if the target is size 1 or smaller, who has M < [average] is grabbed',
										tier3: '21 damage; if the target is size 1 or smaller, who has M < [strong] is grabbed',
									})
								),
								ElementFactory.createAbilitySectionText(
									'The retainer gains 2 surges when any creature makes a strike against a target grabbed this way.'
								),
							],
						}),
					}),
				};
			case MonsterRoleType.Artillery:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-artillery-4',
							name: 'Supporting Volley',
							type: ElementFactory.AbilityTypeFactory.createTrigger(
								'The retainer’s mentor makes a strike against a creature within distance.'
							),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Weapon],
							distance: [ElementFactory.DistanceFactory.createRanged(5)],
							target: 'The triggering creature',
							sections: [
								ElementFactory.createAbilitySectionText(
									'The retainer makes a ranged free strike against the target.'
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-artillery-7',
							name: 'Line ‘Em Up',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
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
										tier1: '7 damage; M < [weak] prone',
										tier2: '11 damage; M < [average] prone',
										tier3: '16 damage; M < [strong] prone',
									})
								),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-artillery-10',
							name: 'Ricochet Shot',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [ElementFactory.DistanceFactory.createRanged(5)],
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
										tier1: '9 damage',
										tier2: '14 damage',
										tier3: '19 damage',
									})
								),
								ElementFactory.createAbilitySectionText(
									'The retainer can target a second creature or object within 5 squares of the original target that has line of effect to the original target. The retainer doesn’t need line of effect to the second target but must be aware of their location.'
								),
							],
						}),
					}),
				};
			case MonsterRoleType.Brute:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-brute-4',
							name: 'Big Windup',
							type: ElementFactory.AbilityTypeFactory.createManeuver(),
							distance: [ElementFactory.DistanceFactory.createSelf()],
							target: 'Self',
							sections: [
								ElementFactory.createAbilitySectionText(
									'Until the start of the retainer’s next turn, strikes made against the retainer gain an edge. At the start of the retainer’s next turn, they gain 2 surges, and any ability they use before the end of their turn that force moves a creature can move that creature 2 additional squares.'
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-brute-7',
							name: 'Overhand Swat',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [ElementFactory.DistanceFactory.createMelee()],
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
										tier2: '13 damage; push 2',
										tier3: '16 damage; push 3; M < [strong] prone',
									})
								),
								ElementFactory.createAbilitySectionText(
									'If the target ends any forced movement from this ability in a square adjacent to the retainer’s mentor, the mentor can make a melee free strike against them.'
								),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-brute-10',
							name: 'Dizzying Sweep',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
							distance: [
								ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
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
										tier1: '10 damage; push 1',
										tier2: '14 damage; push 2',
										tier3: '20 damage; push 4',
									})
								),
								ElementFactory.createAbilitySectionText(
									'The retainer is dazed until the end of their next turn.'
								),
							],
						}),
					}),
				};
			case MonsterRoleType.Controller:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-controller-4',
							name: 'Elemental Blast',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area],
							distance: [
								ElementFactory.DistanceFactory.create({
									type: AbilityDistanceType.Cube,
									value: 3,
									within: 10,
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
										tier1: '4 damage; push 2',
										tier2: '6 damage; push 3',
										tier3: '10 damage; push 5',
									})
								),
								ElementFactory.createAbilitySectionText(
									'When the retainer uses this ability, they can choose for it to deal one of the following damage types: acid, cold, lightning, poison, or sonic.'
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-controller-7',
							name: 'Oil Slick',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
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
										tier1: '5 poison damage; M < [weak] prone',
										tier2: '8 poison damage; M < [average] prone',
										tier3: '11 poison damage; M < [strong] prone',
									})
								),
								ElementFactory.createAbilitySectionText(
									'The area is difficult terrain for eenemies. Any enemy has fire weakness 5 while in the area, and any enemy who ends their turn in the area and has no movement remaining falls prone.'
								),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-controller-10',
							name: 'Shattering Shards',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [ElementFactory.DistanceFactory.createRanged(10)],
							target: 'One Object',
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
									'The area within 2 squares of the target is difficult terrain, and each enemy in the area takes the same damage that the object took.'
								),
							],
						}),
					}),
				};
			case MonsterRoleType.Defender:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-defender-4',
							name: 'Watch Out!',
							type: ElementFactory.AbilityTypeFactory.createTrigger(
								'The target takes damage from a strike',
								{ qualifiers: ['encounter'] }
							),
							distance: [ElementFactory.DistanceFactory.createMelee()],
							target: 'The retainer’s mentor',
							sections: [
								ElementFactory.createAbilitySectionText(
									'The retainer pushes the target or the attacking creature up to 2 squares. If that moves the mentor out of range of the strike, the strike has no effect.'
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-defender-7',
							name: 'It’s Me You Want!',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [ElementFactory.DistanceFactory.createMelee()],
							target: 'Two creatures',
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
										tier1: '7 damage; taunted (EoT)',
										tier2: '11 damage; taunted (save ends)',
										tier3: '16 damage; taunted (save ends)',
									})
								),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-defender-10',
							name: 'Last Stand',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
							distance: [ElementFactory.DistanceFactory.createMelee()],
							target: 'One enemy',
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
										tier2: '13 damage',
										tier3: '17 damage',
									})
								),
								ElementFactory.createAbilitySectionText(
									'The retainer and their mentor each gain 10 temporary Stamina. Additionally, each winded ally within 2 of the retainer can spend a Recovery.'
								),
							],
						}),
					}),
				};
			case MonsterRoleType.Harrier:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-harrier-4',
							name: 'Tackle',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [
								AbilityKeyword.Charge,
								AbilityKeyword.Melee,
								AbilityKeyword.Strike,
								AbilityKeyword.Weapon,
							],
							distance: [ElementFactory.DistanceFactory.createMelee()],
							target: 'One enemy',
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
										tier1: '5 damage; push 1',
										tier2: '9 damage; push 2',
										tier3: '12 damage; push 4',
									})
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-harrier-7',
							name: 'Meet You There',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
							distance: [ElementFactory.DistanceFactory.createMelee()],
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
										tier2: '10 damage',
										tier3: '15 damage',
									})
								),
								ElementFactory.createAbilitySectionText(
									'Before or after the strike, the retainer and their mentor can each shift up to their speed.'
								),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-harrier-10',
							name: 'Nab and Stab',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
							distance: [
								ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
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
										tier1: '11 damage; one target who has M < [weak] is grabbed',
										tier2: '16 damage; one target who has M < [average] is grabbed',
										tier3: '21 damage; one target who has M < [strong] is grabbed',
									})
								),
								ElementFactory.createAbilitySectionText(
									'The retainer shifts up to 2 squares, and can move a creature grabbed using this ability with them.'
								),
							],
						}),
					}),
				};
			case MonsterRoleType.Hexer:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-hexer-4',
							name: 'Backfire Curse',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Magic, AbilityKeyword.Strike, AbilityKeyword.Ranged],
							distance: [ElementFactory.DistanceFactory.createRanged(10)],
							target: 'One enemy',
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
										tier1: '2 corruption damage; the target is cursed (EoT)',
										tier2: '5 corruption damage; the target is cursed (EoT)',
										tier3: '7 corruption damage; the target is cursed (EoT)',
									})
								),
								ElementFactory.createAbilitySectionText(
									'While the target is cursed this way, whenever they make a strike that targets only one creature, the retainer can use a free triggered action to choose a second target for the strike within its distance.'
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-hexer-7',
							name: 'Take Root',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
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
										tier1: '5 damage; M < [weak] slowed (save ends)',
										tier2: '9 damage; M < [average] slowed (save ends)',
										tier3: '12 damage; M < [strong] slowed (save ends)',
									})
								),
								ElementFactory.createAbilitySectionText(
									'While the target is slowed this way, if they end their turn without moving on that turn, they are no longer slowed and are restrained (save ends).'
								),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-hexer-10',
							name: 'Mazed',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Magic, AbilityKeyword.Strike],
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
										tier1: '7 damage; M < [weak] mazed (save ends)',
										tier2: '11 damage; M < [average] mazed (save ends)',
										tier3: '16 damage; M < [strong] mazed (save ends)',
									})
								),
								ElementFactory.createAbilitySectionText(
									'While mazed, the target is dazed. Additionally, at the end of each of the mazed target’s turns, the retainer can cause the target to move up to their speed in a straight line in a direction of the retainer’s choice. This is not forced movement, and the movement ends if it would cause the target to enter difficult or damaging terrain.'
								),
							],
						}),
					}),
				};
			case MonsterRoleType.Mount:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-mount-4',
							name: 'Cavalry Charge',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [
								AbilityKeyword.Charge,
								AbilityKeyword.Melee,
								AbilityKeyword.Strike,
								AbilityKeyword.Weapon,
							],
							distance: [ElementFactory.DistanceFactory.createMelee()],
							target: 'One enemy',
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
										tier2: '8 damage',
										tier3: '11 damage',
									})
								),
								ElementFactory.createAbilitySectionText(
									'If this ability is used as part of the Charge action, the mount’s rider can use a free triggered action to make a melee free strike against the same target.'
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-mount-7',
							name: 'Giddyup!',
							type: ElementFactory.AbilityTypeFactory.createMove({ qualifiers: ['encounter'] }),
							distance: [ElementFactory.DistanceFactory.createRanged(5)],
							target: 'Self',
							sections: [
								ElementFactory.createAbilitySectionText(
									'The mount shifts twice their speed. They can jump as part of this movement.'
								),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-mount-10',
							name: 'Rearing Trample',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
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
										tier1: '10 damage; M < [weak] prone',
										tier2: '15 damage; M < [average] prone',
										tier3: '21 damage; M < [strong] prone',
									})
								),
								ElementFactory.createAbilitySectionText(
									'A target knocked prone this way or who is already prone takes an extra 5 damage'
								),
							],
						}),
					}),
				};
			case MonsterRoleType.Support:
				return {
					level4: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-support-4',
							name: 'Battlefield Medic',
							type: ElementFactory.AbilityTypeFactory.createManeuver(),
							keywords: [AbilityKeyword.Melee],
							distance: [ElementFactory.DistanceFactory.createMelee()],
							target: 'Self or one ally',
							sections: [
								ElementFactory.createAbilitySectionText(
									'The target spends a Recovery, and ability rolls against the target take a bane until the start of the retainer’s next turn.'
								),
							],
						}),
					}),
					level7: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-support-7',
							name: 'Focus Fire',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
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
										tier1: '9 damage',
										tier2: '13 damage',
										tier3: '18 damage',
									})
								),
								ElementFactory.createAbilitySectionText('One ally within distance gains 2 surges.'),
							],
						}),
					}),
					level10: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'retainer-support-10',
							name: 'Back from the Dead',
							type: ElementFactory.AbilityTypeFactory.createMain({ qualifiers: ['encounter'] }),
							keywords: [AbilityKeyword.Melee],
							distance: [ElementFactory.DistanceFactory.createMelee()],
							target: 'One ally',
							sections: [
								ElementFactory.createAbilitySectionText(
									'If the target is at or below 0 Stamina, or if they have died due to Stamina loss since the end of the retainer’s last turn, the target is alive with 1 Stamina and can spend a Recovery.'
								),
							],
						}),
					}),
				};
		}

		return null;
	};
}
