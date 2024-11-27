import { integer, pgEnum, serial, pgTable, timestamp } from 'drizzle-orm/pg-core';
import { usersTable } from './users';
import { jobsTable } from './jobs';

export enum APPLICATION_STATUS {
  APPLIED = 'applied',
  SHORTLISTED = 'shortlisted',
  REJECTED = 'rejected',
  HIRED = 'hired'
}
export const applicationStatus = pgEnum('applicationstatus', [
  APPLICATION_STATUS.APPLIED,
  APPLICATION_STATUS.HIRED,
  APPLICATION_STATUS.REJECTED,
  APPLICATION_STATUS.SHORTLISTED
]);

export const applicationsTable = pgTable('applications', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => usersTable.id),
  jobId: integer('job_id').references(() => jobsTable.id),
  status: applicationStatus('status').default(APPLICATION_STATUS.APPLIED).notNull(),
  appliedAt: timestamp('applied_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
