import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const shiningArmor: KitInterface = {
	id: 'kit-shining-armor',
	name: 'Shining Armor',
	description:
		'The Shining Armor kit provides the most protection a kit can afford, providing you with the sword, shield, and armor necessary to play the prototypical knight.',
	type: '',
	armor: [KitArmor.Heavy, KitArmor.Shield],
	weapon: [KitWeapon.Medium],
	stamina: 12,
	speed: 0,
	stability: 1,
	meleeDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-shining-armor-signature',
				name: 'Protective Attack',
				description: 'The strength of your assault makes it impossible for your foe to ignore you.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee()],
				target: 'One creature',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '3 + M or A damage',
							tier2: '6 + M or A damage',
							tier3: '9 + M or A damage',
						})
					),
					ElementFactory.createAbilitySectionText('The target is taunted until the end of their next turn.'),
				],
			}),
		}),
	],
};
