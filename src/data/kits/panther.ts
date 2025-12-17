import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const panther: KitInterface = {
	id: 'kit-panther',
	name: 'Panther',
	description:
		'If you want a good balance of protection, speed, and damage, the Panther kit is for you. This kit increases your Stamina not by wearing armor, but through the focused battle preparation of body and mind, letting you be fast and mobile while swinging a heavy weapon at your foes.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Heavy],
	stamina: 6,
	speed: 1,
	stability: 1,
	meleeDamage: ElementFactory.createKitDamageBonus(0, 0, 4),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-panther-signature',
				name: 'Devastating Rush',
				description: 'The faster you move, the harder you hit.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee()],
				target: 'One creature or object',
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
					ElementFactory.createAbilitySectionText(
						'You can move up to 3 squares straight toward the target before this strike, which deals extra damage equal to the number of squares you move this way.'
					),
				],
			}),
		}),
	],
};
