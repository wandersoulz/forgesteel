import { Characteristic } from '../../core/enums/characteristic';
import { DamageType } from '../../core/enums/damage-type';
import { ElementInterface } from '../../core/models/element';
import { FeatureInterface } from '../../core/models/feature';
import { MonsterRoleInterface } from '../../core/models/monster-role';
import { MonsterStateInterface } from '../../core/models/monster-state';
import { RetainerInfoInterface } from '../../core/models/retainer';
import { SizeInterface } from '../../core/models/size';
import { SpeedInterface } from '../../core/models/speed';

export interface MonsterInterface extends ElementInterface {
	picture: string | null;
	level: number;
	role: MonsterRoleInterface;
	keywords: string[];
	encounterValue: number;
	size: SizeInterface;
	speed: SpeedInterface;
	stamina: number;
	stability: number;
	freeStrikeDamage: number;
	freeStrikeType: DamageType;
	characteristics: {
		characteristic: Characteristic;
		value: number;
	}[];
	withCaptain: string;
	features: FeatureInterface[];
	retainer: RetainerInfoInterface | null;
	state: MonsterStateInterface;
}
