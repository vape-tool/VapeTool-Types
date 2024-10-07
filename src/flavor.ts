import uuid from './uuid';
import {Author, LOCAL_AUTHOR, OnlineStatus, Storeable} from "./index";
import { Timestamp } from './firestore';


export interface DatabaseFlavor extends Storeable {
    uid: string;
    author: Author;

    creationTime: number;
    lastTimeModified: number;

    status: OnlineStatus;

    name: string;
    manufacturer: string;
    percentage: number;
    ratio: number; //PG ratio
    price: number;
    amount: number;
  }

export class FlavorTemplate {
    id: string;

    createdBy: string;
    createdAt: Timestamp; // import { Timestamp } from "firebase/firestore";
    updatedAt: Timestamp | null; // import { Timestamp } from "firebase/firestore";

    status: OnlineStatus;

    name: string;
    manufacturer: string;
    ratio: number; //PG ratio
    price: number;

    constructor(
        {
            id = uuid(), 
            createdBy = LOCAL_AUTHOR.uid,
            createdAt = Timestamp.now(),
            updatedAt = null,
            status = OnlineStatus.ONLINE_PRIVATE,
            name = '',
            manufacturer = '', 
            ratio = 100,
            price = 0,
        }: {
            id?: string,
            createdBy?: string;
            createdAt?: Timestamp;
            updatedAt?: Timestamp | null;
            status?: OnlineStatus, 
            name?: string, manufacturer?: string,
            ratio?: number,
            price?: number
        } = {}) {
        this.id = id;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.name = name;
        this.manufacturer = manufacturer;
        this.ratio = ratio;
        this.price = price;
    }
}


export class LiquidFlavor {
    dbId: string | null;
    name: string;
    manufacturer: string;
    percentage: number;
    ratio: number; // PG ratio
    price: number;

    constructor(flavor: FlavorTemplate, percentage: number);
    constructor(name: string, percentage: number, manufacturer: string, ratio: number, price: number);

    constructor(
        flavorOrName: FlavorTemplate | string,
        percentage: number,
        manufacturer?: string,
        ratio?: number,
        price?: number
    ) {
        if (typeof flavorOrName === "string") {
            // Constructor for manual creation
            this.dbId = null;
            this.name = flavorOrName;
            this.percentage = percentage;
            this.manufacturer = manufacturer!;
            this.ratio = ratio!;
            this.price = price!;
        } else {
            // Constructor from FlavorTemplate
            const flavor: FlavorTemplate = flavorOrName;
            this.dbId = flavor.id;
            this.name = flavor.name;
            this.manufacturer = flavor.manufacturer;
            this.percentage = percentage;
            this.ratio = flavor.ratio;
            this.price = flavor.price;
        }
    }
}