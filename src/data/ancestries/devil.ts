import { EnvironmentData, OrganizationData, UpbringingData } from '../../data/culture-data';
import { AncestryInterface } from '../../core/models/ancestry';
import { CultureType } from '../../core/enums/culture-type';
import { ElementFactory } from '../../core/factory/element-factory';
import { SkillList } from '../../core/enums/skill-list';

export const devil: AncestryInterface = {
	id: 'ancestry-devil',
	name: 'Devil',
	description:
		'The native ancestry of the Seven Cities of Hell, devils are humanoids with red or blue skin expressed in a wide variety of hues, from bright crimson to deep purple. Each devil is born with some hellmark - horns, a tail, cloven hooves, a forked tongue, fanged incisors, or even wings.',
	features: [
		ElementFactory.FeatureFactory.createMultiple({
			id: 'devil-feature-1',
			name: 'Silver Tongue',
			features: [
				ElementFactory.FeatureFactory.create({
					id: 'devil-feature-1a',
					name: 'Silver Tongue',
					description:
						'Your innate magic allows you to twist how your words are perceived to get a better read on people and convince them to see things your way. You gain an edge on tests when attempting to discover an NPC’s motivations and pitfalls during a negotiation.',
				}),
				ElementFactory.FeatureFactory.createSkillChoice({
					id: 'devil-feature-1b',
					listOptions: [SkillList.Interpersonal],
				}),
			],
		}),
		ElementFactory.FeatureFactory.createChoice({
			id: 'devil-feature-2',
			name: 'Devil Traits',
			options: [
				{
					feature: ElementFactory.FeatureFactory.create({
						id: 'devil-feature-2-1',
						name: 'Barbed Tail',
						description:
							'Your pointy tail allows you to punctuate all your actions. Once per round when you make a melee strike, you can deal extra damage with the strike equal to your highest characteristic score.',
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createSpeed({
						id: 'devil-feature-2-2',
						name: 'Beast Legs',
						description: 'Your powerful legs improve your speed. Your Speed is 6.',
						speed: 6,
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'devil-feature-2-3',
							name: 'Glowing Eyes',
							description:
								'Your eyes are a solid, vibrant color that flares to show your excitement or rage.',
							type: ElementFactory.AbilityTypeFactory.createTrigger('You take damage from a creature'),
							sections: [
								ElementFactory.createAbilitySectionText(
									'Whenever you take damage from a creature, you can use a triggered action to deal that creature psychic damage equal to 1d10 + your level.'
								),
							],
						}),
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.create({
						id: 'devil-feature-2-4',
						name: 'Hellsight',
						description:
							'Your eyes let you see through darkness, fog, and other obscuring effects. You don’t take a bane on strikes made against creatures with concealment.',
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createSaveThreshold({
						id: 'devil-feature-2-5',
						name: 'Impressive Horns',
						description:
							'Your cherished horns are larger than your average devil’s, and a hardened representation of your force of will. Whenever you make a saving throw, you succeed on a roll of 5 or higher.',
						value: 5,
					}),
					value: 2,
				},
				{
					feature: ElementFactory.FeatureFactory.create({
						id: 'devil-feature-2-6',
						name: 'Prehensile Tail',
						description:
							'Your prehensile tail allows you to challenge foes on all sides. You can’t be flanked.',
					}),
					value: 2,
				},
				{
					feature: ElementFactory.FeatureFactory.create({
						id: 'devil-feature-2-7',
						name: 'Wings',
						description:
							'You possess wings powerful enough to take you airborne. While using your wings to fly, you can stay aloft for a number of rounds equal to your Might score (minimum 1 round) before you fall. While using your wings to fly at 3rd level or lower, you have damage weakness 5.',
					}),
					value: 2,
				},
			],
			count: 'ancestry',
		}),
	],
	ancestryPoints: 3,
	culture: ElementFactory.createCulture(
		'Devil',
		'Urban, bureaucratic, academic.',
		CultureType.Ancestral,
		EnvironmentData.urban,
		OrganizationData.bureaucratic,
		UpbringingData.academic,
		'Anjali'
	),
};
