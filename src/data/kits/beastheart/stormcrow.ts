import { AbilityDistanceType } from '@/core/enums/abiity-distance-type';
import { AbilityKeyword } from '@/core/enums/ability-keyword';
import { FactoryLogic } from '@/core/logic/factory-logic';
import { Kit } from '@/core/models/kit';
import { KitArmor } from '@/core/enums/kit-armor';
import { KitWeapon } from '@/core/enums/kit-weapon';

export const stormcrow: Kit = {
	id: 'kit-stormcrow',
	name: 'Stormcrow',
	description: 'Your gear is inscribed with elemental runes to channel the raging primordial storm within you, bringing blizzards, hurricanes, or firestorms to carry you around the battlefield. This kit is most often adopted by Sparks, although beasthearts with any wild nature can benefit from the speed that it grants.',
	type: 'Beastheart',
	armor: [ KitArmor.Light ],
	weapon: [ KitWeapon.Light ],
	stamina: 3,
	speed: 3,
	stability: 0,
	meleeDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	rangedDamage: FactoryLogic.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 0,
	disengage: 1,
	features: [
		FactoryLogic.feature.createAbility({
			ability: FactoryLogic.createAbility({
				id: 'kit-stormcrow-1',
				name: 'Energy Blast',
				description: 'You call upon the elements to do your bidding.',
				type: FactoryLogic.type.createManeuver(),
				keywords: [ AbilityKeyword.Area, AbilityKeyword.Beastheart, AbilityKeyword.Magic ],
				distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Line, value: 3, value2: 1 }) ],
				target: 'Each enemy in the area',
				cost: 'signature',
				sections: [
					FactoryLogic.createAbilitySectionText('M cold, fire, lightning, or sonic damage (your choice)'),
					FactoryLogic.createAbilitySectionSpend({
						effect: 'The distance becomes 3 cube within 1.'
					})
				]
			})
		})
	]
};
