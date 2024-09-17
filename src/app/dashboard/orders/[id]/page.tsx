import { getOrder } from '@/lib/swell/order';
import { formatDate } from '@/lib/utils';
import {
  FaBox,
  FaShippingFast,
  FaCreditCard,
  FaReceipt,
  FaExclamationCircle,
} from 'react-icons/fa';

type Props = {
  params: {
    id: string;
  };
};

const OrderDetail = async ({ params }: Props) => {
  const order = await getOrder(params.id);

  if (!order) {
    return <div>Order not found.</div>;
  }

  // @ts-ignore
  const metaData: string[] = order.items?.[0]?.metadata?.data || [];

  return (
    <div className='mx-auto px-4 py-10 max-w-5xl'>
      <h1 className='mb-8 font-bold text-4xl text-gray-800 dark:text-gray-200'>
        Order #{order.number}
      </h1>

      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Order Summary
          </h2>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'complete'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
            {order.status?.charAt(0).toUpperCase()! + order.status?.slice(1)}
          </span>
        </div>
        <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
          <div>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Order Number:</strong> {order.number}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Date Created:</strong> {formatDate(order.date_created!)}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Total Amount:</strong> ${order.grand_total?.toFixed(2)}
            </p>
          </div>
          <div>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Items Ordered:</strong> {order.item_quantity}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Payment Method:</strong> {order.billing?.method}
            </p>
            <p className='text-gray-600 dark:text-gray-400'>
              <strong>Paid:</strong> {order.paid ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaBox className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Items Ordered
          </h2>
        </div>
        {order.items && order.items.length > 0 ? (
          order.items.map((item: any, index: number) => (
            <div key={index} className='border-gray-300 mb-4 pb-4 border-b'>
              <p className='text-gray-800 dark:text-gray-200'>
                <strong>Product:</strong> {item.name}
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                <strong>Price:</strong> ${item.price.toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p className='text-gray-600 dark:text-gray-400'>No items found.</p>
        )}
      </div>

      {metaData.length > 0 && (
        <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
          <div className='flex items-center mb-6'>
            <FaExclamationCircle className='mr-3 text-2xl text-red-600 dark:text-red-400' />
            <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
              Order details
            </h2>
          </div>
          <ul className='pl-5 text-gray-800 dark:text-gray-200 list-disc'>
            {metaData.map((symptom: string, index: number) => (
              <li key={index} className='mb-2'>
                {symptom}
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
          <strong>Name:</strong> {order.billing?.name}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          <strong>Address:</strong> {order.billing?.address1},{' '}
          {order.billing?.city}, {order.billing?.zip}, {order.billing?.country}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          <strong>Card Last 4:</strong> **** **** ****{' '}
          {order.billing?.card?.last4}
        </p>
      </div>

      {order.shipping && Object.keys(order.shipping).length > 0 ? (
        <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
          <div className='flex items-center mb-6'>
            <FaShippingFast className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
            <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
              Shipping Information
            </h2>
          </div>
          <p className='text-gray-800 dark:text-gray-200'>
            <strong>Name:</strong> {order.shipping.name || 'N/A'}
          </p>
          <p className='text-gray-600 dark:text-gray-400'>
            <strong>Address:</strong> {order.shipping.address1 || 'N/A'}
          </p>
        </div>
      ) : (
        <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
          <h2 className='font-semibold text-gray-800 text-xl dark:text-gray-200'>
            Shipping Information
          </h2>
          <p className='text-gray-600 dark:text-gray-400'>
            No shipping information provided.
          </p>
        </div>
      )}

      <div className='bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaReceipt className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Payment Information
          </h2>
        </div>
        <p className='text-gray-800 dark:text-gray-200'>
          <strong>Paid:</strong> {order.paid ? 'Yes' : 'No'}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          <strong>Authorized Payment ID:</strong> {order.authorized_payment_id}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          <strong>Payment Total:</strong> $
          {Number(order.payment_total)?.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
