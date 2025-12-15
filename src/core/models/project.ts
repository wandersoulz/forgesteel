import { Characteristic } from '@/core/enums/characteristic';
import { Element } from '@/core/models/element';

export interface ProjectProgress {
	prerequisites: boolean;
	source: boolean;
	followerID: string | null;
	points: number;
}

export interface Project extends Element {
	itemPrerequisites: string;
	source: string;
	characteristic: Characteristic[];
	goal: number;
	isCustom: boolean;
	progress: ProjectProgress | null;
}
