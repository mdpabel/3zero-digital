import { CreateEmailOptions, Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  replyTo,
  subject,
  react,
  to,
}: Pick<CreateEmailOptions, 'replyTo' | 'subject' | 'react' | 'to'>) {
  try {
    const response = await resend.emails.send({
      from: process.env.EMAIL_TO!,
      to,
      subject,
      react,
      replyTo,
    });

    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Email sending failed.');
  }
}
