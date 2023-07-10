export class User {
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
    readonly stripeSubscription: Date | null
  ) {}
}

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
