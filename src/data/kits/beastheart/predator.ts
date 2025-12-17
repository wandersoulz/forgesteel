import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { ElementFactory } from '../../../core/factory/element-factory';
import { KitInterface } from '../../../core/models/kit';
import { KitArmor } from '../../../core/enums/kit-armor';
import { KitWeapon } from '../../../core/enums/kit-weapon';

export const predator: KitInterface = {
	id: 'kit-predator',
	name: 'Predator',
	description:
		'The Predator kit lets you move fast and strike hard. It’s commonly used by Prowlers, but it’s also useful for Sparks who want to stay out of their enemies’ way and for Guardians and Punishers who want to overwhelm their enemies with speed and power.',
	type: 'Beastheart',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Light],
	stamina: 6,
	speed: 2,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(0, 0, 4),
	rangedDamage: ElementFactory.createKitDamageBonus(0, 0, 4),
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-predator-1',
				name: "Assassin's Leap",
				description: 'You spring forward, leaving a wounded foe in your wake.',
				type: ElementFactory.AbilityTypeFactory.createManeuver(),
				keywords: [AbilityKeyword.Beastheart, AbilityKeyword.Melee, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee()],
				target: 'One creature',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionText(
						'Before using this ability, you can jump in a straight line up to a number of squares equal to your Intuition score. During this jump, you can pass through enemies’ spaces without them counting as difficult terrain. You deal extra damage equal to the number of squares you jumped.'
					),
					ElementFactory.createAbilitySectionText('2 + M damage'),
					ElementFactory.createAbilitySectionSpend({
						effect: 'Your jump doesn’t provoke opportunity attacks.',
					}),
				],
			}),
		}),
	],
};
