import * as argon2 from 'argon2';
import { db } from '../connection';
import { usersTable } from '../schema/users';

export const seedUsers = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding users table...');

  const usersData = [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin_password',
      roleId: '1', // Matches role "admin"
      profilePicture: 'https://example.com/profile1.jpg',
    },
    {
      id: '2',
      name: 'Employer User',
      email: 'employer@example.com',
      password: 'employer_password',
      roleId: '2', // Matches role "employer"
      profilePicture: 'https://example.com/profile2.jpg',
    },
    {
      id: '3',
      name: 'Candidate User',
      email: 'candidate@example.com',
      password: 'candidate_password',
      roleId: '3', // Matches role "candidate"
      profilePicture: 'https://example.com/profile3.jpg',
    },
  ];

  const users = await Promise.all(usersData.map(async (userData) => {
    const { password, ...data } = userData;
    const passwordHash = await argon2.hash(password);
    return { ...data, passwordHash };
  }));
  try {
    await db.insert(usersTable).values(users);

    // eslint-disable-next-line no-console
    console.log('Users seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding users table:', error);
  }
};
