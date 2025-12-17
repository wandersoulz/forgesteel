import { AbilityDistanceType } from '../../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { Characteristic } from '../../../core/enums/characteristic';
import { ElementFactory } from '../../../core/factory/element-factory';
import { SubClassInterface } from '../../../core/models/subclass';

export const telepathy: SubClassInterface = {
	id: 'talent-sub-3',
	name: 'Telepathy',
	description: 'Telepathy abilities allow you to communicate with, read, and influence the minds of other creatures.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'talent-sub-3-1-1',
						name: 'Feedback Loop',
						description:
							'Creating a brief psychic link between an enemy and their target gives that foe a taste of their own medicine.',
						type: ElementFactory.AbilityTypeFactory.createTrigger('The target deals damage to an ally.'),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target takes psychic damage equal to half the triggering damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'talent-sub-3-1-2',
						name: 'Remote Assistance',
						description: 'An ally gains the benefit of your intellect.',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The next ability roll an ally makes against the target before the start of your next turn gains an edge.'
							),
							ElementFactory.createAbilitySectionSpend({
								effect: 'You target one additional creature or object.',
							}),
						],
					}),
				}),
			],
		},
		{
			level: 2,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'talent-sub-3-2-1',
					name: 'Ease the Mind',
					description:
						'You gain an edge on tests made to stop combat and start a negotiation. Additionally, if you are present during a negotiation, any NPC who has a hostile or suspicious starting attitude has their patience increased by 1 (to a maximum of 5).',
				}),
				ElementFactory.FeatureFactory.createChoice({
					id: 'talent-sub-3-2-2',
					name: '2nd-Level Tradition Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'talent-sub-3-2-2a',
									name: 'Overwhelm',
									description:
										'You overload their senses, turning all their subconscious thoughts into conscious ones.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [
										AbilityKeyword.Psionic,
										AbilityKeyword.Ranged,
										AbilityKeyword.Strike,
										AbilityKeyword.Telepathy,
									],
									distance: [ElementFactory.DistanceFactory.createRanged(10)],
									target: 'One creature',
									cost: 5,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: [Characteristic.Reason],
												tier1: '6 + R psychic damage; I < [weak], slowed (save ends)',
												tier2: '10 + R psychic damage; I < [average], weakened (save ends)',
												tier3: '14 + R psychic damage; I < [strong], dazed (save ends)',
											})
										),
										ElementFactory.createAbilitySectionField({
											name: 'Strained',
											effect: 'You start crying, and you can’t use triggered actions or make free strikes until the end of the target’s next turn.',
										}),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'talent-sub-3-2-2b',
									name: 'Synaptic Override',
									description:
										'You gain control over an enemy’s nervous system. How pleasant for them.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged, AbilityKeyword.Telepathy],
									distance: [ElementFactory.DistanceFactory.createRanged(10)],
									target: 'One enemy',
									cost: 5,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: [Characteristic.Reason],
												tier1: 'The target makes a free strike against one enemy of your choice.',
												tier2: 'The target shifts up to their speed and uses their signature ability against any enemies of your choice.',
												tier3: 'The target moves up to their speed and uses their signature ability against any enemies of your choice.',
											})
										),
										ElementFactory.createAbilitySectionText(
											'**Effect** You control the target’s movement. The target can’t be moved in a way that would harm them (such as over a cliff), leave them dying, or result in them suffering a condition or other negative effect. However, you can move them to provoke opportunity attacks.'
										),
										ElementFactory.createAbilitySectionField({
											name: 'Strained',
											effect: 'You take 1d6 damage and are weakened until the end of your turn.',
										}),
									],
								}),
							}),
							value: 1,
						},
					],
				}),
			],
		},
		{
			level: 3,
			features: [],
		},
		{
			level: 4,
			features: [],
		},
		{
			level: 5,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'talent-sub-3-5-1',
					name: 'Compulsion',
					description:
						'Whenever you obtain a success on a test using a skill from the interpersonal skill group while interacting with an NPC, you can ask them a question using your Telepathic Speech feature. The NPC must answer the question truthfully to the best of their ability.',
				}),
				ElementFactory.FeatureFactory.createMultiple({
					id: 'talent-sub-3-5-2',
					name: 'Remote Amplification',
					features: [
						ElementFactory.FeatureFactory.create({
							id: 'talent-sub-3-5-2a',
							name: 'Remote Amplification',
							description: 'The range of your Telepathic Speech feature increases to 1 mile.',
						}),
						ElementFactory.FeatureFactory.createAbilityDistance({
							id: 'talent-sub-3-5-2b',
							keywords: [AbilityKeyword.Ranged, AbilityKeyword.Psionic],
							value: 5,
						}),
					],
				}),
			],
		},
		{
			level: 6,
			features: [
				ElementFactory.FeatureFactory.createChoice({
					id: 'talent-sub-3-6-1',
					name: '6th-Level Tradition Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'talent-sub-3-6-1a',
									name: 'Synaptic Conditioning',
									description:
										'It’s a subtle mindset shift. It’s not that they’re your enemy—you just don’t like them!',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [
										AbilityKeyword.Psionic,
										AbilityKeyword.Melee,
										AbilityKeyword.Ranged,
										AbilityKeyword.Telepathy,
									],
									distance: [ElementFactory.DistanceFactory.createMelee(2)],
									target: 'One creature',
									cost: 9,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '10 psychic damage; the target takes a bane on ability rolls made to harm you or your allies (save ends)',
												tier2: '14 psychic damage; the target has a double bane on ability rolls made to harm you or your allies (save ends)',
												tier3: '20 psychic damage; the target considers you and your allies to be their allies when using abilities and features (save ends)',
											})
										),
										ElementFactory.createAbilitySectionField({
											name: 'Strained',
											effect: 'While the target is under this effect, you no longer consider your enemies to be your enemies when using your abilities and features.',
										}),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'talent-sub-3-6-1b',
									name: 'Synaptic Dissipation',
									description:
										'You manipulate your enemies’ minds and make them wonder if you were ever really there in the first place.',
									type: ElementFactory.AbilityTypeFactory.createManeuver(),
									keywords: [
										AbilityKeyword.Psionic,
										AbilityKeyword.Ranged,
										AbilityKeyword.Strike,
										AbilityKeyword.Telepathy,
									],
									distance: [ElementFactory.DistanceFactory.createRanged(10)],
									target: 'Special',
									cost: 9,
									sections: [
										ElementFactory.createAbilitySectionText(
											'You target a number of creatures with this ability determined by the outcome of your power roll. You and your allies are invisible to each target until the start of your next turn.'
										),
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: 'Two creatures',
												tier2: 'Three creatures',
												tier3: 'Five creatures',
											})
										),
										ElementFactory.createAbilitySectionField({
											name: 'Strained',
											effect: 'The effect ends early if you take damage from an enemy’s ability.',
										}),
									],
								}),
							}),
							value: 1,
						},
					],
				}),
			],
		},
		{
			level: 7,
			features: [],
		},
		{
			level: 8,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'talent-sub-3-8-1',
					name: 'Mindlink',
					description:
						'During a respite, you can choose a number of creatures up to your Reason score who you have communicated with using your Telepathic Speech feature, creating a telepathic link among all of you. Whenever a linked creature spends one or more Recoveries, each other linked creature can spend a Recovery.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'talent-sub-3-8-2',
					name: 'Universal Connection',
					description: 'The range of your Telepathic Speech feature increases to anywhere on the same world.',
				}),
			],
		},
		{
			level: 9,
			features: [
				ElementFactory.FeatureFactory.createChoice({
					id: 'talent-sub-3-9-1',
					name: '9th-Level Tradition Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'talent-sub-3-9-1a',
									name: 'Resonant Mind Spike',
									description:
										'You fire a telepathic bolt empowered by every consciousness within reach directly into your foe’s mind.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [
										AbilityKeyword.Psionic,
										AbilityKeyword.Ranged,
										AbilityKeyword.Strike,
										AbilityKeyword.Telepathy,
									],
									distance: [ElementFactory.DistanceFactory.createRanged(10)],
									target: 'One creature',
									cost: 11,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: '15 + R psychic damage',
												tier2: '24 + R psychic damage',
												tier3: '28 + R psychic damage',
											})
										),
										ElementFactory.createAbilitySectionText(
											'This ability ignores cover and concealment.'
										),
										ElementFactory.createAbilitySectionField({
											name: 'Strained',
											effect: 'The ability roll scores a critical hit on a natural 17 or higher. You take half the damage the target takes, and you can’t reduce this damage in any way.',
										}),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'talent-sub-3-9-1b',
									name: 'Synaptic Terror',
									description:
										'You project a terrifying image into the brains of your foes, and their fear psionically invigorates your allies.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Psionic, AbilityKeyword.Telepathy],
									distance: [
										ElementFactory.DistanceFactory.create({
											type: AbilityDistanceType.Burst,
											value: 3,
										}),
									],
									target: 'Each ally and enemy in the area',
									cost: 11,
									sections: [
										ElementFactory.createAbilitySectionText(
											'You and each target ally can’t obtain lower than a tier 2 outcome on power rolls until the start of your next turn. Each target enemy is affected by the ability’s power roll.'
										),
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Presence,
												tier1: 'R < [weak], frightened (save ends)',
												tier2: 'R < [average], frightened (save ends)',
												tier3: 'R < [strong], frightened (save ends)',
											})
										),
										ElementFactory.createAbilitySectionField({
											name: 'Strained',
											effect: 'You can’t use this ability if doing so would cause you to have negative clarity.',
										}),
									],
								}),
							}),
							value: 1,
						},
					],
				}),
			],
		},
		{
			level: 10,
			features: [],
		},
	],
	abilities: [],
	selected: false,
};
