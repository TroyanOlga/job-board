import { db } from '../db';
import { usersTable } from '../db/schema';

async function seedUsers() {
  // eslint-disable-next-line no-console
  console.log('Seeding users table...');

  const users = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 22, email: 'charlie@example.com' },
    { name: 'Diana', age: 28, email: 'diana@example.com' },
  ];

  try {
    await db.insert(usersTable).values(users);

    // eslint-disable-next-line no-console
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding users table:', error);
  }
}

seedUsers().catch((error) => {
  console.error('Failed to seed database:', error);
});
