import uuid from './uuid';
import {Author, LOCAL_AUTHOR, OnlineStatus, Storeable} from "./index";

export default class Flavor implements Storeable {
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

    constructor(
        {
            uid = uuid(), author = LOCAL_AUTHOR, creationTime = Date.now(), lastTimeModified = Date.now(),
            status = OnlineStatus.ONLINE_PRIVATE, name = '', manufacturer = '', percentage = 8, ratio = 100,
            price = 0, amount = 10
        }: {
            uid?: string, author?: Author, creationTime?: number, lastTimeModified?: number,
            status?: OnlineStatus, name?: string, manufacturer?: string, percentage?: number, ratio?: number,
            price?: number, amount?: number
        } = {}) {
        this.uid = uid;
        this.author = author;
        this.creationTime = creationTime;
        this.lastTimeModified = lastTimeModified;
        this.status = status;
        this.name = name;
        this.manufacturer = manufacturer;
        this.percentage = percentage;
        this.ratio = ratio;
        this.price = price;
        this.amount = amount;
    }
}
