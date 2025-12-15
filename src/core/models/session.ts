import { Counter } from '@/core/models/counter';
import { Encounter } from '@/core/models/encounter';
import { Montage } from '@/core/models/montage';
import { Negotiation } from '@/core/models/negotiation';
import { TacticalMap } from '@/core/models/tactical-map';

export interface Session {
	counters: Counter[];
	encounters: Encounter[];
	montages: Montage[];
	negotiations: Negotiation[];
	tacticalMaps: TacticalMap[];
	playerViewID: string | null;
}
