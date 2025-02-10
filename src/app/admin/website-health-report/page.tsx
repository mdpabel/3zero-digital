import prisma from '@/prisma/db';
import ProductsPagination from '../admin-pagination';
import { Button } from '@/components/ui/button';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

type SearchParams = Promise<{ page: string }>;

const PAGE_SIZE = 6;

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { page } = await searchParams;

  const totalReports = await prisma.websiteHealthReport.count();
  const reports = await prisma.websiteHealthReport.findMany({
    take: PAGE_SIZE,
    skip: PAGE_SIZE * (parseInt(page ?? '1', 10) - 1),
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className='p-8'>
      <h1 className='mb-8 font-bold text-zinc-900 dark:text-zinc-200 text-4xl'>
        Website Health Reports
      </h1>

      {/* If no reports are found */}
      {reports.length === 0 ? (
        <p className='text-zinc-500 dark:text-zinc-400 text-lg'>
          No reports available.
        </p>
      ) : (
        <table className='w-full table-auto'>
          <thead>
            <tr className='border-zinc-200 dark:border-zinc-700 border-b text-left'>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Name
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Email
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Website URL
              </th>

              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className='hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  {report.name}
                </td>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  {report.email}
                </td>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  {report.websiteUrl}
                </td>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  <div className='flex items-center space-x-4'>
                    <Button className='p-5'>Send Email</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className='mx-auto w-full'>
            <ProductsPagination
              currPage={parseInt(page, 10) ?? 1}
              pageSize={PAGE_SIZE}
              total={totalReports}
            />
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Page;
