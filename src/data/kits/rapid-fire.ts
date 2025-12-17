import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const rapidFire: KitInterface = {
	id: 'kit-rapid-fire',
	name: 'Rapid Fire',
	description:
		'The Rapid-Fire kit is for archers who want to deal maximum damage by shooting as many arrows as possible into nearby enemies. With this kit, your fighting technique focuses on peppering foes before they can get close enough to counterattack.',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Bow],
	stamina: 3,
	speed: 1,
	stability: 0,
	meleeDamage: null,
	rangedDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 7,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-rapid-fire-signature',
				name: 'Two Shot',
				description: 'When you fire two arrows back to back, both hit their mark.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createRanged(5)],
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
				],
			}),
		}),
	],
};
