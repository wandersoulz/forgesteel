import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const arixx: MonsterGroupInterface = {
	id: 'monster-group-arixx',
	name: 'Arixx',
	description: `Pebbles dance as the ground quivers. A spray of rock and earth shatters the afternoon’s peace, and an arixx blooms from the earth. Their mandibles drip sizzling acid as a talon impales their next meal—sometimes a fat sheep, other times a shepherd. 

An arixx is a chitinous burrowing insectoid beast who stands taller than a horse. Their hooked claws and serrated mandibles are fearsome weapons, but even more dangerous is the stream of caustic spittle they use to dissolve their prey.`,
	picture: null,
	information: [
		{
			id: 'arixx-info-1',
			name: 'Pastoral Pest',
			description:
				'Although arixxi can be found anywhere, they are a particular plague in settled lands. An arixx hunts alone, lurking a few feet below roadways and pastures. When their sensitive antennae detect movement above, they burst from the earth, dragging living prey into their tunnels to be devoured. These hit-and-run tactics make the arixx virtually impossible to eradicate—unless they have the bad luck to ambush a party of well-armed adventurers. Many communities pay a handsome bounty for a slain arixx.',
		},
		{
			id: 'arixx-info-2',
			name: 'Terror of the Thaw',
			description:
				'Arixxi are a year-round menace in the warmest lands. In temperate places, arixxi hibernate during the winter, granting farmers a season of peace. But this respite is paid for on the first thaw of spring, when every arixx awakens ravenous on the same day and bursts from the ground to feed.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'arixx-malice-1',
			name: 'Burning Maw',
			cost: 3,
			icon: StatBlockIcon.Self,
			sections: [
				'The arixx dribbles acid over their mandibles, causing the next strike they make to gain an edge and deal an extra 3 acid damage.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'arixx-malice-2',
			name: 'Geyser',
			cost: 5,
			icon: StatBlockIcon.Area,
			sections: [
				'The arixx’s underground tunnels swell with pressure, causing a sudden influx of hot gas to burst from a 3-square-by-3-square area anywhere on the surface. Each enemy in the area makes an **Agility test**.',
				ElementFactory.createPowerRoll({
					characteristic: Characteristic.Agility,
					tier1: '4 damage; vertical push 5',
					tier2: '4 damage; vertical push 2',
					tier3: 'The target shifts to the nearest unoccupied space outside the area.',
				}),
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'arixx-malice-3',
			name: 'Solo Action',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'The arixx takes an additional main action on their turn. They can use this feature even if they are dazed.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'arixx-malice-4',
			name: 'Earth Sink',
			cost: 7,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'The encounter map suddenly quakes, then begins to sink. Each creature on the ground who has <code>A < 1</code> is knocked prone. Until the end of the encounter, each creature who starts their turn on the ground and can’t burrow must spend 1 additional square of movement to leave their starting position, or 2 squares if they start their turn prone or underground. A creature who starts and ends their turn in the same space on the ground and can’t burrow sinks 1 square into the ground.',
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'arixx-1',
			name: 'Arixx',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Arixx', 'Beast'],
			encounterValue: 36,
			speed: ElementFactory.createSpeed(5, 'burrow'),
			stamina: 200,
			stability: 2,
			size: ElementFactory.createSize(2),
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(3, 1, -3, 1, -4),
			features: [
				ElementFactory.FeatureFactory.createSoloMonster({
					id: 'arixx-1-feature-0',
					name: 'the arixx',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'arixx-1-feature-1',
					name: 'Soft Underbelly',
					description:
						'A prone creature making a melee strike against the arixx has a double edge on the strike instead of taking a bane.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'arixx-1-feature-2',
					name: 'Earthwalk',
					description:
						'Difficult terrain composed of earth or loose rock doesn’t cost the arixx extra movement.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-3',
						name: 'Bite',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '9 damage; grabbed',
									tier2: '13 damage; grabbed',
									tier3: '16 damage; grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A size 1 target grabbed this way takes 3 acid damage at the start of each of their turns.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-4',
						name: 'Claw Swing',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 damage; A < 1 grabbed',
									tier2: '8 damage; A < 2 grabbed',
									tier3: '11 damage; A < 3 grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The arixx can vertically slide each grabbed target up to 3 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-5',
						name: 'Spitfire',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '4 acid damage',
									tier2: '6 acid damage',
									tier3: '7 acid damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The ground beneath each target is covered in burning acid until the end of the encounter. Any enemy who enters an affected space for the first time in a round or starts their turn there takes 2 acid damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-6',
						name: 'Dirt Devil',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '4 damage',
									tier2: '6 damage; push 2',
									tier3: '7 damage; push 4',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The arixx flings rocks and debris to fill the area, and has a double edge on the power roll if they started their turn underground. The area is difficult terrain.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-7',
						name: 'Dust Cloud',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The arixx kicks up dust to fill the area until the start of their next turn, then moves up to their speed. Any enemy in the area or who targets a creature in the area takes a bane on power rolls.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-8',
						name: 'Skitter',
						type: ElementFactory.AbilityTypeFactory.createTrigger('The arixx takes damage.'),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'**Effect**: The arixx halves the damage and shifts up to 3 squares after the triggering effect resolves.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-9',
						name: 'Acid Spew',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Line,
								value: 2,
								value2: 10,
								within: 1,
							}),
						],
						target: 'Each creature and object in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 acid damage',
									tier2: '8 acid damage',
									tier3: '11 acid damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The ground in the area is covered in a puddle of acid until the end of the encounter. Any enemy who enters the area for the first time in a round or starts their turn there takes 2 acid damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-10',
						name: 'Sinkhole',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						distance: [ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Self, value: 0 })],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The arixx shifts up to their speed. If they end this shift above ground and within 2 squares of a creature, they use Bite against the creature and can then use the Dig maneuver.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'arixx-1-feature-11',
						name: 'Acid and Claws',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each creature in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 acid damage; M < 1 bleeding (save ends)',
									tier2: '8 acid damage; M < 2 bleeding (save ends)',
									tier3: '11 acid damage; M < 3 bleeding (save ends)',
								})
							),
						],
					}),
				}),
			],
		}),
	],
	addOns: [],
};
