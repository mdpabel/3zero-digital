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
      product: {
        include: {
          prices: true,
        },
      },
    },
  });

  if (!order) {
    return <p>Order not found</p>;
  }

  const prices = order.product?.prices || [];
  const productPrice =
    prices.length > 0 ? prices[0].unitAmount.toFixed(2) : 'N/A';

  // @ts-ignore
  const metaData = JSON.parse(order.metadata ?? '[]');

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
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Date Created:</strong>{' '}
              {formatDate(order.createdAt.toString())}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Total Amount:</strong> ${order.total.toFixed(2)}
            </p>
          </div>
          <div>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Items Ordered:</strong> {order.quantity}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Payment Status:</strong> {order.paymentStatus}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
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
          <p className='text-gray-600 dark:text-gray-400'>
            <strong>Quantity:</strong> {order.quantity}
          </p>
          <p className='text-gray-600 dark:text-gray-400'>
            <strong>Price per item:</strong> ${productPrice}
          </p>
        </div>
      </div>

      {metaData.length > 0 && (
        <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
          <div className='flex items-center mb-6'>
            <FaExclamationCircle className='mr-3 text-2xl text-red-600 dark:text-red-400' />
            <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
              Order Details
            </h2>
          </div>
          <ul className='pl-5 text-gray-800 dark:text-gray-200 list-disc'>
            {metaData.map((detail: string, index: number) => (
              <li key={index} className='mb-2'>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaCreditCard className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Billing Information
          </h2>
        </div>
        <p className='text-gray-800 dark:text-gray-200'>
          <strong>Paid:</strong> {order.paymentStatus === 'paid' ? 'Yes' : 'No'}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          <strong>Transaction ID:</strong> {order.transactionId || 'N/A'}
        </p>
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
