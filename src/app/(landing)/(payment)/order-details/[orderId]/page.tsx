import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import prisma from '@/prisma/db';
import React from 'react';
import Payment from './payment';

const Order = async ({ params }: { params: Promise<{ orderId: string }> }) => {
  const { orderId } = await params;

  if (!orderId) {
    return <div className='mx-auto p-4 max-w-6xl'>Order is not found</div>;
  }

  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
    },
    include: {
      product: {
        include: {
          prices: true,
        },
      },
      template: true,
      payment: true,
      user: true,
    },
  });

  if (!order) {
    return <div className='mx-auto p-4 max-w-6xl'>Order is not found</div>;
  }

  const isPaid = order.payment[0].status === 'paid';

  return (
    <div className='mx-auto py-12 p-4 max-w-6xl'>
      <h1 className='mb-8 font-semibold text-3xl text-center'>
        Complete your payment
      </h1>

      {/* Two-Column Layout */}
      <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
        {/* Left Column: Review Section */}
        <div className='space-y-6 md:col-span-2'>
          {/* Right Column: Order Summary and Place Order */}
          <div className='space-y-6'>
            {/* Order Summary */}
            <Card className='py-8'>
              <CardTitle>
                <div className='py-4 text-center'>Order Summery</div>
              </CardTitle>
              <CardContent className='space-y-3'>
                <p className='flex justify-between items-center'>
                  <span>Order id</span> <span>{order.id}</span>
                </p>

                {order.product.name && !order.template?.name && (
                  <p className='flex justify-between items-center'>
                    <span>Product Name</span> <span>{order.product.name}</span>
                  </p>
                )}

                {order.product?.prices[0].unitAmount && (
                  <p className='flex justify-between items-center'>
                    <span>Product price</span>{' '}
                    <span>
                      ${order.product?.prices[0].unitAmount.toFixed(2)}
                    </span>
                  </p>
                )}

                {order.product?.prices[0].unitAmount && (
                  <p className='flex justify-between items-center'>
                    <span>Quantity</span> <span>{order.quantity}</span>
                  </p>
                )}

                {order.template?.name && (
                  <p className='flex justify-between items-center'>
                    <span>Template Name</span>{' '}
                    <span>{order.template?.name}</span>
                  </p>
                )}

                {order.template?.price && (
                  <p className='flex justify-between items-center'>
                    <span>Template price</span>{' '}
                    <span>${order.template?.price.toFixed(2)}</span>
                  </p>
                )}

                <p className='flex justify-between items-center pt-3 border-t'>
                  <span>Subtotal Price</span>{' '}
                  <span>${order.total.toFixed(2)}</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right side  */}
        <div>
          {isPaid ? (
            <Card className='py-8'>
              <CardContent className='text-center'>
                <p>Your payment has been successfully completed.</p>
                <p>Thank you for your purchase!</p>
              </CardContent>
            </Card>
          ) : (
            <Payment orderStatus={order.status} orderId={order.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
