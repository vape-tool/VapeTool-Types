import { Author, OnlineStatus } from "./index";

export class Post {
  constructor(
    readonly uid: string,
    readonly title: string,
    readonly text: string,
    readonly author: Author,
    readonly creationTime: number,
    readonly lastTimeModified: number,
    readonly status: OnlineStatus
  ) {}
}
