import {Author, Flavor, LOCAL_AUTHOR, OnlineStatus, Storeable} from "./index";
import uuid from "./uuid";

export class Liquid implements Storeable {
    uid: string;
    author: Author;
    creationTime: number;
    lastTimeModified: number;
    status: OnlineStatus;

    name: string;
    description: string;
    baseStrength: number;
    baseRatio: number; //PG ratio
    thinner: number;
    targetStrength: number;
    targetRatio: number;
    amount: number;
    rating: number;
    flavors: Flavor[];

    constructor({
                    uid = uuid(), author = LOCAL_AUTHOR, creationTime = Date.now(), lastTimeModified = Date.now(),
                    status = OnlineStatus.ONLINE_PRIVATE, name = '', description = '', baseStrength = 36,
                    baseRatio = 50, thinner = 0, targetStrength = 6, targetRatio = 50, amount = 10, rating = 50,
                    flavors = []
                }: {
        uid?: string, author?: Author, creationTime?: number, lastTimeModified?: number,
        status?: OnlineStatus, name?: string, description?: string, baseStrength?: number, baseRatio?: number,
        thinner?: number, targetStrength?: number, targetRatio?: number, amount?: number, rating?: number,
        flavors?: Flavor[]
    } = {}) {
        this.uid = uid;
        this.author = author;
        this.creationTime = creationTime;
        this.lastTimeModified = lastTimeModified;
        this.status = status;
        this.name = name;
        this.description = description;
        this.baseStrength = baseStrength;
        this.baseRatio = baseRatio;
        this.thinner = thinner;
        this.targetStrength = targetStrength;
        this.targetRatio = targetRatio;
        this.amount = amount;
        this.rating = rating;
        this.flavors = flavors;
    }
}

export class Result {
    name: string;
    percentage: number;
    ml: number;
    drips: number;
    price: number;
    weight: number;

    constructor({name = '', percentage = 0, ml = 0, drips = 0, price = 0, weight = 0}: {
        name?: string, percentage?: number, ml?: number, drips?: number, price?: number, weight?: number
    } = {}) {
        this.name = name;
        this.percentage = percentage;
        this.ml = ml;
        this.drips = drips;
        this.price = price;
        this.weight = weight;
    }
}
