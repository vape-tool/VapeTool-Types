import { Author, OnlineStatus } from "./index";

export interface Post {
  readonly uid: string;
  readonly title: string;
  readonly text: string;
  readonly author: Author;
  readonly creationTime: number;
  readonly lastTimeModified: number;
  readonly status: OnlineStatus;
}
