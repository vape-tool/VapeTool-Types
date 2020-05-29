import { Result } from "./liquid";

export enum MixableType {
    BASE, PREMIX, LIQUID
}
export default class Mixable {
    constructor(readonly type: MixableType, readonly amount: number, readonly strength: number, readonly ratio: number, readonly thinner: number) {
    }
}

export interface MixResult {
    results: Result[]
    amount: number;
    ratio: number;
    strength: number;
}