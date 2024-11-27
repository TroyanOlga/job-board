import { pgTable, text, jsonb, timestamp, serial, integer } from 'drizzle-orm/pg-core';
import { jobsTable } from './jobs';

export const quizzesTable = pgTable('quizzes', {
  id: serial('id').primaryKey(),
  jobId: integer('job_id').references(() => jobsTable.id),
  title: text('title').notNull(),
  questions: jsonb('questions').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
