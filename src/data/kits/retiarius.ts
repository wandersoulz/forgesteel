import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const retiarius: KitInterface = {
	id: 'kit-retiarius',
	name: 'Retiarius',
	description:
		'The retiarius is often depicted as a lightly armored warrior with a net in one hand and a trident in the other, and this kit gives you the equipment and fighting technique to make that happen. Tie up your foe with a net and then poke them to death!',
	type: '',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Polearm, KitWeapon.Ensnaring],
	stamina: 3,
	speed: 1,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	rangedDamage: null,
	meleeDistance: 1,
	rangedDistance: 0,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-retiarius-signature',
				name: 'Net And Stab',
				description:
					'The well-thrown net that follows your main attack leaves your foes right where you want them.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee()],
				target: 'One creature',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [Characteristic.Might, Characteristic.Agility],
							tier1: '2 + M or A damage; A < [weak] slowed (EoT)',
							tier2: '4 + M or A damage; A < [average] slowed (EoT)',
							tier3: '6 + M or A damage; A < [strong] restrained (EoT)',
						})
					),
				],
			}),
		}),
	],
};
