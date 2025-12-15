import { Element } from '@/core/models/element';
import { Feature } from '@/core/models/feature';
import { Size } from '@/core/models/size';
import { TerrainRole } from '@/core/models/terrain';

export interface Fixture extends Element {
	role: TerrainRole;
	baseStamina: number;
	size: Size;
	featuresByLevel: { level: number, features: Feature[] }[]
}
