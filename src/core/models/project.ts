import { Characteristic } from '../../core/enums/characteristic';
import { ElementInterface } from '../../core/models/element';

export interface ProjectProgressInterface {
	prerequisites: boolean;
	source: boolean;
	followerID: string | null;
	points: number;
}

export interface ProjectInterface extends ElementInterface {
	itemPrerequisites: string;
	source: string;
	characteristic: Characteristic[];
	goal: number;
	isCustom: boolean;
	progress: ProjectProgressInterface | null;
}
