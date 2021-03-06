export enum MixableType {
  BASE, PREMIX, LIQUID
}
export interface Mixable {
  type: MixableType,
  amount: number,
  strength: number,
  ratio: number,
  thinner: number,
  flavorsPercentage: number
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
  ) { }
}

export interface MixResult {
  results: MixableResult[];
  ratio: number;
  strength: number;
}
