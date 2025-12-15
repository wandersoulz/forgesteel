import type { Feature } from '@/core/models/feature';
import type { PerkList } from '@/core/enums/perk-list';

export type Perk<TFeature extends Feature = Feature> = TFeature & { list: PerkList };
