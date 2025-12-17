import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { DamageModifierType } from '../../core/enums/damage-modifier-type';
import { DamageType } from '../../core/enums/damage-type';
import { ElementFactory } from '../../core/factory/element-factory';
import { FeatureField } from '../../core/enums/feature-field';
import { ItemInterface } from '../../core/models/item';
import { ItemType } from '../../core/enums/item-type';
import { KitArmor } from '../../core/enums/kit-armor';

export class LeveledArmorData {
	static adaptiveSecondSkin: ItemInterface = ElementFactory.createItem({
		id: 'item-adaptive-second-skin',
		name: 'Adaptive Second Skin of Toxins',
		description:
			'This suit is shaped of tough leather and set with thousands of tiny barbs on the inside, all thankfully pain-free to the touch.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Light, AbilityKeyword.Magic],
		crafting: ElementFactory.createProject({
			prerequisites: 'Five rabid honey badger pelts, the quills of a hedgehog',
			source: 'Texts or lore in Yllyric',
			characteristic: [Characteristic.Agility, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-adaptive-second-skin-1a',
						field: FeatureField.Stamina,
						value: 6,
					}),
					ElementFactory.FeatureFactory.createDamageModifier({
						id: 'item-adaptive-second-skin-1b',
						modifiers: [
							ElementFactory.DamageModifierFactory.createCharacteristic({
								damageType: DamageType.Acid,
								modifierType: DamageModifierType.Immunity,
								characteristics: [
									Characteristic.Might,
									Characteristic.Agility,
									Characteristic.Reason,
									Characteristic.Intuition,
									Characteristic.Presence,
								],
							}),
						],
					}),
					ElementFactory.FeatureFactory.createDamageModifier({
						id: 'item-adaptive-second-skin-1c',
						modifiers: [
							ElementFactory.DamageModifierFactory.createCharacteristic({
								damageType: DamageType.Poison,
								modifierType: DamageModifierType.Immunity,
								characteristics: [
									Characteristic.Might,
									Characteristic.Agility,
									Characteristic.Reason,
									Characteristic.Intuition,
									Characteristic.Presence,
								],
							}),
						],
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-adaptive-second-skin-5',
						name: '',
						description:
							'Whenever an adjacent creature deals damage to you, they take 3 acid or poison damage (your choice).',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-adaptive-second-skin-5a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-adaptive-second-skin-9',
						name: '',
						description: 'An adjacent creature who deals damage to you takes 6 acid or poison damage.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-adaptive-second-skin-9a',
						field: FeatureField.Stamina,
						value: 9,
					}),
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-adaptive-second-skin-9b',
							name: 'Use Adaptive Second Skin of Toxins',
							type: ElementFactory.AbilityTypeFactory.createManeuver(),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You transmute a 2-cube area of liquid or gas adjacent to you into liquid acid or poison gas until the start of your next turn. Any creature who enters the area for the first time in a combat round or starts their turn there takes 6 acid or poison damage, as appropriate.'
								),
							],
						}),
					}),
				],
			},
		],
	});

	static chainOfTheSeaAndSky: ItemInterface = ElementFactory.createItem({
		id: 'item-chain-of-the-sea-and-sky',
		name: 'Chain of the Sea and Sky',
		description:
			'This set of heavy chain mail is created to allow free movement in extreme environments without sacrificing protection.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Heavy, AbilityKeyword.Magic],
		crafting: ElementFactory.createProject({
			prerequisites: 'A set of wings from a flying carp, a set of chain mail rusted by seawater',
			source: 'Texts or lore in Zaliac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-chain-of-the-sea-and-sky-1',
						name: '',
						description:
							'While you wear this armor, you can automatically swim at full speed while moving, and you can breathe underwater for up to 1 hour. Returning to the surface to breathe air again for any length of time resets the armor’s water-breathing benefit.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-chain-of-the-sea-and-sky-1a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-chain-of-the-sea-and-sky-5',
						name: '',
						description:
							'Whenever you fall, you can extend your arms (no action required) to unfurl a thick membrane between your arms and your body, slowing your fall and allowing you to glide. While gliding this way, you move downward at 1 square per round, and you can glide up to 6 squares horizontally as a free maneuver once during each of your turns.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-chain-of-the-sea-and-sky-5a',
						field: FeatureField.Stamina,
						value: 6,
					}),
					ElementFactory.FeatureFactory.createDamageModifier({
						id: 'item-chain-of-the-sea-and-sky-5b',
						modifiers: [
							ElementFactory.DamageModifierFactory.create({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 5,
							}),
						],
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-chain-of-the-sea-and-sky-9',
						name: '',
						description:
							'Whenever your feet are not touching the ground (including floating in water or being in midair), you gain an edge on ability rolls, and any ability takes a bane when targeting you.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-chain-of-the-sea-and-sky-9a',
						field: FeatureField.Stamina,
						value: 9,
					}),
					ElementFactory.FeatureFactory.createDamageModifier({
						id: 'item-chain-of-the-sea-and-sky-9b',
						modifiers: [
							ElementFactory.DamageModifierFactory.create({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 10,
							}),
						],
					}),
				],
			},
		],
	});

	static grandScarab: ItemInterface = ElementFactory.createItem({
		id: 'item-grand-scarab',
		name: 'Grand Scarab',
		description:
			'The blue-purple carapace and wings of a gigantic scarab beetle have been formed into an ornate breastplate.',
		type: ItemType.LeveledArmor,
		keywords: [AbilityKeyword.Magic, KitArmor.Medium],
		crafting: ElementFactory.createProject({
			prerequisites: 'A giant scarab beetle carapace',
			source: 'Texts or lore in Phaedran',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-grand-scarab-1',
						name: '',
						description:
							'While you wear this armor, you can fly. If you don’t end your turn on the ground, you fall..',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-grand-scarab-1a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-grand-scarab-5',
						name: '',
						description: 'You no longer need to end your turn on the ground to avoid falling.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-grand-scarab-5a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-grand-scarab-9',
						name: '',
						description: 'If you fly any distance before making a strike, that strike gains an edge.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-grand-scarab-9a',
						field: FeatureField.Stamina,
						value: 9,
					}),
				],
			},
		],
	});

	static kingsRoar: ItemInterface = ElementFactory.createItem({
		id: 'item-kings-roar',
		name: 'King’s Roar',
		description:
			'A sunmetal kite shield bears the face of a lion on its front, its mouth opening wider over the course of battle.',
		type: ItemType.LeveledArmor,
		keywords: [AbilityKeyword.Magic, KitArmor.Shield],
		crafting: ElementFactory.createProject({
			prerequisites: 'A ballad of heroism, two ingots of sunmetal',
			source: 'Songs in High Rhyvian',
			characteristic: [Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-kings-roar-1',
							name: 'King’s Roar',
							description: 'You make the shield’s lion face roar.',
							type: ElementFactory.AbilityTypeFactory.createManeuver(),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You can use a maneuver to make the shield’s lion face roar, choosing one adjacent creature or object and pushing that target up to 3 squares'
								),
								ElementFactory.createAbilitySectionPackage('item-kings-roar-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-kings-roar-1a',
						field: FeatureField.Stamina,
						value: 3,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-kings-roar-5',
						name: '5th Level',
						description:
							'Instead, target one creature or object within 3 squares and push that target up to 4 squares.',
						tag: 'item-kings-roar-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-kings-roar-5a',
						field: FeatureField.Stamina,
						value: 3,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-kings-roar-9',
						name: '9th Level',
						description:
							'Instead, target one creature or object within 6 squares, you push that target up to 5 squares, and the target is slowed until the end of their next turn.',
						tag: 'item-kings-roar-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-kings-roar-9a',
						field: FeatureField.Stamina,
						value: 3,
					}),
				],
			},
		],
	});

	static kuranzoiPrismscale: ItemInterface = ElementFactory.createItem({
		id: 'item-kuranzoi-prismscale',
		name: 'Kuran’zoi Prismscale',
		description: 'Each scale of this iridescent armor shimmers with the faint image of a frozen moment of time.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Medium, AbilityKeyword.Psionic],
		crafting: ElementFactory.createProject({
			prerequisites: 'The eyes of a time raider who died valiantly in battle',
			source: 'Texts or lore in Voll',
			characteristic: [Characteristic.Intuition, Characteristic.Presence],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-kuranzoi-prismscale-1',
							name: 'Use Kuran’zoi Prismscale',
							description: 'You capture a moment of time in the armor.',
							type: ElementFactory.AbilityTypeFactory.createTrigger(
								'A creature within 5 squares deals damage to you'
							),
							sections: [
								ElementFactory.createAbilitySectionText(
									'That creature is slowed until the end of their next turn.'
								),
								ElementFactory.createAbilitySectionPackage('item-kuranzoi-prismscale-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-kuranzoi-prismscale-1a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-kuranzoi-prismscale-5',
						name: '5th',
						description:
							'The target also takes corruption damage equal to twice your highest characteristic score.',
						tag: 'item-kuranzoi-prismscale-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-kuranzoi-prismscale-5a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-kuranzoi-prismscale-9',
						name: '9th',
						description:
							'You can immediately release the captured moment to gain a +3 bonus to speed that lasts until the end of your next turn.',
						tag: 'item-kuranzoi-prismscale-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-kuranzoi-prismscale-9a',
						field: FeatureField.Stamina,
						value: 9,
					}),
				],
			},
		],
	});

	static paperTrappings: ItemInterface = ElementFactory.createItem({
		id: 'item-paper-trappings',
		name: 'Paper Trappings',
		description:
			'This delicate robe is made from thousands of pages torn from books, intricately folded together without a single thread to bind them.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Light, AbilityKeyword.Magic],
		crafting: ElementFactory.createProject({
			prerequisites: 'Ten pages from each of a hundred different books',
			source: 'Texts or lore in Anjali',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-paper-trappings-1',
							name: 'Paper Trappings - Fold',
							type: ElementFactory.AbilityTypeFactory.createMain(),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You fold in on yourself until you and your gear are paper thin. This effect lasts for 1 minute, letting you easily slip through any opening that is 1 inch wide or more. When you return to your three-dimensional form, you are dazed for 1 minute. If you return to your true form while in a space that is too small for you, you are violently expelled into the nearest open space of your choice and take 3d6 damage.'
								),
								ElementFactory.createAbilitySectionPackage('item-paper-trappings-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-paper-trappings-1a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-paper-trappings-5',
						name: '5th',
						description:
							'When you return to your true form, you are dazed only until the end of your next turn.',
						tag: 'item-paper-trappings-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-paper-trappings-5a',
						field: FeatureField.Stamina,
						value: 6,
					}),
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-paper-trappings-5b',
							name: 'Paper Trappings - Wrap',
							type: ElementFactory.AbilityTypeFactory.createManeuver({
								qualifiers: ['You are paper thin'],
							}),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You wrap yourself around an adjacent target who is the same size or smaller than you, automatically grabbing them'
								),
							],
						}),
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-paper-trappings-9',
						name: '9th',
						description: 'You are no longer dazed when you return to your true form.',
						tag: 'item-paper-trappings-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-paper-trappings-9a',
						field: FeatureField.Stamina,
						value: 9,
					}),
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-paper-trappings-9b',
							name: 'Paper Trappings - Constrict',
							type: ElementFactory.AbilityTypeFactory.createManeuver({
								qualifiers: ['You are paper thin and have a target grabbed'],
							}),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You constrict the target, dealing 10 damage to them. A creature damaged this way takes a bane when using the Escape Grab maneuver against you and when making strikes against you.'
								),
							],
						}),
					}),
				],
			},
		],
	});

	static shroudedMemory: ItemInterface = ElementFactory.createItem({
		id: 'item-shrouded-memory',
		name: 'Shrouded Memory',
		description:
			'This midnight-dark leather coat is embossed with fractal patterns that appear different each time they are observed.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Light, AbilityKeyword.Psionic],
		crafting: ElementFactory.createProject({
			prerequisites: 'The will of a deceased person with no heirs',
			source: 'Texts or lore in Khelt',
			characteristic: [Characteristic.Agility, Characteristic.Presence],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-shrouded-memory-1',
						name: '',
						description: 'You gain an edge on tests made to lie about or conceal your identity.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-shrouded-memory-1a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-shrouded-memory-5',
							name: 'Use Shrouded Memory',
							type: ElementFactory.AbilityTypeFactory.createTrigger('You take damage'),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You teleport up to 5 squares. If you do, you create an illusion of you dying in your previous space, which fades at the end of your next turn.'
								),
								ElementFactory.createAbilitySectionPackage('item-shrouded-memory-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-shrouded-memory-5a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-shrouded-memory-9',
						name: '9th',
						description:
							'You can teleport up to a number of squares equal to the damage taken (minimum 5 squares). Additionally, if a creature dealt you the triggering damage, you become invisible to that creature until the end of your next turn.',
						tag: 'item-shrouded-memory-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-shrouded-memory-9a',
						field: FeatureField.Stamina,
						value: 9,
					}),
				],
			},
		],
	});

	static spinyTurtle: ItemInterface = ElementFactory.createItem({
		id: 'item-spiny-turtle',
		name: 'Spiny Turtle',
		description:
			'This heavy mechanized plate armor of gnomish make is designed to create its own cover on the battlefield.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Heavy, AbilityKeyword.Magic],
		crafting: ElementFactory.createProject({
			prerequisites: 'Ten steel gears from an ancient construct',
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-spiny-turtle-1',
							name: 'Use Spiny Turtle',
							type: ElementFactory.AbilityTypeFactory.createMain(),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You expand the armor on your back to create a 4 wall of metal behind you. The wall is an object that retracts if you move, or if it takes 15 damage. It the requires a main action to recalibrate before it can be deployed again.'
								),
								ElementFactory.createAbilitySectionPackage('item-spiny-turtle-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-spiny-turtle-1a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-spiny-turtle-5',
						name: '5th',
						description:
							'The damage the wall can take before retracting increases to 25. Additionally, while the wall is expanded, spikes extrude from it, and any creature who deals damage to the wall while adjacent to it takes 3 damage.',
						tag: 'item-spiny-turtle-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-spiny-turtle-5a',
						field: FeatureField.Stamina,
						value: 6,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-spiny-turtle-9',
						name: '',
						description:
							'Spikes cover the armor, and any creature who deals damage to you while adjacent to you takes 6 damage.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-spiny-turtle-9a',
						field: FeatureField.Stamina,
						value: 9,
					}),
				],
			},
		],
	});

	static starHunter: ItemInterface = ElementFactory.createItem({
		id: 'item-star-hunter',
		name: 'Star-Hunter',
		description: 'Shimmering light flows like liquid along this suit of crystalline armor.',
		type: ItemType.LeveledArmor,
		keywords: [KitArmor.Heavy, AbilityKeyword.Psionic],
		crafting: ElementFactory.createProject({
			prerequisites: 'A large vessel of astral ice, a pint of supercooled mercury',
			source: 'Texts or lore in Voll',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-star-hunter-1',
						name: '',
						description:
							'Any magic ability gains an edge when targeting you. Additionally, you instinctively know the location of any concealed creature within 2 squares.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-star-hunter-1a',
						field: FeatureField.Stamina,
						value: 6,
					}),
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-star-hunter-1b',
							name: 'Use Star-Hunter',
							type: ElementFactory.AbilityTypeFactory.createManeuver(),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You turn invisible. Your invisibility ends if you take damage or use an ability, or at the end of your next turn.'
								),
								ElementFactory.createAbilitySectionPackage('item-star-hunter-tag'),
							],
						}),
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-star-hunter-5',
						name: '',
						description: 'You instinctively know the location of any concealed creature within 5 squares.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-star-hunter-5a',
						field: FeatureField.Stamina,
						value: 6,
					}),
					ElementFactory.FeatureFactory.createDamageModifier({
						id: 'item-star-hunter-5b',
						modifiers: [
							ElementFactory.DamageModifierFactory.create({
								damageType: DamageType.Psychic,
								modifierType: DamageModifierType.Immunity,
								value: 5,
							}),
						],
					}),
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-star-hunter-5c',
						name: '5th',
						description: 'Your invisibility no longer ends at the end of your next turn.',
						tag: 'item-star-hunter-tag',
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-star-hunter-9',
						name: '',
						description: 'You instinctively know the location of any concealed creature within 10 squares.',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-star-hunter-9a',
						field: FeatureField.Stamina,
						value: 9,
					}),
					ElementFactory.FeatureFactory.createDamageModifier({
						id: 'item-star-hunter-9b',
						modifiers: [
							ElementFactory.DamageModifierFactory.create({
								damageType: DamageType.Psychic,
								modifierType: DamageModifierType.Immunity,
								value: 5,
							}),
						],
					}),
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-star-hunter-9c',
						name: '9th',
						description: 'Your invisibility no longer ends when you use an ability.',
						tag: 'item-star-hunter-tag',
					}),
				],
			},
		],
	});

	static telekineticBulwark: ItemInterface = ElementFactory.createItem({
		id: 'item-telekinetic-bulwark',
		name: 'Telekinetic Bulwark',
		description: 'An unseen force seems to draw this steel shield toward nearby creatures.',
		type: ItemType.LeveledArmor,
		keywords: [AbilityKeyword.Psionic, KitArmor.Shield],
		crafting: ElementFactory.createProject({
			prerequisites: 'Three ingots of steel, six crystals that resonate with psionic power',
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-telekinetic-bulwark-1',
							name: 'Use Telekinetic Bulwark',
							type: ElementFactory.AbilityTypeFactory.createTrigger('An adjacent enemy uses an ability', {
								free: true,
								qualifiers: ['Once per turn'],
							}),
							sections: [
								ElementFactory.createAbilitySectionText(
									'Use the Grab maneuver against that enemy. You can have any number of enemies grabbed in this way.'
								),
								ElementFactory.createAbilitySectionPackage('item-telekinetic-bulwark-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-telekinetic-bulwark-1a',
						field: FeatureField.Stamina,
						value: 2,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-telekinetic-bulwark-5',
						name: '5th',
						description:
							'The range increases to 10 squares. Additionally, any enemy who uses the Escape Grab maneuver while grabbed this way takes a bane on the test.',
						tag: 'item-telekinetic-bulwark-tag',
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-telekinetic-bulwark-5a',
						field: FeatureField.Stamina,
						value: 3,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-telekinetic-bulwark-9',
							name: '',
							type: ElementFactory.AbilityTypeFactory.createManeuver(),
							distance: [ElementFactory.DistanceFactory.createSpecial('')],
							target: 'Any enemies the shield has grabbed',
							sections: [ElementFactory.createAbilitySectionText('Pull the targets up to 5 squares.')],
						}),
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-telekinetic-bulwark-9a',
						field: FeatureField.Stamina,
						value: 4,
					}),
				],
			},
		],
	});
}
