import { auth, currentUser } from '@clerk/nextjs/server';
import { SignOutButton } from '@clerk/nextjs';
import { clerkClient, getAuth } from '@clerk/nextjs/server';

const Dashboard = async () => {
  const session = await currentUser();

  const user = await clerkClient().users.getUser(session?.id!);

  return (
    <div className='space-y-4'>
      <h2>
        {/* 👋 Hi, {session?.firstName + ' ' + session?.lastName}! Welcome back! */}
        lorem100 😊
      </h2>
      <SignOutButton />
    </div>
  );
};

export default Dashboard;
