import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const martialArtist: KitInterface = {
	id: 'kit-martial-artist',
	name: 'Martial Artist',
	description:
		'If you want to be fast in a fight, then Martial Artist is the kit for you. Unencumbered by weapons or armor, this fighting style rewards quick, focused unarmed strikes against opponents, and allows you to be the ultimate skirmisher.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Unarmed],
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
				id: 'kit-martial-artist-signature',
				name: 'Battle Grace',
				description: 'You feint to move your enemies into perfect position.',
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
							tier2: '6 + M or A damage; you swap places with the target',
							tier3: '9 + M or A damage; you swap places with the target',
						})
					),
					ElementFactory.createAbilitySectionText(
						"If you obtain a tier 2 or tier 3 outcome and can't swap places with the target because one or both of you is too big to fit into the swapped space, you both remain in your original spaces and the target takes 1 extra damage."
					),
				],
			}),
		}),
	],
};
