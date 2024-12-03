import { Timestamp } from "./firestore";
import { Accent, Theme } from "./theme";

export class DatabaseUser {
  constructor(
    readonly uid: string,
    readonly display_name: string,
    readonly email: string,
    readonly permission: UserPermission,
    readonly pro: boolean,
    readonly setup: boolean,
    readonly ban: Ban | null,

    // Web only
    readonly webPro: boolean,
    readonly stripeSubscription: Date | null,
    readonly stripeCancelAtEndPeriod: boolean | null
  ) {}
}

export type MutedUser = {
  id: string;
}

export type Stats = {
  likes: string[];
  reposts: string[];
  updatedAt: Timestamp | null;
};

export type User = {
  id: string;
  username: string;
  name: string;

  email: string | null;
  permission: UserPermission;
  androidLifetimePro: boolean; // just pro in @vapetool/types
  androidSetup: boolean;
  ban: Ban | null;
  removed: "deleted" | "paused" | null; // default status = "active"

  // payments
  stripeSubscription: Timestamp | null;
  stripeCancelAtEndPeriod: boolean | null;
  webLifetimePro: boolean | null;

  bio: string | null;
  theme: Theme | null;
  accent: Accent | null;
  photoURL: string | null;
  following: string[];
  followers: string[];
  createdAt: Timestamp; // import { Timestamp } from "firebase/firestore";
  updatedAt: Timestamp | null; // import { Timestamp } from "firebase/firestore";
  totalPosts: number;
  totalPhotos: number;
  pinnedPost: string | null;
  coverPhotoURL: string | null;
};

export interface Ban {
  reason: string;
  until: number;
}

export enum UserPermission {
  ONLINE_USER = 0,
  ONLINE_PRO_BUILDER = 3,
  ONLINE_MODERATOR = 5,
  ONLINE_ADMIN = 10,
}
