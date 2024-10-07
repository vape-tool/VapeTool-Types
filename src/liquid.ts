import { Timestamp } from "./firestore";
import { Author, LiquidFlavor,  LOCAL_AUTHOR, OnlineStatus, Storeable } from "./index";
import uuid from "./uuid";

export interface DatabaseLiquid extends Storeable {
  uid: string;
  author: Author;
  creationTime: number | object;
  lastTimeModified: number | object;
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
  flavors: LiquidFlavor[];
}

export class Liquid {
  id: string;
  name: string;
  description: string;

  createdBy: string; // User ID
  createdAt: Timestamp; // import { Timestamp } from "firebase/firestore";
  updatedAt: Timestamp | null; // import { Timestamp } from "firebase/firestore";

  status: OnlineStatus;

  baseStrength: number;
  baseRatio: number; //PG ratio
  thinner: number;
  targetStrength: number;
  targetRatio: number;
  amount: number;
  rating: number;
  flavors: LiquidFlavor[];

  constructor({
    id = uuid(),
    name = "",
    description = "",
    createdBy = LOCAL_AUTHOR.uid,
    createdAt = Timestamp.now(),
    updatedAt = null,
    status = OnlineStatus.ONLINE_PRIVATE,

    baseStrength = 36,
    baseRatio = 50,
    thinner = 0,
    targetStrength = 6,
    targetRatio = 50,
    amount = 10,
    rating = 50,
    flavors = []
  }: {
    id?: string;
    name?: string;
    description?: string;

    createdBy?: string;
    createdAt?: Timestamp;
    updatedAt?: Timestamp | null;

    status?: OnlineStatus;

    baseStrength?: number;
    baseRatio?: number; //PG ratio
    thinner?: number;
    targetStrength?: number;
    targetRatio?: number;
    amount?: number;
    rating?: number;
    flavors?: LiquidFlavor[];
  } = {}) {
    this.id = id;
    this.name = name;
    this.description = description;

    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.updatedAt = updatedAt;

    this.status = status;
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
    readonly ml: number,
    readonly drips: number,
    readonly price: number,
    readonly weight: number
  ) { }
}
