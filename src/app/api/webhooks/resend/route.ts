import UserConfirmationEmail from '@/components/email/feedback-email-template';
import { sendEmail } from '@/lib/send-email';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as ResendWebhookEvent;

    if (body.type === 'email.delivered') {
      const data = body.data;
      const to = data.to[0];

      // Send a notification email to the recipient
      await sendEmail({
        subject: 'We have received your message!',
        to,
        react: UserConfirmationEmail({
          name: to,
        }),
      });

      return NextResponse.json({
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
};

interface ResendWebhookEvent {
  created_at: string;
  type: 'email.sent' | 'email.delivered' | 'email.bounced';
  data: {
    created_at: string;
    email_id: string;
    from: string;
    headers: Record<string, any>[];
    subject: string;
    to: string[];
  };
}
