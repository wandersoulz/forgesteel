import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const arcaneArcher: KitInterface = {
	id: 'kit-arcane-archer',
	name: 'Arcane Archer',
	description:
		'The Arcane Archer kit allows you to combine magic and ranged weapon strikes. Your lack of armor keeps you mobile, and your magic makes your arrows explode to devastate your foes.',
	type: '',
	armor: [],
	weapon: [KitWeapon.Bow],
	stamina: 0,
	speed: 1,
	stability: 0,
	meleeDamage: null,
	rangedDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 10,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-arcane-archer-signature',
				name: 'Exploding Arrow',
				description: 'Your ammunition explodes with magical energy.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createRanged(5)],
				target: 'One creature or object',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [
								Characteristic.Agility,
								Characteristic.Reason,
								Characteristic.Intuition,
								Characteristic.Presence,
							],
							tier1: '3 + A, R, I, or P fire damage',
							tier2: '5 + A, R, I, or P fire damage',
							tier3: '8 + A, R, I, or P fire damage',
						})
					),
					ElementFactory.createAbilitySectionText(
						"One creature or object of your choice within 2 squares of the target takes fire damage equal to the characteristic score used for this ability's power roll."
					),
				],
			}),
		}),
	],
};
