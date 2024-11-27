import { pgTable, text, timestamp, serial, integer } from 'drizzle-orm/pg-core';
import { usersTable } from './users';

export const jobsTable = pgTable('jobs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  companyName: text('company_name').notNull(),
  location: text('location'),
  salaryRange: text('salary_range'),
  skillsRequired: text('skills_required').array().notNull(), // Using PostgreSQL arrays for simplicity
  postedBy: integer('posted_by').references(() => usersTable.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
