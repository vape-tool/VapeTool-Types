import {Author} from "./cloud";

export class Photo {
    uid: string;
    author: Author;
    description: string;
    status: OnlineContentStatus;
    timestamp: any;
    width: number;
    height: number;
    linkedCoilUid?: string;
    reports: number;
    lastTimeModified: number;
    creationTime: number;

    constructor(uid: string, author: Author, description: string, status: OnlineContentStatus,
                timestamp: any, width: number, height: number, linkedCoilUid: string, reports: number,
                lastTimeModified: number, creationTime: number) {
        this.uid = uid;
        this.author = author;
        this.description = description;
        this.status = status;
        this.timestamp = timestamp;
        this.width = width;
        this.height = height;
        this.linkedCoilUid = linkedCoilUid;
        this.reports = reports;
        this.lastTimeModified = lastTimeModified;
        this.creationTime = creationTime;
    }
}

export enum OnlineContentStatus {
    ONLINE_PRIVATE = 0,
    ONLINE_PENDING = 5,
    ONLINE_PUBLIC = 10,
}
