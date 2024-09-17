import { NextResponse } from 'next/server';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { loginWithToken } from '@/lib/swell/account';

export async function POST() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json(
      { error: 'You are not authorized' },
      {
        status: 401,
      },
    );
  }

  const swellRes = await loginWithToken(user?.emailAddresses[0].emailAddress!);

  await clerkClient().users.updateUserMetadata(user?.id!, {
    privateMetadata: {
      swellAccountId: swellRes?.id!,
    },
  });

  return NextResponse.json({ success: true });
}
