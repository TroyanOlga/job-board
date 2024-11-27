import { pgTable, text, timestamp, serial, integer } from 'drizzle-orm/pg-core';
import { quizzesTable } from './quizzes';
import { usersTable } from './users';

export const quizResultsTable = pgTable('quiz_results', {
  id: serial('id').primaryKey(),
  quizId: integer('quiz_id').references(() => quizzesTable.id),
  userId: integer('user_id').references(() => usersTable.id),
  score: text('score'),
  completedAt: timestamp('completed_at').defaultNow().notNull(),
});
