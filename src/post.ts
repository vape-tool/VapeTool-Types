import { Author, OnlineStatus } from "./index";

export class Post {
  uid: string;
  title: string;
  text: string;
  author: Author;
  creationTime: number;
  lastTimeModified: number;
  status: OnlineStatus;

  constructor(
    uid: string,
    title: string,
    text: string,
    author: Author,
    creationTime: number,
    lastTimeModified: number,
    status: OnlineStatus
  ) {
    this.uid = uid;
    this.title = title;
    this.text = text;
    this.author = author;
    this.creationTime = creationTime;
    this.lastTimeModified = lastTimeModified;
    this.status = status;
  }
}
