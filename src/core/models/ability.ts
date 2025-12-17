import { AbilityDistanceType } from '../../core/enums/abiity-distance-type';
import { AbilityUsage } from '../../core/enums/ability-usage';
import { ElementInterface } from '../../core/models/element';
import { PowerRollInterface } from '../../core/models/power-roll';

export interface AbilityTypeInterface {
	usage: AbilityUsage;
	free: boolean;
	trigger: string;
	time: string;
	qualifiers: string[];
	freeStrike: boolean;
	order?: number;
}

export interface AbilityDistanceInterface {
	type: AbilityDistanceType;
	value: number;
	value2: number;
	within: number;
	special: string;
	qualifier: string;
}

export interface AbilitySectionTextInterface {
	type: 'text';
	text: string;
}

export interface AbilitySectionFieldInterface {
	type: 'field';
	name: string;
	value: number;
	repeatable: boolean;
	effect: string;
}

export interface AbilitySectionRollInterface {
	type: 'roll';
	roll: PowerRollInterface;
}

export interface AbilitySectionPackageInterface {
	type: 'package';
	tag: string;
}

export interface AbilityInterface extends ElementInterface {
	type: AbilityTypeInterface;
	keywords: string[];
	distance: AbilityDistanceInterface[];
	target: string;
	cost: number | 'signature';
	repeatable: boolean;
	minLevel: number;
	sections: (
		| AbilitySectionTextInterface
		| AbilitySectionFieldInterface
		| AbilitySectionRollInterface
		| AbilitySectionPackageInterface
	)[];
}
