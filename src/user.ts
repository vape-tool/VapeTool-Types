export class User {
    uid: string;
    display_name: string;
    email: string;
    permission: UserPermission;
    pro: boolean;
    setup: boolean;
    ban?: Ban;

    constructor(uid: string, display_name: string, email: string, permission: UserPermission, pro: boolean, setup: boolean, ban?: Ban) {
        this.uid = uid;
        this.display_name = display_name;
        this.email = email;
        this.permission = permission;
        this.pro = pro;
        this.setup = setup;
        this.ban = ban;
    }
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
