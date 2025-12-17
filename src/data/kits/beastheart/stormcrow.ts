import { AbilityDistanceType } from '../../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { ElementFactory } from '../../../core/factory/element-factory';
import { KitInterface } from '../../../core/models/kit';
import { KitArmor } from '../../../core/enums/kit-armor';
import { KitWeapon } from '../../../core/enums/kit-weapon';

export const stormcrow: KitInterface = {
	id: 'kit-stormcrow',
	name: 'Stormcrow',
	description:
		'Your gear is inscribed with elemental runes to channel the raging primordial storm within you, bringing blizzards, hurricanes, or firestorms to carry you around the battlefield. This kit is most often adopted by Sparks, although beasthearts with any wild nature can benefit from the speed that it grants.',
	type: 'Beastheart',
	armor: [KitArmor.Light],
	weapon: [KitWeapon.Light],
	stamina: 3,
	speed: 3,
	stability: 0,
	meleeDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	rangedDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-stormcrow-1',
				name: 'Energy Blast',
				description: 'You call upon the elements to do your bidding.',
				type: ElementFactory.AbilityTypeFactory.createManeuver(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Beastheart, AbilityKeyword.Magic],
				distance: [
					ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Line, value: 3, value2: 1 }),
				],
				target: 'Each enemy in the area',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionText('M cold, fire, lightning, or sonic damage (your choice)'),
					ElementFactory.createAbilitySectionSpend({
						effect: 'The distance becomes 3 cube within 1.',
					}),
				],
			}),
		}),
	],
};
