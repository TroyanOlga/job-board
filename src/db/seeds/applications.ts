import { db } from '../connection';
import { APPLICATION_STATUS, applicationsTable } from '../schema/applications';

export const seedApplications = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding applications table...');

  const applications = [
    {
      id: '1',
      userId: '3',
      jobId: '1',
      status: APPLICATION_STATUS.APPLIED,
      appliedAt: new Date(),
    },
    {
      id: '2',
      userId: '3',
      jobId: '2',
      status: APPLICATION_STATUS.SHORTLISTED,
      appliedAt: new Date(),
    },
  ];

  try {
    await db.insert(applicationsTable).values(applications);

    // eslint-disable-next-line no-console
    console.log('Applications seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding applications table:', error);
  }

};
