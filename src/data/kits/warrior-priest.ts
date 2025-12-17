import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const warriorPriest: KitInterface = {
	id: 'kit-warrior-priest',
	name: 'Warrior Priest',
	description:
		'The Warrior Priest kit imbues the power of the gods into your weapon, making it a smiting instrument. You wade into the fray without fear, thanks to the power of the divine … and the heavy armor you wear.',
	type: '',
	armor: [KitArmor.Heavy],
	weapon: [KitWeapon.Light],
	stamina: 9,
	speed: 1,
	stability: 1,
	meleeDamage: ElementFactory.createKitDamageBonus(1, 1, 1),
	rangedDamage: null,
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 0,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-warrior-priest-signature',
				name: 'Weakening Brand',
				description: 'The impact of your weapon brands your target for destruction.',
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
							tier1: '2 + M, R, I, or P holy damage',
							tier2: '4 + M, R, I, or P holy damage',
							tier3: '7 + M, R, I, or P holy damage',
						})
					),
					ElementFactory.createAbilitySectionText(
						"Until the end of the target's next turn, they have damage weakness equal to the characteristic score used for this ability's power roll."
					),
				],
			}),
		}),
	],
};
