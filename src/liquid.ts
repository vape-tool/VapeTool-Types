import { OnlineStatus, Scope } from "./cloud";
import { Timestamp } from "./firestore";
import { Author, LiquidFlavor,  LOCAL_AUTHOR, Storeable } from "./index";
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

  scope: Scope; // default null = "all"
  ownerRemoved: boolean | null;

  createdBy: string; // User ID
  createdAt: Timestamp; // import { Timestamp } from "firebase/firestore";
  updatedAt: Timestamp | null; // import { Timestamp } from "firebase/firestore";

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

    scope = null,
    ownerRemoved = null,

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

    scope?: Scope;
    ownerRemoved?: boolean | null,

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

    this.ownerRemoved = ownerRemoved;
    this.scope = scope;

    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.updatedAt = updatedAt;

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
