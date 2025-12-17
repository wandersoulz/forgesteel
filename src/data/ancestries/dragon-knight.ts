import { EnvironmentData, OrganizationData, UpbringingData } from '../../data/culture-data';
import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { AncestryInterface } from '../../core/models/ancestry';
import { Characteristic } from '../../core/enums/characteristic';
import { CultureType } from '../../core/enums/culture-type';
import { DamageModifierType } from '../../core/enums/damage-modifier-type';
import { DamageType } from '../../core/enums/damage-type';
import { ElementFactory } from '../../core/factory/element-factory';

export const dragonKnight: AncestryInterface = {
	id: 'ancestry-dragon-knight',
	name: 'Dragon Knight',
	description:
		'The ritual of Dracogenesis that grants the power to create a generation of dragon knights—also known as draconians or wyrmwights—is obscure and supremely difficult for even an experienced sorcerer to master. Small populations of draconians in Khemhara, Higara, and Khoursir attest to this. Descendants of original generations created millennia ago by powerful wizards, they have never been numerous. A typical clutch yields only a single egg. After only a few generations, these draconians begin to show new adaptations like feathers or frilled ridges.',
	features: [
		ElementFactory.FeatureFactory.createChoice({
			id: 'dragon-knight-feature-1',
			name: 'Wyrmplate',
			description:
				'Your hardened scales grant you damage immunity equal to your level to one of the following damage types: acid, cold, corruption, fire, lightning, or poison. You can change your damage immunity type when you finish a respite.',
			options: [
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-1-1',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Acid,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-1-2',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-1-3',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Corruption,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-1-4',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Fire,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-1-5',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Lightning,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-1-6',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Poison,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
			],
		}),
		ElementFactory.FeatureFactory.createChoice({
			id: 'dragon-knight-feature-2',
			name: 'Dragon Knight Traits',
			options: [
				{
					feature: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'dragon-knight-feature-2-1',
							name: 'Draconian Guard',
							description: 'You can swing your wings around and guard against a blow.',
							type: ElementFactory.AbilityTypeFactory.createTrigger(
								'You, or a creature adjacent to you, takes damage from a strike'
							),
							distance: [ElementFactory.DistanceFactory.createSelf()],
							target: 'Self',
							sections: [
								ElementFactory.createAbilitySectionText(
									'You reduce the damage from the strike by an amount equal to your level.'
								),
							],
						}),
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-2-2',
						name: 'Prismatic Scales (acid)',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Acid,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-2-3',
						name: 'Prismatic Scales (cold)',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-2-4',
						name: 'Prismatic Scales (corruption)',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Corruption,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-2-5',
						name: 'Prismatic Scales (fire)',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Fire,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-2-6',
						name: 'Prismatic Scales (lightning)',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Lightning,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createDamageModifier({
						id: 'dragon-knight-feature-2-7',
						name: 'Prismatic Scales (poison)',
						modifiers: [
							ElementFactory.DamageModifierFactory.createPerLevel({
								damageType: DamageType.Poison,
								modifierType: DamageModifierType.Immunity,
								value: 1,
							}),
						],
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.create({
						id: 'dragon-knight-feature-2-8',
						name: 'Remember your Oath',
						description: `
As a maneuver, you can recite the following oath. Until the start of your next turn, whenever you make a saving throw, you succeed on a 4 or higher.

> Even should the sun stop in the sky
> Even should the night last a thousand years
> I will stand forever
> I shall not yield
> Those who suffer and yearn for justice
> I am your sword and shield
> I will yield no ground
> I will speak no lies
> I will stand against all tyrants
> Until the last villain dies.`,
					}),
					value: 1,
				},
				{
					feature: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'dragon-knight-feature-2-9',
							name: 'Draconic Pride',
							description: 'You let loose a mighty roar to shake your foes’ spirits.',
							type: ElementFactory.AbilityTypeFactory.createMain(),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
							distance: [
								ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
							],
							target: 'Each enemy in the area',
							cost: 'signature',
							sections: [
								ElementFactory.createAbilitySectionRoll(
									ElementFactory.createPowerRoll({
										characteristic: [Characteristic.Might, Characteristic.Presence],
										tier1: '2 damage',
										tier2: '5 damage; push 1',
										tier3: '7 damage; push 2',
									})
								),
							],
						}),
					}),
					value: 2,
				},
				{
					feature: ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'dragon-knight-feature-2-10',
							name: 'Dragon Breath',
							description: 'A furious exhalation of energy washes over your foes.',
							type: ElementFactory.AbilityTypeFactory.createMain(),
							keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
							distance: [
								ElementFactory.DistanceFactory.create({
									type: AbilityDistanceType.Cube,
									value: 3,
									within: 1,
								}),
							],
							target: 'Each enemy in the area',
							cost: 'signature',
							sections: [
								ElementFactory.createAbilitySectionRoll(
									ElementFactory.createPowerRoll({
										characteristic: [Characteristic.Might, Characteristic.Presence],
										tier1: '2 damage',
										tier2: '4 damage',
										tier3: '6 damage',
									})
								),
								ElementFactory.createAbilitySectionText(
									'You choose the ability’s damage type from acid, cold, corruption, fire, lightning, or poison.'
								),
							],
						}),
					}),
					value: 2,
				},
				{
					feature: ElementFactory.FeatureFactory.createMultiple({
						id: 'dragon-knight-feature-2-11',
						name: 'Wings',
						features: [
							ElementFactory.FeatureFactory.create({
								id: 'dragon-knight-feature-2-11a',
								name: 'Wings',
								description:
									'You possess wings powerful enough to take you airborne. While using your wings to fly, you can stay aloft for a number of rounds equal to your Might (minimum of 1 round) before you fall prone. While using your wings to fly at 1st, 2nd, and 3rd level, you have damage weakness 5.',
							}),
							ElementFactory.FeatureFactory.createMovementMode({
								id: 'dragon-knight-feature-2-11b',
								mode: 'Fly',
							}),
						],
					}),
					value: 2,
				},
			],
			count: 'ancestry',
		}),
	],
	ancestryPoints: 3,
	culture: ElementFactory.createCulture(
		'Dragon Knight',
		'Secluded, bureaucratic, martial.',
		CultureType.Ancestral,
		EnvironmentData.secluded,
		OrganizationData.bureaucratic,
		UpbringingData.martial,
		'Vastariax'
	),
};
