import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import { db } from './db';
import { usersTable } from './db/schema';

const app = new Koa();
const router = new Router();

// Middlewares
app.use(json());
app.use(logger());

// Routes
app.use(router.routes()).use(router.allowedMethods());

// Hello world
router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello world!' };

  await next();
});

// Example route
router.get('/users', async (ctx) => {
  const allUsers = await db.select().from(usersTable);
  ctx.body = allUsers;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on http://localhost:3000');
});
