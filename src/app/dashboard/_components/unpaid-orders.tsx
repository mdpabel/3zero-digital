import { Button } from '@/components/ui/button';
import prisma from '@/prisma/db';
import Link from 'next/link';
import React from 'react';

const UnPaidOrders = async () => {
  const orders = await prisma.order.findMany({
    where: {
      paymentStatus: {
        not: {
          equals: 'paid',
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 1,
  });

  return (
    <div className='bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg'>
      <h3 className='mb-4 font-semibold text-gray-800 text-lg dark:text-white'>
        Pending Orders
      </h3>
      {orders.length > 0 ? (
        <div className='space-y-4'>
          {orders.map((order) => (
            <div
              key={order.id}
              className='border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 border rounded-md'>
              <p className='font-medium text-gray-800 dark:text-white'>
                <span className='font-bold'>Order ID:</span> {order.id}
              </p>
              <p className='text-gray-600 dark:text-gray-300'>
                <span className='font-bold'>Amount:</span> $
                {order.total.toFixed(2)}
              </p>
              <p className='text-gray-600 dark:text-gray-300'>
                <span className='font-bold'>Date:</span>{' '}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <Button asChild className='mt-4'>
                <Link target='_blank' href={order.paymentLink!}>
                  Pay Now
                </Link>
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-600 dark:text-gray-300'>
          No pending orders found.
        </p>
      )}
      {orders.length > 0 && (
        <div className='mt-4'>
          <Button>View All Orders</Button>
        </div>
      )}
    </div>
  );
};

export default UnPaidOrders;
