import uuid from "./uuid";
import {
  Author,
  LOCAL_AUTHOR,
  Storeable,
  Wire,
  WireType
} from "./index";
import { Timestamp } from "./firestore";
import { OnlineStatus } from "./cloud";

export interface DatabaseCoil extends Storeable {
  uid: string;
  name: string;
  description: string;
  author: Author;
  creationTime: number | object;
  lastTimeModified: number | object;
  status: OnlineStatus;
  type: WireType;
  setup: number;
  wraps: number;
  resistance: number;
  legsLength: number;
  innerDiameter: number;
  pitch: number;
  heightDiameter: number;
  widthDiameter: number;
  totalLength: number;
  cores: Wire[];
  outers: Wire[];
}


export class Coil {
  id: string;
  name: string;
  description: string;

  scope?: "private"; // default undefined = "all"
  ownerRemoved?: boolean;

  createdBy: string;
  createdAt: Timestamp; // import { Timestamp } from "firebase/firestore";
  updatedAt: Timestamp | null; // import { Timestamp } from "firebase/firestore";

  type: WireType;
  setup: number;
  wraps: number;
  resistance: number;
  legsLength: number;
  innerDiameter: number;
  pitch: number;
  heightDiameter: number;
  widthDiameter: number;
  totalLength: number;
  cores: Wire[];
  outers: Wire[];

  constructor({
    id = uuid(),
    name = "",
    description = "",
    
    scope = undefined,
    ownerRemoved = undefined,
    
    createdBy = LOCAL_AUTHOR.uid,
    createdAt = Timestamp.now(),
    updatedAt = null,
    
    type = WireType.NORMAL,
    setup = 1,
    wraps = 5.0,
    resistance = 0.554,
    legsLength = 15.0,
    innerDiameter = 3.0,
    pitch = 0.0,
    heightDiameter = 0.0,
    widthDiameter = 0.0,
    totalLength = 0.0,
    cores = [],
    outers = []
  }: {
    id?: string;
    name?: string;
    description?: string;

    scope?: "private";
    ownerRemoved?: boolean;

    createdBy?: string;
    createdAt?: Timestamp;
    updatedAt?: Timestamp | null;

    type?: WireType;
    setup?: number;
    wraps?: number;
    resistance?: number;
    legsLength?: number;
    innerDiameter?: number;
    pitch?: number;
    heightDiameter?: number;
    widthDiameter?: number;
    totalLength?: number;
    cores?: Wire[];
    outers?: Wire[];
  } = {}) {
    this.id = id;

    this.name = name;
    this.description = description;
        
    this.ownerRemoved = ownerRemoved;
    this.scope = scope;

    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.setup = setup;
    this.wraps = wraps;
    this.resistance = resistance;
    this.legsLength = legsLength;
    this.type = type;
    this.cores = cores;
    this.outers = outers;
    this.innerDiameter = innerDiameter;
    this.pitch = pitch;
    this.heightDiameter = heightDiameter;
    this.widthDiameter = widthDiameter;
    this.totalLength = totalLength;
  }
}

export class Properties {
  current: number;
  power: number;
  heat: number;
  surface: number;
  sweetSpotLow: number;
  sweetSpotHigh: number;
  totalLength: number;
  totalWidth: number;
  totalHeight: number;

  constructor(
    current: number,
    power: number,
    heat: number,
    surface: number,
    sweetSpotLow: number,
    sweetSpotHigh: number,
    totalLength: number,
    totalWidth: number,
    totalHeight: number
  ) {
    this.current = current;
    this.power = power;
    this.heat = heat;
    this.surface = surface;
    this.sweetSpotLow = sweetSpotLow;
    this.sweetSpotHigh = sweetSpotHigh;
    this.totalLength = totalLength;
    this.totalHeight = totalHeight;
    this.totalWidth = totalWidth;
  }
}
