import { Characteristic } from '../../core/enums/characteristic';
import { Collections } from '../../core/utils/collections';
import { CreatureLogic } from '../../core/logic/creature-logic';
import { ElementFactory } from '../factory/element-factory';
import { FeatureLogic } from '../../core/logic/feature-logic';
import { MonsterInterface } from '../../core/models/monster';
import { MonsterFeatureCategory } from '../../core/enums/monster-feature-category';
import { MonsterOrganizationType } from '../../core/enums/monster-organization-type';
import { MonsterRoleType } from '../../core/enums/monster-role-type';
import { Random } from '../../core/utils/random';
import { CoreUtils } from '../../core/utils/core-utils';
import { Monster } from '../impl/monster';

export class MonsterLogic {
	///////////////////////////////////////////////////////////////////////////

	static getSuggestedStats = (monster: MonsterInterface) => {
		let roleMod = 0;
		let damageMod = 0;
		let orgMod = 0;
		let staminaMod = 0;
		let characteristicMod = 0;

		switch (monster.role.type) {
			case MonsterRoleType.Ambusher:
				roleMod = 20;
				damageMod = 1;
				break;
			case MonsterRoleType.Artillery:
				roleMod = 10;
				damageMod = 1;
				break;
			case MonsterRoleType.Brute:
				roleMod = 30;
				damageMod = 1;
				break;
			case MonsterRoleType.Controller:
				roleMod = 10;
				break;
			case MonsterRoleType.Defender:
				roleMod = 30;
				break;
			case MonsterRoleType.Harrier:
				roleMod = 20;
				break;
			case MonsterRoleType.Hexer:
				roleMod = 10;
				break;
			case MonsterRoleType.Mount:
				roleMod = 20;
				break;
			case MonsterRoleType.Support:
				roleMod = 20;
				break;
		}

		switch (monster.role.organization) {
			case MonsterOrganizationType.Minion:
				staminaMod = 0.125;
				orgMod = 0.5;
				break;
			case MonsterOrganizationType.Horde:
				staminaMod = 0.5;
				orgMod = 0.5;
				break;
			case MonsterOrganizationType.Platoon:
				staminaMod = 1;
				orgMod = 1;
				break;
			case MonsterOrganizationType.Elite:
				damageMod += 1; // Add 1, because this one stacks
				staminaMod = 2;
				orgMod = 2;
				break;
			case MonsterOrganizationType.Leader:
				damageMod = 1;
				roleMod += 30;
				staminaMod = 2;
				orgMod = 2;
				characteristicMod = 1;
				break;
			case MonsterOrganizationType.Solo:
				damageMod = 2;
				roleMod += 30;
				staminaMod = 5;
				orgMod = 6;
				characteristicMod = 1;
				break;
		}

		const ev = (2 * monster.level + 4) * orgMod;
		const stamina = (10 * monster.level + roleMod) * staminaMod;

		const dmg1 = (4 + monster.level + damageMod) * 0.6;
		const dmg2 = (4 + monster.level + damageMod) * 1.1;
		const dmg3 = (4 + monster.level + damageMod) * 1.4;

		return {
			highestCharacteristic: 1 + CreatureLogic.getEchelon(monster.level) + characteristicMod,
			ev: Math.ceil(ev),
			stamina: Math.ceil(stamina),
			freeStrikeDamage: Math.ceil(dmg1),
			damage: {
				tier1: Math.ceil(dmg1),
				tier2: Math.ceil(dmg2),
				tier3: Math.ceil(dmg3),
			},
			damagePlus1: {
				tier1: Math.ceil(dmg1 * 0.8),
				tier2: Math.ceil(dmg2 * 0.8),
				tier3: Math.ceil(dmg3 * 0.8),
			},
			damagePlus2: {
				tier1: Math.ceil(dmg1 * 0.5),
				tier2: Math.ceil(dmg2 * 0.5),
				tier3: Math.ceil(dmg3 * 0.5),
			},
			damageMinus1: {
				tier1: Math.ceil(dmg1 * 1.2),
				tier2: Math.ceil(dmg2 * 1.2),
				tier3: Math.ceil(dmg3 * 1.2),
			},
		};
	};

	///////////////////////////////////////////////////////////////////////////

	static genesplice = (target: MonsterInterface, source: MonsterInterface[]) => {
		// We don't touch ID, name, or description

		target.level = Collections.draw(source.map((m) => m.level));
		target.role.type = Collections.draw(source.map((m) => m.role.type));
		target.role.organization = Collections.draw(source.map((m) => m.role.organization));
		target.encounterValue = Collections.draw(source.map((m) => m.encounterValue));
		target.size.value = Collections.draw(source.map((m) => m.size.value));
		target.size.mod = Collections.draw(source.map((m) => m.size.mod));
		target.speed.value = Collections.draw(source.map((m) => m.speed.value));
		target.speed.modes = Collections.draw(source.map((m) => m.speed.modes));
		target.stamina = Collections.draw(source.map((m) => m.stamina));
		target.stability = Collections.draw(source.map((m) => m.stability));
		target.freeStrikeDamage = Collections.draw(source.map((m) => m.freeStrikeDamage));

		if (target.role.organization === MonsterOrganizationType.Minion) {
			target.withCaptain = Collections.draw(source.map((m) => m.withCaptain).filter((v) => !!v));
		} else {
			target.withCaptain = '';
		}

		const keywordMap: { keyword: string; count: number }[] = [];
		source
			.flatMap((m) => m.keywords)
			.forEach((kw) => {
				const current = keywordMap.find((pair) => pair.keyword === kw);
				if (current) {
					current.count += 1;
				} else {
					keywordMap.push({
						keyword: kw,
						count: 1,
					});
				}
			});
		target.keywords = keywordMap
			.filter((pair) => Random.die(source.length) <= pair.count)
			.map((pair) => pair.keyword)
			.sort();

		target.characteristics = ElementFactory.createCharacteristics(
			Collections.draw(source.map((m) => new Monster(m).getCharacteristic(Characteristic.Might))),
			Collections.draw(source.map((m) => new Monster(m).getCharacteristic(Characteristic.Agility))),
			Collections.draw(source.map((m) => new Monster(m).getCharacteristic(Characteristic.Reason))),
			Collections.draw(source.map((m) => new Monster(m).getCharacteristic(Characteristic.Intuition))),
			Collections.draw(source.map((m) => new Monster(m).getCharacteristic(Characteristic.Presence)))
		);

		target.features = [];
		[
			MonsterFeatureCategory.Text,
			MonsterFeatureCategory.DamageMod,
			MonsterFeatureCategory.Signature,
			MonsterFeatureCategory.Action,
			MonsterFeatureCategory.Maneuver,
			MonsterFeatureCategory.Trigger,
			MonsterFeatureCategory.Other,
		].forEach((category) => {
			const candidates = source
				.flatMap((m) => m.features)
				.filter((f) => FeatureLogic.getFeatureCategory(f) === category);
			const count = Math.round(candidates.length / source.length);
			for (let n = 0; n < count; ++n) {
				const f = Collections.draw(candidates);
				const copy = CoreUtils.copy(f);
				copy.id = CoreUtils.guid();
				target.features.push(copy);
			}
		});
	};
}
