import { db } from '../connection';
import { skillsTable } from '../schema/skills';

export const seedSkills = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding skills table...');

  const skills = [
    { id: '1', name: 'JavaScript' },
    { id: '2', name: 'TypeScript' },
    { id: '3', name: 'React' },
    { id: '4', name: 'Node.js' },
  ];
  try {
    await db.insert(skillsTable).values(skills);

    // eslint-disable-next-line no-console
    console.log('Skills seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding skills table:', error);
  }

};
