import prisma from '@/prisma/db';

const OverView = async () => {
  const totalOrders = await prisma.order.count();
  const unPaidOrders = await prisma.order.count({
    where: {
      paymentStatus: {
        not: {
          equals: 'paid',
        },
      },
    },
  });

  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6'>
      {/* Card 1 */}
      <div className='bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg'>
        <h3 className='mb-2 font-semibold text-gray-800 text-lg dark:text-gray-200'>
          Active Services
        </h3>
        <p className='font-bold text-3xl text-blue-600 dark:text-blue-400'>
          {totalOrders}
        </p>
      </div>
      {/* Card 2 */}
      <div className='bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg'>
        <h3 className='mb-2 font-semibold text-gray-800 text-lg dark:text-gray-200'>
          Pending Invoices
        </h3>
        <p className='font-bold text-3xl text-red-600 dark:text-red-400'>
          {unPaidOrders}
        </p>
      </div>
      {/* Card 3 */}
      <div className='bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg'>
        <h3 className='mb-2 font-semibold text-gray-800 text-lg dark:text-gray-200'>
          Upcoming Renewals
        </h3>
        <p className='font-bold text-3xl text-yellow-600 dark:text-yellow-400'>
          3
        </p>
      </div>
      {/* Card 4 */}
      <div className='bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg'>
        <h3 className='mb-2 font-semibold text-gray-800 text-lg dark:text-gray-200'>
          Support Tickets
        </h3>
        <p className='font-bold text-3xl text-green-600 dark:text-green-400'>
          1
        </p>
      </div>
    </div>
  );
};

export default OverView;
