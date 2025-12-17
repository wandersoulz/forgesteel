import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const kingfissureWorm: MonsterGroupInterface = {
	id: 'monster-group-kingfissure-worm',
	name: 'Kingfissure Worm',
	description:
		'Named for their infamous hunting technique, kingfissure worms terraform the earth as they move, building tunnels and crevasses to accommodate their enormous form. They then lie in wait deep underground. Seasoned adventurers know to be wary when traveling past even the smallest crack in the earth. For when a worm senses the vibrations of their prey above, they shoot their multiple serpentine tongues through the crevasses, dragging prey from the surface into their cavernous maw.',
	picture: null,
	information: [
		{
			id: 'kingfissure-worm-info-1',
			name: 'Intestine Inventory',
			description:
				'The kingfissure worm eats indiscriminately, swallowing creatures, structures, and precious gems alike. The wealth inside a kingfissure worm would put any dragon’s hoard to shame, though the worm cares nothing for treasure and knows nothing of the spoils lodged in their labyrinthine intestines. Few people have managed to claim the treasure lost to the inside of a kingfissure worm, but stories enough have spread to draw scavengers, bandits, and even armies to the corpses of recently slain worms, all hoping to come away with a king’s ransom in spoils.',
		},
		{
			id: 'kingfissure-worm-info-2',
			name: 'Home Renovators',
			description:
				'Most worms build a den of tunnels and fissures, remaining in that lair for as long as the pickings on the surface are good and they aren’t disturbed. When a kingfissure worm seeks a new home, they target areas with abundant food—occasionally leading to villagers waking up to find their surrounding lands have been terraformed overnight. Residents of such lands generally have two choices: pack up and leave or prepare for battle. If a worm is somehow defeated, all manner of creatures and communities try to lay claim to the worm’s underground structures. These empty dens make wonderful war bunkers, isolated workshops, and even highly defensible villages.',
		},
		{
			id: 'kingfissure-worm-info-3',
			name: 'Unstoppable Force',
			description:
				'The kingfissure worm is a species determined to outrun, outlast, and out-eat every other living creature. Though the monster might be slowed by a display of great power, only death stops them. Once they have set their sights on their prey, they single-mindedly pursue it regardless of terrain or circumstance. The only thing that gives a kingfissure worm pause are attacks on their tongues, which are left vulnerable when they are dragging creatures to their impending doom.',
		},
		{
			id: 'kingfissure-worm-info-4',
			name: 'Unclear Origins',
			description:
				'Kingfissure worms have no identifiable sexual characteristics and are extremely territorial. If two kingfissure worms encounter each other, the result is always a cataclysmic duel that ends in one devouring the other. Because of this, most scholars theorize that these creatures reproduce asexually—and that when a kingfissure worm dies, their tongues detach and grow into full-fledged worms. While this has yet to be confirmed, juvenile kingfissure worms have been seen in the wild, most often spotted following animal herds or traveling communities, feeding off of stragglers, refuse, remains, and vermin.',
		},
		{
			id: 'kingfissure-worm-info-5',
			name: 'Swallowed Survivors',
			description:
				'Kingfissure worms never stop growing, and the oldest are truly immense, easily mistaken in the distance for a strangely mobile mountain range. Deep within the bowels of these behemoths, unusual biomes and oversized gut fauna may flourish. In fact, some people who have survived their trip down the gargantuan gullet of one of the great worms have been able to eke out a life—and even form thriving communities—safe inside the spacious lower abdomen of their living quarters.',
		},
		{
			id: 'kingfissure-worm-info-6',
			name: 'Sensitive Giant',
			description:
				'For all their might and vitality, kingfissure worms are primarily ambush hunters, and like any ambush hunter, they need delicate and precise senses to detect and target their prey when it approaches. As burrowing creatures, they have a finely tuned sense of touch able to detect even the most minute vibrations while in direct contact with earth and stone. This fills the role of their primary sense, and their rudimentary eyesight leaves them dreadfully nearsighted. In combination, their poor vision and reliance on ground-conducted vibrations means that they have almost no way of pinpointing flying creatures, and many species of birds find kingfissure worm territory exceptionally safe and free from predators.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMaliceAbility({
			ability: ElementFactory.createAbility({
				id: 'kingfissure-worm-malice-1',
				name: 'Aftershock',
				type: ElementFactory.AbilityTypeFactory.createTrigger(
					'A creature deals damage to the kingfissure worm or one of their tongues.',
					{ free: true }
				),
				distance: [ElementFactory.DistanceFactory.createSelf()],
				target: 'Self',
				cost: 3,
				sections: [
					ElementFactory.createAbilitySectionText(
						'Each creature within 5 squares of the kingfissure worm takes 5 damage, and if they have A<4 they are knocked prone. The kingfissure worm can use this ability only once per round.'
					),
				],
			}),
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'kingfissure-worm-malice-2',
			name: 'Solo Action',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'The kingfissure worm takes an additional main action on their turn. They can use this feature even if they are dazed.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'kingfissure-worm-malice-3',
			name: '',
			cost: 5,
			icon: StatBlockIcon.Self,
			sections: [
				'The kingfissure worm loses 35 Stamina and regrows one tongue, to a maximum of three tongues. The worm is then dazed until the end of their turn.',
			],
		}),
		ElementFactory.FeatureFactory.createMaliceAbility({
			ability: ElementFactory.createAbility({
				id: 'kingfissure-worm-malice-4',
				name: 'Megaquake',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 })],
				target: 'Each enemy and object in the area',
				cost: 7,
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							bonus: 5,
							tier1: '8 damage; M<3 slide 5',
							tier2: '13 damage; M<4 slide 5',
							tier3: '17 damage; M<5 slide 5',
						})
					),
					ElementFactory.createAbilitySectionText(
						'Until the end of the next round, each target takes a −3 penalty to stability, treats all terrain as difficult terrain, and takes 10 damage whenever they are knocked prone.'
					),
				],
			}),
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'kingfissure-worm-1',
			name: 'Kingfissure Worm',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Beast', 'Worm'],
			encounterValue: 108,
			size: ElementFactory.createSize(5),
			speed: ElementFactory.createSpeed(10, 'burrow'),
			stamina: 420,
			stability: 5,
			freeStrikeDamage: 8,
			characteristics: ElementFactory.createCharacteristics(5, 1, -5, 2, -3),
			features: [
				ElementFactory.FeatureFactory.createSoloMonster({
					id: 'kingfissure-worm-1-feature-1',
					name: 'the kingfissure worm',
					endEffect: 10,
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kingfissure-worm-1-feature-2',
					name: 'Multiple Tongues',
					description:
						'The kingfissure worm has three tongues. Each tongue is a 5 × 1 line within 1 square of the kingfissure worm, has 35 Stamina and psychic immunity all, and can’t be force moved. Each tongue enables the kingfissure worm to grab one size 3 or smaller creature or object. A tongue can be targeted by abilities only while it has a target grabbed.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kingfissure-worm-1-feature-3',
						name: 'Tongue Grab',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(5)],
						target: 'One creature or object per tongue',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '13 damage; M<3 grabbed',
									tier2: '18 damage; M<4 grabbed',
									tier3: '22 damage; M<5 grabbed and the target takes a bane on the Escape Grab maneuver',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The kingfissure worm must have one or more tongues to use this ability. As a maneuver, the kingfissure worm can pull up to two creatures grabbed this way adjacent to them.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kingfissure-worm-1-feature-4',
						name: 'Maw',
						type: ElementFactory.AbilityTypeFactory.createMain(),
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
									bonus: 5,
									tier1: '15 damage; push 3',
									tier2: '20 damage; push 5, prone',
									tier3: '25 damage; the target is swallowed (see Swallowed)',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'When the kingfissure worm uses the Charge main action, they ignore difficult terrain and automatically destroy mundane size 3 and smaller objects in the path of their charge. The first time the kingfissure worm moves through a creature’s space during this charge, that creature takes 8 damage and is pushed up to 3 squares.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kingfissure-worm-1-feature-5',
						name: 'Consume',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One grabbed creature',
						cost: 2,
						sections: [ElementFactory.createAbilitySectionText('The target is swallowed (see Swallowed).')],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kingfissure-worm-1-feature-6',
						name: 'Tongue Whip',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(5),
							ElementFactory.DistanceFactory.createRanged(10),
						],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The kingfissure worm can use this maneuver only while they have a creature or object grabbed. The worm slams the grabbed creature or object against the target, dealing 13 damage to both. If this ability is used at range, it deals an extra 5 damage and the grabbed creature or object is released.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kingfissure-worm-1-feature-7',
						name: 'Tearing Recoil',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A tongue takes damage that doesn’t reduce it to 0 Stamina.'
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The kingfissure worm deals 5 damage to the creature or object the tongue had grabbed, releases that creature or object, then pulls the damaged tongue back into their mouth.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kingfissure-worm-1-feature-8',
					name: 'Seismic King',
					description:
						'The kingfissure worm has line of effect only within 3 squares. However, they ignore concealment for creatures touching the ground and don’t need line of effect to use abilities against those creatures.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kingfissure-worm-1-feature-9',
					name: 'Swallowed',
					description:
						'A creature swallowed by the kingfissure worm is restrained and takes 1d6 acid damage at the start of every turn. If the worm takes 25 or more damage in a single round from swallowed creatures, they immediately regurgitate all creatures they have swallowed, who land prone in unoccupied spaces within 3 squares of the kingfissure worm.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kingfissure-worm-1-feature-10',
					name: 'Titanic Tunneler',
					description:
						'The kingfissure worm can burrow through stone. When the worm burrows, they create a stable size 3 tunnel in the squares they move through.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'kingfissure-worm-1-feature-11',
					name: 'Unstoppable Crawler',
					description:
						'The kingfissure worm can’t be frightened or knocked prone. While the worm is restrained or slowed, they take a −2 penalty to speed instead of suffering those conditions’ usual effects on speed.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kingfissure-worm-1-feature-12',
						name: 'King’s Fissure',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Line,
								value: 20,
								value2: 4,
								within: 1,
							}),
						],
						target: 'Each creature and object in the area',
						sections: [
							ElementFactory.createAbilitySectionField({
								name: 'Special',
								effect: 'Each target must be on the ground.',
							}),
							ElementFactory.createAbilitySectionText(
								'The area becomes a 10-square-deep fissure in the earth. Each target makes an **Agility test**.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: Characteristic.Agility,
									tier1: '10 damage; the target falls into the fissure, lands prone, and can’t stand (EoT)',
									tier2: '10 damage; the target is knocked prone and left hanging at the edge of the area',
									tier3: 'The target shifts to the nearest unoccupied space outside the area.',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kingfissure-worm-1-feature-13',
						name: 'Earth Breach',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Special',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The kingfissure worm can use this villain action only while burrowing. The worm burrows up to half their speed, then breaches the surface and moves 5 squares straight up before dropping back to the ground. Each creature or object whose space the worm moves through during this movement takes 10 damage, and if they have A<4 they are knocked prone. Any creature who is made winded by this damage is swallowed (see Swallowed).'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'kingfissure-worm-1-feature-14',
						name: 'Better Out Than In',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy and object in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '8 acid damage; P<3 weakened (save ends)',
									tier2: '13 acid damage; P<4 weakened (save ends)',
									tier3: '17 acid damage; P<5 weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Each creature swallowed by the worm is regurgitated and automatically subject to the tier 3 outcome, then lands prone in an unoccupied space within 5 squares of the kingfissure worm.'
							),
						],
					}),
				}),
			],
		}),
	],
	addOns: [],
};
