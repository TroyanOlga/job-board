import { pgTable, text, serial } from 'drizzle-orm/pg-core';

export const skillsTable = pgTable('skills', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description'),
});
