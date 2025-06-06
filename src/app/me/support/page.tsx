import { auth } from '@/auth';
import prisma from '@/prisma/db';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Define the type for the message data
interface Message {
  id: string;
  content: string;
  createdAt: string;
  orderId: string;
  order: {
    id: string;
    product: {
      name: string;
    };
  };
}

interface LatestMessage {
  orderId: string;
  product: string;
  content: string;
  createdAt: string;
}

const Support = async () => {
  const session = await auth();

  // If the user isn't logged in
  if (!session) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-2xl'>Please log in to access support</h1>
      </div>
    );
  }

  const userId = session?.user?.id;

  // If userId is not available
  if (!userId) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-2xl'>Please log in to access support</h1>
      </div>
    );
  }

  // Fetch messages and their associated orders
  const messages = await prisma.message.findMany({
    where: { userId },
    include: {
      order: { select: { id: true, product: true } },
    },
    orderBy: {
      createdAt: 'desc', // Order messages by creation date (descending)
    },
    distinct: ['orderId'], // Ensure distinct orderId
  });

  // Group messages by orderId
  const groupedMessages: { [key: string]: Message[] } = messages.reduce(
    (acc: { [key: string]: Message[] }, message) => {
      const orderId = message.order.id;
      if (!acc[orderId]) {
        acc[orderId] = [];
      }
      acc[orderId].push({
        ...message,
        createdAt: message.createdAt.toString(),
      });
      return acc;
    },
    {},
  );

  // Prepare latest message data per order
  const latestMessages: LatestMessage[] = Object.keys(groupedMessages).map(
    (orderId) => {
      const latestMessage = groupedMessages[orderId][0]; // Get the most recent message
      return {
        orderId,
        product: latestMessage.order.product.name,
        content: latestMessage.content,
        createdAt: latestMessage.createdAt,
      };
    },
  );

  return (
    <div className='space-y-4 mx-auto mt-4 p-4 max-w-5xl'>
      <h2 className='mb-6 font-semibold text-3xl text-center'>
        Your Support Messages
      </h2>
      {latestMessages.map((message) => (
        <div key={message.orderId} className='pb-4 border-b'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <span className='font-semibold'>{message.product}</span>
              <span className='text-gray-500 text-sm'>
                Last message: {message.content}
              </span>
            </div>
            <span className='text-gray-400 text-xs'>
              {new Date(message.createdAt).toLocaleString()}
            </span>
          </div>
          <div className='mt-2'>
            <Link href={`/me/support/${message.orderId}`}>
              <Button className='bg-blue-500 px-4 py-2 rounded-md text-white'>
                Chat Now
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
