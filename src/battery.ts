export type CompanyName = string;
export type AffiliationLink = string;

export class Battery {
  constructor(
    readonly brand: string,
    readonly model: string,
    readonly size: string,
    readonly chemistry: string,
    readonly capacity: number,
    readonly voltage: number,
    readonly stableCurrent: number,
    readonly maxVapingCurrent: number,
    readonly cutOff: number,
    readonly reviewUrl: string,
    readonly imageWidth: number,
    readonly imageHeight: number,
    readonly affiliate: Map<CompanyName, AffiliationLink> | null
  ) { }

  static id(battery: Battery): string {
    return `${battery.brand}_${battery.model}_${battery.chemistry}_${battery.size}_${battery.capacity}`.replace(
      new RegExp("[^A-Za-z0-9_]+"),
      "_"
    );
  }
}
