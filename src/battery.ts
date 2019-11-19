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
    readonly affiliate: Map<string, string> | null // Provider name -> link
  ) {}
}

export function id(battery: Battery): string {
  return `${battery.brand}_${battery.model}_${battery.chemistry}_${battery.size}_${battery.capacity}`.replace(
    new RegExp("[^A-Za-z0-9_]+"),
    "_"
  );
}
