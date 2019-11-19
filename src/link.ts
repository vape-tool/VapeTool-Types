import { Author, OnlineStatus } from "./index";
import { Storeable } from "./cloud";

export class Link implements Storeable {
  constructor(
    readonly uid: string,
    readonly title: string,
    readonly url: string,
    readonly author: Author,
    readonly creationTime: number | Object,
    readonly lastTimeModified: number | Object,
    readonly status: OnlineStatus,
    readonly reports?: number
  ) {}
}
