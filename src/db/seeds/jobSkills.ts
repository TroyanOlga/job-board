import { db } from '../connection';
import { jobSkillsTable } from '../schema/jobSkills';

export const seedJobSkills = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding job skills table...');

  const jobSkills = [
    { jobId: '1', skillId: '3' },
    { jobId: '2', skillId: '4' },
  ];

  try {
    await db.insert(jobSkillsTable).values(jobSkills);

    // eslint-disable-next-line no-console
    console.log('Job skills seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding job skills table:', error);
  }

};
