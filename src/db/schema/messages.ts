import { pgTable, text, timestamp, serial, integer } from 'drizzle-orm/pg-core';
import { usersTable } from './users';

export const messagesTable = pgTable('messages', {
  id: serial('id').primaryKey(),
  senderId: integer('sender_id').references(() => usersTable.id),
  receiverId: integer('receiver_id').references(() => usersTable.id),
  message: text('message').notNull(),
  sentAt: timestamp('sent_at').defaultNow().notNull(),
  readAt: timestamp('read_at'),
});
