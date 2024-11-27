import { db } from '../connection';
import { jobsTable } from '../schema/jobs';

export const seedJobs = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding jobs table...');

  const jobs = [
    {
      id: '1',
      title: 'Frontend Developer',
      description: 'Build amazing UI components.',
      companyName: 'Startup LTD',
      location: 'Remote',
      salaryRange: '60000-80000',
      skillsRequired: ['JavaScript', 'TypeScript'],
      postedBy: '1'
    },
    {
      id: '2',
      title: 'Backend Developer',
      description: 'Work on server-side logic.',
      companyName: 'Big MT',
      location: 'New York, NY',
      salaryRange: '70000-90000',
      skillsRequired: ['React', 'Node.js'],
      postedBy: '2'
    },
  ];

  try {
    await db.insert(jobsTable).values(jobs);

    // eslint-disable-next-line no-console
    console.log('Jobs seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding jobs table:', error);
  }

};
