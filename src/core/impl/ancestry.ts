import { FeatureLogic } from '../logic/feature-logic';
import { AncestryInterface, CultureInterface, FeatureInterface } from '../models';

export class Ancestry implements AncestryInterface {
	features: FeatureInterface[];
	ancestryPoints: number;
	culture?: CultureInterface | undefined;
	id: string;
	name: string;
	description: string;

	constructor(ancestry: AncestryInterface) {
		this.id = ancestry.id;
		this.name = ancestry.name;
		this.description = ancestry.description;
		this.features = ancestry.features;
		this.ancestryPoints = ancestry.ancestryPoints;
		this.culture = this.culture;
	}

	getFeatures(heroLevel: number) {
		const features: { feature: FeatureInterface; source: string }[] = [];

		features.push(...this.features.map((f) => ({ feature: f, source: this.name })));

		return FeatureLogic.simplifyFeatures(features, heroLevel);
	}
}
