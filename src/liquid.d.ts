import {Author, Flavor, OnlineStatus, Storeable} from "./index";

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
    flavors: Flavor[]
}

export class Result {
    name: string;
    percentage: number;
    ml: number;
    drips: number;
    price: number;
    weight: number;
}
