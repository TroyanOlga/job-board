import { db } from '../connection';
import { NOTIFICATION_TYPE, notificationsTable } from '../schema/notifications';

export const seedNotifications = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding notifications table...');

  const notifications = [
    {
      id: '1',
      userId: '3',
      type: NOTIFICATION_TYPE.APPLICATION_STATUS,
      content: 'Your application for Frontend Developer has been shortlisted!',
      createdAt: new Date(),
    },
  ];

  try {
    await db.insert(notificationsTable).values(notifications);

    // eslint-disable-next-line no-console
    console.log('Notifications seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding notifications table:', error);
  }

};
