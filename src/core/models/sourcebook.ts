import { Adventure } from '../../core/models/adventure';
import { Ancestry } from '../../core/models/ancestry';
import { Career } from '../../core/models/career';
import { Complication } from '../../core/models/complication';
import { Culture } from '../../core/models/culture';
import { Domain } from '../../core/models/domain';
import { Element } from '../../core/models/element';
import { Encounter } from '../../core/models/encounter';
import { HeroClass } from '../../core/models/class';
import { Imbuement } from '../../core/models/imbuement';
import { Item } from '../../core/models/item';
import { Kit } from '../../core/models/kit';
import { Language } from '../../core/models/language';
import { MonsterGroup } from '../../core/models/monster-group';
import { Montage } from '../../core/models/montage';
import { Negotiation } from '../../core/models/negotiation';
import { Perk } from '../../core/models/perk';
import { Project } from '../../core/models/project';
import { Skill } from '../../core/models/skill';
import { SourcebookType } from '../../core/enums/sourcebook-type';
import { SubClass } from '../../core/models/subclass';
import { TacticalMap } from '../../core/models/tactical-map';
import { Terrain } from '../../core/models/terrain';
import { Title } from '../../core/models/title';

export interface Sourcebook extends Element {
	type: SourcebookType;

	adventures: Adventure[];
	ancestries: Ancestry[];
	careers: Career[];
	classes: HeroClass[];
	complications: Complication[];
	cultures: Culture[];
	domains: Domain[];
	encounters: Encounter[];
	imbuements: Imbuement[];
	items: Item[];
	kits: Kit[];
	monsterGroups: MonsterGroup[];
	montages: Montage[];
	negotiations: Negotiation[];
	perks: Perk[];
	projects: Project[];
	subclasses: SubClass[];
	tacticalMaps: TacticalMap[];
	terrain: Terrain[];
	titles: Title[];

	skills: Skill[];
	languages: Language[];
}

export type SourcebookElementKind = 'adventure' | 'ancestry' | 'career' | 'class' | 'complication' | 'culture' | 'domain' | 'encounter' | 'imbuement' | 'item' | 'kit' | 'monster-group' | 'montage' | 'negotiation' | 'perk' | 'project' | 'subclass' | 'tactical-map' | 'terrain' | 'title';
