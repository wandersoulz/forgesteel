import { PanelWidth } from '@/core/enums/panel-width';


export interface Options {
	// Hero
	shownStandardAbilities: string[];
	xpPerLevel: number;
	// Hero: Modern Sheet
	singlePage: boolean;
	separateInventoryFeatures: boolean;
	showSkillsInGroups: boolean;
	dimUnavailableAbilities: boolean;
	showSources: boolean;
	compactView: boolean;
	abilityWidth: PanelWidth;
	// Hero: Classic Sheet
	includePlayState: boolean;
	
	colorSheet: boolean;
	showPowerRollCalculation: boolean;
	sheetTextColor: 'light' | 'default' | 'dark';
	featuresInclude: 'minimal' | 'no-basic' | 'all';
	pageOrientation: 'portrait' | 'landscape';
	// Monster Builder
	similarLevel: boolean;
	similarRole: boolean;
	similarOrganization: boolean;
	similarSize: boolean;
	// Encounter
	party: string;
	// Encounter: Running
	showDefeatedCombatants: boolean;
	// Encounter / Montage Difficulty
	heroParty: string;
	heroCount: number;
	heroLevel: number;
	heroVictories: number;
	// Tactical Map
	gridSize: number;
	playerGridSize: number;
}
