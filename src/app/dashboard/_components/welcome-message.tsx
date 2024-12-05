import { currentUser } from '@clerk/nextjs/server';

const WelcomeMessage = async () => {
  const session = await currentUser();

  return (
    <h2 className='text-xl'>
      👋 Hi, {session?.firstName + ' ' + session?.lastName}! Welcome back!
    </h2>
  );
};

export default WelcomeMessage;
