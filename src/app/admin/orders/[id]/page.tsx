import prisma from '@/prisma/db';
import React from 'react';

const OrderDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) {
    return <div>No order found with the id {id}</div>;
  }

  // Fetch the order with all related data
  const order = await prisma.order.findFirst({
    where: {
      id,
    },
    include: {
      coupon: true,
      payment: true,
      product: true,
      template: true,
      user: true,
    },
  });

  if (!order) {
    return <div>No order found for the ID: {id}</div>;
  }

  return (
    <div className='mx-auto p-6 container'>
      <h1 className='mb-4 font-semibold text-3xl'>Order Details</h1>

      <div className='shadow-md p-6 border rounded-md'>
        <h2 className='mb-2 font-semibold text-2xl'>
          <strong>Order ID:</strong> {order.id}
        </h2>

        {/* Customer Information */}
        <div className='mb-4'>
          <h3 className='font-semibold text-lg'>
            <strong>Customer Information</strong>
          </h3>
          <p>
            <strong>Email:</strong> {order.user?.email}
          </p>
          <p>
            <strong>Name:</strong> {order.user?.name}
          </p>
          <p>
            <strong>Created At:</strong> {order.createdAt.toLocaleString()}
          </p>
        </div>

        {/* Order Information */}
        <div className='mb-4'>
          <h3 className='font-semibold text-lg'>
            <strong>Order Information</strong>
          </h3>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Quantity:</strong> {order.quantity}
          </p>
          <p>
            <strong>Total Price:</strong> ${order.total.toFixed(2)}
          </p>
          <p>
            <strong>Currency:</strong> {order.currency || 'USD'}
          </p>
          <p>
            <strong>Note:</strong> {order.note || 'No notes provided'}
          </p>
          <p>
            <strong>Website Details:</strong> {order.websiteDetails || 'N/A'}
          </p>
        </div>

        {/* Product Information */}
        <div className='mb-4'>
          <h3 className='font-semibold text-lg'>
            <strong>Product Information</strong>
          </h3>
          <p>
            <strong>Product Name:</strong> {order.product?.name}
          </p>
          <p>
            <strong>Product Description:</strong>{' '}
            {order.product?.description || 'No description available'}
          </p>
          <p>
            <strong>Product Price:</strong> $
            {order.product?.price?.toFixed(2) || 'N/A'}
          </p>
        </div>

        {/* Template Information */}
        {order.template && (
          <div className='mb-4'>
            <h3 className='font-semibold text-lg'>
              <strong>Template Information</strong>
            </h3>
            <p>
              <strong>Template Name:</strong> {order.template?.name}
            </p>
            <p>
              <strong>Template Price:</strong> $
              {order.template?.price?.toFixed(2) || 'N/A'}
            </p>
          </div>
        )}

        {/* Coupon Information */}
        {order.coupon && (
          <div className='mb-4'>
            <h3 className='font-semibold text-lg'>
              <strong>Coupon Information</strong>
            </h3>
            <p>
              <strong>Coupon Code:</strong> {order.coupon?.code}
            </p>
            <p>
              <strong>Discount Type:</strong> {order.coupon?.discountType}
            </p>
            <p>
              <strong>Discount Amount:</strong> $
              {order.coupon?.discount?.toFixed(2) || 'N/A'}
            </p>
          </div>
        )}

        {/* Payment Information */}
        <div className='mb-4'>
          <h3 className='font-semibold text-lg'>
            <strong>Payment Information</strong>
          </h3>
          {order.payment.length === 0 ? (
            <p>No payment information available</p>
          ) : (
            order.payment.map((payment, index) => (
              <div key={payment.id + index}>
                <p>
                  <strong>Payment Status:</strong> {payment.status}
                </p>
                <p>
                  <strong>Amount:</strong> ${payment.amount.toFixed(2)}
                </p>
                <p>
                  <strong>Currency:</strong> {payment.currency || 'USD'}
                </p>
                <p>
                  <strong>Payment Gateway:</strong> {payment.gateway}
                </p>
                {payment.transactionId && (
                  <p>
                    <strong>Transaction ID:</strong> {payment.transactionId}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
