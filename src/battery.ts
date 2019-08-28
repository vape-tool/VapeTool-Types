export class Battery {
    brand: string;
    model: string;
    size: string;
    chemistry: string;
    capacity: number;
    voltage: number;
    stableCurrent: number;
    maxVapingCurrent: number;
    cutOff: number;
    reviewUrl: string;
    imageWidth: number;
    imageHeight: number;
    affiliate?: Map<string, string>; // Provider name -> link

    constructor(brand: string, model: string, size: string, chemistry: string, capacity: number, voltage: number, stableCurrent: number,
                maxVapingCurrent: number, cutOff: number, reviewUrl: string, imageWidth: number, imageHeight: number, affiliate?: Map<string, string>) {
        this.brand = brand;
        this.model = model;
        this.size = size;
        this.chemistry = chemistry;
        this.capacity = capacity;
        this.voltage = voltage;
        this.stableCurrent = stableCurrent;
        this.maxVapingCurrent = maxVapingCurrent;
        this.cutOff = cutOff;
        this.reviewUrl = reviewUrl;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.affiliate = affiliate;
    }
}

export function id(battery: Battery): string {
    return `${battery.brand}_${battery.model}_${battery.chemistry}_${battery.size}_${battery.capacity}`.replace(new RegExp('[^A-Za-z0-9_]+'), '_')
}
