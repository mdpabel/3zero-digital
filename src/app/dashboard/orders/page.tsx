import React from 'react';
import OrdersTable from './orders-table';
import prisma from '@/prisma/db';
import { getCurrentUser } from '@/lib/get-current-user';

const OrderPage = async () => {
  const { userId } = await getCurrentUser();

  const orders = await prisma.order.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className='md:px-10 py-10 md:py-20'>
      <div className='mx-auto max-w-6xl container'>
        <h1 className='mb-6 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Your Orders
        </h1>
        <OrdersTable orders={orders ?? []} />
      </div>
    </div>
  );
};

export default OrderPage;
