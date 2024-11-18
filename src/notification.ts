import { Timestamp } from "./firestore";

export type NotificationType = 'like' | 'comment';

export type Notification = {
  id: string;
  type: NotificationType;
  createdBy: string;
  recipientId: string;
  postId: string;
  read: boolean;
  createdAt: Timestamp;
};