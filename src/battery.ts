export type Battery = {
  id: string,
  brand: string,
  model: string,
  size: string,
  chemistry: string | null,
  ratedCapacity: number,
  testedCapacity: number,
  voltage: number | null,
  ratedStableCurrent: number,
  stableCurrent: number,
  maxVapingCurrent: number,
  dcInternalResistance: number | null,
  cutOff: number | null,
  reviewUrl: string,
  imageUrl: string,
  imageWidth: number,
  imageHeight: number
}

export function batteryId(battery: Battery): string {
  return `${battery.brand.toUpperCase()}_${battery.model.toUpperCase()}_${battery.size}_${battery.ratedCapacity}`.replace(
    new RegExp("[^A-Za-z0-9]+", "g"),
    "_"
  );
}