import {Author, OnlineStatus, Storeable} from "./index";

export default class Flavor implements Storeable{
    author: Author;
    creationTime: number;
    lastTimeModified: number;
    status: OnlineStatus;
    uid: string;
    name: string;
    manufacturer: string;
    percentage: number;
    ratio: number; //PG ratio
    price: number;
    amount: number
}
