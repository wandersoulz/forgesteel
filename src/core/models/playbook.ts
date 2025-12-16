import { Adventure } from '../../core/models/adventure';
import { Encounter } from '../../core/models/encounter';
import { Montage } from '../../core/models/montage';
import { Negotiation } from '../../core/models/negotiation';
import { TacticalMap } from '../../core/models/tactical-map';

export interface Playbook {
	adventures: Adventure[];
	encounters: Encounter[];
	montages: Montage[];
	negotiations: Negotiation[];
	tacticalMaps: TacticalMap[];
}
