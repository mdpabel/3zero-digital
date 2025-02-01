import prisma from '@/prisma/db';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import DeleteCoupon from './delete-coupon';
import CouponsPagination from './coupons-pagination';

const PAGE_SIZE = 6;

const Coupons = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const page = parseInt((await searchParams).page || '1', 10);

  const totalCoupons = await prisma.coupon.count();
  const coupons = await prisma.coupon.findMany({
    take: PAGE_SIZE,
    skip: PAGE_SIZE * (page - 1),
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className='p-8'>
      <h1 className='mb-8 font-bold text-4xl text-zinc-900 dark:text-zinc-200'>
        All Coupons
      </h1>

      {/* If no coupons are found */}
      {coupons.length === 0 ? (
        <p className='text-lg text-zinc-500 dark:text-zinc-400'>
          No coupons available.
        </p>
      ) : (
        <table className='w-full table-auto'>
          <thead>
            <tr className='border-zinc-200 dark:border-zinc-700 border-b text-left'>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Code
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Discount
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Applicable
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Valid From
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Valid Until
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Created At
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr
                key={coupon.id}
                className='hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {coupon.code}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {coupon.discountType === 'PERCENTAGE'
                    ? `${coupon.discount}%`
                    : `$${coupon.discount}`}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {coupon.applicableCountries}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {new Date(coupon.validFrom).toLocaleDateString()}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {coupon.validUntil
                    ? new Date(coupon.validUntil).toLocaleDateString()
                    : 'No Expiry'}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {new Date(coupon.createdAt).toLocaleDateString()}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  <div className='flex items-center space-x-4'>
                    {/* Edit Icon */}
                    <Link
                      href={`/admin/coupons/edit/${coupon.id}`}
                      className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 dark:text-blue-400 transition-colors'>
                      <FaEdit className='inline-block w-5 h-5 cursor-pointer' />
                    </Link>

                    {/* Delete Coupon Component */}
                    <DeleteCoupon couponId={coupon.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className='mt-6'>
            <CouponsPagination
              currPage={page}
              pageSize={PAGE_SIZE}
              totalCoupons={totalCoupons}
            />
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Coupons;
