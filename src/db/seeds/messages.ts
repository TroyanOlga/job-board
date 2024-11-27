import { db } from '../connection';
import { messagesTable } from '../schema/messages';

export const seedMessages = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding messages table...');

  const messages = [
    {
      id: '1',
      senderId: '2', // Employer
      receiverId: '3', // Candidate
      message: 'We are excited to review your application!',
      sentAt: new Date(),
    },
  ];

  try {
    await db.insert(messagesTable).values(messages);

    // eslint-disable-next-line no-console
    console.log('Messages seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding messages table:', error);
  }

};
