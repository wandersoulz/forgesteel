import { AdventureInterface } from '../../core/models/adventure';
import { AncestryInterface } from '../../core/models/ancestry';
import { CareerInterface } from '../../core/models/career';
import { ComplicationInterface } from '../../core/models/complication';
import { CultureInterface } from '../../core/models/culture';
import { DomainInterface } from '../../core/models/domain';
import { ElementInterface } from '../../core/models/element';
import { EncounterInterface } from '../../core/models/encounter';
import { HeroClassInterface } from '../../core/models/class';
import { ImbuementInterface } from '../../core/models/imbuement';
import { ItemInterface } from '../../core/models/item';
import { KitInterface } from '../../core/models/kit';
import { LanguageInterface } from '../../core/models/language';
import { MonsterGroupInterface } from '../../core/models/monster-group';
import { MontageInterface } from '../../core/models/montage';
import { NegotiationInterface } from '../../core/models/negotiation';
import { PerkInterface } from '../../core/models/perk';
import { ProjectInterface } from '../../core/models/project';
import { SkillInterface } from '../../core/models/skill';
import { SourcebookType } from '../../core/enums/sourcebook-type';
import { SubClassInterface } from '../../core/models/subclass';
import { TitleInterface } from '../../core/models/title';

export interface SourcebookInterface extends ElementInterface {
	type: SourcebookType;

	adventures: AdventureInterface[];
	ancestries: AncestryInterface[];
	careers: CareerInterface[];
	classes: HeroClassInterface[];
	complications: ComplicationInterface[];
	cultures: CultureInterface[];
	domains: DomainInterface[];
	encounters: EncounterInterface[];
	imbuements: ImbuementInterface[];
	items: ItemInterface[];
	kits: KitInterface[];
	monsterGroups: MonsterGroupInterface[];
	montages: MontageInterface[];
	negotiations: NegotiationInterface[];
	perks: PerkInterface[];
	projects: ProjectInterface[];
	subclasses: SubClassInterface[];
	titles: TitleInterface[];

	skills: SkillInterface[];
	languages: LanguageInterface[];
}

export type SourcebookElementKindInterface =
	| 'adventure'
	| 'ancestry'
	| 'career'
	| 'class'
	| 'complication'
	| 'culture'
	| 'domain'
	| 'encounter'
	| 'imbuement'
	| 'item'
	| 'kit'
	| 'monster-group'
	| 'montage'
	| 'negotiation'
	| 'perk'
	| 'project'
	| 'subclass'
	| 'tactical-map'
	| 'terrain'
	| 'title';
