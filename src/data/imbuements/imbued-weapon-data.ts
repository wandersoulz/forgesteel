import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { ElementFactory } from '../../core/factory/element-factory';
import { ImbuementInterface } from '../../core/models/imbuement';
import { ItemType } from '../../core/enums/item-type';

export class ImbuedWeaponData {
	static bloodBargain: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The blood of a devil',
			source: 'Texts or lore in Anjali',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'imbuement-blood-bargain',
				name: 'Blood Bargain',
				type: ElementFactory.AbilityTypeFactory.createManeuver(),
				sections: [
					ElementFactory.createAbilitySectionText(
						'You harm yourself with the weapon, taking 1d6 damage that can’t be reduced in any way. An ally within 5 squares can then spend a Recovery.'
					),
				],
			}),
		}),
	});

	static chillingI: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'A piece of ice from Quintessence that never melts',
			source: 'Texts or lore in Yllyric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-chilling-i',
			name: 'Chilling I',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature takes 3 cold damage.',
		}),
	});

	static disruptingI: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'A vial of blood from a living saint',
			source: 'Texts or lore in Anjali',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-disrupting-i',
			name: 'Disrupting I',
			description:
				'Whenever you damage an undead using this weapon and leave that undead with 15 Stamina or less, they drop to 0 Stamina.',
		}),
	});

	static hurling: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'A magnet made from rare metals',
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-hurling',
			name: 'Hurling',
			description:
				'Whenever you use a melee ability using this weapon, you can throw the weapon by treating the ability’s distance as ranged 3 instead. When the ability is resolved, the weapon returns to your hand. Any ability used when you throw this weapon can’t impose the grabbed or restrained conditions.',
		}),
	});

	static merciful: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'A sprig of dockwart, a rare plant with natural anesthetic properties',
			source: 'Texts or lore in Yllyric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-merciful',
			name: 'Merciful',
			description:
				'Whenever you reduce a non-undead creature to 0 Stamina using this weapon, the creature falls unconscious and wakes up 1d6 hours later. A creature with the Heal skill can wake the unconscious creature early with 1 uninterrupted minute of medical treatment. Whenever the creature wakes, they regain 1 Stamina.',
		}),
	});

	static terrifyingI: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The preserved, intact amygdala of a mindkiller',
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-terrifying-i',
			name: 'Terrifying I',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature takes 2 psychic damage.',
		}),
	});

	static thunderingI: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The heart of a lion, bear, or other large predatory animal',
			source: 'Texts or lore in Low Kuric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-thundering-i',
			name: 'Thundering I',
			description:
				'Whenever you deal rolled damage to a creature using this weapon, you can push that creature 1 square after the other effects of the ability resolve.',
		}),
	});

	static vengeanceI: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The crown of a usurper',
			source: 'Texts or lore in Kalliak',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-vengeance-i',
			name: 'Vengeance I',
			description:
				'Whenever you use a damage-dealing ability using this weapon against a creature who has dealt damage to you since the end of your last turn, the ability deals an extra 2 damage.',
		}),
	});

	static wingbane: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The pinfeather of a giant hawk',
			source: 'Texts or lore in Yllyric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 1,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-wingbane',
			name: 'Wingbane',
			description:
				'Whenever you damage a flying creature using this weapon, that creature is also bleeding (save ends). While bleeding in this way, the creature takes 1 damage per square they fly. If the creature starts and ends their turn on the same solid surface, the bleeding condition ends.',
		}),
	});

	static chargebreaker: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'An adamantine spearhead',
			source: 'Texts or lore in Zaliac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'imbuement-chargebreaker',
				name: 'Chargebreaker',
				type: ElementFactory.AbilityTypeFactory.createTrigger('The target willingly moves adjacent to you', {
					free: true,
				}),
				keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
				distance: [ElementFactory.DistanceFactory.createMelee()],
				target: 'One enemy',
				sections: [ElementFactory.createAbilitySectionText('The target takes 5 damage.')],
			}),
		}),
	});

	static chillingII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'Frozen bones from the lair of a white dragon',
			source: 'Texts or lore in Yllyric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-chilling-ii',
			name: 'Chilling II',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature takes 6 cold damage and is slowed (save ends). This replaces the benefit of Chilling I.',
		}),
	});

	static devastating: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'A slaughter demon’s horn',
			source: 'Texts or lore in High Kuric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-devastating',
			name: 'Devastating',
			description:
				'Whenever you make an ability roll using this weapon, the number you need to roll to score a critical hit is reduced by 1.',
		}),
	});

	static disruptingII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'A cutting from a century-old living tree in a graveyard',
			source: 'Texts or lore in Anjali',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-disrupting-ii',
			name: 'Disrupting II',
			description:
				'Whenever you damage an undead using this weapon and leave that undead with 30 Stamina or less, they drop to 0 Stamina. This replaces the benefit of Disrupting I.',
		}),
	});

	static metamorphic: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'Oil from an olothec’s liver',
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'imbuement-metamorphic',
				name: 'Metamorphic',
				type: ElementFactory.AbilityTypeFactory.createManeuver(),
				sections: [
					ElementFactory.createAbilitySectionText(`
You can change this weapon’s shape and form, granting one of the following benefits of your choice:
* **Concealed**: The weapon shrinks to the size of a piece of jewelry and can be worn as an earring, necklace, or similar accessory. While in this form, the weapon can’t be used for weapon abilities.
* **Large**: Abilities using this weapon gain a +1 melee distance bonus or a +3 ranged distance bonus.
* **Vicious**: Whenever you damage a creature using this weapon, you deal an extra 1 damage on a tier 1 outcome, an extra 2 damage on a tier 2 outcome, and an extra 3 damage on a tier 3 outcome.`),
				],
			}),
		}),
	});

	static silencing: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'An executioner’s hood worn during the execution of a mage',
			source: 'Texts or lore in The First Language',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-silencing',
			name: 'Silencing',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature also can’t use magic abilities until the end of their next turn.',
		}),
	});

	static terrifyingII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'Riverbed silt harvested from the Abyssal Wasteland',
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-terrifying-ii',
			name: 'Terrifying II',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature takes 4 psychic damage and is frightened (save ends). This replaces the benefit of Terrifying I.',
		}),
	});

	static thunderingII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'An iron rod charged by the death throes of an essence of storms',
			source: 'Texts or lore in Low Kuric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-thundering-ii',
			name: 'Thundering II',
			description:
				'Whenever you deal rolled damage to a creature using this weapon, you can push that creature up to 3 squares after the other effects of the ability resolve. If you obtained a tier 3 outcome, the creature is also knocked prone after being pushed. This replaces the benefit of Thundering I.',
		}),
	});

	static vengeanceII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The remains of a sworn foe of the creature imbuing the item',
			source: 'Texts or lore in Kalliak',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 5,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-vengeance-ii',
			name: 'Vengeance II',
			description:
				'Whenever you use a damage-dealing ability using this weapon against a creature who has dealt damage to you since the end of your last turn, the ability deals an extra 4 damage. This replaces the benefit of Vengeance I.',
		}),
	});

	static chillingIII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The weapon must be dipped in the Glacial Forge in the coldest depths of Hell',
			source: 'Texts or lore in Yllyric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-chilling-iii',
			name: 'Chilling III',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature takes 9 cold damage and is slowed (save ends). This replaces the benefit of Chilling II.',
		}),
	});

	static disruptingIII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'Wrappings from a mummy buried at least a century ago',
			source: 'Texts or lore in Anjali',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-disrupting-iii',
			name: 'Disrupting III',
			description:
				'Whenever you damage an undead using this weapon and leave that undead with 50 Stamina or less, they immediately drop to 0 Stamina. If you instead leave the undead with 100 Stamina or less, they are frightened (save ends). This replaces the benefit of Disrupting II.',
		}),
	});

	static draining: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The intact, still-thinking brain of a voiceless talker',
			source: 'Texts or lore in Voll',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-draining',
			name: 'Draining',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature is also weakened (save ends). Each time you weaken a creature with this weapon, you gain 1 surge.',
		}),
	});

	static imprisioning: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'A chain once used to restrain an angel',
			source: 'Texts or lore in Anjali',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-imprisioning',
			name: 'Imprisioning',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature is also restrained (save ends). While restrained in this way, the creature can’t use magic or psionic abilities.',
		}),
	});

	static nova: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'A piece of metal touched by a sun',
			source: 'Texts or lore in Ullorvic',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.createAbility({
			ability: ElementFactory.createAbility({
				id: 'imbuement-nova',
				name: 'Nova',
				description: 'I am an eternal flame, baby!',
				type: ElementFactory.AbilityTypeFactory.createMain(),
				keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
				distance: [ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 })],
				target: 'Each enemy in the area',
				sections: [
					ElementFactory.createAbilitySectionRoll(
						ElementFactory.createPowerRoll({
							characteristic: [
								Characteristic.Might,
								Characteristic.Agility,
								Characteristic.Reason,
								Characteristic.Intuition,
								Characteristic.Presence,
							],
							tier1: '7 fire damage',
							tier2: '11 fire damage',
							tier3: '16 fire damage',
						})
					),
				],
			}),
		}),
	});

	static terrifyingIII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The central eye of an overmind',
			source: 'Texts or lore in Variac',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-terrifying-iii',
			name: 'Terrifying III',
			description:
				'Whenever you damage a creature with an ability using this weapon and obtain a tier 3 outcome, that creature takes 6 psychic damage and is frightened (save ends). This replaces the benefit of Terrifying II.',
		}),
	});

	static thunderingIII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites:
				'An oracle of storms must willingly bless the weapon with lightning while it is being wielded, and its wielder must survive this trial',
			source: 'Texts or lore in Low Kuric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-thundering-iii',
			name: 'Thundering III',
			description:
				'Whenever you deal rolled damage to a creature using this weapon, you can vertical push that creature up to 5 squares and knock them prone after the other effects of the ability resolve. If the creature takes or deals damage as a result of this movement, they also take 5 thunder damage. This replaces the benefit of Thundering II.',
		}),
	});

	static vengeanceIII: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites: 'The true name of a devil who hunts other devils',
			source: 'Texts or lore in Kalliak',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-vengeance-iii',
			name: 'Vengeance III',
			description:
				'Whenever you use a damage-dealing ability using this weapon against a creature who has dealt damage to you since the end of your last turn, the ability deals an extra 6 damage. This replaces the benefit of Vengeance II.',
		}),
	});

	static windcutting: ImbuementInterface = ElementFactory.createImbuement({
		type: ItemType.ImbuedWeapon,
		crafting: ElementFactory.createProject({
			prerequisites:
				'A feather from a bird, once thought extinct, who dwells at the eye of an ever-whirling tornado',
			source: 'Texts or lore in Yllyric',
			characteristic: [Characteristic.Might, Characteristic.Reason, Characteristic.Intuition],
			goal: 150,
		}),
		level: 9,
		feature: ElementFactory.FeatureFactory.create({
			id: 'imbuement-windcutting',
			name: 'Windcutting',
			description:
				'Whenever you use a melee signature ability that usually targets one creature, you can take a bane on the ability to target each enemy in a cube 3 within distance. If your signature ability would usually cause its target to become grabbed or restrained, each target in the area is instead slowed until the end of their next turn.',
		}),
	});
}
