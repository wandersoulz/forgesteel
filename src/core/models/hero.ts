import { AncestryInterface } from '../../core/models/ancestry';
import { CareerInterface } from '../../core/models/career';
import { Characteristic } from '../../core/enums/characteristic';
import { ComplicationInterface } from '../../core/models/complication';
import { CultureInterface } from '../../core/models/culture';
import { FeatureInterface } from '../../core/models/feature';
import { HeroClassInterface } from '../../core/models/class';
import { HeroStateInterface } from '../../core/models/hero-state';

export interface AbilityCustomizationInterface {
	abilityID: string;
	name: string;
	description: string;
	notes: string;
	costModifier: number;
	distanceBonus: number;
	damageBonus: number;
	characteristic: Characteristic | null;
}

export interface HeroInterface {
	id: string;
	name: string;

	picture: string | null;
	folder: string;
	settingIDs: string[];

	ancestry: AncestryInterface | null;
	culture: CultureInterface | null;
	class: HeroClassInterface | null;
	career: CareerInterface | null;
	complication: ComplicationInterface | null;

	features: FeatureInterface[];
	state: HeroStateInterface;
	abilityCustomizations: AbilityCustomizationInterface[];
}

export type HeroEditTab = 'start' | 'ancestry' | 'culture' | 'career' | 'class' | 'complication' | 'details';
