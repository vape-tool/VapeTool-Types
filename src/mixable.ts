export enum MixableType {
    BASE, PREMIX, LIQUID
}
export default class Mixable {
    constructor(readonly type: MixableType, readonly amount: number, readonly strength: number, readonly ratio: number, readonly thinner: number) {
    }
}

export class MixableResult {
  constructor(
    readonly name: string,
    readonly type: MixableType,
    readonly percentage: number,
    readonly amount: number,
    readonly drops: number,
    readonly price: number,
    readonly weight: number
  ) {}
}

export interface MixResult {
    results: MixableResult[];
    ratio: number;
    strength: number;
}
