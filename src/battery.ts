export class Battery {
    brand: string;
    model: string;
    size: string;
    capacity: number;
    voltage: number;
    stableCurrent: number;
    maxVapeCurrent: number;
    cutOff: number;
    reviewUrl: string;

    constructor(brand: string, model: string, size: string, capacity: number, voltage: number, stableCurrent: number,
                maxVapeCurrent: number, cutOff: number, reviewUrl: string) {
        this.brand = brand;
        this.model = model;
        this.size = size;
        this.capacity = capacity;
        this.voltage = voltage;
        this.stableCurrent = stableCurrent;
        this.maxVapeCurrent = maxVapeCurrent;
        this.cutOff = cutOff;
        this.reviewUrl = reviewUrl;
    }
}

export function id(battery: Battery): string {
    return `${battery.brand}-${battery.model}-${battery.size}-${battery.capacity}`
}
