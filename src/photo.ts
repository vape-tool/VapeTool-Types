import { Author, Storeable, OnlineStatus } from "./cloud";

export class Photo implements Storeable {
  constructor(
    readonly uid: string,
    readonly author: Author,
    readonly description: string,
    readonly status: OnlineStatus,
    readonly timestamp: any,
    readonly lastTimeModified: number | Object,
    readonly creationTime: number | Object,
    readonly width?: number,
    readonly height?: number,
    readonly linkedCoilUid?: string,
    readonly reports?: number
  ) {}
}
