import { seedRoles } from './seeds/roles';
import { seedUsers } from './seeds/users';
import { seedSkills } from './seeds/skills';
import { seedJobs } from './seeds/jobs';
import { seedApplications } from './seeds/applications';
import { seedJobSkills } from './seeds/jobSkills';
import { seedQuizzes } from './seeds/quizzes';
import { seedQuizResults } from './seeds/quizResults';
import { seedMessages } from './seeds/messages';
import { seedNotifications } from './seeds/notifications';

const runSeeds = async () => {
  await seedRoles();
  await seedUsers();
  await seedSkills();
  await seedJobs();
  await seedApplications();
  await seedJobSkills();
  await seedQuizzes();
  await seedQuizResults();
  await seedMessages();
  await seedNotifications();
};

// eslint-disable-next-line no-console
runSeeds().then(() => console.log('Database seeded!'));
