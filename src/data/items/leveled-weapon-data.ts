import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { DamageModifierType } from '../../core/enums/damage-modifier-type';
import { DamageType } from '../../core/enums/damage-type';
import { ElementFactory } from '../../core/factory/element-factory';
import { FeatureField } from '../../core/enums/feature-field';
import { ItemInterface } from '../../core/models/item';
import { ItemType } from '../../core/enums/item-type';
import { KitWeapon } from '../../core/enums/kit-weapon';

export class LeveledWeaponData {
	static authoritysEnd: ItemInterface = ElementFactory.createItem({
		id: 'item-authoritys-end',
		name: 'Authority’s End',
		description: 'This long, sinuous chain is composed entirely of broken links held together by unseen power.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Psionic, KitWeapon.Whip],
		crafting: ElementFactory.createProject({
			prerequisites: 'A lash used to punish a mutineer',
			source: 'Texts or lore in Khelt',
			characteristic: [Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-authoritys-end-1',
							name: 'Use Authority’s End',
							type: ElementFactory.AbilityTypeFactory.createManeuver({
								qualifiers: ['Immediately after you damage a creature with the weapon'],
							}),
							sections: [
								ElementFactory.createAbilitySectionText(
									'End one effect imposed by the damaged creature on you or another creature within 5 squares of you.'
								),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-authoritys-end-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-authoritys-end-5',
						name: '',
						description: 'You and each ally within 2 squares of you gains a +1 bonus to saving throws.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-authoritys-end-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-authoritys-end-9',
						name: '',
						description:
							'You no longer need to use a maneuver to end one effect when you damage a creature with the weapon. The weapon also refuses to vie for control of your psyche, and no longer counts against the limit of leveled treasures you can carry safely.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-authoritys-end-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
				],
			},
		],
	});

	static bladeOfQuintessence: ItemInterface = ElementFactory.createItem({
		id: 'item-blade-of-quintessence',
		name: 'Blade of Quintessence',
		description: 'This crystal blade houses a stormy vortex of fire, ice, and lightning',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Medium, AbilityKeyword.Magic],
		crafting: ElementFactory.createProject({
			prerequisites:
				'A ruby hardened in the fires of the City of Brass, a sapphire that has been struck by lightning',
			source: 'Texts or lore in Zaliac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-blade-of-quintessence-1',
						name: '',
						description:
							'You can change the damage type of weapon abilities to cold, fire, lightning, or sonic.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-blade-of-quintessence-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon],
						value: 1,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-blade-of-quintessence-5',
						name: '',
						description:
							'The weapon can be used with ranged weapon abilities, and returns to you when a ranged ability is resolved. Ranged abilities used with the weapon must deal cold, fire, lightning, or sonic damage (chosen when you use the ability).',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-blade-of-quintessence-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon],
						value: 1,
					}),
					ElementFactory.FeatureFactory.createAbilityDistance({
						id: 'item-blade-of-quintessence-5c',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 3,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-blade-of-quintessence-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon],
						value: 1,
					}),
					ElementFactory.FeatureFactory.createDamageModifier({
						id: 'item-blade-of-quintessence-9b',
						modifiers: [
							ElementFactory.DamageModifierFactory.create({
								damageType: DamageType.Cold,
								modifierType: DamageModifierType.Immunity,
								value: 10,
							}),
							ElementFactory.DamageModifierFactory.create({
								damageType: DamageType.Fire,
								modifierType: DamageModifierType.Immunity,
								value: 10,
							}),
							ElementFactory.DamageModifierFactory.create({
								damageType: DamageType.Lightning,
								modifierType: DamageModifierType.Immunity,
								value: 10,
							}),
							ElementFactory.DamageModifierFactory.create({
								damageType: DamageType.Sonic,
								modifierType: DamageModifierType.Immunity,
								value: 10,
							}),
						],
					}),
				],
			},
		],
	});

	static bladeOfTheLuxuriousFop: ItemInterface = ElementFactory.createItem({
		id: 'item-blade-of-the-luxurious-fop',
		name: 'Blade of the Luxurious Fop',
		description:
			'Despite sporting an outrageously ornate hilt adorned with far too many jewels, this blade remains perfectly balanced.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Light, AbilityKeyword.Magic],
		crafting: ElementFactory.createProject({
			prerequisites:
				'A personal blessing from the greatest duelist in the land, six fake and extremely shiny gemstones',
			source: 'Texts or lore in Caelian',
			characteristic: [Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-blade-of-the-luxurious-fop-1',
						name: '',
						description:
							'Whenever you deal damage with this weapon, you can immediately shift 1 square. As well, while you wield or carry the weapon and are present in a negotiation, if an NPC in the negotiation has the greed, legacy, power, or revelry motivation, their starting interest increases by 1 (to a maximum of 5).',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-blade-of-the-luxurious-fop-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-blade-of-the-luxurious-fop-5',
						name: '',
						description:
							'When you make an opportunity attack against an enemy of your size or smaller, you can use fancy footwork to knock them prone.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-blade-of-the-luxurious-fop-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
					ElementFactory.FeatureFactory.createBonus({
						id: 'item-blade-of-the-luxurious-fop-5b',
						field: FeatureField.Renown,
						value: 1,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-blade-of-the-luxurious-fop-9',
						name: '',
						description:
							'You have a double edge on any test you make using a skill you have from the interpersonal skill group.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-blade-of-the-luxurious-fop-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
				],
			},
		],
	});

	static displacer: ItemInterface = ElementFactory.createItem({
		id: 'item-displacer',
		name: 'Displacer',
		description:
			'This crystal battleaxe seems to pull at the hands that wield it, as if anxious to leap across the battlefield.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Medium, AbilityKeyword.Psionic],
		crafting: ElementFactory.createProject({
			prerequisites: 'An ancient bronze gear covered in indecipherable runes',
			source: 'Texts or lore in Zaliac',
			characteristic: [Characteristic.Might, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-displacer-1',
							name: 'Use Displacer',
							type: ElementFactory.AbilityTypeFactory.createManeuver({
								qualifiers: ['After you deal rolled damage'],
							}),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You teleport yourself and the damaged creature, letting you trade places provided you both fit into each other’s spaces.'
								),
								ElementFactory.createAbilitySectionPackage('item-displacer-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-displacer-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-displacer-5',
						name: '5th',
						description:
							'You may trade places with any creature within 4 squares of the target, provided you both fit into each other’s spaces.',
						tag: 'item-displacer-tag',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-displacer-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-displacer-9',
						name: '9th',
						description:
							'You may trade places with any creature within 8 squares of the target, provided you both fit into each other’s spaces. Additionally, you can cause the creature you traded places with to be weakened until the end of their next turn, or you can spend a Recovery.',
						tag: 'item-displacer-tag',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-displacer-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
		],
	});

	static executionersBlade: ItemInterface = ElementFactory.createItem({
		id: 'item-executioners-blade',
		name: "Executioner's Blade",
		description: 'This blade exudes a faint hum that grows louder as its quarry weakens.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Heavy, AbilityKeyword.Psionic],
		crafting: ElementFactory.createProject({
			prerequisites: 'The skull of a convicted criminal',
			source: 'Texts or lore in Caelian',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-executioners-blade-1',
						name: '',
						description:
							'Any weapon ability that deals rolled damage using this weapon deals an extra 1 psychic damage, or an extra 2 psychic damage if the target is winded. Additionally, the first time in an encounter that you cause an enemy to become winded with an ability using the weapon, you gain 10 temporary Stamina.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-executioners-blade-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-executioners-blade-5',
						name: '',
						description:
							'The weapon’s extra psychic damage increases to 2 if the target is winded. d. Additionally, whenever you cause an enemy to become winded with an ability using the weapon, you gain 2 surges that you can immediately spend.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-executioners-blade-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-executioners-blade-9',
						name: '',
						description:
							'The weapon’s extra psychic damage increases to 3 if the target is winded. Additionally, you gain an edge on any ability using the weapon against a winded target.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-executioners-blade-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
		],
	});

	static icemakerMaul: ItemInterface = ElementFactory.createItem({
		id: 'item-icemaker-maul',
		name: 'Icemaker Maul',
		description:
			'The head of this platinum hammer is cold to the touch, and encases whatever it strikes in a thin layer of ice.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Heavy, AbilityKeyword.Magic],
		crafting: ElementFactory.createProject({
			prerequisites: 'Eight iron bars cooled in a glacier, the branch of an ancient evergreen',
			source: 'Texts in Zaliac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-icemaker-maul-1',
							name: 'Use Icemaker Maul',
							type: ElementFactory.AbilityTypeFactory.createManeuver(),
							sections: [
								ElementFactory.createAbilitySectionText(
									'You create an ice field in a 3 burst. The ground in this area is difficult terrain for enemies, and lasts until the end of the encounter or when you use this ability again.'
								),
								ElementFactory.createAbilitySectionPackage('item-icemaker-maul-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-icemaker-maul-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Cold,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-icemaker-maul-5',
						name: '5th',
						description:
							'The ice field becomes a 4 burst. Additionally, whenever you use a weapon ability using this weapon against one or more enemies in the ice field, you gain 1 surge that you can use immediately',
						tag: 'item-icemaker-maul-tag',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-icemaker-maul-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Cold,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-icemaker-maul-9',
						name: '9th',
						description:
							'The ice field becomes a 5 burst. Additionally, any enemy in the ice field who is reduced to 0 Stamina by an ability using the weapon can be shattered, killing them and dealing 15 cold damage to each enemy within 3 squares of them.',
						tag: 'item-icemaker-maul-tag',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-icemaker-maul-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Cold,
					}),
				],
			},
		],
	});

	static knifeOfNine: ItemInterface = ElementFactory.createItem({
		id: 'item-knife-of-nine',
		name: 'Knife of Nine',
		description: 'This ivory dagger features nine faintly glowing indentations along the blade.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Light, AbilityKeyword.Psionic],
		crafting: ElementFactory.createProject({
			prerequisites: 'Eighteen daggers - nine taken from personal enemies and nine gifted by friends',
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-knife-of-nine-1',
						name: '',
						description:
							'Any weapon ability that deals rolled damage using this weapon deals an extra 1 psychic damage. This extra damage increases by 1 each time you deal rolled damage using the weapon to the same target during the same encounter (to a maximum of 3).',
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-knife-of-nine-5',
						name: '',
						description:
							'Whenever you reduce a creature to 0 Stamina with an ability using this weapon, one of its indentations glows brighter.',
					}),
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-knife-of-nine-5a',
							name: 'Use Knife of Nine',
							type: ElementFactory.AbilityTypeFactory.createTrigger(
								'Use a signature ability using the weapon'
							),
							sections: [
								ElementFactory.createAbilitySectionText(
									'Expend any number of bright-glowing indentations, with the ability dealing extra psychic damage equal to the number of indentations. The expended indentations then return to a dim glow.'
								),
							],
						}),
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-knife-of-nine-9',
						name: '',
						description:
							'If you make a weapon strike using this weapon against a target after dropping down on them from a height of 2 squares or more, the attack deals an extra 10 psychic damage. You can distribute all extra psychic damage dealt by the attack between the target and any enemies adjacent to them.',
					}),
				],
			},
		],
	});

	static lanceOfTheSunderedStar: ItemInterface = ElementFactory.createItem({
		id: 'item-lance-of-the-sundered-star',
		name: 'Lance of the Sundered Star',
		description:
			'This needlelike lance is cast of shimmering metal and induces a yearning for the skies in those who handle it.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Magic, KitWeapon.Polearm],
		crafting: ElementFactory.createProject({
			prerequisites: 'Night-blooming flower petals, a starmetal meteorite',
			source: 'Texts or lore in Hyrallic',
			characteristic: [Characteristic.Agility, Characteristic.Presence],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-lance-of-the-sundered-star-1',
						name: '',
						description:
							'When the weapon is used with a weapon ability that allows you to push a target, you can shift to any square adjacent to the target after the push.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-lance-of-the-sundered-star-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Holy,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-lance-of-the-sundered-star-5',
						name: '',
						description:
							'Whenever you use the Charge main action and use an ability with the Charge keyword, or whenever you use an ability that allows you to shift, you can fly as part of the charge movement or the shift. If you don’t end your flying movement on the ground, you fall.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-lance-of-the-sundered-star-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Holy,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-lance-of-the-sundered-star-9',
						name: '',
						description:
							'Whenever the weapon is used with a weapon ability that allows you to push or slide a target, that forced movement can be vertical.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-lance-of-the-sundered-star-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Holy,
					}),
				],
			},
		],
	});

	static moltenConstrictor: ItemInterface = ElementFactory.createItem({
		id: 'item-molten-constrictor',
		name: 'Molten Constrictor',
		description: 'This flexible black-iron net burns with the heat of a volcano.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Magic, KitWeapon.Ensnaring],
		crafting: ElementFactory.createProject({
			prerequisites: 'Four iron bars coated in magma slag',
			source: 'Texts or lore in Caelian',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-molten-constrictor-1',
						name: '',
						description:
							'Whenever you make a strike using the net and obtain a tier 3 outcome, you can automatically grab the target. A target grabbed in this way takes a bane when using the Escape Grab maneuver.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-molten-constrictor-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Fire,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-molten-constrictor-5',
						name: '',
						description:
							'A target grabbed by a strike using the net takes 8 fire damage each time they attempt to escape using the Escape Grab maneuver.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-molten-constrictor-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Fire,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-molten-constrictor-9',
						name: '',
						description: 'The damage taken by a grabbed creature attempting to escape increases to 15.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-molten-constrictor-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Fire,
					}),
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-molten-constrictor-5b',
							name: 'Weapon Ability',
							type: ElementFactory.AbilityTypeFactory.createManeuver(),
							distance: [ElementFactory.DistanceFactory.createSpecial('')],
							target: 'One creature grabbed by the net.',
							sections: [
								ElementFactory.createAbilitySectionText(
									'Make a free strike with another weapon against the target'
								),
							],
						}),
					}),
				],
			},
		],
	});

	static onerousBow: ItemInterface = ElementFactory.createItem({
		id: 'item-onerous-bow',
		name: 'Onerous Bow',
		description: 'This mechanized bow is set with magical reservoirs that carry the faint tang of toxins.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Bow, AbilityKeyword.Magic],
		crafting: ElementFactory.createProject({
			prerequisites: 'A venom sac from a giant spider, one valok gyroscope',
			source: 'Texts or lore in Caelian and Variac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-onerous-bow-1',
						name: '',
						description:
							'Any signature ability using the weapon that obtains a tier 3 outcome also makes the target weakened until the end of their next turn.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-onerous-bow-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-onerous-bow-5',
						name: '',
						description:
							'A signature ability made using the weapon that obtains a tier 3 outcome also makes the target weakened and slowed until the end of their next turn.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-onerous-bow-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-onerous-bow-9',
						name: '',
						description:
							'If you use an ability using the weapon that targets one creature and you don’t have a bane or double bane on the ability, you can take a bane. Doing so lets you target another creature adjacent to the original target. Alternatively, you can have a double bane to target two creatures adjacent to the original target.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-onerous-bow-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
					}),
				],
			},
		],
	});

	static steeltongue: ItemInterface = ElementFactory.createItem({
		id: 'item-steeltongue',
		name: 'Steeltongue',
		description: 'This sinuous whip reflects all light off its plated steel surfaces.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Magic, KitWeapon.Whip],
		crafting: ElementFactory.createProject({
			prerequisites: 'One hundred steel arrowheads stained with blood',
			source: 'Texts or lore in Caelian and Kalliak',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-steeltongue-1',
						name: '',
						description:
							'Any damage-dealing weapon ability using the weapon against a target who has A < [average] also leaves that target bleeding (save ends).',
					}),
					ElementFactory.FeatureFactory.createAbilityDistance({
						id: 'item-steeltongue-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-steeltongue-5',
						name: '',
						description:
							'Any weapon ability that deals rolled damage using the weapon gains a +3 damage bonus against any target who is bleeding.',
					}),
					ElementFactory.FeatureFactory.createAbilityDistance({
						id: 'item-steeltongue-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-steeltongue-9',
						name: '',
						description:
							'y, if you use a signature ability using the weapon that targets one or more bleeding creatures, you can use the same ability again immediately as a maneuver.',
					}),
					ElementFactory.FeatureFactory.createAbilityDistance({
						id: 'item-steeltongue-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
					}),
				],
			},
		],
	});

	static thirdEyeSeeker: ItemInterface = ElementFactory.createItem({
		id: 'item-third-eye-seeker',
		name: 'Third Eye Seeker',
		description: 'The shifting patterns on this bow’s crystalline grip resemble dozens of blinking eyes.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Bow, AbilityKeyword.Psionic],
		crafting: ElementFactory.createProject({
			prerequisites: "Heart strings of a tapir, a pound of tiger's eye gemstones",
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-third-eye-seeker-1',
						name: '',
						description:
							'Any damage-dealing weapon ability using the weapon that achieves a tier 3 outcome also leaves the target dazed until the end of their next turn.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-third-eye-seeker-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-third-eye-seeker-5',
							name: 'Weapon Ability',
							type: ElementFactory.AbilityTypeFactory.createTrigger(
								"After target's triggered action resolves"
							),
							distance: [
								ElementFactory.DistanceFactory.createSpecial('Ranged weapon free strike distance'),
							],
							target: 'One enemy',
							sections: [
								ElementFactory.createAbilitySectionText(
									'Make a ranged weapon free strike using this weapon against the target.'
								),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-third-eye-seeker-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-third-eye-seeker-9',
						name: '',
						description:
							'You have a double edge on weapon abilities that use the weapon against creatures who have used a psionic ability since the end of your last turn.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-third-eye-seeker-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Ranged],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
		],
	});

	static thunderheadBident: ItemInterface = ElementFactory.createItem({
		id: 'item-thunderhead-bident',
		name: 'Thunderhead Bident',
		description: 'This bident is made from two pieces of moon metal twisted together, and hums like a tuning fork.',
		type: ItemType.LeveledWeapon,
		keywords: [AbilityKeyword.Magic, KitWeapon.Medium],
		crafting: ElementFactory.createProject({
			prerequisites: 'A jar of captured thunder, two ingots of moon metal',
			source: 'Texts or lore in Zaliac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-thunderhead-bident-1',
						name: '',
						description:
							'When the weapon is used with any ability that pushes a target, you gain a +1 bonus to the forced movement distance. If the weapon is used with a damage-dealing ability that doesn’t impose forced movement, you can push the target 1 square.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-thunderhead-bident-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Sonic,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-thunderhead-bident-5',
						name: '',
						description:
							'The additional distance or distance of a push for abilities using the weapon increases to 2 squares. Additionally, the weapon can be used with ranged weapon abilities, and gains power the farther it is hurled. For each 2 squares the weapon travels to the target of a ranged strike, the strike deals an extra 1 sonic damage.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-thunderhead-bident-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Sonic,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-thunderhead-bident-9',
						name: '',
						description:
							'The weapon deals an extra 1 sonic damage for each square it travels as part of a ranged strike. Additionally, whenever you make a weapon strike using this weapon, each enemy adjacent to the target takes 6 sonic damage.',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-thunderhead-bident-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Sonic,
					}),
				],
			},
		],
	});

	static wetwork: ItemInterface = ElementFactory.createItem({
		id: 'item-wetwork',
		name: 'Wetwork',
		description: 'When first held, this naginata whispers the names of its past victims.',
		type: ItemType.LeveledWeapon,
		keywords: [KitWeapon.Polearm, AbilityKeyword.Psionic],
		crafting: ElementFactory.createProject({
			prerequisites: 'A folded metal blade infused with blood',
			source: 'Texts or lore in Higaran',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 450,
		}),
		featuresByLevel: [
			{
				level: 1,
				features: [
					ElementFactory.FeatureFactory.createAbility({
						ability: ElementFactory.createAbility({
							id: 'item-wetwork-1',
							name: 'Weapon Ability',
							type: ElementFactory.AbilityTypeFactory.createManeuver({
								qualifiers: ['After you reduce a creature to 0 stamina using this weapon'],
							}),
							distance: [ElementFactory.DistanceFactory.createMelee()],
							target: 'One enemy',
							sections: [
								ElementFactory.createAbilitySectionText('Make a melee free strike.'),
								ElementFactory.createAbilitySectionPackage('item-wetwork-tag'),
							],
						}),
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-wetwork-1a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
			{
				level: 5,
				features: [
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-wetwork-5',
						name: '5th',
						description: 'You can move up to 2 squares before or after the strike.',
						tag: 'item-wetwork-tag',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-wetwork-5a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
			{
				level: 9,
				features: [
					ElementFactory.FeatureFactory.create({
						id: 'item-wetwork-9',
						name: '',
						description:
							"The weapon's extra sonic damage increases to 3. Additionally, if you kill a creature using the weapon, you can use a maneuver to move up to your speed and make either a signature strike or a melee free strike.",
					}),
					ElementFactory.FeatureFactory.createPackageContent({
						id: 'item-wetwork-5',
						name: '9th',
						description:
							'Or you can move up to you speed and make either a signature ability strike or a melee free strike.',
						tag: 'item-wetwork-tag',
					}),
					ElementFactory.FeatureFactory.createAbilityDamage({
						id: 'item-wetwork-9a',
						name: '',
						keywords: [AbilityKeyword.Weapon, AbilityKeyword.Melee],
						value: 1,
						damageType: DamageType.Psychic,
					}),
				],
			},
		],
	});
}
