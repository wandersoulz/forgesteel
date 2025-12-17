import { AbilityDistanceType } from '../../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { Characteristic } from '../../../core/enums/characteristic';
import { ElementFactory } from '../../../core/factory/element-factory';
import { SubClassInterface } from '../../../core/models/subclass';

export const exorcist: SubClassInterface = {
	id: 'censor-sub-1',
	name: 'Exorcist',
	description:
		'You specialize in hunting your order’s hidden enemies, knowing that an open mind is an unguarded fortress.',
	featuresByLevel: [
		{
			level: 1,
			features: [
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'censor-sub-1-1-1',
					selected: ['Read Person'],
				}),
				ElementFactory.FeatureFactory.createPackageContent({
					id: 'censor-sub-1-1-2',
					name: 'Judgment Order Benefit',
					description:
						'The first time on a turn that you use your Judgment ability to judge a creature, you can teleport up to a number of squares equal to twice your Presence score. This movement must take you closer to the judged creature. You do not need line of effect to your destination.',
					tag: 'censor-judgment',
				}),
			],
		},
		{
			level: 2,
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'censor-sub-1-2-1',
					name: "Saint's Vigilance",
					description:
						'You have honed your ability to detect sin and can use it to find those who hide from justice. Any creature judged by you can’t use the Hide maneuver. Additionally, you gain an edge when searching for hidden creatures. If you find a hidden creature, you can use your Judgment ability against them as a free triggered action.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'censor-sub-1-2-2',
					name: 'A Sense for Truth',
					description:
						'You are trained in secret techniques from your order that allow you to discern the truth with supernatural precision. If a creature is of a lower level than you, you automatically know when they are lying, though you don’t necessarily know the actual truth behind their lie. Additionally, you gain an edge on tests made to detect lies or hidden motives.',
				}),
				ElementFactory.FeatureFactory.createChoice({
					id: 'censor-sub-1-2-3',
					name: '2nd-Level Exorcist Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'censor-sub-1-2-3a',
									name: 'It Is Justice You Fear',
									description: 'I am but a vessel. Your own deeds weigh upon you.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
									distance: [ElementFactory.DistanceFactory.createRanged(10)],
									target: 'One creature',
									cost: 5,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '8 + M holy damage; P < [weak], frightened (save ends)',
												tier2: '12 + M holy damage; P < [average], frightened (save ends)',
												tier3: '15 + M holy damage; P < [strong], frightened (save ends)',
											})
										),
										ElementFactory.createAbilitySectionText(
											'If the target is already frightened of you or another creature and this ability would frighten them again, they instead take psychic damage equal to twice your Presence score.'
										),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'censor-sub-1-2-3b',
									name: 'Revelator',
									description:
										'You channel holy energy to harm unbelievers and reveal those hidden from your judgment.',
									type: ElementFactory.AbilityTypeFactory.createManeuver(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [
										ElementFactory.DistanceFactory.create({
											type: AbilityDistanceType.Burst,
											value: 3,
										}),
									],
									target: 'Each enemy in the area',
									cost: 5,
									sections: [
										ElementFactory.createAbilitySectionText(
											'Each target takes holy damage equal to twice your Presence score. Additionally, each hidden target is automatically revealed and can’t become hidden again until the start of your next turn. You can then use your Judgment ability against one target as a free triggered action.'
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
					id: 'censor-sub-1-3-1',
					name: 'Evil Revealed',
					description:
						'Your order has taught you methods to discern the disguises of both mortals and monsters. You automatically see through disguises and illusions created by creatures of your level or lower, and you gain an edge on tests made to see through the disguises and illusions of more powerful creatures. Whenever you see through a creature’s disguise or illusion, you can use your Judgment ability against them as a free triggered action.',
				}),
			],
		},
		{
			level: 6,
			features: [
				ElementFactory.FeatureFactory.createChoice({
					id: 'censor-sub-1-4-1',
					name: '6th-Level Exorcist Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'censor-sub-1-4-1a',
									name: 'Begone',
									description:
										'You terrify your enemies into retreating, creating chaos in their ranks.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
									distance: [
										ElementFactory.DistanceFactory.create({
											type: AbilityDistanceType.Burst,
											value: 3,
										}),
									],
									target: 'Each enemy in the area',
									cost: 9,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: [Characteristic.Presence],
												tier1: '4 psychic damage; slide 3',
												tier2: '6 psychic damage; slide 5',
												tier3: '8 psychic damage; slide 7',
											})
										),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'censor-sub-1-4-1b',
									name: 'Pain of Your Own Making',
									description: 'You reverse the effects from an evildoer.',
									type: ElementFactory.AbilityTypeFactory.createTrigger(
										'The target gains a condition or effect that is ended by a saving throw or that ends at the end of their turn.',
										{ free: true }
									),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
									distance: [ElementFactory.DistanceFactory.createRanged(10)],
									target: 'Self or one ally',
									cost: 9,
									sections: [
										ElementFactory.createAbilitySectionText(
											'The effect ends on the target and is applied to the creature who imposed the effect on them. That creature also takes damage equal to three times your Presence score.'
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
					id: 'censor-sub-1-5-1',
					name: 'Demonologist',
					description:
						'The most esoteric secrets of your order teach you that to defeat your enemy, you must understand them. You treat your Renown as 2 higher than usual when dealing with demons, devils, and other agents of chaos. If you successfully complete a negotiation with one of these creatures, you gain an edge on power rolls made against them and can use your Judgment ability against them as a free triggered action before an encounter begins.',
				}),
			],
		},
		{
			level: 9,
			features: [
				ElementFactory.FeatureFactory.createChoice({
					id: 'censor-sub-1-6-1',
					name: '9th-Level Exorcist Ability',
					options: [
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'censor-sub-1-6-1a',
									name: 'Banish',
									description: 'You sever the target’s tenuous connection to the world.',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
									distance: [ElementFactory.DistanceFactory.createMelee()],
									target: 'One creature',
									cost: 11,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: [Characteristic.Might],
												tier1: '5 + M damage; P < [weak], the target is banished (save ends)',
												tier2: '8 + M damage; P < [average], the target is banished (save ends)',
												tier3: '11 + M damage; P < [strong], the target is banished (save ends)',
											})
										),
										ElementFactory.createAbilitySectionText(
											'This ability gains an edge against demons, devils, undead, and creatures not native to your current world. If you know the target’s true name, this ability has a double edge. While banished, the target is sent to another manifold in the timescape and removed from the encounter map. A banished target can do nothing but make saving throws, and takes 10 holy damage each time they do so. If the target is reduced to 0 Stamina while banished, they are lost to the timescape.'
										),
									],
								}),
							}),
							value: 1,
						},
						{
							feature: ElementFactory.FeatureFactory.createAbility({
								ability: ElementFactory.createAbility({
									id: 'censor-sub-1-6-1b',
									name: 'Terror Manifest',
									description: '“I know what you fear.”',
									type: ElementFactory.AbilityTypeFactory.createMain(),
									keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
									distance: [ElementFactory.DistanceFactory.createRanged(10)],
									target: 'One creature',
									cost: 11,
									sections: [
										ElementFactory.createAbilitySectionRoll(
											ElementFactory.createPowerRoll({
												characteristic: [Characteristic.Presence],
												tier1: '7 + P psychic damage; P < [weak], frightened (save ends)',
												tier2: '10 + P psychic damage; P < [average], frightened (save ends)',
												tier3: '12 + P psychic damage; P < [strong], frightened (save ends)',
											})
										),
										ElementFactory.createAbilitySectionText(
											'While frightened this way, if a target who is a leader or solo creature is winded, they take an extra 25 psychic damage. If a target frightened this way is not a leader or solo creature and is winded, they are reduced to 0 Stamina.'
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
