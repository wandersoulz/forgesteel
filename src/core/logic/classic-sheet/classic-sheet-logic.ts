import { FeatureInterface } from '../../models/feature';
import { FeatureType } from '../../enums/feature-type';

export class ClassicSheetLogic {
	// Returns true for features that are categorized as part of the Kit,
	// but which (I feel) should go with the Class features.
	static isClassFeatureInKit = (f: FeatureInterface): boolean => {
		return (
			f.name.includes('Aspect') ||
			f.name.includes('Animal Form') ||
			f.name.includes('Hybrid Form') ||
			f.name.includes('Growing Ferocity')
		);
	};

	static isFeatureDrawback = (f: FeatureInterface): boolean => {
		return f.name.includes('Drawback') || /-d$/.test(f.id);
	};

	static minimalFeatureTypes: FeatureType[] = [FeatureType.Text, FeatureType.Package, FeatureType.PackageContent];

	static nonBasicFeatureTypes: FeatureType[] = [
		FeatureType.Text,
		FeatureType.Package,
		FeatureType.PackageContent,
		FeatureType.Ability,
		FeatureType.HeroicResource,
		FeatureType.Kit,
	];

	static isNotBasicFeature(f: FeatureInterface) {
		let notBasic = this.nonBasicFeatureTypes.includes(f.type);
		if (notBasic && f.type === FeatureType.Kit) {
			notBasic = f.description.length > 0;
		} else if (notBasic && f.type === FeatureType.HeroicResource) {
			notBasic = f.data.details.length > 0;
		}

		return notBasic;
	}
}
