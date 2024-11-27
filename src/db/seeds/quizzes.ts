import { db } from '../connection';
import { quizzesTable } from '../schema/quizzes';

export const seedQuizzes = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding quizzes table...');

  const quizzes = [
    {
      id: '1',
      jobId: '1',
      title: 'React Basics Quiz',
      questions: [
        { questionText: 'What is JSX?', correctAnswer: 'JavaScript XML' },
        { questionText: 'What is a React Hook?', correctAnswer: 'A function' },
      ],
    },
  ];

  try {
    await db.insert(quizzesTable).values(quizzes);

    // eslint-disable-next-line no-console
    console.log('Quizzes seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding quizzes table:', error);
  }

};
