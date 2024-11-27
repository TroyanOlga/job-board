import { pgTable, text, timestamp, serial, integer } from 'drizzle-orm/pg-core';
import { rolesTable } from './roles';

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  roleId: integer('role_id').references(() => rolesTable.id),
  resumeUrl: text('resume_url'),
  profilePicture: text('profile_picture'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
