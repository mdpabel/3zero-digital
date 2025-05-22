import { auth } from '@/auth';
import React from 'react';
import PlaceOrderForm from './place-order-form';
import prisma from '@/prisma/db';
import CouponForm from './coupon-form';
import { DiscountType } from '@prisma/client';
import ComponentWrapper from '@/components/common/component-wrapper';

type Props = {
  searchParams: Promise<{
    productId: string;
    quantity: string;
    metaData: string;
    productType: string;
    couponId?: string;
    discount?: string;
    discountType?: DiscountType;
  }>;
};

const PlaceOrder = async ({ searchParams }: Props) => {
  const session = await auth();

  const {
    metaData,
    productId,
    quantity,
    productType,
    couponId,
    discount,
    discountType,
  } = await searchParams;

  if (!productId) {
    return <ComponentWrapper>Product not found</ComponentWrapper>;
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return (
      <ComponentWrapper className='py-10'>Product not found</ComponentWrapper>
    );
  }

  let discountedValue = 0;
  if (couponId) {
    if (discountType === 'FLAT') {
      discountedValue = discount ? parseInt(discount) : 0;
    } else if (discountType === 'PERCENTAGE') {
      const percentage = discount ? parseInt(discount) : 0;
      discountedValue = (product.price * percentage) / 100;
    }
  }

  return (
    <ComponentWrapper className='py-10'>
      <div className='gap-10 grid grid-cols-1 md:grid-cols-5'>
        <div className='md:col-span-3'>
          <PlaceOrderForm
            email={session?.user?.email ?? ''}
            firstName={session?.user?.name?.split(' ')[0] ?? ''}
            lastName={session?.user?.name?.split(' ')[1] ?? ''}
            isLoggedIn={!!session}
            productId={productId}
            quantity={quantity}
            productType={productType}
            metaData={metaData}
            couponId={couponId}
          />
        </div>

        <div className='md:col-span-2'>
          <div className='col-span-2'>
            <div className='shadow-sm p-6 border rounded-lg'>
              <h3 className='mb-4 pb-4 border-b font-semibold text-xl'>
                Order Summary
              </h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold'>Product</h4>
                  <p>{product.name}</p>
                  <p className='text-gray-500 text-sm'>{product.description}</p>
                </div>
                <div className='flex justify-between'>
                  <h4 className='font-semibold'>Product Price</h4>
                  <p className='font-semibold'>${product.price}</p>
                </div>
                <div className='flex justify-between'>
                  <h4 className='font-semibold'>Quantity</h4>
                  <p className='font-semibold'>{quantity}</p>
                </div>
              </div>

              {metaData && (
                <div className='mt-6'>
                  <h4 className='font-medium'>Additional Metadata</h4>
                  <ul className='list-disc list-inside'>
                    {metaData.split(',').map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className='flex justify-between items-center mt-6 pt-4 border-t'>
                <h4 className='font-semibold'>Total</h4>
                <p className='font-bold text-lg'>
                  $
                  {(
                    product.price * parseInt(quantity) -
                    discountedValue
                  ).toFixed(2)}
                </p>
              </div>

              <CouponForm />
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PlaceOrder;
