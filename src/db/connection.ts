import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import conf from '../config/db';
import { Pool } from 'pg';

const pool = new Pool(conf);

export const db = drizzle(pool);
