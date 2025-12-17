import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const hag: MonsterGroupInterface = {
	id: 'monster-group-hag',
	name: 'Hag',
	description:
		'When fear of death or hunger for power grips a mortal spellcaster, often a druid or a witch, they might forge a pact with an evil archfey. The mortal becomes a hag—aged, clawed, and cruel. A ruthlessly powerful fey in their own right, a hag uses their magic to bring about the misery their archfey wills.',
	picture: null,
	information: [
		{
			id: 'hag-info-1',
			name: 'Hiding in Plain Sight',
			description:
				'Though hags typically appear as older humanoids, their true form is as vicious and nasty as their nature. They prefer to show the world a charitable face, but the general wisdom concerning hags is that the more beautiful their appearance, the deeper the rot within. This theory has never been confirmed, however, as few who see a hag’s true form live to tell the tale.',
		},
		{
			id: 'hag-info-2',
			name: 'Dealmakers and Heart-Breakers',
			description: `
As old age can’t kill them, the oldest hags accumulate swathes of knowledge, magic, and repute over time. They are happy to share their wares … for the right price. Rather than ask for paltry coin, a hag usually bargains for something dear to the customer—perhaps their ability to love, the sound of their child’s laugh, or their left pinky toe.

Adding insult to injury, those who deal with hags almost always discover the product is worse than advertised. Mortals should pay close attention to the precise wording of their agreements, lest they end up with a hex they thought would be a gift. Such curses often lead to the corruption of good but desperate folk, with some getting so twisted up in fey deals that they become hags themselves.`,
		},
		{
			id: 'hag-info-3',
			name: "What's in a Name?",
			description:
				'Hags give themselves whimsical names, and older hags often select monikers such as Auntie, Uncle, or Nanny. Such relatable names help entice their favorite prey: the innocent. Who would fear Granny Gumdrops or Uncle Twothumbs?',
		},
		{
			id: 'hag-info-4',
			name: 'Loyal Underlings',
			description:
				'Hags are treacherous by nature, and they only recruit creatures they can trust to be loyal underlings. Most of these creatures lack sapience (such as animals, constructs, and undead), though hags sometimes command weaker fey who are too scared to betray them.',
		},
		{
			id: 'hag-info-5',
			name: 'Hag Languages',
			description:
				'Most hags speak Anjali, Caelian, Khelt, and Yllyric, with older hags often knowing several more languages.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'hag-malice-1',
			name: 'Casting Curses and Bodies',
			cost: 3,
			icon: StatBlockIcon.AuraBurst,
			sections: ['The hag utters terrible words that push each enemy within 2 squares of them up to 3 squares.'],
		}),
		ElementFactory.FeatureFactory.createMaliceAbility({
			ability: ElementFactory.createAbility({
				id: 'hag-malice-2',
				name: 'Hag Wyrd',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				cost: 5,
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [
					ElementFactory.DistanceFactory.create({
						type: AbilityDistanceType.Line,
						value: 10,
						value2: 1,
						within: 1,
					}),
				],
				target: 'Each enemy in the area',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							bonus: 3,
							tier1: '5 fire damage; R<1 frightened (save ends)',
							tier2: '8 fire damage; R<2 frightened (save ends)',
							tier3: '11 fire damage; R<3 frightened (save ends)',
						})
					),
					ElementFactory.createAbilitySectionText(
						'After making the power roll, the hag can choose to replace the damage type and condition with lightning damage and dazed, or cold damage and slowed.'
					),
				],
			}),
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'hag-malice-3',
			name: 'Solo Action',
			cost: 5,
			icon: StatBlockIcon.Villain,
			sections: [
				'The hag takes an additional main action on their turn. They can use this feature even if they are dazed.',
			],
		}),
		ElementFactory.FeatureFactory.createMaliceAbility({
			ability: ElementFactory.createAbility({
				id: 'hag-malice-4',
				name: 'House Call',
				description: `
The hag’s hut springs to life. It enters the encounter map within 10 squares of the hag if it isn’t already there and takes its turn. The hut is size 4, has 75 Stamina and damage immunity 3, and has speed 8 from its powerful set of animal legs. This feature can’t be used if the hut is reduced to 0 Stamina. In addition to its move action, the house can take only the following main action.

**KICK**`,
				type: ElementFactory.AbilityTypeFactory.createMain(),
				cost: 10,
				keywords: [AbilityKeyword.Area, AbilityKeyword.Ranged, AbilityKeyword.Weapon],
				distance: [
					ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Cube, value: 2, within: 2 }),
				],
				target: 'Each enemy in the area',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							bonus: 3,
							tier1: '6 damage; push 3; M<1 prone',
							tier2: '10 damage; push 4; M<2 prone',
							tier3: '13 damage; push 5; M<3 prone',
						})
					),
				],
			}),
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'hag-1',
			name: 'Wode Hag',
			level: 3,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: ['Fey', 'Hag'],
			encounterValue: 60,
			size: ElementFactory.createSize(1, 'L'),
			speed: ElementFactory.createSpeed(5, 'fly, hover'),
			stamina: 300,
			stability: 1,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(2, 1, 1, 3, 3),
			features: [
				ElementFactory.FeatureFactory.createSoloMonster({
					id: 'hag-feature-1',
					name: 'the hag',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'hag-feature-2',
					name: 'Supernatural Resistance',
					description: 'Magic and Psionic abilities used against the hag take a bane.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'hag-feature-3',
						name: 'Corrosive Claws',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '9 corruption damage; A<1 weakened (save ends)',
									tier2: '13 corruption damage; A<2 weakened (save ends)',
									tier3: '16 corruption damage; A<3 weakened (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'hag-feature-4',
						name: 'Soul Steal',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 4,
								within: 1,
							}),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 corruption damage; P<1 4 corruption damage',
									tier2: '8 corruption damage; P<2 5 corruption damage',
									tier3: '10 corruption damage; P<3 6 corruption damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'This ability gains an edge against a target who has a soul.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'The hag regains Stamina equal to half the damage dealt.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'hag-feature-5',
						name: 'Shapeshifter',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Magic],
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The hag alters their body to become any size 1 creature, from a house cat to a humanoid. If the hag uses this ability while outside of any enemy’s line of effect, they can choose to be automatically hidden. The hag can return to their original form as a free maneuver.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 5,
								effect: 'The hag becomes a size 2 creature instead, from a bear to an ogre. While in this form, the hag’s melee abilities gain a +1 bonus to distance and deal an extra 4 damage.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'hag-feature-6',
						name: 'Turned Upside Down',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature targets the hag with a melee strike.'
						),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy in the area',
						cost: 2,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: 'Slide 2; R<1 the slide is vertical',
									tier2: 'Slide 3; R<2 the slide is vertical, and the target is restrained (EoT)',
									tier3: 'Vertical slide 5; R<3 restrained (EoT)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While restrained this way, a creature who is vertical force moved is suspended in midair. The creature falls when the condition ends.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'hag-feature-7',
						name: 'Snackies for Sweeties',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each creature in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The hag attaches an ornate explosive pastry to each target who has A<2. At the end of the round, the hag makes one power roll against each creature with a pastry attached to them.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '6 poison damage',
									tier2: '10 poison damage',
									tier3: '13 poison damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'**Special** A creature wearing a pastry or adjacent to a creature wearing a pastry can attempt an **Agility test** to remove the pastry as a maneuver.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: Characteristic.Agility,
									tier1: 'The hag makes the power roll for all pastries.',
									tier2: 'The pastry is not removed.',
									tier3: 'The pastry is removed and can no longer explode.',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'hag-feature-8',
						name: 'Predator’s Alacrity',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Before using this villain action, the hag shifts up to their speed. They then use Corrosive Claws against each target, push each target up to 2 squares, and shift up to their speed again.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'hag-feature-9',
						name: 'Open the Oven',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 5,
								within: 1,
							}),
						],
						target: 'Each creature in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '6 fire damage; A<1 weakened (save ends)',
									tier2: '10 fire damage; A<2 weakened (save ends)',
									tier3: '13 fire damage; A<3 weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The hag turns the area into a roiling oven until the end of the encounter. Any creature in area takes an extra 5 damage from the hag’s damage-dealing abilities.'
							),
						],
					}),
				}),
			],
		}),
	],
	addOns: [],
};
