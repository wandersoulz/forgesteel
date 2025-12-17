import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const spellsword: KitInterface = {
	id: 'kit-spellsword',
	name: 'Spellsword',
	description:
		"The Spellsword kit combines melee strikes and a little bit of magic, letting you create a warrior who doesn't have to choose between the incantation and the blade.",
	type: '',
	armor: [KitArmor.Light, KitArmor.Shield],
	weapon: [KitWeapon.Medium],
	stamina: 6,
	speed: 1,
	stability: 1,
	meleeDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-spellsword-signature',
				name: 'Leaping Lightning',
				description: 'Lightning jumps from your weapon as you strike to harm a nearby foe.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee()],
				target: 'One creature or object',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [
								Characteristic.Might,
								Characteristic.Reason,
								Characteristic.Intuition,
								Characteristic.Presence,
							],
							tier1: '3 + M, R, I or P lightning damage',
							tier2: '6 + M, R, I or P lightning damage',
							tier3: '9 + M, R, I or P lightning damage',
						})
					),
					ElementFactory.createAbilitySectionText(
						"A creature or object of your choice within 2 squares of the target takes lightning damage equal to the characteristic score used for this ability's power roll."
					),
				],
			}),
		}),
	],
};
