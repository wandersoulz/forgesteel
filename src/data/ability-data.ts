import { AbilityKeyword } from '../core/enums/ability-keyword';
import { Characteristic } from '../core/enums/characteristic';
import { ElementFactory } from '../core/factory/element-factory';

export class AbilityData {
	// #region Free Strikes

	static freeStrikeMelee = ElementFactory.createAbility({
		id: 'free-melee',
		name: 'Free Strike (melee)',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createFreeStrike(),
		keywords: [AbilityKeyword.Charge, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon],
		distance: [ElementFactory.DistanceFactory.createMelee()],
		target: 'One creature or object',
		sections: [
			ElementFactory.createAbilitySectionRoll(
				ElementFactory.createPowerRoll({
					characteristic: [Characteristic.Might, Characteristic.Agility],
					tier1: '2 + M or A damage',
					tier2: '5 + M or A damage',
					tier3: '7 + M or A damage',
				})
			),
		],
	});

	static freeStrikeRanged = ElementFactory.createAbility({
		id: 'free-ranged',
		name: 'Free Strike (ranged)',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createFreeStrike(),
		keywords: [AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon],
		distance: [ElementFactory.DistanceFactory.createRanged(5)],
		target: 'One creature or object',
		sections: [
			ElementFactory.createAbilitySectionRoll(
				ElementFactory.createPowerRoll({
					characteristic: [Characteristic.Might, Characteristic.Agility],
					tier1: '2 + M or A damage',
					tier2: '4 + M or A damage',
					tier3: '6 + M or A damage',
				})
			),
		],
	});

	// #endregion

	// #region Moves

	static advance = ElementFactory.createAbility({
		id: 'advance',
		name: 'Advance',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createMove(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'When a creature takes the Advance move action, they move a number of squares up to their speed. They can break up this movement with their maneuver and main action however they wish.'
			),
		],
	});

	static disengage = ElementFactory.createAbility({
		id: 'disengage',
		name: 'Disengage',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createMove(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'When a creature takes the Disengage move action, they can shift 1 square. Certain class features, kits, and other rules allow a creature to shift more than 1 square when they disengage. A creature who does so can break up their shift with their maneuver and main action however they wish.'
			),
		],
	});

	static ride = ElementFactory.createAbility({
		id: 'ride',
		name: 'Ride',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createMove(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'A creature can take the Ride move action only while mounted on another creature. When a creature takes the Ride move action, they cause their mount to move up to the mount’s speed, taking the rider with them. Alternatively, a creature can use the Ride move action to have their mount use the Disengage move action as a free triggered action. A creature can use the Ride move action only once per round. A mounted creature can only have this move action applied to them once per round. This movement can be broken with the rider’s maneuver and main action however they wish.'
			),
		],
	});

	// #endregion

	// #region Maneuvers

	static aidAttack = ElementFactory.createAbility({
		id: 'aid-attack',
		name: 'Aid Attack',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'A creature who uses the Aid Attack maneuver chooses an enemy adjacent to them. The next ability roll an ally makes against that enemy before the start of the aiding creature’s next turn gains an edge.'
			),
		],
	});

	static catchBreath = ElementFactory.createAbility({
		id: 'catch-breath',
		name: 'Catch Breath',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		sections: [
			ElementFactory.createAbilitySectionText(`
A creature who uses the Catch Breath maneuver spends a Recovery and regains Stamina equal to their recovery value.

A creature who is dying can’t use the Catch Breath maneuver, but other creatures can help them spend Recoveries in other ways.`),
		],
	});

	static clawDirt = ElementFactory.createAbility({
		id: 'claw-dirt',
		name: 'Claw Dirt',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver({ qualifiers: ['usable if your speed is at least 2'] }),
		distance: [ElementFactory.DistanceFactory.createSelf()],
		target: 'Self',
		sections: [
			ElementFactory.createAbilitySectionRoll(
				ElementFactory.createPowerRoll({
					characteristic: Characteristic.Might,
					tier1: 'You can move 1 square into, out of, or through ground you are touching that can be burrowed through, and you are slowed and weakened (EoT).',
					tier2: 'You can use your main action this turn to move 1 square into, out of, or through ground you are touching that can be burrowed through, and you are slowed (EoT).',
					tier3: 'You can move 1 square into, out of, or through ground you are touching that can be burrowed through.',
				})
			),
		],
	});

	static escapeGrab = ElementFactory.createAbility({
		id: 'escape-grab',
		name: 'Escape Grab',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		distance: [ElementFactory.DistanceFactory.createSelf()],
		target: 'Self',
		sections: [
			ElementFactory.createAbilitySectionText(
				'A creature who is grabbed by another creature, an object, or an effect can attempt to escape by using this ability.'
			),
			ElementFactory.createAbilitySectionRoll(
				ElementFactory.createPowerRoll({
					characteristic: [Characteristic.Might, Characteristic.Agility],
					tier1: 'No effect.',
					tier2: 'You can escape the grab, but if you do, a creature who has you grabbed can make a melee free strike against you before you are no longer grabbed.',
					tier3: 'You are no longer grabbed.',
				})
			),
			ElementFactory.createAbilitySectionText(
				'You take a bane on this maneuver if your size is smaller than the size of the creature, object, or effect that has you grabbed.'
			),
		],
	});

	static goProne = ElementFactory.createAbility({
		id: 'go-prone',
		name: 'Go Prone',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver({ free: true }),
		sections: [ElementFactory.createAbilitySectionText('A creature can become prone as a free maneuver.')],
	});

	static grab = ElementFactory.createAbility({
		id: 'grab',
		name: 'Grab',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
		distance: [ElementFactory.DistanceFactory.createMelee()],
		target: 'One creature',
		sections: [
			ElementFactory.createAbilitySectionText(
				'A creature seeking to keep a foe close and locked down can attempt to grab a creature using this ability.'
			),
			ElementFactory.createAbilitySectionRoll(
				ElementFactory.createPowerRoll({
					characteristic: [Characteristic.Might],
					tier1: 'No effect',
					tier2: 'You can grab the target, but if you do, the target can make a melee free strike against you before they are grabbed.',
					tier3: 'The target is grabbed by you.',
				})
			),
			ElementFactory.createAbilitySectionText(
				'You can usually target only creatures of your size or smaller. If your Might score is 2 or higher, you can target any creature with a size equal to or less than your Might score.'
			),
			ElementFactory.createAbilitySectionText(
				'Unless otherwise indicated, a creature can grab only one creature at a time.'
			),
			ElementFactory.createAbilitySectionPackage('null-psionic-martial-arts-grab'),
		],
	});

	static hide = ElementFactory.createAbility({
		id: 'hide',
		name: 'Hide',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'Using the Hide maneuver, a creature attempts to hide from other creatures who aren’t observing them while they have cover or concealment.'
			),
		],
	});

	static knockback = ElementFactory.createAbility({
		id: 'knockback',
		name: 'Knockback',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		keywords: [AbilityKeyword.Melee, AbilityKeyword.Weapon],
		distance: [ElementFactory.DistanceFactory.createMelee()],
		target: 'One creature',
		sections: [
			ElementFactory.createAbilitySectionText(
				'A creature wanting to push an adjacent creature away from them can attempt to shove that creature using this ability.'
			),
			ElementFactory.createAbilitySectionRoll(
				ElementFactory.createPowerRoll({
					characteristic: [Characteristic.Might],
					tier1: 'Push 1',
					tier2: 'Push 2',
					tier3: 'Push 3',
				})
			),
			ElementFactory.createAbilitySectionText(
				'You can usually target only creatures of your size or smaller. If your Might score is 2 or higher, you can target any creature with a size equal to or less than your Might score.'
			),
			ElementFactory.createAbilitySectionPackage('null-psionic-martial-arts-knockback'),
		],
	});

	static makeAssistTest = ElementFactory.createAbility({
		id: 'make-assist-test',
		name: 'Make Or Assist A Test',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		sections: [
			ElementFactory.createAbilitySectionText(`
Many tests are maneuvers if made in combat. Searching a chest with a Reason test, picking a door’s lock with an Agility test, or lifting a portcullis with a Might test would all be maneuvers. Assisting a test is also a maneuver in combat.

Complex or time-consuming tests might require a main action if made in combat—or could take so long that they can’t be made during combat at all. Other tests that take no time at all, such as a Reason test to recall lore about mummies, are usually free maneuvers in combat. The Director has the final say regarding which tests can be made as maneuvers.`),
		],
	});

	static search = ElementFactory.createAbility({
		id: 'search',
		name: 'Search for Hidden Creatures',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'The Search for Hidden Creatures maneuver allows a creature to attempt to locate creatures hidden from them.'
			),
		],
	});

	static standUp = ElementFactory.createAbility({
		id: 'stand-up',
		name: 'Stand Up',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'A creature can use the Stand Up maneuver to stand up if they are prone, ending that condition. Alternatively, they can use this maneuver to make a willing adjacent prone creature stand up.'
			),
		],
	});

	static useConsumable = ElementFactory.createAbility({
		id: 'use-consumable',
		name: 'Use Consumable',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createManeuver(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'Unless otherwise noted in its description, a creature can activate a consumable treasure such as a potion with the Use Consumable maneuver. A creature can use this maneuver to administer a consumable treasure that benefits the user either to themself or to a willing adjacent creature.'
			),
		],
	});

	// #endregion

	// #region Main Actions

	static charge = ElementFactory.createAbility({
		id: 'charge',
		name: 'Charge',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createMain(),
		sections: [
			ElementFactory.createAbilitySectionText(`
When a creature takes the Charge main action, they move up to their speed in a straight line, then make a melee free strike against a target when they end their move. If the creature has an ability with the Charge keyword, they can use that ability against the target instead of a free strike.

A creature can’t move through difficult terrain or shift when they charge. They can fly or burrow as part of the Charge main action if they have that movement available to them, but they can’t climb or swim while charging unless they can automatically use that movement at full speed.`),
		],
	});

	static defend = ElementFactory.createAbility({
		id: 'defend',
		name: 'Defend',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createMain(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'When a creature takes the Defend main action, ability rolls made against them have a double bane until the start of their next turn. Additionally, you have a double edge on tests when called for to resist environmental effects or a creature’s traits or abilities. A creature gains no benefit from this action while another creature is taunted by them.'
			),
		],
	});

	static freeStrike = ElementFactory.createAbility({
		id: 'free-strike',
		name: 'Free Strike',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createMain(),
		sections: [
			ElementFactory.createAbilitySectionText('A creature can use this main action to make a free strike.'),
		],
	});

	static heal = ElementFactory.createAbility({
		id: 'heal',
		name: 'Heal',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createMain(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'A creature who uses the Heal main action employs medicine or inspiring words to make an adjacent creature feel better and stay in the fight. The target creature can spend a Recovery to regain Stamina, or can make a saving throw against one effect they are suffering that is ended by a saving throw.'
			),
		],
	});

	static swap = ElementFactory.createAbility({
		id: 'swap',
		name: 'Swap',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createMain(),
		sections: [
			ElementFactory.createAbilitySectionText(
				'You can convert your main action into a maneuver or a move action, allowing you to take two maneuvers or move actions on your turn.'
			),
		],
	});

	// #endregion

	// #region Triggers

	static opportunityAttack = ElementFactory.createAbility({
		id: 'opportunity-attack',
		name: 'Opportunity Attack',
		description: '',
		type: ElementFactory.AbilityTypeFactory.createTrigger(
			'An enemy adjacent to you willingly moves to a space that isn’t adjacent to you without shifting.',
			{ free: true }
		),
		sections: [
			ElementFactory.createAbilitySectionText(`
Whenever a creature has an enemy adjacent to them and the enemy willingly moves to a space that isn’t adjacent to the creature without shifting, the creature can make a melee free strike against the target.

If you have a bane or double bane on the power roll against the target, you can’t make an opportunity attack.`),
		],
	});

	// #endregion

	static standardAbilities = [
		// Main
		AbilityData.charge,
		AbilityData.defend,
		AbilityData.freeStrike,
		AbilityData.heal,
		AbilityData.swap,
		// Maneuver
		AbilityData.aidAttack,
		AbilityData.catchBreath,
		AbilityData.clawDirt,
		AbilityData.escapeGrab,
		AbilityData.goProne,
		AbilityData.grab,
		AbilityData.hide,
		AbilityData.knockback,
		AbilityData.makeAssistTest,
		AbilityData.search,
		AbilityData.standUp,
		AbilityData.useConsumable,
		// Move
		AbilityData.advance,
		AbilityData.disengage,
		AbilityData.ride,
		// Trigger
		AbilityData.opportunityAttack,
	];
}
