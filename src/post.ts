import { Author, OnlineStatus } from "./index";
import { Storeable } from "./cloud";

export class Post implements Storeable {
  constructor(
    readonly uid: string,
    readonly title: string,
    readonly text: string,
    readonly author: Author,
    readonly creationTime: number | Object,
    readonly lastTimeModified: number | Object,
    readonly status: OnlineStatus,
    readonly reports?: number
  ) {}
}
