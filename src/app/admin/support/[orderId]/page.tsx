import prisma from '@/prisma/db';
import { MessageInput } from './message-input';
import { auth } from '@/auth';

interface Message {
  id: string;
  content: string;
  createdAt: string;
  isAdmin: boolean;
  sender: { name: string };
}

interface OrderChatProps {
  messages: Message[];
  orderId: string;
}

export default async function OrderChatPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const session = await auth();

  if (!session) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-2xl'>Please log in to access support</h1>
      </div>
    );
  }

  const userId = session?.user?.id;

  if (!userId) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-2xl'>Please log in to access support</h1>
      </div>
    );
  }

  const { orderId } = await params;

  // Fetch the messages for this specific order
  const messages = await prisma.message.findMany({
    where: {
      orderId,
    },
    include: {
      user: { select: { name: true } },
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  return (
    <div className='mx-auto mb-12 max-w-4xl'>
      <div className='space-y-4 p-4 card'>
        <h2 className='font-semibold text-xl text-center'>
          Chat for Order: {orderId}
        </h2>
        <div className='space-y-4 mt-4'>
          {messages.map((message) =>
            message.isAdmin ? (
              // Admin's message
              <div key={message.id} className='flex justify-end border-b'>
                <div className='p-4 rounded-lg w-full'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-xs'>
                      {new Date(message.createdAt).toLocaleString()}
                    </span>
                    <span className='font-semibold text-sm'>
                      {message?.user?.name}
                    </span>
                  </div>
                  <p
                    className='dark:prose-invert prose'
                    dangerouslySetInnerHTML={{
                      __html: message.content,
                    }}></p>
                </div>
              </div>
            ) : (
              // Customer's message
              <div key={message.id} className='flex justify-start border-b'>
                <div className='p-4 rounded-lg w-full'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='font-semibold text-sm'>
                      {message?.user?.name}
                    </span>
                    <span className='text-xs'>
                      {new Date(message.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p
                    className='dark:prose-invert prose'
                    dangerouslySetInnerHTML={{
                      __html: message.content,
                    }}></p>
                </div>
              </div>
            ),
          )}
        </div>

        <MessageInput orderId={orderId} />
      </div>
    </div>
  );
}
