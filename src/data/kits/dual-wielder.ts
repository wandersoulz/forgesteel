import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const dualWielder: KitInterface = {
	id: 'kit-dual-wielder',
	name: 'Dual Wielder',
	description:
		'The Dual Wielder kit is for folks who want to excel at using two weapons at the same time. Your fighting style maximizes the power of each weapon you have in hand, making you a whirling dealer of death.',
	type: '',
	armor: [KitArmor.Medium],
	weapon: [KitWeapon.Light, KitWeapon.Medium],
	stamina: 6,
	speed: 2,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-dual-wielder-signature',
				name: 'Double Strike',
				description: 'Why strike once when you could do it twice?',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee()],
				target: 'Two creatures or objects',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 damage',
							tier2: '4 damage',
							tier3: '6 damage',
						})
					),
					ElementFactory.createAbilitySectionText(
						'If you use this ability on your turn, you can use it against one target, then use your maneuver and your move action for that turn before using the ability against a second target. You still use the same power roll for both targets.'
					),
				],
			}),
		}),
	],
};
