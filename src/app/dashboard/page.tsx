import { auth, currentUser } from '@clerk/nextjs/server';
import { SignOutButton } from '@clerk/nextjs';

const Dashboard = async () => {
  const session = await currentUser();

  return (
    <div className='space-y-4'>
      <h2>
        👋 Hi, {session?.firstName + ' ' + session?.lastName}! Welcome back! 😊
      </h2>
      <SignOutButton />
    </div>
  );
};

export default Dashboard;
