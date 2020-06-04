import { Author, Flavor, LOCAL_AUTHOR, OnlineStatus, Storeable } from "./index";
import uuid from "./uuid";

export class Liquid implements Storeable {
  uid: string;
  author: Author;
  creationTime: number | Object;
  lastTimeModified: number | Object;
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
    uid = uuid(),
    author = LOCAL_AUTHOR,
    creationTime = Date.now(),
    lastTimeModified = Date.now(),
    status = OnlineStatus.ONLINE_PRIVATE,
    name = "",
    description = "",
    baseStrength = 36,
    baseRatio = 50,
    thinner = 0,
    targetStrength = 6,
    targetRatio = 50,
    amount = 10,
    rating = 50,
    flavors = [],
  }: {
    uid?: string;
    author?: Author;
    creationTime?: number | Object;
    lastTimeModified?: number | Object;
    status?: OnlineStatus;
    name?: string;
    description?: string;
    baseStrength?: number;
    baseRatio?: number;
    thinner?: number;
    targetStrength?: number;
    targetRatio?: number;
    amount?: number;
    rating?: number;
    flavors?: Flavor[];
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
  constructor(
    readonly name: string,
    readonly percentage: number,
    readonly amount: number,
    readonly drips: number,
    readonly price: number,
    readonly weight: number
  ) {}
}
