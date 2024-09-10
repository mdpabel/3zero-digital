import UserConfirmationEmail from '@/components/email/feedback-email-template';
import { CreateEmailOptions, Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  replyTo,
  subject,
  react,
  to,
  name,
}: Pick<CreateEmailOptions, 'replyTo' | 'subject' | 'react' | 'to'> & {
  name: string;
}) {
  try {
    const response = await resend.batch.send([
      {
        from: process.env.EMAIL_TO!,
        replyTo,
        to,
        subject,
        react,
      },
      {
        from: process.env.EMAIL_TO!,
        replyTo: process.env.EMAIL_TO!,
        to: replyTo!,
        subject: 'We have received your message!',
        react: UserConfirmationEmail({
          name,
        }),
      },
    ]);

    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Email sending failed.');
  }
}
