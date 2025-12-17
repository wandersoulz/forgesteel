import { AttitudeType } from '../../core/enums/attitude-type';
import { ElementInterface } from '../../core/models/element';
import { NegotiationTrait } from '../../core/enums/negotiation-trait';

export interface NegotiationInterface extends ElementInterface {
	attitude: AttitudeType;
	impression: number;
	interest: number;
	patience: number;
	motivations: { trait: NegotiationTrait; description: string }[];
	pitfalls: { trait: NegotiationTrait; description: string }[];
	languages: string[];
	outcomes: string[];
}
