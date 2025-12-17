import { ElementFactory } from '../core/factory/element-factory';
import { StatBlockIcon } from '../core/enums/stat-block-icon';

export class MaliceData {
	static malice = [
		ElementFactory.FeatureFactory.createMalice({
			id: 'malice-1',
			name: 'Brutal Effectiveness',
			cost: 3,
			sections: [
				'The monster digs into the enemy’s weak spot. The next ability the monster uses with a potency has its potency increased by 1.',
			],
			icon: StatBlockIcon.Self,
		}),
		ElementFactory.FeatureFactory.createMalice({
			id: 'malice-2',
			name: 'Malicious Strike',
			cost: 5,
			repeatable: true,
			sections: [
				'The monster pours all their animosity into their attack. Their next strike deals additional damage to one target equal to their highest characteristic. The damage increases by 1 for every additional malice spent on this feature (to a maximum total of three times their highest characteristic). This feature can’t be used two rounds in a row.',
			],
			icon: StatBlockIcon.Self,
		}),
	];
}
