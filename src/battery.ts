export class Battery {
    brand: string;
    model: string;
    size: string;
    chemistry: string;
    capacity: number;
    voltage: number;
    stableCurrent: number;
    maxVapeCurrent: number;
    cutOff: number;
    reviewUrl: string;
    imageWidth: number;
    imageHeight: number;

    constructor(brand: string, model: string, size: string, chemistry: string, capacity: number, voltage: number, stableCurrent: number,
                maxVapeCurrent: number, cutOff: number, reviewUrl: string, imageWidth: number, imageHeight: number) {
        this.brand = brand;
        this.model = model;
        this.size = size;
        this.chemistry = chemistry;
        this.capacity = capacity;
        this.voltage = voltage;
        this.stableCurrent = stableCurrent;
        this.maxVapeCurrent = maxVapeCurrent;
        this.cutOff = cutOff;
        this.reviewUrl = reviewUrl;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
    }
}

export function id(battery: Battery): string {
    return `${battery.brand}-${battery.model}-${battery.chemistry}-${battery.size}-${battery.capacity}`.replace(new RegExp('[^A-Za-z0-9_]+'), '_')
}
