import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityKeyword } from '../../core/enums/ability-keyword';
import { Characteristic } from '../../core/enums/characteristic';
import { DamageModifierType } from '../../core/enums/damage-modifier-type';
import { DamageType } from '../../core/enums/damage-type';
import { ElementFactory } from '../../core/factory/element-factory';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { StatBlockIcon } from '../../core/enums/stat-block-icon';

export const undead: MonsterGroupInterface = {
	id: 'monster-group-undead',
	name: 'Undead',
	description: `
Some serve as mindless soldiers and workers under the control of a necromancer. Others rise when they die a bitter death in a place infused with cursed magic. For a few, it was a choice to become something beyond mortal. However they arose, all undead were once living creatures who now walk the land after death in defiance of the natural order.

Rotting zombies, seductive vampires, wailing wraiths, and more undead stalk the widespread horror stories nobles and commoners alike tell each another around low-burning hearths. Even the most isolated hermits know that the dead can rise, eager to kill. These popular tales fuel many people’s fears of the undead. Mere rumors of a nearby ghoul pack can send an entire community into a panic. When open graves appear in the churchyard or a translucent spirit is spotted on the street, local leaders are quick to hire adventurers to deal with the threat.`,
	picture: null,
	information: [
		{
			id: 'undead-1st-info-1',
			name: 'Dark Places',
			description:
				'For many undead, sunlight is a nuisance that they naturally avoid. While rarely harmful to them, the sun’s golden rays make them uncomfortable and shine far too bright to their dead eyes. Walking in the light of day also makes it easier for undead to be spotted by fearful mortals. Many undead avoid the sun entirely, hiding in tombs or ruins until nightfall when they can freely stalk their victims.',
		},
		{
			id: 'undead-1st-info-2',
			name: 'Encountered Together',
			description:
				' Undead are often encountered in groups that include more than just a single kind of creature. A necromancer might raise zombies, skeletons, and ghouls to protect their mansion, as each serves a different function as a guardian. A lich could have wraiths as messengers and soulwights as laboratory assistants. An ancient tomb might have mummies and vampires within. The undead don’t need to drink, eat, sleep, or breathe, and many share an affinity for lightless places, leading to these congregations.',
		},
		{
			id: 'undead-1st-info-3',
			name: 'Corporeal Undead',
			description: `
At their most innocuous, corporeal undead are a mockery of life, a body hoisted and dragged along by unnatural strings. At their worst, they are a violent scourge hungry for slaughter, and a perverse reflection of the mortal desire to exist for eternity. Ghouls, skeletons, soulwights, and zombies number among the lesser corporeal undead. Many lack a soul, and many can’t think beyond the orders of their creators—unlike more powerful corporeal undead such as liches and vampires. Those who aren’t controlled by others typically have a singular focus: the destruction of all living things.

The magic that animates a corpse removes the need for air, sleep, and sustenance. This magic also halts decay, preserving the undead at the stage of deterioration before they were animated. While most corporeal undead are brought to unlife by a creator, tales abound of zombies suddenly rising from graveyards during rare astronomical occurrences, skeletal soldiers emerging from mass graves on the anniversary of their death, and other seemingly spontaneous acts of necromancy.`,
		},
		{
			id: 'undead-1st-info-4',
			name: 'Spectral Undead',
			description: `
Umbral stalkers. Specters. Wraiths. Spectral undead come in many forms. One might be spawned by a person’s vile actions in life, while another could be a soul lost to a necromancer’s fell arts. Powerful undead can even manifest these shadowy beings into existence through sheer will. Regardless of how they come to be, though, all spectral undead are malice incarnate.

Spectral undead who are formed naturally from the souls of malicious, hate-filled creatures usually haunt the places where they died, while those manifested by another being typically dwell where ordered to by their creator. Left to their own devices, spectral undead stop at nothing to kill the living they encounter, with some stalking their quarry through miles of ruins or wilderness.`,
		},
		{
			id: 'undead-2nd-info-1',
			name: 'Mummies',
			description:
				'Mummies are humanoids raised from the dead through a complex series of magical rituals. The process tethers a creature’s soul to their earthly body, preventing them from crossing into true death. As part of the mummification process, a corpse is embalmed and wrapped in cloth imbued with necromantic power. Mummification is reserved for situations of grave import. A great hero might voluntarily be mummified upon death to eternally guard future generations or a holy relic. On the other hand, a great villain could be mummified to prevent them from escaping their crimes through death.',
		},
		{
			id: 'undead-2nd-info-2',
			name: 'Vampire Spawn',
			description: `
Vampirism is a curse of blood that harrows its victims, turning them into mirror-mockeries of life that nonetheless hunger for life’s essence: blood. With that hunger comes power everlasting over life and death. By feeding, a vampire passes this curse onto their victims.

Though vampires are fundamentally changed from their living forms, they retain the intellect and memories of their mortal selves. A vampire’s power grows as they spend time in undeath. Vampire spawn, the youngest of their ilk, are barely separated from their mortal selves. They are driven by their thirst for blood and their master’s orders. Few spawn survive long enough to become true vampires.`,
		},
		{
			id: 'undead-2nd-info-3',
			name: 'Mournlings',
			description: `
Powered by sorrow and rage, these hulking amalgamations of dirt or flesh defend the homes of their creators, brutally attacking intruders while sobbing uncontrollably. Mournlings express far more emotion than many other undead guardians, for their makers imbued them with sadness and loss. Though their druidic creators are long-dead, some original mournlings still defend forests, meadows, and other natural places they were built to protect.

Outside of battle, mournlings patrol for interlopers in a trance-like state. When an unknown creature creates a disturbance or approaches them, the mournling unleashes a primal cry that conveys the very essence of suffering, then bursts into violence. They continue to sob and moan even as they viciously beat their enemies to a pulp.`,
		},
		{
			id: 'undead-3rd-info-1',
			name: 'Koptourok',
			description:
				'Koptourok is a Variac name that roughly translates to “dead tourist.” It’s given to those who meet their end suffocating in the depths, whether they drowned in a subterranean lake, wandered into a cave of trapped gas, or were crushed by a rockslide. These rasping, slouching undead rise from their grave desperate for the one thing they’ve lost: breath.',
		},
		{
			id: 'undead-3rd-info-2',
			name: 'Haunt',
			description:
				'Born of mass death events that leave multiple souls stranded in agony together, a haunt is a violent collective chaos driven by a hatred for the living. A haunt lays claim to the scene of their death, which their grief forbids them from leaving so as to strand them in the mundane world. None of the souls within a haunt are necessarily malicious, and all would individually prefer to move on and find peace. But their accumulated grief drives them to tremendous anger that inspires sadistic acts of violence against the living.',
		},
		{
			id: 'undead-3rd-info-3',
			name: 'Waxen',
			description:
				'When a corpse is preserved improperly, its body fat can become a substance known as corpse wax. Necromancers sometimes harvest and use this foul substance to enhance their undead minions, transforming them into waxens. These awkward, loping creatures cake their foes in foul-smelling wax to slow and sicken them. Waxen minions are often set ablaze by unscrupulous masters, sacrificing them to the flames but making them significantly more dangerous in the process.',
		},
		{
			id: 'undead-3rd-info-4',
			name: 'Vampires and Vampire Lords',
			description:
				'By drinking the blood of a true vampire, a vampire spawn can transcend their feral beginnings and rise to become a true vampire themself. The path of transformation is daunting, and vampires who end up starved for blood often band together for mutual protection. But with patience and cunning, a vampire can grow old and powerful enough to control vast amounts of territory and countless vassals. The term “vampire lord” thus refers not to a specific age or threshold of physical prowess, but rather to status and influence. A vampire who refers to themself as a lord invites challenges to their title and is prepared to crush all those who seek to end their reign.',
		},
		{
			id: 'undead-4th-info-1',
			name: 'Bonecage',
			description:
				'The weakness of many undead minions means that necromancers at war often find themselves shy of corpses when their forces lose more numbers than they slay. The bonecage offers a horrific solution to this problem. This hulking creature made from giants’ bones is structured like a massive cage that they can cram dead and near-dead corpses into. Trawling the scenes of great battles, the bonecage fills themself with the fallen, stealing them away for ill purposes. Of course, when no mass casualty site presents itself, the bonecage is more than capable of making corpses of their own.',
		},
		{
			id: 'undead-4th-info-2',
			name: 'Lithgekh',
			description:
				'Every mage who lives long enough eventually contends with the fact that their knowledge will one day leave the world. For those who can’t stomach this idea, seeking the immortality of the lich often becomes an irresistible temptation. But many of those who try and fail to achieve lichdom become lithgekh—a word in the First Language meaning “lich corpse.” Having failed to create a proper soul vessel, a lithgekh suffers an eternal hunger for magic to sustain themself. Liches will sometimes trick or tempt mortal mages into pursuing lichdom, only to sabotage them and create a lithgekh under the lich’s control. These servants are prized by liches for their ability to disrupt enemy magic and empower their own.',
		},
		{
			id: 'undead-1st-info-5',
			name: 'Undead Languages',
			description: ' Most undead speak (or at least understand) the languages they knew in life.',
		},
	],
	malice: [
		ElementFactory.FeatureFactory.createMalice({
			id: 'undead-1st-malice-1',
			name: 'Ravenous Horde',
			cost: 2,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'At the end of this round, each hero not already adjacent to one or more undead is beset by two **rotting zombies** who burst up from the ground to appear in adjacent unoccupied spaces. Each zombie is winded. This feature can’t be used two rounds in a row.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'undead-1st-malice-2',
			name: 'Paranormal Fling',
			cost: 3,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'Up to three unattended objects on the encounter map rise to float 1 square off the ground. Each object is then pulled 5 squares toward the nearest enemy within 3 squares of the object.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'undead-1st-malice-3',
			name: 'The Grasping, The Hungry',
			cost: 5,
			icon: StatBlockIcon.Area,
			sections: [
				'Ravenous and rotting undead arms burst forth from 9 connected squares of a vertical or horizontal surface. Any creature who ends their turn adjacent to an affected square makes an **Agility test**.',
				ElementFactory.createPowerRoll({
					characteristic: Characteristic.Agility,
					tier1: '5 damage; restrained (save ends)',
					tier2: '5 damage; restrained (EoT)',
					tier3: '5 damage',
				}),
				'While restrained this way, a creature takes 1d6 damage at the start of each of their turns.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'undead-1st-malice-4',
			name: 'Dread March',
			cost: 7,
			icon: StatBlockIcon.Trait,
			sections: [
				'Up to four undead in the encounter move up to their speed and can make a free strike. The number of undead affected increases by 1 for each additional Malice spent on this feature. If an undead is reduced to 0 Stamina during this dread march, they don’t die until the march is resolved.',
			],
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'undead-2nd-malice-5',
			name: 'Blood Hunger',
			cost: 5,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'One undead acting this turn uses a signature ability against a creature who is bleeding. As a free triggered action, each undead within 5 squares of the first undead moves up to their speed and can make a free strike against the same target.',
			],
			echelon: 2,
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'undead-3rd-malice-6',
			name: 'Necrotic Rupture',
			cost: 5,
			icon: StatBlockIcon.SpecialArea,
			sections: [
				'Until the end of the round, whenever an undead is reduced to 0 Stamina, they deal 8 corruption damage to each enemy within 3 squares of them.',
			],
			echelon: 3,
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'undead-4th-malice-7',
			name: 'Death Tax',
			cost: 7,
			icon: StatBlockIcon.AuraBurst,
			sections: [
				'The undead attempts to rend the vitality of their foes. Each enemy within 5 squares of the undead makes a **Might test**.',
				ElementFactory.createPowerRoll({
					characteristic: Characteristic.Might,
					tier1: '10 corruption damage; the target loses 2 Recoveries',
					tier2: '8 corruption damage; the target loses 1 Recovery',
					tier3: '5 corruption damage',
				}),
				'A target who has fewer Recoveries than they would lose is also weakened (save ends).',
				'**Special**: This ability can’t be used by a minion.',
			],
			echelon: 4,
		}),
	],
	monsters: [
		ElementFactory.createMonster({
			id: 'undead-1st-1',
			name: 'Crawling Claw',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'T'),
			speed: ElementFactory.createSpeed(6, 'climb'),
			stamina: 4,
			stability: 0,
			freeStrikeDamage: 1,
			withCaptain: '+2 bonus to speed',
			characteristics: ElementFactory.createCharacteristics(0, 2, -5, -1, -1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-1-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-1-feature-2',
						name: 'Fingernails',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 damage',
									tier2: '2 damage',
									tier3: '3 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The crawling claw shifts up to a number of squares equal to the damage dealt.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-1-feature-3',
					name: 'Disorganized',
					description: 'Allies can’t flank with the crawling claw.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-2',
			name: 'Decrepit Skeleton',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Artillery),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 3,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: 'Gain an edge on strikes',
			characteristics: ElementFactory.createCharacteristics(0, 2, -2, 0, -2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-2-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-2-feature-2',
						name: 'Bone Bow',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage',
									tier2: '4 damage',
									tier3: '5 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The decrepit skeleton chooses one other target within distance, who takes 1 damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-2-feature-3',
					name: 'Bonetrops',
					description:
						'When the decrepit skeleton is reduced to 0 Stamina, their space is difficult terrain. The first time any enemy enters this space, they take 1 damage and the effect ends.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-3',
			name: 'Rotting Zombie',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Brute),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 5,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: 'Strike damage +1',
			characteristics: ElementFactory.createCharacteristics(2, -2, -5, -2, -3),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-3-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-3-feature-2',
						name: 'Rotting Fist',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 damage',
									tier2: '4 damage',
									tier3: '5 damage; M<2 prone if size 1, or slowed (save ends) otherwise',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-3-feature-3',
					name: 'Death Grasp',
					description:
						'When the rotting zombie is reduced to 0 Stamina, their space is difficult terrain. The first time any enemy who has m<2] enters this space, they are slowed (save ends) and the effect ends.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-4',
			name: 'Shade',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Ambusher),
			keywords: ['Undead'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'fly, hover'),
			stamina: 4,
			stability: 1,
			freeStrikeDamage: 2,
			withCaptain: '+2 bonus to speed',
			characteristics: ElementFactory.createCharacteristics(-5, 1, 0, 0, +2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-4-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-4-feature-2',
						name: 'Life Drain',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 corruption damage',
									tier2: '4 corruption damage',
									tier3: '5 corruption damage; the target must move up to their speed and can’t end that movement closer to any shade',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-4-feature-3',
					name: 'Shadow Phasing',
					description:
						'The shade can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. The first time in a round that the shade moves through a creature, that creature takes 1 corruption damage. The shade doesn’t take damage from being force moved into objects.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-5',
			name: 'Ghoul',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Harrier),
			keywords: ['Undead'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7),
			stamina: 15,
			stability: 0,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(0, 2, -2, 0, -1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-5-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-5-feature-2',
						name: 'Razor Claws',
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
									bonus: 2,
									tier1: '3 damage',
									tier2: '4 damage',
									tier3: '5 damage; M<2 bleeding (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-5-feature-3',
						name: 'Leap',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The ghoul jumps up to 3 squares. If they land on a size 1 enemy, that enemy is knocked prone and the ghoul can make a free strike against them.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-5-feature-4',
					name: 'Hunger',
					description:
						'When the ghoul uses the Charge main action, they gain a +2 bonus to speed until the end of their turn.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-5-feature-5',
					name: 'Arise',
					description:
						'The first time the ghoul is reduced to 0 Stamina by damage that isn’t fire damage or holy damage and their body isn’t destroyed, they instead have 1 Stamina and fall prone.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-6',
			name: 'Skeleton',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Artillery),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 10,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(0, 2, 1, 0, -1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-6-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-6-feature-2',
						name: 'Bone Shards',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Melee,
							AbilityKeyword.Ranged,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [
							ElementFactory.DistanceFactory.createMelee(),
							ElementFactory.DistanceFactory.createRanged(10),
						],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 damage',
									tier2: '6 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the start of the skeleton’s next turn, the target takes 2 damage the first time they willingly move on their turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-6-feature-3',
						name: 'Bone Spur',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 2,
						keywords: [AbilityKeyword.Area, AbilityKeyword.Weapon],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '1 damage; M<0 bleeding (save ends)',
									tier2: '2 damage; M<1 bleeding (save ends)',
									tier3: '3 damage; M<2 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText('Each target takes a bane on their next strike.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-6-feature-4',
					name: 'Arise',
					description:
						'The first time the skeleton is reduced to 0 Stamina by damage that isn’t fire damage or holy damage and their body isn’t destroyed, they instead have 1 Stamina and fall prone.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-7',
			name: 'Specter',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Hexer),
			keywords: ['Undead'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'fly, hover'),
			stamina: 10,
			stability: 1,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(-5, 1, 0, 0, 2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-7-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-7-feature-2',
						name: 'Decaying Touch',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '3 corruption damage; P<0 weakened (save ends)',
									tier2: '4 corruption damage; P<1 weakened (save ends)',
									tier3: '5 corruption damage; P<2 weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The potency increases by 1. Any living creature who dies from this damage rises at the start of the next round in the target’s space as a **specter** under the Director’s control.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-7-feature-3',
						name: 'Hidden Movement',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The specter turns invisible, moves up to their speed, and is visible again.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-7-feature-4',
					name: 'Corruptive Phasing',
					description:
						'The specter can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. The first time in a round that the specter moves through a creature, that creature takes 2 corruption damage. The specter doesn’t take damage from being force moved into objects.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-8',
			name: 'Umbral Stalker',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Ambusher),
			keywords: ['Undead'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 15,
			stability: 1,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(0, 2, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-8-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-8-feature-2',
						name: 'Chilling Grasp',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 cold damage',
									tier2: '6 cold damage; the stalker can shift 1 square',
									tier3: '7 cold damage; the stalker shifts up to 2 squares',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-8-feature-3',
						name: 'Freezing Dark',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({
								type: AbilityDistanceType.Cube,
								value: 3,
								within: 1,
							}),
						],
						cost: 3,
						target: 'Each enemy in the cube',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 cold damage',
									tier2: '3 cold damage',
									tier3: '4 cold damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Until the end of the stalker’s next turn, the area provides concealment, and blocks line of effect for enemies.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-8-feature-4',
						name: 'Shadow Jump',
						type: ElementFactory.AbilityTypeFactory.createManeuver({ free: true }),
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText(
								'The umbral stalker teleports to an unoccupied space in an area of concealment within 10 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-8-feature-5',
					name: 'Corruptive Phasing',
					description:
						'The umbral stalker can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. The first time in a round that the umbral stalker moves through a creature, that creature takes 2 corruption damage. The umbral stalker doesn’t take damage from being force moved into objects.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-9',
			name: 'Soulwight',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Hexer),
			keywords: ['Undead'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 10,
			stability: 0,
			freeStrikeDamage: 1,
			characteristics: ElementFactory.createCharacteristics(2, 1, 0, 0, 1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-9-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-9-feature-2',
						name: 'Soulstealer Longsword',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '3 corruption damage',
									tier2: '4 corruption damage; M<1 slowed (save ends)',
									tier3: '5 corruption damage; M<2 slowed and weakened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The target appears to rapidly age each time they take damage from this ability. The target regains their former appearance when the soulwight is destroyed.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-9-feature-3',
						name: 'Stolen Vitality',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(3)],
						target: 'One ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target regains 10 Stamina. The soulwight can’t use this maneuver again until after they strike a creature with their Soulstealer Longsword.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-9-feature-4',
					name: 'Arise',
					description:
						'The first time the soulwight is reduced to 0 Stamina by damage that isn’t fire damage or holy damage and their body isn’t destroyed, they instead have 1 Stamina and fall prone.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-10',
			name: 'Zombie',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Brute),
			keywords: ['Undead'],
			encounterValue: 3,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 20,
			stability: 1,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(2, 1, -5, -2, 1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-10-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 1,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-10-feature-2',
						name: 'Clobber and Clutch',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '4 damage',
									tier2: '6 damage',
									tier3: '7 damage; grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A target who starts their turn grabbed by the zombie takes 2 corruption damage. A creature who takes 5 or more corruption damage this way becomes insatiably hungry for flesh, and must complete the Find a Cure downtime project in Draw Steel: Heroes to end this effect.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-10-feature-3',
						name: 'Zombie Dust',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						cost: 3,
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The zombie falls prone, expelling a wave of rot and dust.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: '2 corruption damage',
									tier2: '3 corruption damage; M<1 weakened (save ends)',
									tier3: '4 corruption damage; M<2 dazed (save ends)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-10-feature-4',
					name: 'Endless Knight',
					description:
						'The first time the zombie is reduced to 0 Stamina by damage that isn’t fire damage or holy damage and their body isn’t destroyed, they instead have 10 Stamina and fall prone. ',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-1st-11',
			name: 'Ghost',
			level: 1,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Undead'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(6, 'fly, hover'),
			stamina: 80,
			stability: 1,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(-2, 2, 0, 0, 3),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-1st-11-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 3,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 3,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-11-feature-2',
						name: 'Heat Death',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'Two creatures',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '7 cold damage; P<1 slowed (save ends)',
									tier2: '10 cold damage; P<2 slowed (save ends)',
									tier3: '13 cold damage; P<3 slowed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The next strike made against the target gains an edge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-11-feature-3',
						name: 'Haunt',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createRanged(8)],
						target: 'Self or one ally with a Phasing trait',
						sections: [
							ElementFactory.createAbilitySectionText('The target shifts up to their speed.'),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								effect: 'The ghost chooses one additional target.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-11-feature-4',
						name: 'Shriek',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature within distance targets the ghost with a strike.'
						),
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'The triggering creature',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The ghost halves the damage from the strike and the target takes 2 sonic damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-11-feature-5',
					name: 'Phantom Flow',
					description:
						'Each undead with a Phasing trait within 10 squares of the ghost can’t be made slowed or weakened.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-11-feature-6',
						name: 'Paranormal Activity',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each size 3 or smaller object in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target rises 1 square into the air and is vertically pulled up to 5 squares toward the nearest enemy within 3 squares of the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-11-feature-7',
						name: 'Spirited Away',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 2,
									tier1: 'P<1 the target is levitated (EoT)',
									tier2: 'P<2 the target is levitated (EoT)',
									tier3: 'P<3 the target is levitated until the end of the encounter',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A levitated target floats 1 square off the ground when first affected, then rises 1 square at the end of each of their turns. If a levitated target can’t already fly, they can fly but are slowed and weakened while flying this way.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-1st-11-feature-8',
						name: 'Awful Wail',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 sonic damage',
									tier2: '5 sonic damage',
									tier3: '8 sonic damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A target who has P < 2 is reduced to 1 Stamina if they are winded after taking this damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-1st-11-feature-9',
					name: 'Corruptive Phasing',
					description:
						'The ghost can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. The first time in a round that the ghost moves through a creature, that creature takes 2 corruption damage. The ghost doesn’t take damage from being force moved into objects.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-1',
			name: 'Fleshflayed Shambler Zombie',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Brute),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 9,
			stability: 0,
			freeStrikeDamage: 3,
			withCaptain: '+2 damage bonus to strikes',
			characteristics: ElementFactory.createCharacteristics(3, -1, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-1-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-1-feature-2',
						name: 'Bone Carvers',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If this ability gains an edge or has a double edge, the target is bleeding (save ends).'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-1-feature-3',
					name: 'Fleshfused Spines',
					description:
						'Any adjacent enemy who grabs the fleshflayed shambler or uses a melee ability against them takes 2 damage.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-2',
			name: 'Ghoul Craver',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Undead'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'climb'),
			stamina: 8,
			stability: 0,
			freeStrikeDamage: 2,
			withCaptain: '+2 damage bonus to strikes',
			characteristics: ElementFactory.createCharacteristics(3, 2, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-2-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-2-feature-2',
						name: 'Taste',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						cost: 'signature',
						keywords: [
							AbilityKeyword.Charge,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '2 damage',
									tier2: '4 damage',
									tier3: '6 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'This ability has a double edge against a bleeding target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-2-feature-3',
					name: 'Ever So Hungry',
					description: 'Any enemy adjacent to three or more ghoul cravers can’t shift.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-2-feature-4',
					name: 'Hunger',
					description:
						'When the ghoul craver uses the Charge main action, they gain a +2 bonus to speed until the end of their turn.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-3',
			name: 'Hollowbone Launcher',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Artillery),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 7,
			stability: 0,
			freeStrikeDamage: 3,
			withCaptain: '+5 bonus to ranged distance',
			characteristics: ElementFactory.createCharacteristics(-2, 3, 0, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-3-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-3-feature-2',
						name: 'Hollowbone Slug',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 damage',
									tier2: '5 damage',
									tier3: '7 damage; M<3 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Each creature adjacent to the target takes 2 damage.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-3-feature-3',
					name: 'Brittle Revenge',
					description:
						'The hollowbone launcher explodes when they are reduced to 0 Stamina, dealing 2 damage to each adjacent creature.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-4',
			name: 'Flesh Mournling',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Defender),
			keywords: ['Undead'],
			encounterValue: 6,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(6),
			stamina: 35,
			stability: 2,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(3, 1, 0, 2, -1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-4-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-4-feature-2',
						name: 'Multiarm Strike',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 damage',
									tier2: '7 damage',
									tier3: '9 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The target can’t shift until the end of their next turn.'
							),
							ElementFactory.createAbilitySectionSpend({
								effect: 'This ability targets one additional target.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-4-feature-3',
						name: 'Horrid Wail',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '2 psychic damage',
									tier2: '3 psychic damage; I<2 frightened (save ends)',
									tier3: '4 psychic damage; I<3 frightened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A target who is still frightened this way at the end of the encounter can’t take a respite activity during their next respite.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-4-feature-4',
					name: 'Arise',
					description:
						'The first time the mournling is reduced to 0 Stamina by damage that isn’t fire damage or holy damage and their body isn’t destroyed, they instead have 10 Stamina and fall prone.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-4-feature-5',
					name: 'Immutable Form',
					description: 'The mournling’s shape can’t be changed by any external effect.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-5',
			name: 'Giant Zombie',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Elite, MonsterRoleType.Brute),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 24,
			size: ElementFactory.createSize(3),
			speed: ElementFactory.createSpeed(6),
			stamina: 140,
			stability: 2,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(3, -1, -2, 1, 2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-5-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-5-feature-2',
						name: 'Rotten Smash',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(3)],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '9 damage',
									tier2: '14 damage; A<2 grabbed',
									tier3: '17 damage; A<3 grabbed',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-5-feature-3',
						name: 'Knocking Heads',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The giant zombie grabs two creatures or objects, or starts their turn with two creatures or objects grabbed.'
						),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Two creatures or objects',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText(
								'The creatures or objects are smashed together using Rotten Smash, which has a double edge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-5-feature-4',
					name: 'Endless Knight',
					description:
						'The first time the giant zombie is reduced to 0 Stamina by damage that isn’t fire damage or holy damage and their body isn’t destroyed, they instead have 50 Stamina and fall prone.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-5-feature-5',
					name: 'Negative Nerves',
					description:
						'When the giant zombie is targeted by an ability that deals rolled damage, they halve the damage from a tier 1 outcome.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-6',
			name: 'Mummy',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Brute),
			keywords: ['Mummy', 'Undead'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 50,
			stability: 2,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(3, -1, 1, 3, 0),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-6-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Fire,
							modifierType: DamageModifierType.Weakness,
							value: 5,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-6-feature-2',
						name: 'Accursed Bindings',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(3)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '6 corruption damage; pull 1',
									tier2: '8 corruption damage; pull 2',
									tier3: '10 corruption damage; pull 2; M<3 restrained (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The next ability the mummy uses against the target has any potency increased by 1 for the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-6-feature-3',
						name: 'Eldritch Curse',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'One creature',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '3 corruption damage; I<1 the target is cursed (save ends)',
									tier2: '5 corruption damage; I<2 the target is cursed (save ends)',
									tier3: '7 corruption damage; I<3 the target is cursed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A cursed target is bleeding and weakened, and allies gain an edge on strikes made against them.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-6-feature-4',
						name: 'Blast of Mummy Dust',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The mummy comes within distance of a restrained creature or starts their turn within distance of one.'
						),
						keywords: [AbilityKeyword.Area],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 1 }),
						],
						target: '1 restrained target',
						cost: 1,
						sections: [ElementFactory.createAbilitySectionText('The target takes 8 poison damage.')],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-7',
			name: 'Vampire Spawn',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Harrier),
			keywords: ['Undead', 'Vampire'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'climb'),
			stamina: 30,
			stability: 0,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(2, 3, -1, 1, 2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-7-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-7-feature-2',
						name: 'Exsanguinating Bite',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 damage',
									tier2: '7 corruption damage; M<2 bleeding (save ends)',
									tier3: '9 corruption damage; M<3 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The vampire spawn regains Stamina equal to any corruption damage dealt.'
							),
							ElementFactory.createAbilitySectionSpend({
								effect: 'The target takes an additional 3 corruption damage.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-7-feature-3',
						name: 'Vampire Celerity',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The vampire spawn can shift 1 square, then move up to their speed. The next ability the vampire uses before the start of their next turn gains an edge.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-7-feature-4',
					name: 'Unslakable Bloodthirst',
					description:
						'The vampire spawn has speed 10 while any creature within 10 squares of them is bleeding. The vampire spawn must use Exsanguinating Bite against a bleeding creature on their turn if they are able to.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-8',
			name: 'Wraith',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Hexer),
			keywords: ['Undead'],
			encounterValue: 6,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(8, 'fly, hover'),
			stamina: 25,
			stability: 1,
			freeStrikeDamage: 2,
			characteristics: ElementFactory.createCharacteristics(-2, 2, 1, 1, 3),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-8-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 4,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-8-feature-2',
						name: 'Chilling Gravetouch',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [
							AbilityKeyword.Magic,
							AbilityKeyword.Melee,
							AbilityKeyword.Strike,
							AbilityKeyword.Weapon,
						],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 3,
									tier1: '5 cold damage; P<1 slowed (save ends)',
									tier2: '7 cold damage; P<2 slowed (save ends)',
									tier3: '9 cold damage; P<3 slowed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Any living creature who dies from this damage rises at the start of the next round as a **ghoul craver** under the Director’s control.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-8-feature-3',
						name: 'Hidden Movement',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The wraith turns invisible, moves up to their speed, and is visible again.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-8-feature-4',
						name: 'Stolen Vitality',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'An enemy within distance regains Stamina.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'The triggering creature',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText(
								'The target regains only half the Stamina, and the wraith regains the remaining Stamina.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-2nd-8-feature-5',
					name: 'Agonizing Phasing',
					description:
						'The wraith can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. The first time in a round that the wraith moves through a creature, that creature takes 5 corruption damage and takes a bane on their next strike. The wraith doesn’t take damage from being force moved into objects.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-2nd-9',
			name: 'Mummy Lord',
			level: 4,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Mummy', 'Undead'],
			encounterValue: 24,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(6),
			stamina: 155,
			stability: 4,
			freeStrikeDamage: 6,
			characteristics: ElementFactory.createCharacteristics(4, 0, 2, 4, 2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-2nd-9-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 6,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 6,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-9-feature-2',
						name: 'Accursed Slam',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '10 corruption damage; I<2 bleeding (save ends)',
									tier2: '14 corruption damage; I<3 bleeding (save ends)',
									tier3: '17 corruption damage; I<4 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While the target is bleeding this way, the potency of any ability used against them increases by 1 for the target.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-9-feature-3',
						name: 'Binding Curse',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(20)],
						target: 'One creature',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '7 corruption damage; I<2 frightened (save ends)',
									tier2: '12 corruption damage; I<3 frightened (save ends)',
									tier3: '16 corruption damage; I<4 frightened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'While frightened this way, a target takes 4 psychic damage whenever they use a move action.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								repeatable: true,
								effect: 'This ability targets one additional target for each 2 Malice spent.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-9-feature-4',
						name: 'Summon My Guard!',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'The mummy lord is made winded for the first time in the encounter.'
						),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Special',
						cost: 2,
						sections: [
							ElementFactory.createAbilitySectionText(
								'One **mummy** or four **ghoul cravers** appear within distance.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-9-feature-5',
						name: 'Cursed Transference',
						sections: [
							ElementFactory.createAbilitySectionText(
								'At the end of each of their turns, the mummy lord can take 10 damage to end one effect on them that can be ended by a saving throw. This damage can’t be reduced in any way.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 5,
								effect: 'The effect that is ended is transferred to another creature within 10 squares.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-9-feature-6',
						name: 'Plague of Flies',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '5 poison damage',
									tier2: '8 poison damage',
									tier3: '10 poison damage',
								})
							),
							ElementFactory.createAbilitySectionText('Each target takes a bane on their next strike.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-9-feature-7',
						name: 'Land’s Guardian',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						distance: [ElementFactory.DistanceFactory.createSelf()],
						target: 'Self',
						sections: [
							ElementFactory.createAbilitySectionText(
								'The mummy lord gains a +2 bonus to speed and can automatically burrow at full speed while moving. They can then use the Dig maneuver. The next time the mummy lord breaches the surface, each enemy within 2 squares of the mummy lord makes an **Agility test**.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: Characteristic.Agility,
									tier1: 'Prone and can’t stand (EoT)',
									tier2: 'Prone',
									tier3: 'no effect',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-2nd-9-feature-9',
						name: 'Unbound Horrors',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '5 corruption damage; I<2 frightened (save ends)',
									tier2: '8 corruption damage; I<3 frightened (save ends)',
									tier3: '10 corruption damage; I<4 frightened and restrained (save ends)',
								})
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-1',
			name: 'Blood-Starved Vampire',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Undead', 'Vampire'],
			encounterValue: 9,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(6, 'climb'),
			stamina: 12,
			stability: 0,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(4, 1, -3, 1, -3),
			withCaptain: '+3 bonus to speed',
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-1-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-1-feature-2',
						name: 'Feeding Frenzy',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '3 damage',
									tier2: '6 damage',
									tier3: '7 damage; M<4 bleeding (EoT)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If a target made bleeding this way is already bleeding, they are instead knocked prone and can’t stand until the end of their next turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-1-feature-3',
					name: 'Unslakable Bloodthirst',
					description:
						'The blood-starved vampire has speed 10 while any creature within 10 squares of them is bleeding. The vampire must use Feeding Frenzy against a bleeding creature on their turn if they are able to.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-2',
			name: 'Faded Echo Spirit',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Hexer),
			keywords: ['Undead'],
			encounterValue: 9,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5, 'fly, hover'),
			stamina: 10,
			stability: 1,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(-3, 4, -5, 1, -3),
			withCaptain: 'Gain an edge on strikes',
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-2-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-2-feature-2',
						name: 'Hollow Grasp',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '3 corruption damage',
									tier2: '6 corruption damage; P<3 weakened',
									tier3: '7 corruption damage; P<4 weakened',
								})
							),
							ElementFactory.createAbilitySectionText(
								'This weakened condition ends if an affected target ends their turn with no spirit within 5 squares of them.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-2-feature-3',
					name: 'Corruptive Phasing',
					description:
						'The spirit can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. The first time in a round that the spirit moves through a creature, that creature takes 4 corruption damage. The spirit doesn’t take damage from being force moved into objects.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-3',
			name: 'Mummy Rotwrap',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Brute),
			keywords: ['Mummy', 'Undead'],
			encounterValue: 9,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 15,
			stability: 1,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(4, -2, -2, 1, -2),
			withCaptain: '+3 bonus to melee distance',
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-3-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-3-feature-2',
						name: 'Fetid Wrappings',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '4 damage',
									tier2: '7 damage; pull 1',
									tier3: '8 damage; pull 3',
								})
							),
							ElementFactory.createAbilitySectionText(
								'Each ally gains an edge on strikes made against the target until the end of the round.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-4',
			name: 'Dirt Mournling',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Controller),
			keywords: ['Undead'],
			encounterValue: 9,
			size: ElementFactory.createSize(3),
			speed: ElementFactory.createSpeed(6, 'burrow, climb'),
			stamina: 64,
			stability: 3,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(4, 1, -2, 1, -3),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-4-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-4-feature-2',
						name: 'Mudslide',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '7 damage; M<3 grabbed',
									tier2: '10 damage; M<4 grabbed',
									tier3: '11 damage; grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A 3-cube area of ground centered on the target is difficult terrain for enemies.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-4-feature-3',
						name: 'Mourning Cry',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '3 corruption damage; I<2 frightened (save ends)',
									tier2: '6 corruption damage; I<3 frightened (save ends)',
									tier3: '7 corruption damage; I<4 frightened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A target frightened this way is frightened of all undead. This effect ends early if the mournling is destroyed.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-4-feature-4',
					name: 'Arise',
					description:
						'The first time the mournling is reduced to 0 Stamina by damage that isn’t fire damage or holy damage and their body isn’t destroyed, they instead have 15 Stamina and fall prone.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-4-feature-5',
					name: 'Immutable Form',
					description: 'The mournling’s shape can’t be changed by any external effect.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-4-feature-6',
					name: 'Rupture',
					description:
						'Whenever the mournling uses the Dig maneuver to breach the surface, they make a free strike against each adjacent enemy.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-5',
			name: 'Haunt',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Controller),
			keywords: ['Undead'],
			encounterValue: 9,
			size: ElementFactory.createSize(2),
			speed: ElementFactory.createSpeed(6, 'fly, hover'),
			stamina: 40,
			stability: 1,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(-2, 4, -1, 0, 0),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-5-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-5-feature-2',
						name: 'Lash Out',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(3)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '7 damage; slide 2',
									tier2: '10 damage; slide 3',
									tier3: '11 damage; slide 5',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the target is force moved into another creature’s space, that creature takes an additional 4 damage and the haunt slides them up to 2 squares.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-5-feature-3',
						name: 'Crushing Despair',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 3 }),
						],
						target: 'Each enemy in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '3 damage; I<2 prone',
									tier2: '6 damage; I<3 prone',
									tier3: '7 damage; I<4 prone',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A target knocked prone this way can’t use the Stand Up maneuver on themself while any haunt is within 20 squares of them.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-5-feature-4',
					name: 'Invisible Horror',
					description:
						'The haunt can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. They are invisible while moving using a move action. The haunt doesn’t take damage from being force moved into objects.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-6',
			name: 'Koptourok',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Hexer),
			keywords: ['Undead'],
			encounterValue: 9,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(5),
			stamina: 40,
			stability: 1,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(4, 2, 0, 1, -1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-6-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-6-feature-2',
						name: 'Choking Grasp',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(5)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '7 damage; M<2 grabbed',
									tier2: '10 damage; M<3 grabbed',
									tier3: '11 damage; M<4 grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A creature grabbed this way is suffocating. The koptourok can have up to two creatures grabbed at once.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-6-feature-3',
						name: 'Inhale',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: 'Pull 3; M<2 5 corruption damage',
									tier2: 'Pull 5; M<2 5 corruption damage',
									tier3: 'Pull 7; M<2 5 corruption damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'This ability gains an edge against any target grabbed by the koptourok. If one or more targets are pulled adjacent to the koptourok, the koptourok can fly until the end of the encounter.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-6-feature-4',
					name: 'Exhale',
					description:
						'The first time the koptourok is made winded by damage that isn’t fire damage or holy damage, each enemy within 3 squares of them takes 8 corruption damage. Any enemy who takes this damage and has M<3 is also weakened (save ends).',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-7',
			name: 'Waxen',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Artillery),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 9,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(4),
			stamina: 40,
			stability: 2,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(4, -2, -4, 1, -2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-7-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-7-feature-2',
						name: 'Wax Fling',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '8 damage',
									tier2: '11 damage',
									tier3: '12 damage; A<4 slowed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If a target made slowed this way is already slowed, they are instead restrained (save ends).'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-7-feature-3',
						name: 'Erupt',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 2 }),
						],
						target: 'Each enemy in the area',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionText(
								'If the waxen is ignited (see Burn Bright), they shift up to their speed before using this ability. Each target makes an **Agility test**.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: Characteristic.Agility,
									tier1: '10 damage',
									tier2: '8 damage',
									tier3: '5 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The waxen is then destroyed and the area is difficult terrain for enemies.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-7-feature-4',
					name: 'Burn Bright',
					description:
						'If the waxen takes fire damage, they ignite. While ignited, the waxen takes 4 fire damage at the start of each of their turns and their strikes deal an extra 4 fire damage.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-8',
			name: 'Vampire',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Hexer),
			keywords: ['Undead', 'Vampire'],
			encounterValue: 9,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(6, 'climb'),
			stamina: 40,
			stability: 3,
			freeStrikeDamage: 3,
			characteristics: ElementFactory.createCharacteristics(4, 2, 1, 1, 1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-8-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-8-feature-2',
						name: 'Exsanguinating Bite',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '7 damage; M<2 bleeding (save ends)',
									tier2: '10 corruption damage; M<3 5 corruption damage and bleeding (save ends)',
									tier3: '11 corruption damage; M<4 7 corruption damage and bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The vampire regains Stamina equal to any corruption damage dealt.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-8-feature-3',
						name: 'Vicious Pursuit',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 4,
									tier1: '7 damage; A<2 slowed (save ends)',
									tier2: '10 damage; A<3 slowed (save ends)',
									tier3: '117 damage; A<4 slowed (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'If the target is bleeding, the vampire shifts up to their speed before using this ability.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-8-feature-4',
						name: 'Reactive Charm',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature makes a strike against the vampire.'
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One enemy',
						cost: 2,
						sections: [
							ElementFactory.createAbilitySectionText('The target becomes the new target of the strike.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-8-feature-5',
					name: 'Unslakable Bloodthirst',
					description:
						'The vampire has speed 10 while any creature within 10 squares of them is bleeding. The vampire must make a strike against a bleeding creature on their turn if they are able to.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-3rd-9',
			name: 'Vampire Lord',
			level: 7,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Leader),
			keywords: ['Undead', 'Vampire'],
			encounterValue: 36,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(12, 'climb, hover, teleport'),
			stamina: 200,
			stability: 3,
			freeStrikeDamage: 7,
			characteristics: ElementFactory.createCharacteristics(2, 5, 1, 1, 2),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-3rd-9-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 7,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-9-feature-2',
						name: 'Crimson Embrace',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '13 corruption damage; M<3 bleeding (save ends)',
									tier2: '21 corruption damage; M<3 bleeding (save ends)',
									tier3: '24 corruption damage; M<3 bleeding (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The vampire regains Stamina equal to half the damage dealt, and can end one effect on them that can be ended by a saving throw.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 2,
								repeatable: true,
								effect: 'The vampire shifts 3 after striking the last target, and can target one additional creature for every 2 malice spent.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-9-feature-3',
						name: 'Arise, My Children',
						type: ElementFactory.AbilityTypeFactory.createManeuver(),
						keywords: [AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(10)],
						target: 'Special',
						cost: 2,
						sections: [
							ElementFactory.createAbilitySectionText(
								'Two **blood-starved vampires** appear in unoccupied spaces within distance.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-9-feature-4',
						name: 'Redirected Charm',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature makes a strike against the vampire.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(5)],
						target: 'One enemy',
						cost: 3,
						sections: [
							ElementFactory.createAbilitySectionText('The target becomes the new target of the strike.'),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-3rd-9-feature-5',
					name: 'Lord’s Bloodthirst',
					description:
						'The vampire has speed 15 and an edge on power rolls while any creature within 20 squares of them is bleeding. Any bleeding creature within 5 squares of the vampire can’t hide.',
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-9-feature-6',
						name: 'Let Us Feast! ',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(1),
						keywords: [AbilityKeyword.Ranged],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 20 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target who has P<4 is now bleeding (save ends).'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-9-feature-7',
						name: 'Red Mist Rising',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(2),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic],
						distance: [
							ElementFactory.DistanceFactory.create({ type: AbilityDistanceType.Burst, value: 5 }),
						],
						target: 'Each enemy in the area',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '2 damage; M<3 6 corruption damage',
									tier2: '7 damage; M<4 6 corruption damage',
									tier3: '10 damage; M<5 6 corruption damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The vampire turns to mist, filling the area. Until the end of the round, the vampire can’t move or be targeted by abilities, but they can use Crimson Embrace against a target in the area. The vampire reforms in an unoccupied space in the area at the end of the round.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-3rd-9-feature-8',
						name: 'Sacrifice',
						type: ElementFactory.AbilityTypeFactory.createVillainAction(3),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(20)],
						target: 'Each chosen ally',
						sections: [
							ElementFactory.createAbilitySectionText(
								'Each target is marked for sacrifice. At the end of the round, each target who isn’t dead or destroyed takes 50 corruption damage. The vampire then uses the following ability.'
							),
							ElementFactory.createAbilitySectionText(`
### Wave of Blood (area, magic)

20 burst, each enemy in the area

Each target makes a **Might test**. This ability deals an extra 5 damage for each creature killed by the Sacrifice villain action.

* **11-**: 11 corruption damage
* **12 - 16**: 8 corruption damage
* **17+**: 2 corruption damage`),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-4th-1',
			name: 'Giant Shambler Zombie',
			level: 10,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Brute),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 12,
			size: ElementFactory.createSize(3),
			speed: ElementFactory.createSpeed(4),
			stamina: 17,
			stability: 5,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(5, -3, -3, 1, -2),
			withCaptain: '+4 damage bonus to strikes',
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-4th-1-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-4th-1-feature-2',
						name: 'Rotten Kick',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '5 damage; push 2',
									tier2: '8 damage; push 4',
									tier3: '10 damage; push 6',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-4th-1-feature-3',
					name: 'Meat Shield',
					description: 'Each ally adjacent to the shambler has damage immunity 3.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-4th-2',
			name: 'Skeleton Knight',
			level: 10,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Defender),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'L'),
			speed: ElementFactory.createSpeed(5),
			stamina: 17,
			stability: 2,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(3, 5, -2, 4, -2),
			withCaptain: 'Gain an edge on strikes',
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-4th-2-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-4th-2-feature-2',
						name: 'Four Swords Swing',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '4 damage',
									tier2: '7 damage',
									tier3: '9 damage; the target can’t shift (EoT)',
								})
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-4th-2-feature-3',
					name: 'Bitter Bones',
					description:
						'If the knight is reduced to 0 Stamina, their bones collapse to fill their space with an impassable barrier. Any enemy who comes adjacent to the barrier for the first time in a round or starts their turn there takes 5 damage.',
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-4th-2-feature-4',
					name: 'More Swings',
					description: 'Whenever the knight makes a free strike, they can make two free strikes instead.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-4th-3',
			name: 'Wraith Skulker',
			level: 10,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Minion, MonsterRoleType.Harrier),
			keywords: ['Undead'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(7, 'fly, hover'),
			stamina: 15,
			stability: 1,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(-2, 3, 1, 1, 5),
			withCaptain: '+3 bonus to speed',
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-4th-3-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-4th-3-feature-2',
						name: 'Draining Rake',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee()],
						target: 'One creature or object per minion',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '4 cold damage; the wraith can shift 1 square',
									tier2: '7 cold damage; the wraith shifts up to 2 squares',
									tier3: '9 cold damage; P<5 slowed (save ends); the wraith shifts up to 3 squares',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The wraith turns invisible until the start of their next turn.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-4th-3-feature-3',
					name: 'Corruptive Phasing',
					description:
						'The wraith can move through creatures and objects at their usual speed, but can’t end their turn inside a creature or object. The first time in a round that the wraith moves through a creature, that creature takes 5 corruption damage. The wraith doesn’t take damage from being force moved into objects.',
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-4th-4',
			name: 'Bonecage',
			level: 10,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Controller),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 12,
			size: ElementFactory.createSize(3),
			speed: ElementFactory.createSpeed(6, 'climb'),
			stamina: 55,
			stability: 5,
			freeStrikeDamage: 4,
			characteristics: ElementFactory.createCharacteristics(5, -2, -2, 3, -1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-4th-4-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-4th-4-feature-2',
						name: 'Ribcage Chomp',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
						distance: [ElementFactory.DistanceFactory.createMelee(2)],
						target: 'Two creatures or objects',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '9 damage; M<4 grabbed',
									tier2: '12 damage; M<5 grabbed',
									tier3: '14 damage; grabbed',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The bonecage can have up to four size 1 targets grabbed at once. Any creature grabbed by the bonecage takes a bane on the Escape Grab maneuver, and the bonecage has damage immunity 5 against that creature’s abilities. When the bonecage is force moved, any creature or object they have grabbed moves with them.'
							),
							ElementFactory.createAbilitySectionSpend({
								value: 3,
								effect: 'While grabbed this way, a target can’t teleport or be teleported.',
							}),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-4th-4-feature-3',
						name: 'Labyrinth of Bone',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Area, AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createSpecial('Four 10 × 1 lines within 3')],
						target: 'Each enemy in the area',
						cost: 5,
						sections: [
							ElementFactory.createAbilitySectionText(
								'The bonecage can put up to two 90-degree bends in each of the lines. Each target makes an **Agility test**.'
							),
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									characteristic: Characteristic.Agility,
									tier1: '9 damage',
									tier2: '7 damage',
									tier3: '4 damage',
								})
							),
							ElementFactory.createAbilitySectionText(
								'The area is difficult terrain for enemies. The effect ends at the end of the encounter or when the bonecage uses this ability again.'
							),
						],
					}),
				}),
			],
		}),
		ElementFactory.createMonster({
			id: 'undead-4th-5',
			name: 'Lithgekh',
			level: 10,
			role: ElementFactory.createMonsterRole(MonsterOrganizationType.Horde, MonsterRoleType.Hexer),
			keywords: ['Undead', 'Soulless'],
			encounterValue: 12,
			size: ElementFactory.createSize(1, 'M'),
			speed: ElementFactory.createSpeed(6, 'fly, hover'),
			stamina: 55,
			stability: 1,
			freeStrikeDamage: 5,
			characteristics: ElementFactory.createCharacteristics(0, 1, 5, 3, -1),
			features: [
				ElementFactory.FeatureFactory.createDamageModifier({
					id: 'undead-4th-5-feature-1',
					modifiers: [
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Corruption,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
						ElementFactory.DamageModifierFactory.create({
							damageType: DamageType.Poison,
							modifierType: DamageModifierType.Immunity,
							value: 10,
						}),
					],
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-4th-5-feature-2',
						name: 'Heartstopper',
						type: ElementFactory.AbilityTypeFactory.createMain(),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged, AbilityKeyword.Strike],
						distance: [ElementFactory.DistanceFactory.createRanged(15)],
						target: 'One creature or object',
						cost: 'signature',
						sections: [
							ElementFactory.createAbilitySectionRoll(
								ElementFactory.createPowerRoll({
									bonus: 5,
									tier1: '9 corruption damage; I<3 frightened (save ends)',
									tier2: '12 corruption damage; I<4 frightened (save ends)',
									tier3: '14 corruption damage; I<5 frightened (save ends)',
								})
							),
							ElementFactory.createAbilitySectionText(
								'A creature frightened this way takes a bane on any ability that targets undead.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.createAbility({
					ability: ElementFactory.createAbility({
						id: 'undead-4th-5-feature-3',
						name: 'Mystic Battery',
						type: ElementFactory.AbilityTypeFactory.createTrigger(
							'A creature within distance uses a magic ability.',
							{ free: true }
						),
						keywords: [AbilityKeyword.Magic, AbilityKeyword.Ranged],
						distance: [ElementFactory.DistanceFactory.createRanged(20)],
						target: 'The triggering creature',
						cost: 1,
						sections: [
							ElementFactory.createAbilitySectionText(
								'Any damage dealt by or Stamina regained from the ability is halved. The lithgekh regains Stamina equal to the remaining damage dealt or Stamina gained.'
							),
						],
					}),
				}),
				ElementFactory.FeatureFactory.create({
					id: 'undead-4th-5-feature-4',
					name: 'Devour Magic',
					description: 'Each ally within 10 squares of the lithgekh gains an edge on magic abilities.',
				}),
			],
		}),
	],
	addOns: [],
};
