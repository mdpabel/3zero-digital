import prisma from '@/prisma/db';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const getCurrentUser = async () => {
  const session = auth();
  if (!session || !session.userId) {
    return redirect('/login');
  }

  const user = await prisma.user.findFirst({
    where: {
      clerkUserId: session?.userId,
    },
  });

  if (!user) {
    return redirect('/login');
  }

  return { user, userId: user.id };
};
