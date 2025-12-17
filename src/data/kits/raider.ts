import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { KitInterface } from '../../core/models/kit';
import { KitArmor } from '../../core/enums/kit-armor';
import { KitWeapon } from '../../core/enums/kit-weapon';

export const raider: KitInterface = {
	id: 'kit-raider',
	name: 'Raider',
	description:
		'The Raider kit keeps you protected while granting you full mobility, providing a boost to speed and distance that lets you run around the battlefield like a Viking warrior.',
	type: '',
	armor: [KitArmor.Light, KitArmor.Shield],
	weapon: [KitWeapon.Light],
	stamina: 6,
	speed: 1,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(1, 1, 1),
	rangedDamage: ElementFactory.createKitDamageBonus(1, 1, 1),
	meleeDistance: 0,
	rangedDistance: 5,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-raider-signature',
				name: 'Raider’s Awe',
				description: 'You execute a brutal strike that leaves your foe reeling.',
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
							tier1: '2 + M or A damage',
							tier2: '5 + M or A damage',
							tier3: '7 + M or A damage',
						})
					),
					ElementFactory.createAbilitySectionText(
						'The target takes a bane on their next power roll made before the end of their next turn'
					),
				],
			}),
		}),
	],
};
