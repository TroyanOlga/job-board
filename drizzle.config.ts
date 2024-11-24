import { defineConfig } from 'drizzle-kit';
import conf from './src/config/db';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: conf,
});
