import type { FeatureInterface } from '../../core/models/feature';
import type { PerkList } from '../../core/enums/perk-list';

export type PerkInterface<TFeature extends FeatureInterface = FeatureInterface> = TFeature & { list: PerkList };
