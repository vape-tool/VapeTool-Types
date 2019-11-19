import { Author } from "./cloud";

export class Photo {
  constructor(
    readonly uid: string,
    readonly author: Author,
    readonly description: string,
    readonly status: OnlineContentStatus,
    readonly timestamp: any,
    readonly width: number,
    readonly height: number,
    readonly linkedCoilUid: string,
    readonly reports: number,
    readonly lastTimeModified: number,
    readonly creationTime: number
  ) {}
}

export enum OnlineContentStatus {
  ONLINE_PRIVATE = 0,
  ONLINE_PENDING = 5,
  ONLINE_PUBLIC = 10
}
