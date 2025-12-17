import { Characteristic } from '../../core/enums/characteristic';
import { ElementInterface } from '../../core/models/element';
import { EncounterDifficulty } from '../../core/enums/encounter-difficulty';

export interface MontageChallengeInterface extends ElementInterface {
	characteristics: Characteristic[];
	skills: string;
	abilities: string;
	uses: number;
	successes: number;
	failures: number;
}

export interface MontageSectionInterface extends ElementInterface {
	challenges: MontageChallengeInterface[];
	twistInfo: string;
	twists: MontageChallengeInterface[];
}

export interface MontageInterface extends ElementInterface {
	difficulty: EncounterDifficulty;
	scene: string;
	sections: MontageSectionInterface[];
	outcomes: {
		totalSuccess: string;
		partialSuccess: string;
		totalFailure: string;
	};
}
