import { auth } from '@/auth';
import React from 'react';
import UserProfile from './update-user';
import prisma from '@/prisma/db';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  if (!user) {
    return <p>User not found</p>;
  }

  return <UserProfile user={user} />;
};

export default Profile;
