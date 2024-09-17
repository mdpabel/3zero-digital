import React from 'react';
import OrdersTable from './orders-table';
import { getOrders } from '@/lib/swell/order';

export const dynamic = 'force-dynamic';

const OrderPage = async () => {
  const orders = await getOrders();

  return (
    <div className='bg-white dark:bg-[#030712] px-10 md:px-20 py-10 md:py-20'>
      <div className='mx-auto max-w-6xl container'>
        <h1 className='mb-6 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Your Orders
        </h1>
        <OrdersTable orders={orders.results} />
      </div>
    </div>
  );
};

export default OrderPage;
