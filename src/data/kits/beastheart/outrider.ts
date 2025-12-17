import { AbilityKeyword } from '../../../core/enums/ability-keyword';
import { ElementFactory } from '../../../core/factory/element-factory';
import { KitInterface } from '../../../core/models/kit';
import { KitArmor } from '../../../core/enums/kit-armor';
import { KitWeapon } from '../../../core/enums/kit-weapon';

export const outrider: KitInterface = {
	id: 'kit-outrider',
	name: 'Outrider',
	description:
		'With the Outrider kit, you gain magically-enhanced mobility and range, along with enough Stamina to keep your companion in the thick of battle. With well-balanced benefits for melee and ranged attackers, the Outrider kit can be adopted by beasthearts of any wild nature.',
	type: 'Beastheart',
	armor: [KitArmor.Medium],
	weapon: [KitWeapon.Bow, KitWeapon.Medium],
	stamina: 6,
	speed: 1,
	stability: 1,
	meleeDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	rangedDamage: ElementFactory.createKitDamageBonus(2, 2, 2),
	meleeDistance: 0,
	rangedDistance: 5,
	disengage: 0,
	features: [
		ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'kit-outrider-1',
				name: 'Living Arrow',
				description: 'Your arrow picks out the target for your companion’s next attack.',
				type: ElementFactory.AbilityTypeFactory.createManeuver(),
				keywords: [
					AbilityKeyword.Beastheart,
					AbilityKeyword.Magic,
					AbilityKeyword.Ranged,
					AbilityKeyword.Weapon,
				],
				distance: [ElementFactory.DistanceFactory.createRanged(5)],
				target: 'One creature, object, or unoccupied space',
				cost: 'signature',
				sections: [
					ElementFactory.createAbilitySectionText(
						'2 + M damage; if the target is a creature or object, your companion can teleport to an unoccupied space adjacent to the target, provided your companion is also within range. If the target is an unoccupied space, you or your companion can teleport to the space.'
					),
					ElementFactory.createAbilitySectionSpend({
						effect: 'The ability’s distance increases to ranged 10.',
					}),
				],
			}),
		}),
	],
};
