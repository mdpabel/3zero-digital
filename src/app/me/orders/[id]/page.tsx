import { getCurrentUser } from '@/lib/get-current-user';
import { formatDate } from '@/lib/utils';
import prisma from '@/prisma/db';
import {
  FaBox,
  FaCreditCard,
  FaReceipt,
  FaExclamationCircle,
} from 'react-icons/fa';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const OrderDetail = async ({ params }: Props) => {
  const id = (await params).id;
  const { userId } = await getCurrentUser();

  const order = await prisma.order.findFirst({
    where: {
      id: id,
      userId: userId,
    },
    include: {
      product: true,
      coupon: true,
      template: true,
      payment: true,
    },
  });

  if (!order) {
    return <p>Order not found</p>;
  }

  const productPrice = order.product?.price;

  return (
    <div className='mx-auto px-4 py-10 max-w-5xl'>
      <h1 className='mb-8 font-bold text-4xl text-gray-800 dark:text-gray-200'>
        Order #{order.id}
      </h1>

      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Order Summary
          </h2>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : order.status === 'failed'
                ? 'bg-red-100 text-red-800'
                : order.status === 'canceled'
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>

        <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
          <div>
            <p className=''>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p className=''>
              <strong>Date Created:</strong>{' '}
              {formatDate(order.createdAt.toString())}
            </p>
            <p className=''>
              <strong>Total Amount:</strong> ${order.total.toFixed(2)}
            </p>
            {order.coupon && (
              <p className=''>
                <strong>Coupon Used:</strong> {order.coupon.code}
              </p>
            )}
          </div>
          <div>
            <p className=''>
              <strong>Items Ordered:</strong> {order.quantity}
            </p>
            <p className=''>
              <strong>Payment Status:</strong>{' '}
              {order.payment[0]?.status || 'N/A'}
            </p>
            <p className=''>
              <strong>Currency:</strong> {order.currency}
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaBox className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Ordered Products
          </h2>
        </div>
        <div className='border-gray-300 mb-4 pb-4 border-b'>
          <p className='text-gray-800 dark:text-gray-200'>
            <strong>Product:</strong> {order.product.name}
          </p>
          <p className=''>
            <strong>Quantity:</strong> {order.quantity}
          </p>
          <p className=''>
            <strong>Price per item:</strong> ${productPrice}
          </p>
        </div>
        {order.template && (
          <p className='text-gray-800 dark:text-gray-200'>
            <strong>Template:</strong> {order.template.name}
          </p>
        )}
      </div>

      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaCreditCard className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Billing Information
          </h2>
        </div>
        {order.payment.map((payment, index) => (
          <div key={index} className='mb-4'>
            <p className='text-gray-800 dark:text-gray-200'>
              <strong>Gateway:</strong> {payment.gateway}
            </p>
            <p className=''>
              <strong>Transaction ID:</strong> {payment.transactionId || 'N/A'}
            </p>
            <p className=''>
              <strong>Amount Paid:</strong> ${payment.amount.toFixed(2)}
            </p>
            <p className=''>
              <strong>Payment Status:</strong> {payment.status}
            </p>
          </div>
        ))}
      </div>

      <div className='bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaReceipt className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Payment Information
          </h2>
        </div>
        <p className='text-gray-800 dark:text-gray-200'>
          <strong>Total Paid:</strong> ${order.total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
