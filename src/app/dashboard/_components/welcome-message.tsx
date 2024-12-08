import { auth } from '@/auth';

const WelcomeMessage = async () => {
  const session = await auth();

  return (
    <h2 className='text-xl'>👋 Hi, {session?.user?.name}! Welcome back!</h2>
  );
};

export default WelcomeMessage;
