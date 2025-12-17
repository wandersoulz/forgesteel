import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const cloakAndDagger: KitInterface = {
	id: 'kit-cloak-and-dagger',
	name: 'Cloak and Dagger',
	description:
		'Providing throwable light weapons and light armor easily concealed by a cloak to confuse your enemies, the Cloak and Dagger kit makes you more mobile while increasing the effectiveness of your short-range strikes.',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Light],
	stamina: 3,
	speed: 2,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(1, 1, 1),
	rangedDamage: ElementFactory.createKitDamageBonus(1, 1, 1),
	meleeDistance: 0,
	rangedDistance: 5,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-cloak-and-dagger-signature',
				name: 'Fade',
				description: 'A stab, and a few quick, careful steps back.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [
					ElementFactory.DistanceFactory.createMelee(),
					ElementFactory.DistanceFactory.createRanged(5),
				],
				target: 'One creature',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 + M or A damage; you shift 1 square',
							tier2: '5 + M or A damage; you shift up to 2 squares',
							tier3: '7 + M or A damage; you shift up to 3 squares',
						})
					),
				],
			}),
		}),
	],
};
