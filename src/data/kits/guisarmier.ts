import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const guisarmier: KitInterface = {
	id: 'kit-guisarmier',
	name: 'Guisarmier',
	description:
		'The Guisarmier kit is for those who want to use a polearm for extended reach while remaining protected by sturdy armor. This is the kit that allows you to become the ultimate halberd, longspear, or glaive fighter.',
	type: '',
	armor: [KitArmor.Medium],
	weapon: [KitWeapon.Polearm],
	stamina: 6,
	speed: 0,
	stability: 1,
	meleeDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 1,
	rangedDistance: 0,
	disengage: 0,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-guisarmier-signature',
				name: 'Forward Thrust, Backward Smash',
				description: 'In your hands, the haft is as good as the head.',
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
							tier2: '5 damage',
							tier3: '7 damage',
						})
					),
				],
			}),
		}),
	],
};
