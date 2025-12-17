import { AncestryInterface } from '../models/ancestry';
import { Collections } from '../utils/collections';
import { ElementFactory } from '../factory/element-factory';
import { FeatureLogic } from './feature-logic';
import { FeatureType } from '../enums/feature-type';
import { MonsterOrganizationType } from '../enums/monster-organization-type';
import { NameGenerator } from '../utils/name-generator';
import { CoreUtils } from '../utils/core-utils';
import { Hero } from '../impl/hero';
import { Ancestry } from '../impl/ancestry';
import { ActiveSourcebooks } from '../impl/sourcebook';

export class HeroLogic {
	static createRandomHero = async () => {
		const activeSourcebooks = ActiveSourcebooks.getInstance();
		const heroConfig = ElementFactory.createHero();
		const hero = new Hero(heroConfig);
		hero.name = NameGenerator.generateName();
		hero.ancestry = new Ancestry(Collections.draw(activeSourcebooks.getAncestries()));
		hero.culture = Collections.draw(activeSourcebooks.getCultures(true));
		hero.career = Collections.draw(activeSourcebooks.getCareers());
		hero.class = Collections.draw(activeSourcebooks.getClasses());

		hero.class.primaryCharacteristics = Collections.draw(hero.class.primaryCharacteristicsOptions);
		const array = Collections.draw(hero.getCharacteristicArrays(hero.class.primaryCharacteristics.length));
		hero.class.characteristics = Collections.draw(
			hero.calculateCharacteristicArrays(array, hero.class.primaryCharacteristics)
		);

		while (hero.class.subclasses.filter((sc) => sc.selected).length < hero.class.subclassCount) {
			const options = hero.class.subclasses.filter((sc) => !sc.selected);
			Collections.draw(options).selected = true;
		}

		hero.getFeatures()
			.map((f) => f.feature)
			.filter((feature) => FeatureLogic.isChoice(feature))
			.forEach((feature) => {
				switch (feature.type) {
					case FeatureType.AncestryChoice: {
						const options = activeSourcebooks.getAncestries();
						feature.data.selected = Collections.draw(options);
						break;
					}
					case FeatureType.AncestryFeatureChoice: {
						const ancestries: AncestryInterface[] = [];
						if (feature.data.source.current) {
							if (hero.ancestry) {
								ancestries.push(hero.ancestry);
							}
						}
						if (feature.data.source.former) {
							ancestries.push(...hero.getFormerAncestries());
						}
						const options = ancestries
							.flatMap((a) => a.features)
							.filter((f) => f.type === FeatureType.Choice)
							.flatMap((f) => f.data.options)
							.filter((opt) => feature.data.value === opt.value)
							.filter((opt) => opt.feature.type !== FeatureType.AncestryFeatureChoice)
							.map((opt) => opt.feature);
						feature.data.selected = Collections.draw(options);
						break;
					}
					case FeatureType.Choice: {
						let remaining =
							feature.data.count === 'ancestry' ? hero.getAncestryPoints() : feature.data.count;
						while (feature.data.options.some((o: any) => o.value <= remaining)) {
							const currentIDs = feature.data.selected.map((f: any) => f.id);
							const options = feature.data.options
								.filter((o: any) => !currentIDs.includes(o.feature.id))
								.filter((o: any) => o.value <= remaining);
							const selected: any = Collections.draw(options);
							feature.data.selected.push(selected.feature);
							remaining -= selected.value;
						}
						break;
					}
					case FeatureType.ClassAbility: {
						if (hero.class) {
							while (feature.data.selectedIDs.length < feature.data.count) {
								const currentIDs = feature.data.selectedIDs;
								const options = hero.class.abilities
									.filter((a) => !currentIDs.includes(a.id))
									.filter((a) => a.cost === feature.data.cost);
								const selected = Collections.draw(options);
								feature.data.selectedIDs.push(selected.id);
							}
						}
						break;
					}
					case FeatureType.Companion: {
						const options = activeSourcebooks.getMonsterGroups().flatMap((mg) => mg.monsters);
						feature.data.selected = Collections.draw(CoreUtils.copy(options));
						break;
					}
					case FeatureType.Retainer: {
						const options = activeSourcebooks
							.getMonsterGroups()
							.flatMap((mg) => mg.monsters)
							.filter((m) => m.role.organization === MonsterOrganizationType.Retainer);
						feature.data.selected = Collections.draw(CoreUtils.copy(options));
						break;
					}
					case FeatureType.Domain: {
						while (feature.data.selected.length < feature.data.count) {
							const currentIDs = hero.getDomains().map((d) => d.id);
							const options = activeSourcebooks.getDomains().filter((a) => !currentIDs.includes(a.id));
							feature.data.selected.push(Collections.draw(options));
						}
						break;
					}
					case FeatureType.DomainFeature: {
						while (feature.data.selected.length < feature.data.count) {
							const currentIDs = hero.getFeatures().map((f) => f.feature.id);
							const options = hero
								.getDomains()
								.flatMap((d) => d.featuresByLevel)
								.filter((lvl) => lvl.level === feature.data.level)
								.flatMap((lvl) => lvl.features)
								.filter((f) => !currentIDs.includes(f.id));
							feature.data.selected.push(Collections.draw(options));
						}
						break;
					}
					case FeatureType.ItemChoice: {
						while (feature.data.selected.length < feature.data.count) {
							const currentIDs = feature.data.selected.map((d: any) => d.id);
							const options = activeSourcebooks
								.getItems()
								.filter((i) => !currentIDs.includes(i.id))
								.filter((i) => feature.data.types.length === 0 || feature.data.types.includes(i.type));
							feature.data.selected.push(Collections.draw(options));
						}
						break;
					}
					case FeatureType.Kit: {
						while (feature.data.selected.length < feature.data.count) {
							const currentIDs = hero.getKits().map((k) => k.id);
							const options = activeSourcebooks
								.getKits()
								.filter((k) => !currentIDs.includes(k.id))
								.filter((k) => feature.data.types.length === 0 || feature.data.types.includes(k.type));
							feature.data.selected.push(Collections.draw(options));
						}
						break;
					}
					case FeatureType.LanguageChoice: {
						while (feature.data.selected.length < feature.data.count) {
							const current = hero.getLanguages().map((l) => l.name);
							const options = activeSourcebooks.getLanguages().filter((l) => !current.includes(l.name));
							feature.data.selected.push(Collections.draw(options).name);
						}
						break;
					}
					case FeatureType.Perk: {
						while (feature.data.selected.length < feature.data.count) {
							const currentIDs = hero.getPerks().map((p) => p.id);
							const options = activeSourcebooks
								.getPerks()
								.filter((p) => !currentIDs.includes(p.id))
								.filter((p) => feature.data.lists.length === 0 || feature.data.lists.includes(p.list));
							feature.data.selected.push(Collections.draw(options));
						}
						break;
					}
					case FeatureType.SkillChoice: {
						while (feature.data.selected.length < feature.data.count) {
							const current = hero.getSkills().map((s) => s.name);
							const allOptions = [...feature.data.options];
							feature.data.listOptions.forEach((list: any) => {
								activeSourcebooks
									.getSkills()
									.filter((s) => s.list === list)
									.map((s) => s.name)
									.forEach((s) => allOptions.push(s));
							});
							const options = allOptions.filter((s) => !current.includes(s));
							feature.data.selected.push(Collections.draw(options));
						}
						break;
					}
					case FeatureType.TaggedFeatureChoice: {
						while (feature.data.selected.length < feature.data.count) {
							const taggedFeatures = hero
								.getFeatures()
								.map((f) => f.feature)
								.filter((f) => f.type === FeatureType.TaggedFeature)
								.filter((f) => f.data.tag === feature.data.tag);
							const currentIDs = hero
								.getFeatures()
								.map((f) => f.feature)
								.filter((f) => f.type === FeatureType.TaggedFeatureChoice)
								.flatMap((f) => f.data.selected)
								.map((f) => f.id);
							const options = taggedFeatures.filter((t) => !currentIDs.includes(t.id));
							feature.data.selected.push(Collections.draw(options));
						}
						break;
					}
					case FeatureType.TitleChoice: {
						while (feature.data.selected.length < feature.data.count) {
							const currentIDs = hero.getTitles().map((t) => t.id);
							const options = activeSourcebooks
								.getTitles()
								.filter((t) => !currentIDs.includes(t.id))
								.filter((t) => feature.data.echelon === t.echelon);
							feature.data.selected.push(Collections.draw(options));
						}
						break;
					}
				}
			});

		// Choose career inciting incident
		hero.career.incitingIncidents.selected = CoreUtils.copy(
			Collections.draw(hero.career.incitingIncidents.options)
		);

		return hero;
	};
}
