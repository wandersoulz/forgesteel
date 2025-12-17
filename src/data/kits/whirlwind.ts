import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const whirlwind: KitInterface = {
	id: 'kit-whirlwind',
	name: 'Whirlwind',
	description:
		'The Whirlwind kit makes effective use of whips, granting you mobility, damage, and reach. If you want to be a fast-moving warrior who lashes foes with a chain or whip, then this is the kit for you.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Whip],
	stamina: 0,
	speed: 3,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(1, 1, 1),
	rangedDamage: null,
	meleeDistance: 1,
	rangedDistance: 0,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-whirlwind-signature',
				name: 'Extension Of My Arm',
				description: 'When you draw your whip back after an attack, your enemy is drawn ever closer.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee(2)],
				target: 'One creature',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '3 + M or A damage; vertical pull 1',
							tier2: '6 + M or A damage; vertical pull 2',
							tier3: '9 + M or A damage; vertical pull 3',
						})
					),
				],
			}),
		}),
	],
};
