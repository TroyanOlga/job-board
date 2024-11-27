import { db } from '../connection';
import { quizResultsTable } from '../schema/quizResults';

export const seedQuizResults = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding quiz results table...');

  const quizResults = [
    { id: '1', userId: '3', quizId: '1', score: 90, submittedAt: new Date() },
  ];

  try {
    await db.insert(quizResultsTable).values(quizResults);

    // eslint-disable-next-line no-console
    console.log('Quiz results seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding quiz results table:', error);
  }

};
