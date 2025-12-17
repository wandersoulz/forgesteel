import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const swashbuckler: KitInterface = {
	id: 'kit-swashbuckler',
	name: 'Swashbuckler',
	description:
		'If you want to be mobile and deal a lot of damage with melee strikes, then you should reach for the Swashbuckler kit. This is a great kit for heroes who want to be master duelists.',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Medium],
	stamina: 3,
	speed: 3,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-swashbuckler-signature',
				name: 'Fancy Footwork',
				description: "All combat is a dance - and you'll be the one leading.",
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
							tier2: '5 + M or A damage; push 1',
							tier3: '8 + M or A damage; push 2',
						})
					),
					ElementFactory.createAbilitySectionText(
						'You can shift into any square the target leaves after you push them'
					),
				],
			}),
		}),
	],
};
