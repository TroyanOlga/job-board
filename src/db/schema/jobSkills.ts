import { pgTable, serial, integer } from 'drizzle-orm/pg-core';
import { jobsTable } from './jobs';
import { skillsTable } from './skills';

export const jobSkillsTable = pgTable('job_skills', {
  id: serial('id').primaryKey(),
  jobId: integer('job_id').references(() => jobsTable.id),
  skillId: integer('skill_id').references(() => skillsTable.id),
});
