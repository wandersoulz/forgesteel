import { Ancestry } from '../../core/models/ancestry';
import { Career } from '../../core/models/career';
import { Characteristic } from '../../core/enums/characteristic';
import { Complication } from '../../core/models/complication';
import { Culture } from '../../core/models/culture';
import { Feature } from '../../core/models/feature';
import { HeroClass } from '../../core/models/class';
import { HeroState } from '../../core/models/hero-state';

export interface AbilityCustomization {
	abilityID: string;
	name: string;
	description: string;
	notes: string;
	costModifier: number;
	distanceBonus: number;
	damageBonus: number;
	characteristic: Characteristic | null;
}

export interface Hero {
	id: string;
	name: string;

	picture: string | null;
	folder: string;
	settingIDs: string[];

	ancestry: Ancestry | null;
	culture: Culture | null;
	class: HeroClass | null;
	career: Career | null;
	complication: Complication | null;

	features: Feature[];
	state: HeroState;
	abilityCustomizations: AbilityCustomization[];
}

export type HeroEditTab = 'start' | 'ancestry' | 'culture' | 'career' | 'class' | 'complication' | 'details';
