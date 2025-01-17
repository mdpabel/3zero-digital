import React from 'react';
import OrdersTable from './orders-table';
import prisma from '@/prisma/db';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const OrderPage = async () => {
  const session = await auth();

  if (!session) {
    return redirect('/login');
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session.user?.email,
    },
  });

  if (!user) {
    redirect('/login?callbackUrl=/me/order');
  }

  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: {
      payment: true,
      product: true,
      // template: true,
    },
  });

  return (
    <div className='md:px-10 py-10 md:py-20'>
      <div className='mx-auto max-w-6xl container'>
        <h1 className='mb-6 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Your Orders
        </h1>
        <OrdersTable orders={orders} />
      </div>
    </div>
  );
};

export default OrderPage;
