import { AttitudeType } from '@/core/enums/attitude-type';
import { Element } from '@/core/models/element';
import { NegotiationTrait } from '@/core/enums/negotiation-trait';

export interface Negotiation extends Element {
	attitude: AttitudeType;
	impression: number;
	interest: number;
	patience: number;
	motivations: { trait: NegotiationTrait, description: string }[];
	pitfalls: { trait: NegotiationTrait, description: string }[];
	languages: string[];
	outcomes: string[];
}
