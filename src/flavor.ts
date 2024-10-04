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

export class Flavor {
    id: string;

    createdBy: string;
    createdAt: Timestamp; // import { Timestamp } from "firebase/firestore";
    updatedAt: Timestamp | null; // import { Timestamp } from "firebase/firestore";

    status: OnlineStatus;

    name: string;
    manufacturer: string;
    percentage: number;
    ratio: number; //PG ratio
    price: number;
    amount: number;

    constructor(
        {
            id = uuid(), 
            createdBy = LOCAL_AUTHOR.uid,
            createdAt = Timestamp.now(),
            updatedAt = null,
            status = OnlineStatus.ONLINE_PRIVATE,
            name = '',
            manufacturer = '', 
            percentage = 8,
            ratio = 100,
            price = 0,
            amount = 10
        }: {
            id?: string,
            createdBy?: string;
            createdAt?: Timestamp;
            updatedAt?: Timestamp | null;
            status?: OnlineStatus, 
            name?: string, manufacturer?: string, percentage?: number, ratio?: number,
            price?: number, amount?: number
        } = {}) {
        this.id = id;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.name = name;
        this.manufacturer = manufacturer;
        this.percentage = percentage;
        this.ratio = ratio;
        this.price = price;
        this.amount = amount;
    }
}
