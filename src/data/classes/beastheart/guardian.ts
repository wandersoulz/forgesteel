import { AbilityDistanceType } from '../../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { Characteristic } from '../../../core/enums/characteristic';
import { ElementFactory } from '../../../core/factory/element-factory';
import { PerkData } from '../../../data/perk-data';
import { SubClassInterface } from '../../../core/models/subclass';

export const guardian: SubClassInterface = {
	id: 'beastheart-sub-1',
	name: 'Guardian',
	description: 'You are the fearless defender of your pack: anyone who harms them must go through you.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'beastheart-sub-1-1-1',
					selected: ['Read Person'],
				}),
				ElementFactory.FeatureFactory.createPackageContent({
					id: 'beastheart-sub-1-1-2',
					name: 'Wild Nature Benefit',
					description: 'The target is taunted by your companion until the start of your next turn.',
					tag: 'feral-strike',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'beastheart-sub-1-1-3',
						name: 'Don’t Worry, I’m Here',
						description: 'You siphon away the pain and endure it yourself.',
						type: ElementFactory.AbilityTypeFactory.createTrigger('An adjacent ally takes damage.'),
						keywords: [AbilityKeyword.Magic],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One ally',
						sections: [
							ElementFactory.createAbilitySectionText('The triggering damage is halved for the ally.'),
							ElementFactory.createAbilitySectionSpend({
								effect: 'You spend one of your Recoveries; the ally regains the Stamina instead of you.',
							}),
						],
					}),
				}),
			],
		},
		{
			level: 2,
			features: [
				ElementFactory.FeatureFactory.createPerk({
					id: 'beastheart-sub-1-2-1a',
					selected: [PerkData.peopleSense],
				}),
				ElementFactory.FeatureFactory.create({
					id: 'beastheart-sub-1-2-1b',
					name: 'Watchdog',
					description: 'You and your companion are never surprised.',
				}),
				ElementFactory.FeatureFactory.createChoice({
					id: 'beastheart-sub-1-2-2',
					name: 'Guardian Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'beastheart-sub-1-2-2a',
									name: 'Belly of the Beast',
									description: 'What do you have in your mouth? No! Bad boy!',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [
										AbilityKeyword.Companion,
										AbilityKeyword.Melee,
										AbilityKeyword.Strike,
										AbilityKeyword.Weapon,
									],
									distance: [ElementFactory.DistanceFactory.createMelee()],
									target: 'One grabbed creature your companion’s size or smaller',
									cost: 5,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '6 + M damage ; M < [weak], swallowed',
												tier2: '10 + M damage ; M < [average], swallowed',
												tier3: '14 + M damage ; M < [strong], swallowed',
											})
										),
										ElementFactory.createAbilitySectionText(
											'A swallowed creature shares your companion’s space, is grabbed and restrained, and has line of effect only to your companion. Nothing has line of effect to the swallowed creature. At the start of each of your turns, the swallowed creature takes acid damage equal to 1 + your companion’s Might. If the creature escapes the grab, the companion immediately regurgitates the creature, who lands prone in an unoccupied square adjacent to your companion and is no longer grabbed or restrained. Your companion can also regurgitate the creature as a free maneuver. Your companion can have one creature swallowed at a time.'
										),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'beastheart-sub-1-2-2b',
									name: 'Fetch!',
									description:
										'Your companion blinks out of existence, returning with a visitor you were particularly hoping to meet.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [
										AbilityKeyword.Companion,
										AbilityKeyword.Magic,
										AbilityKeyword.Melee,
										AbilityKeyword.Strike,
										AbilityKeyword.Weapon,
									],
									distance: [ElementFactory.DistanceFactory.createMelee()],
									target: 'One creature or object',
									cost: 5,
									sections: [
										ElementFactory.createAbilitySectionText(`
Your companion teleports up to 5 squares before and after making the attack. Instead of grabbing a targeted creature, your companion can hold a targeted object that is smaller than they are. You can forgo dealing damage when using this ability.

While teleporting after making the attack, your companion can teleport with a grabbed creature or held object if there is sufficient room at the destination; you decide which squares adjacent to your companion they are teleported to`),
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '6 + M damage; M < [weak], grabbed',
												tier2: '8 + M damage; M < [average], grabbed',
												tier3: '12 + M damage; M < [strong], grabbed',
											})
										),
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
					id: 'beastheart-sub-1-5-1',
					name: 'Calming Exercises',
					description:
						'When you use Don’t Worry, I’m Here to spend a Recovery, you and the target both gain the benefit of the Recovery.',
				}),
			],
		},
		{
			level: 6,
			features: [
				ElementFactory.FeatureFactory.createChoice({
					id: 'beastheart-sub-1-6-1',
					name: 'Guardian Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'beastheart-sub-1-6-1a',
									name: "Sic 'Em!",
									description: 'Your companion rushes forward to protect you from a dangerous foe.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [
										AbilityKeyword.Charge,
										AbilityKeyword.Companion,
										AbilityKeyword.Melee,
										AbilityKeyword.Strike,
										AbilityKeyword.Weapon,
									],
									distance: [ElementFactory.DistanceFactory.createMelee()],
									target: 'One creature',
									cost: 'signature',
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Might,
												tier1: '11 + M damage; taunted (save ends); M < [weak], prone',
												tier2: '16 + M damage; taunted (save ends); M < [average], prone',
												tier3: '21 + M damage; taunted (save ends); M < [strong], prone and can’t stand (EoT)',
											})
										),
										ElementFactory.createAbilitySectionSpend({
											value: 2,
											effect: 'Your companion can use this ability as a triggered action against an enemy who damages you.',
										}),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'beastheart-sub-1-6-1b',
									name: 'Staredown',
									description:
										'Your companion locks eyes with an enemy, imposing their will upon the enemy and daring them to move a muscle.',
									type: ElementFactory.AbilityTypeFactory.createManeuver(),
									keywords: [AbilityKeyword.Companion, AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [ElementFactory.DistanceFactory.createRanged(5)],
									target: 'One creature',
									cost: 'signature',
									sections: [
										ElementFactory.createAbilitySectionText(
											'The first time the target uses a move, action, maneuver, or triggered action before the start of your next turn, the target triggers the following power roll before they act. At the start of the next turn, if the target hasn’t triggered this power roll, they become frightened (save ends).'
										),
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '9 + I psychic damage; I < [weak], weakened (save ends)',
												tier2: '13 + I psychic damage; I < [average], weakened (save ends)',
												tier3: '18 + I psychic damage; I < [strong], weakened (save ends)',
											})
										),
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
					id: 'beastheart-sub-1-8-1',
					name: 'Zone of Control',
					description:
						'Your and your companion’s free strikes deal extra damage equal to your Intuition score. You or your companion can make an opportunity attack whenever an adjacent enemy moves to a space that isn’t adjacent, even if the enemy shifted, teleported, was force moved, or used some other feature that doesn’t provoke opportunity attacks.',
				}),
			],
		},
		{
			level: 9,
			features: [
				ElementFactory.FeatureFactory.createChoice({
					id: 'beastheart-sub-1-9-1',
					name: 'Guardian Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'beastheart-sub-1-9-1a',
									name: 'Banshee Howl',
									description:
										'Your companion’s howl, screech, roar, or psychic emanation presages death to those who hear it.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Companion, AbilityKeyword.Magic],
									distance: [
										ElementFactory.DistanceFactory.create({
											type: AbilityDistanceType.Burst,
											value: 3,
										}),
									],
									target: 'Each enemy in the area',
									cost: 11,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '5 sonic damage; I < [weak], frightened (save ends)',
												tier2: '10 sonic damage; I < [average], frightened (save ends)',
												tier3: '15 sonic damage; I < [strong], frightened (save ends)',
											})
										),
										ElementFactory.createAbilitySectionText(
											'While frightened by this ability, a creature takes 10 psychic damage at the start of each of your turns.'
										),
										ElementFactory.createAbilitySectionSpend({
											effect: 'This ability also affects a 3 burst around you. An enemy in both areas is only affected once.',
										}),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'beastheart-sub-1-9-1b',
									name: 'Enemies Till Death',
									description:
										'Your companion launches themself at your foe, shielding allies with their body.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [
										AbilityKeyword.Companion,
										AbilityKeyword.Charge,
										AbilityKeyword.Melee,
										AbilityKeyword.Strike,
										AbilityKeyword.Weapon,
									],
									distance: [ElementFactory.DistanceFactory.createMelee()],
									target: 'One enemy',
									cost: 11,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: Characteristic.Intuition,
												tier1: '11 + M damage; P < [weak], taunted (save ends)',
												tier2: '17 + M damage; P < [average], taunted (save ends)',
												tier3: '22 + M damage; P < [strong], taunted (save ends)',
											})
										),
										ElementFactory.createAbilitySectionText(
											'While the target is taunted by this ability, all creatures except your companion have immunity 10 to damage dealt by the target.'
										),
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
