import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const stickAndRobe: KitInterface = {
	id: 'kit-stick-and-robe',
	name: 'Stick And Robe',
	description:
		"Armed with a simple reach weapon, often a quarterstaff, a character using the Stick and Robe kit is highly mobile thanks to their light armor. This allows your hero to make maximum use of their weapon's length.",
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Polearm],
	stamina: 3,
	speed: 2,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(1, 1, 1),
	rangedDamage: null,
	meleeDistance: 1,
	rangedDistance: 0,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-stick-and-robe-signature',
				name: 'Where I Want You',
				description: 'When your stick speaks, your enemy moves.',
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
							tier2: '6 + M or A damage; slide 1',
							tier3: '9 + M or A damage; slide 3',
						})
					),
				],
			}),
		}),
	],
};
