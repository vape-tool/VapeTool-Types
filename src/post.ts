import { Author, OnlineStatus } from "./index";
import { Storeable } from "./cloud";
import { Timestamp } from "./firestore";

export class DatabasePost implements Storeable {
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

export type ImageData = {
  src: string;
  alt: string;
};

export type ImagesPreview = (ImageData & {
  id: string;
})[];


export type Post = {
  id: string;
  text: string | null;
  images: ImagesPreview | null;
  parent: { id: string; username: string } | null;
  userLikes: string[];
  likeCount: number; // userLikes.length
  createdBy: string;
  createdAt: Timestamp; // import { Timestamp } from "firebase/firestore";
  updatedAt: Timestamp | null; // import { Timestamp } from "firebase/firestore";
  userReplies: number;
  status: OnlineStatus;
};
