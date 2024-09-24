'use client';
import React from 'react';
import useSWR from 'swr';
import OrdersTable from './orders-table';
import { getOrders } from '@/lib/swell/order';
import TableSkeleton from './loading';

const OrderPage = () => {
  const {
    data: orders,
    error,
    isLoading,
  } = useSWR('orders', () => getOrders());

  if (isLoading) {
    return <TableSkeleton />;
  }

  if (error) {
    throw error;
  }

  return (
    <div className='bg-white dark:bg-[#030712] md:px-10 py-10 md:py-20'>
      <div className='mx-auto max-w-6xl container'>
        <h1 className='mb-6 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Your Orders
        </h1>
        <OrdersTable orders={orders?.results ?? []} />
      </div>
    </div>
  );
};

export default OrderPage;
