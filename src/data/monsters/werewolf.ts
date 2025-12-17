import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const werewolf: MonsterGroupInterface = {
	id: 'monster-group-werewolf',
	name: 'Werewolf',
	description: `
A wolf howls and your bowels freeze. Terror overcomes you. Sweat makes your skin slick, your senses sharpened. The moon is high but you feel hot. You’re burning up. There’s blood in your mouth and a corpse at your feet. Where did that come from?! That animal … that thing that almost clawed you to death last week … was it a wolf ? Was it just a wolf ?

Werewolves are shapeshifters filled with a need to rend and tear. They used to be ordinary humans, elves, polders, and the like. But when their feral compulsion takes control, they change into abominable beastment and sometimes massive wolves.`,
	picture: null,
	information: [
		{
			id: 'werewolf-info-1',
			name: 'Howling Primordial Chaos',
			description:
				'Werewolves are swirling conductors of the Primordial Chaos. Their bodies overflow with energy, almost painfully so. They shift and expand their forms into more beastlike shapes to best contain their power. And one bite is all it takes for those ferocious forces to flow into their next host. ',
		},
		{
			id: 'werewolf-info-2',
			name: 'Brokered or Cursed',
			description: `
The curse of the werewolf is actively sought out by terrible nobles and rulers looking to extend their power and instill fear into their people. They secure deals with devils who can tap into the Primordial Chaos and unleash their beast, usually in exchange for relinquishing their legacy after they pass.

Laypeople don’t have the luxury of a legacy, nor do they have councils that can help temper a werewolf. They know full well the horror of losing oneself to the beast, and take action to rout out the threat of a werewolf among them. Fear leaves people submissive to the demands of cursed kings, yet oppressive to their own accursed kin.`,
		},
		{
			id: 'werewolf-info-3',
			name: 'On Wights and Weres',
			description:
				'The powers that created the werewolves were also harnessed and cultivated under the traditions of the stormwight fury. A werewolf’s accursed rage can’t overcome the stormwight’s ferocity, nor can ferocity overpower rage. It’s not uncommon for werewolves to subconsciously treat encounters with stormwight furies as if they were sport.',
		},
		{
			id: 'werewolf-info-4',
			name: 'Shared Ferocity',
			description:
				'Thanks to their entwined origins, the werewolf is filled with an unbridled power when they witness someone harnessing ferocity. The Director gains 1d3 Malice the first time a creature uses an ability that costs ferocity while within the werewolf’s line of effect.',
		},
		{
			id: 'werewolf-info-5',
			name: 'Werewolf Languages',
			description:
				'Werewolves can speak any language they knew before they were cursed. A werewolf who has spent time researching their curse might also know Khamish, Anjali, or Khelt, depending on the circumstances underlying their transformation.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'werewolf-malice-1',
			name: 'Blood in their Eyes',
			cost: 3,
			icon: StatBlockIcon.Trait,
			sections: [
				'The werewolf gains 10 temporary Stamina and a +3 bonus to speed until the end of their turn. The werewolf can’t use this feature if they took any holy damage since ending their last turn.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'werewolf-malice-2',
			name: 'Solo Action',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'The werewolf takes an additional main action on their turn. They can use this feature even if they are dazed.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'werewolf-malice-3',
			name: 'Moonfall',
			cost: 10,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'Until the end of the encounter, the encounter map turns to night and the moon appears impossibly huge in the sky. The werewolf can take an additional move action or maneuver on each of their turns while they have line of effect to the moon. Any creature who ends their turn with line of effect to the moon with 1 or more rage gains 2 rage',
			],
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'werewolf',
			name: 'Werewolf',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Accursed', 'Humanoid', 'Werebeast'],
			encounterValue: 36,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 200,
			stability: 0,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(3, 2, -1, 1, 1),
			features: [
				ElementFactory.FeatureFactory.createSoloMonster({
					id: 'werewolf-feature-1',
					name: 'the werewolf',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'werewolf-feature-2',
					name: 'Accursed Rage',
					description:
						'The werewolf’s ferocity is expressed through rage, and their abilities can inflict rage points on any enemy except a stormwight fury. A creature who starts their turn with 10 or more rage expends their rage. Then before taking their turn, they must shift up to their speed toward the nearest creature and make a melee free strike against them. A creature who takes damage from this free strike gains 1 rage. Accumulated rage disappears after a character finishes a respite.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'werewolf-feature-3',
					name: 'Shapeshifter',
					description:
						'The werewolf enters combat in their hybrid humanoid form. Their shape can’t be changed by any external effect.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'werewolf-feature-4',
						name: 'Accursed Bite',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '9 damage; the target gains 2 rage',
									tier2: '13 damage; the target gains 4 rage',
									tier3: '16 damage; the target gains 5 rage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A creature afflicted with lycanthropy gains 2 rage at the end of each of their turns whenever they’re in combat. Their rage doesn’t disappear after finishing a respite, and they must complete the Find a Cure downtime project to end this effect.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'If the target has P<0, they are afflicted with lycanthropy. Each time the target is unaffected by the potency effect, the potency increases by 1 the next time the werewolf uses the ability against the same target.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'werewolf-feature-5',
						name: 'Ripping Claws',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '8 damage; M<1 bleeding (save ends)',
									tier2: '11 damage; the target gains 1 rage; M<2 bleeding (save ends)',
									tier3: '14 damage; the target gains 3 rage; M<3 bleeding (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'werewolf-feature-6',
						name: 'Berserker Slash',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 3,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy and object in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '8 damage; M<1 bleeding (save ends)',
									tier2: '11 damage; the target gains 1 rage; M<2 bleeding (save ends)',
									tier3: '14 damage; the target gains 3 rage; M<3 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The werewolf shifts up to their speed before using this ability.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'werewolf-feature-7',
						name: 'Wall Leap',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The werewolf jumps up to 4 squares. If they end this jump at a wall, the werewolf jumps off the wall up to 4 squares and can make a melee free strike. If the target of the free strike has M<2, they are knocked prone.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'werewolf-feature-8',
						name: 'Facepalm and Head Slam',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature within distance targets the werewolf with a melee ability after charging or moving 2 or more squares in a straight line toward them.'
						),
						cost: 2,
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target is knocked prone and takes 5 damage before the triggering ability is resolved.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'werewolf-feature-9',
					name: 'Vukenstep',
					description: 'The werewolf ignores difficult terrain.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'werewolf-feature-10',
						name: 'Howl',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText('Each target makes an **Intuition test**'),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: Characteristic.Intuition,
									tier1: 'The target must move their speed in a straight line away from the werewolf; frightened (save ends)',
									tier2: 'Frightened (EoT)',
									tier3: 'no effect',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Any enemy in the encounter who has 1 or more rage gains 4 rage and howls along with the werewolf.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'werewolf-feature-11',
						name: 'Full Wolf',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The werewolf transforms into a massive wolf of size 3 until they die or until the end of the encounter. They move to a space that can accommodate their new size and push adjacent creatures out of their way. While in wolf form, they have speed 10 and stability 2, their strikes gain a +2 damage bonus and bestow an additional 1 rage, and the potency of Accursed Bite increases by 1.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'werewolf-feature-12',
						name: 'Rampage',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Melee, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each creature in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 damage; the target gains 2 rage; M<1 bleeding (save ends)',
									tier2: '8 damage; the target gains 4 rage; M<2 bleeding (save ends)',
									tier3: '11 damage; the target gains 8 rage; M<3 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The werewolf shifts up to their speed before and after using this ability.'
							),
						],
					}),
				}),
			],
		}),
	],
	addOns: [],
};
