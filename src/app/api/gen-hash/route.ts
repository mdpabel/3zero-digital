import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export const POST = async (req: NextRequest) => {
  const secret = process.env.TAWK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: 'Server configuration error: Secret not found.' },
      { status: 500 },
    );
  }

  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  // Generate the hash using HMAC
  const hash = crypto.createHmac('sha256', secret).update(email).digest('hex');

  return NextResponse.json({ hash });
};
