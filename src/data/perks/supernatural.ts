import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { ElementFactory } from '../../core/factory/element-factory';
import { FeatureField } from '../../core/enums/feature-field';
import { FeatureType } from '../../core/enums/feature-type';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { PerkInterface } from '../../core/models/perk';
import { PerkList } from '../../core/enums/perk-list';

export class SupernaturalPerkData {
	static arcaneTrick: PerkInterface = {
		id: 'perk-arcane-trick',
		name: 'Arcane Trick',
		description: 'You cast an entertaining spell that creates a minor but impressive magical effect.',
		type: FeatureType.Ability,
		data: {
			ability: ElementFactory.createAbility({
				id: 'perk-arcane-trick-1',
				name: 'Arcane Trick',
				description: 'You cast an entertaining spell that creates a minor but impressive magical effect.',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Magic],
				distance: [ElementFactory.DistanceFactory.createSelf()],
				target: 'Self',
				sections: [
					ElementFactory.createAbilitySectionText(`
Choose one of the following effects:

* You teleport a size 1S or smaller object adjacent to you into an unoccupied space adjacent to you.
* Until the start of your next turn, a part of your body shoots a shower of harmless noisy sparks that light up each square adjacent to you.
* You ignite or snuff out (your choice) every mundane light source of 1L or smaller adjacent to you.
* You transform up to 1 pound of edible food you touch to make it taste delicious or disgusting.
* Until the start of your next turn, you make your body exude a particular odor you’ve smelled before. This smell can be sensed by each creature within 5 squares of you, but can’t impose any condition or other drawback on those creatures.
* You place a small magical inscription on the surface of a mundane object you touch, or you can remove an inscription that was made by you or by another creature using Arcane Trick.
* You touch a size 1T object to cover it with an illusion that makes it look like a different object. Any creature who handles the object becomes aware of the illusion. The illusion ends when you stop touching the object.`),
				],
			}),
		},
		list: PerkList.Supernatural,
	};

	static creatureSense: PerkInterface = {
		id: 'perk-creature-sense',
		name: 'Creature Sense',
		description: "You intuit a creature's keywords.",
		type: FeatureType.Ability,
		data: {
			ability: ElementFactory.createAbility({
				id: 'perk-creature-sense-1',
				name: 'Creature Sense',
				description: "You intuit a creature's keywords.",
				type: ElementFactory.AbilityTypeFactory.createManeuver(),
				distance: [ElementFactory.DistanceFactory.createSelf()],
				target: 'Self',
				sections: [
					ElementFactory.createAbilitySectionText(
						'Choose a creature within 10 squares. If that creature is your level or lower, you learn the keywords in their stat block (Demon, Humanoid, Undead, and so forth)'
					),
				],
			}),
		},
		list: PerkList.Supernatural,
	};

	static familiar: PerkInterface = {
		id: 'perk-familiar',
		name: 'Familiar',
		description: '',
		type: FeatureType.Summon,
		data: {
			summons: [
				ElementFactory.createSummon({
					monster: ElementFactory.createMonster({
						id: 'familiar',
						name: 'Familiar',
						description: `
A supernatural spirit who has taken the form of a specific small animal or animated object has chosen to be your familiar—or to adopt you as their familiar.

The familiar can hold small objects in their mouth or claws, but can’t perform activities that would typically require hands (opening a door, unrolling a scroll, and so forth).

They can’t harm other creatures or objects. They can flank in combat, but only with you.

If your familiar is destroyed, you can restore them as a respite activity, or by spending a Recovery as a main action to bring them back into existence in an unoccupied space adjacent to you.`,
						level: 0,
						role: ElementFactory.createMonsterRole(
							MonsterOrganizationType.NoOrganization,
							MonsterRoleType.NoRole
						),
						keywords: [],
						encounterValue: 0,
						size: ElementFactory.createSize(1, 'T'),
						speed: ElementFactory.createSpeed(5),
						stamina: 0,
						stability: 0,
						freeStrikeDamage: 0,
						characteristics: ElementFactory.createCharacteristics(-3, 2, 0, 0, 1),
						features: [
							ElementFactory.FeatureFactory.createBonus({
								id: 'familiar-1',
								field: FeatureField.Stamina,
								value: 2,
								valuePerLevel: 2,
							}),
							ElementFactory.FeatureFactory.create({
								id: 'familiar-2',
								name: 'Telepathic',
								description:
									'While you and your familiar are within 10 squares of each other, you can communicate telepathically and share each other’s senses. While sharing senses, each of you also benefits from your own senses at the same time.',
							}),
						],
					}),
					cost: 0,
					count: 1,
				}),
			],
		},
		list: PerkList.Supernatural,
	};

	static invisibleForce: PerkInterface = {
		id: 'perk-invisible-force',
		name: 'Invisible Force',
		description: 'You manipulate a tiny object with your mind.',
		type: FeatureType.Ability,
		data: {
			ability: ElementFactory.createAbility({
				id: 'perk-invisible-force-1',
				name: 'Invisible Force',
				description: 'You manipulate a tiny object with your mind.',
				type: ElementFactory.AbilityTypeFactory.createManeuver(),
				keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
				distance: [ElementFactory.DistanceFactory.createRanged(10)],
				target: '1 size 1T unattended object',
				sections: [
					ElementFactory.createAbilitySectionText(
						'You can grab or manipulate the target object with your mind, moving the object up to a number of squares equal to your Reason, Intuition, or Presence score (your choice). You can use this ability to turn doorknobs, pull levers, and so forth. You can manipulate any small movable piece of a larger object as long as the piece is unattended and size 1T. You can’t use this ability to break a smaller piece off a larger object.'
					),
				],
			}),
		},
		list: PerkList.Supernatural,
	};

	static psychicWhisper: PerkInterface = {
		id: 'perk-psychic-whisper',
		name: 'Psychic Whisper',
		description: 'You send a one-way telepathic message to a friend.',
		type: FeatureType.Ability,
		data: {
			ability: ElementFactory.createAbility({
				id: 'perk-psychic-whisper-1',
				name: 'Psychic Whisper',
				description: 'You send a one-way telepathic message to a friend.',
				type: ElementFactory.AbilityTypeFactory.createManeuver(),
				keywords: [AbilityKeyword.Psionic, AbilityKeyword.Ranged],
				distance: [ElementFactory.DistanceFactory.createRanged(10)],
				target: '1 ally who understands at least one language',
				sections: [
					ElementFactory.createAbilitySectionText(
						'You send a telepathic message to them that takes 10 seconds or less to speak. The target knows who the message is from and can decide to ignore it and subsequent messages.'
					),
				],
			}),
		},
		list: PerkList.Supernatural,
	};

	static ritualist: PerkInterface = {
		id: 'perk-ritualist',
		name: 'Ritualist',
		description:
			'You can spend 1 uninterrupted minute to perform a magic ritual of blessing, targeting yourself or one willing creature you touch. The target has a double edge on the next test they make within the next minute. A target can’t use this benefit on an activity that takes longer than 1 minute.',
		type: FeatureType.Text,
		data: null,
		list: PerkList.Supernatural,
	};

	static thingspeaker: PerkInterface = {
		id: 'perk-thingspeaker',
		name: 'Thingspeaker',
		description: `
When you hold an object in your hand for 1 uninterrupted minute, you can sense whether it bears emotional resonance. Objects with emotional resonance could include treasured gifts, murder weapons, or personal keepsakes.
If the Director determines that the object bears emotional resonance, you learn the most dominant emotion associated with the object, then receive a vision that answers one of the following questions:

* What was the name of the person whose emotion is imprinted on this object?
* Why does this emotion linger on the object?
* How long has it been since the object was held by the person whose emotion lingers on it?

After asking one question, you can choose to delve deeper by asking one additional question from the list, but you are then overcome with emotions that do not belong to you.
You take a bane on Intuition and Presence tests until you finish a respite, and you can’t use this perk again while you suffer this bane.`,
		type: FeatureType.Text,
		data: null,
		list: PerkList.Supernatural,
	};
}
