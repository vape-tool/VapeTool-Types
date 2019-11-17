import uuid from "./uuid";
import {
  Author,
  LOCAL_AUTHOR,
  OnlineStatus,
  Storeable,
  Wire,
  WireType
} from "./index";

export class Coil implements Storeable {
  uid: string;
  name: string;
  description: string;
  author: Author;
  creationTime: number;
  lastTimeModified: number;
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

  constructor({
    uid = uuid(),
    name = "",
    description = "",
    author = LOCAL_AUTHOR,
    creationTime = Date.now(),
    lastTimeModified = Date.now(),
    status = OnlineStatus.ONLINE_PRIVATE,
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
    uid?: string;
    name?: string;
    description?: string;
    author?: Author;
    creationTime?: number;
    lastTimeModified?: number;
    status?: OnlineStatus;
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
    this.setup = setup;
    this.name = name;
    this.description = description;
    this.wraps = wraps;
    this.resistance = resistance;
    this.legsLength = legsLength;
    this.type = type;
    this.author = author;
    this.creationTime = creationTime;
    this.lastTimeModified = lastTimeModified;
    this.status = status;
    this.uid = uid;
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

  constructor(
    current: number,
    power: number,
    heat: number,
    surface: number,
    sweetSpotLow: number,
    sweetSpotHigh: number
  ) {
    this.current = current;
    this.power = power;
    this.heat = heat;
    this.surface = surface;
    this.sweetSpotLow = sweetSpotLow;
    this.sweetSpotHigh = sweetSpotHigh;
  }
}
