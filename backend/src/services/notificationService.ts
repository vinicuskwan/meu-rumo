import { sendEmail } from '../utils/email';
import { Notification } from '../models/message';

class NotificationService {
    async sendEmailNotification(to: string, subject: string, message: string): Promise<void> {
        try {
            await sendEmail(to, subject, message);
        } catch (error) {
            console.error('Error sending email notification:', error);
            throw new Error('Failed to send email notification');
        }
    }

    async createInternalNotification(userId: string, content: string): Promise<Notification> {
        const notification = new Notification({
            recipient: userId,
            content: content,
            date: new Date(),
            read: false,
        });

        // Save the notification to the database (implementation depends on your database setup)
        // await notification.save();

        return notification;
    }

    async getUserNotifications(userId: string): Promise<Notification[]> {
        // Fetch notifications from the database for the given userId
        // const notifications = await Notification.find({ recipient: userId });
        // return notifications;

        return []; // Placeholder return
    }
}

export default new NotificationService();