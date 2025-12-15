import { Characteristic } from '@/core/enums/characteristic';
import { DamageType } from '@/core/enums/damage-type';
import { Element } from '@/core/models/element';
import { Feature } from '@/core/models/feature';
import { MonsterRole } from '@/core/models/monster-role';
import { MonsterState } from '@/core/models/monster-state';
import { RetainerInfo } from '@/core/models/retainer';
import { Size } from '@/core/models/size';
import { Speed } from '@/core/models/speed';

export interface Monster extends Element {
	picture: string | null;
	level: number;
	role: MonsterRole;
	keywords: string[];
	encounterValue: number;
	size: Size;
	speed: Speed;
	stamina: number;
	stability: number;
	freeStrikeDamage: number;
	freeStrikeType: DamageType;
	characteristics: {
		characteristic: Characteristic;
		value: number;
	}[];
	withCaptain: string;
	features: Feature[];
	retainer: RetainerInfo | null;
	state: MonsterState;
};
