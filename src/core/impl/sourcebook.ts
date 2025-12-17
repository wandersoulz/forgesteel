import { SourcebookInterface, SourcebookElementKindInterface } from '../models/sourcebook';
import { AbilityInterface } from '../models/ability';
import { AdventureInterface } from '../models/adventure';
import { AncestryInterface } from '../models/ancestry';
import { CareerInterface } from '../models/career';
import { Collections } from '../utils/collections';
import { ComplicationInterface } from '../models/complication';
import { CultureInterface } from '../models/culture';
import { DomainInterface } from '../models/domain';
import { ElementInterface } from '../models/element';
import { EncounterInterface } from '../models/encounter';
import { FeatureInterface } from '../models/feature';
import { FeatureType } from '../enums/feature-type';
import { HeroClassInterface } from '../models/class';
import { ImbuementInterface } from '../models/imbuement';
import { ItemInterface } from '../models/item';
import { KitInterface } from '../models/kit';
import { LanguageInterface } from '../models/language';
import { MonsterGroupInterface } from '../models/monster-group';
import { MontageInterface } from '../models/montage';
import { NegotiationInterface } from '../models/negotiation';
import { PerkInterface } from '../models/perk';
import { ProjectInterface } from '../models/project';
import { Random } from '../utils/random';
import { SkillInterface } from '../models/skill';
import { SkillList } from '../enums/skill-list';
import { SubClassInterface } from '../models/subclass';
import { TitleInterface } from '../models/title';
import { Monster } from '../impl/monster';

type SourcebookLoader = () => Promise<{ [key: string]: SourcebookInterface }>;
type SourcebookRegistry = Record<string, { bookContents?: SourcebookInterface; loader: SourcebookLoader }>;

export class ActiveSourcebooks {
	private static instance?: ActiveSourcebooks;

	private registry: SourcebookRegistry = {
		core: { loader: () => import('../../data/sourcebooks/official/core') },
		orden: { loader: () => import('../../data/sourcebooks/official/orden') },
		community: { loader: () => import('../../data/sourcebooks/community/community') },
		'magazine-blacksmith': { loader: () => import('../../data/sourcebooks/third-party/magazine-blacksmith') },
		'magazine-ratcatcher': { loader: () => import('../../data/sourcebooks/third-party/magazine-ratcatcher') },
		triglav: { loader: () => import('../../data/sourcebooks/third-party/triglav') },
	};

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		return new ActiveSourcebooks();
	}

	async getSourcebooks(excludedBooks?: string[]): Promise<SourcebookInterface[]> {
		const promises = Object.keys(this.registry)
			.filter((id) => !excludedBooks || !excludedBooks.find((bookId) => id == bookId))
			.map(async (id) => {
				const module = await this.registry[id].loader();
				this.registry[id].bookContents = Object.values(module)[0];
				return this.registry[id].bookContents;
			});

		return await Promise.all(promises);
	}

	getLoadedSourcebooks(): SourcebookInterface[] {
		return Object.values(this.registry)
			.map((regVal) => regVal.bookContents)
			.filter((bookContents) => bookContents !== undefined);
	}

	getElements(sourcebookId: string): { element: ElementInterface; type: SourcebookElementKindInterface }[] {
		const sourcebook = this.registry[sourcebookId].bookContents;
		if (!sourcebook) return [];
		return [
			...sourcebook.adventures.map((x) => ({ element: x, type: 'adventure' as SourcebookElementKindInterface })),
			...sourcebook.ancestries.map((x) => ({ element: x, type: 'ancestry' as SourcebookElementKindInterface })),
			...sourcebook.careers.map((x) => ({ element: x, type: 'career' as SourcebookElementKindInterface })),
			...sourcebook.classes.map((x) => ({ element: x, type: 'class' as SourcebookElementKindInterface })),
			...sourcebook.complications.map((x) => ({
				element: x,
				type: 'complication' as SourcebookElementKindInterface,
			})),
			...sourcebook.cultures.map((x) => ({ element: x, type: 'culture' as SourcebookElementKindInterface })),
			...sourcebook.domains.map((x) => ({ element: x, type: 'domain' as SourcebookElementKindInterface })),
			...sourcebook.encounters.map((x) => ({ element: x, type: 'encounter' as SourcebookElementKindInterface })),
			...sourcebook.imbuements.map((x) => ({ element: x, type: 'imbuement' as SourcebookElementKindInterface })),
			...sourcebook.items.map((x) => ({ element: x, type: 'item' as SourcebookElementKindInterface })),
			...sourcebook.kits.map((x) => ({ element: x, type: 'kit' as SourcebookElementKindInterface })),
			...sourcebook.monsterGroups.map((x) => ({
				element: x,
				type: 'monster-group' as SourcebookElementKindInterface,
			})),
			...sourcebook.montages.map((x) => ({ element: x, type: 'montage' as SourcebookElementKindInterface })),
			...sourcebook.negotiations.map((x) => ({
				element: x,
				type: 'negotiation' as SourcebookElementKindInterface,
			})),
			...sourcebook.perks.map((x) => ({ element: x, type: 'perk' as SourcebookElementKindInterface })),
			...sourcebook.projects.map((x) => ({ element: x, type: 'project' as SourcebookElementKindInterface })),
			...sourcebook.subclasses.map((x) => ({ element: x, type: 'subclass' as SourcebookElementKindInterface })),
			...sourcebook.titles.map((x) => ({ element: x, type: 'title' as SourcebookElementKindInterface })),
		];
	}

	getExampleContent = (sourcebookId: string) => {
		const sourcebook = this.registry[sourcebookId].bookContents;
		if (!sourcebook) return [];
		const elements = this.getElements(sourcebookId);

		const rng = Random.getSeededRNG(sourcebook.name);
		const shuffled = Collections.shuffle(elements, rng);
		const samples = shuffled.slice(0, 3);

		return Collections.sort(samples, (s) => s.element.name);
	};

	getElement(elementID: string) {
		const elements = Object.keys(this.registry)
			.flatMap((sbId) => this.getElements(sbId))
			.map((e) => e.element);
		return elements.find((e) => e.id === elementID) || null;
	}

	///////////////////////////////////////////////////////////////////////////

	getElementSourcebook(elementId: string) {
		const sourcebooks = Object.values(this.registry)
			.map((regVal) => regVal.bookContents)
			.filter((bookContents) => bookContents !== undefined);
		return sourcebooks.find((s) => this.getElements(s.id).find((elm) => elm.element.id == elementId));
	}

	///////////////////////////////////////////////////////////////////////////

	getAdventures = () => {
		const list: AdventureInterface[] = [];

		Object.values(this.registry)
			.map((regVal) => regVal.bookContents)
			.filter((sb) => sb != undefined)
			.forEach((sourcebook) => {
				list.push(...sourcebook.adventures);
			});

		return Collections.sort(list, (item) => item.name);
	};

	getAncestries() {
		const list: AncestryInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.ancestries);
		});

		return Collections.sort(list, (item) => item.name);
	}

	getCareers = () => {
		const list: CareerInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.careers);
		});

		return Collections.sort(list, (item) => item.name);
	};

	getClasses() {
		const list: HeroClassInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.classes);
		});

		return Collections.sort(list, (item) => item.name);
	}

	getComplications() {
		const list: ComplicationInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.complications);
		});

		return Collections.sort(list, (item) => item.name);
	}

	getCultures(includeFromAncestries: boolean) {
		const list: CultureInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.cultures);

			if (includeFromAncestries) {
				list.push(...sourcebook.ancestries.map((a) => a.culture).filter((c) => !!c));
			}
		});

		return Collections.sort(list, (item) => item.name);
	}

	getDomains() {
		const list: DomainInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.domains);
		});

		return Collections.sort(list, (item) => item.name);
	}

	getEncounters() {
		const list: EncounterInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.encounters);
		});

		return Collections.sort(list, (item) => item.name);
	}

	getImbuements() {
		const list: ImbuementInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.imbuements);
		});

		return Collections.sort(list, (item) => item.name);
	}

	getItems() {
		const list: ItemInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.items);
		});

		return Collections.sort(list, (item) => item.name);
	}

	getKits = () => {
		const list: KitInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.kits);
		});

		return Collections.sort(list, (item) => item.name);
	};

	getMonsterGroups = () => {
		const list: MonsterGroupInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.monsterGroups);
		});

		return Collections.sort(list, (item) => item.name);
	};

	getMonsters = () => {
		const list: Monster[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.monsterGroups.flatMap((g) => g.monsters.map((monster) => new Monster(monster))));
		});

		return Collections.sort(list, (item) => item.name);
	};

	getMontages = () => {
		const list: MontageInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.montages);
		});

		return Collections.sort(list, (item) => item.name);
	};

	getNegotiations = () => {
		const list: NegotiationInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.negotiations);
		});

		return Collections.sort(list, (item) => item.name);
	};

	getPerks = () => {
		const list: PerkInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.perks);
		});

		return Collections.sort(list, (item) => item.name);
	};

	getProjects = (includeFromImbuements: boolean, includeFromItems: boolean) => {
		const list: ProjectInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.projects);

			if (includeFromImbuements) {
				list.push(...sourcebook.imbuements.map((i) => i.crafting).filter((p) => !!p));
			}

			if (includeFromItems) {
				list.push(...sourcebook.items.map((i) => i.crafting).filter((p) => !!p));
			}
		});

		return Collections.sort(list, (item) => item.name);
	};

	getSubclasses = (includeFromClasses: boolean) => {
		const list: SubClassInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.subclasses);

			if (includeFromClasses) {
				list.push(...sourcebook.classes.flatMap((c) => c.subclasses));
			}
		});

		return Collections.sort(list, (item) => item.name);
	};

	getTitles = () => {
		const list: TitleInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.titles);
		});

		return Collections.sort(list, (item) => item.name);
	};

	///////////////////////////////////////////////////////////////////////////

	getSkills = () => {
		const list: SkillInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.skills);
		});

		const distinct = Collections.distinct(list, (item) => item.name);
		return Collections.sort(distinct, (item) => item.name);
	};

	getLanguages = () => {
		const list: LanguageInterface[] = [];
		const sourcebooks = this.getLoadedSourcebooks();
		sourcebooks.forEach((sourcebook) => {
			list.push(...sourcebook.languages);
		});

		const distinct = Collections.distinct(list, (item) => item.name);
		return Collections.sort(distinct, (item) => item.name);
	};

	///////////////////////////////////////////////////////////////////////////

	getAbilitiesFromClass = (
		heroClass: HeroClassInterface,
		classAbilities: boolean,
		selectedSubclassAbilities: boolean,
		unselectedSubclassAbilities: boolean,
		classLevels: boolean,
		selectedSubclassLevels: boolean,
		unselectedSubclassLevels: boolean
	) => {
		const abilities: AbilityInterface[] = [];

		const addFeature = (feature: FeatureInterface) => {
			switch (feature.type) {
				case FeatureType.Ability:
					abilities.push(feature.data.ability);
					break;
				case FeatureType.Choice:
					feature.data.options.map((o) => o.feature).forEach(addFeature);
					break;
				case FeatureType.Multiple:
					feature.data.features.forEach(addFeature);
					break;
			}
		};

		if (classAbilities) {
			abilities.push(...heroClass.abilities);
		}

		if (selectedSubclassAbilities) {
			abilities.push(...heroClass.subclasses.filter((sc) => sc.selected).flatMap((sc) => sc.abilities));
		}

		if (unselectedSubclassAbilities) {
			abilities.push(...heroClass.subclasses.filter((sc) => !sc.selected).flatMap((sc) => sc.abilities));
		}

		if (classLevels) {
			heroClass.featuresByLevel.forEach((lvl) => lvl.features.forEach(addFeature));
		}

		if (selectedSubclassLevels) {
			heroClass.subclasses
				.filter((sc) => sc.selected)
				.flatMap((sc) => sc.featuresByLevel)
				.forEach((lvl) => lvl.features.forEach(addFeature));
		}

		if (unselectedSubclassLevels) {
			heroClass.subclasses
				.filter((sc) => !sc.selected)
				.flatMap((sc) => sc.featuresByLevel)
				.forEach((lvl) => lvl.features.forEach(addFeature));
		}

		return abilities;
	};

	///////////////////////////////////////////////////////////////////////////

	getLanguage = (languageName: string) => {
		const languages = this.getLanguages();

		const lang = languages.find((l) => l.name === languageName);
		return lang || null;
	};

	getSkill = (skillName: string) => {
		const skills = this.getSkills();
		const skill = skills.find((s) => s.name === skillName);
		return skill || null;
	};

	getSkillsFromList = (list: SkillList) => {
		const skills = this.getSkills().filter((s) => s.list === list);
		return Collections.sort(skills, (skill) => skill.name);
	};

	///////////////////////////////////////////////////////////////////////////

	getMonster = (monsterID: string) => {
		const sourcebooks = this.getLoadedSourcebooks();
		const monsters = sourcebooks.flatMap((s) => s.monsterGroups).flatMap((mg) => mg.monsters);
		return monsters.find((m) => m.id === monsterID) || null;
	};

	getMonsterGroup = (monsterID: string) => {
		const sourcebooks = this.getLoadedSourcebooks();
		return (
			sourcebooks
				.flatMap((s) => s.monsterGroups)
				.find((mg) => {
					const ids = mg.monsters.map((m) => m.id);
					return ids.includes(monsterID);
				}) || null
		);
	};
}
