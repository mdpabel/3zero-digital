import React from 'react';
import OrdersTable from './orders-table';
import prisma from '@/prisma/db';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import ComponentWrapper from '@/components/common/component-wrapper';

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
      <ComponentWrapper>
        <h1 className='mb-6 font-bold text-zinc-800 dark:text-zinc-200 text-3xl md:text-5xl'>
          Your Orders
        </h1>
        <OrdersTable orders={orders} />
      </ComponentWrapper>
    </div>
  );
};

export default OrderPage;
