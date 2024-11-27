import { integer, pgEnum, serial, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { usersTable } from './users';

export enum NOTIFICATION_TYPE {
  JOB_UPDATE = 'job_update',
  MESSAGE = 'message',
  APPLICATION_STATUS = 'application_status'
}
export const notificationType = pgEnum('notificationtype', [
  NOTIFICATION_TYPE.APPLICATION_STATUS,
  NOTIFICATION_TYPE.JOB_UPDATE,
  NOTIFICATION_TYPE.MESSAGE
]);

export const notificationsTable = pgTable('notifications', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => usersTable.id),
  type: notificationType('type').notNull(),
  content: text('content').notNull(),
  isRead: text('is_read').default('false').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
