import { sql } from 'drizzle-orm';
import { db } from './connection';

const dropDb = async () => {
  await db.execute(sql`drop schema if exists public cascade`);
  await db.execute(sql`create schema public`);
  await db.execute(sql`drop schema if exists drizzle cascade`);
};

// eslint-disable-next-line no-console
dropDb().then(() => console.log('DB cleared')).catch((err) => console.log('Error dropping db', err));