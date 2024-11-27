import { db } from '../connection';
import { rolesTable } from '../schema/roles';

export const seedRoles = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding roles table...');

  const roles = [
    { id: '1', name: 'admin', description: 'Administrator with full privileges' },
    { id: '2', name: 'employer', description: 'Employer posting jobs' },
    { id: '3', name: 'candidate', description: 'Job-seeking candidate' },
  ];
  try {
    await db.insert(rolesTable).values(roles);

    // eslint-disable-next-line no-console
    console.log('Roles seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding roles table:', error);
  }

};
