import prisma from '@/prisma/db';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import DashboardPagination from '../admin-pagination';

const PAGE_SIZE = 7;

const Users = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const page = parseInt(searchParams.page ?? '1', 10);

  const totalUsers = await prisma.user.count();
  const users = await prisma.user.findMany({
    take: PAGE_SIZE,
    skip: PAGE_SIZE * (page - 1),
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className='p-8'>
      <h1 className='mb-8 font-bold text-zinc-900 dark:text-zinc-200 text-4xl'>
        All Users
      </h1>

      {users.length === 0 ? (
        <p className='text-zinc-500 dark:text-zinc-400 text-lg'>
          No users available.
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
                Role
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
            {users.map((user) => (
              <tr
                key={user.id}
                className='hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  {user.name || 'N/A'}
                </td>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  {user.email || 'N/A'}
                </td>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  {user.role}
                </td>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className='px-4 py-3 border-zinc-200 dark:border-zinc-700 border-b'>
                  <div className='flex items-center space-x-4'>
                    <Link
                      href={`/admin/users/edit/${user.id}`}
                      className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 dark:text-blue-400 transition-colors'>
                      <FaEdit className='inline-block w-5 h-5 cursor-pointer' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className='mx-auto w-full'>
            <DashboardPagination
              currPage={page}
              pageSize={PAGE_SIZE}
              total={totalUsers}
            />
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Users;
