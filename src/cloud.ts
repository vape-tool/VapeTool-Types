import uuid from "./uuid";

export class Author {
  constructor(readonly uid: string, readonly displayName: string) {}
}

export const LOCAL_AUTHOR: Author = {
  uid: uuid(),
  displayName: "local"
};

export enum OnlineStatus {
  ONLINE_PRIVATE = 0,
  ONLINE_PENDING = 5,
  ONLINE_PUBLIC = 10
}

export interface Storeable {
  uid: string;
  author: Author;
  creationTime: number | object; // millis or ServerVariable.TIMESTAMP
  lastTimeModified: number | object; // millis or ServerVariable.TIMESTAMP
}

export type Scope = "private" | undefined // default undefined = "all"
export type AuthorStatus = "deleted" | undefined // default undefined = "active"

export function isCloudyValid(storeable: Storeable): boolean {
  return (
    storeable.uid.length > 0 &&
    storeable.creationTime > 0 &&
    storeable.lastTimeModified > 0
  );
}
