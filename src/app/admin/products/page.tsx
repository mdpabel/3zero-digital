import prisma from '@/prisma/db';
import { FaEdit } from 'react-icons/fa';
import DeleteProduct from './delete-product';
import Link from 'next/link';
import ProductsPagination from './products-pagination';

type SearchParams = Promise<{ page: string }>;

const PAGE_SIZE = 6;

const Products = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { page } = await searchParams;

  const totalProducts = await prisma.product.count();
  const products = await prisma.product.findMany({
    where: {
      deleted: false,
    },
    include: {
      category: true, // Include category for each product
    },
    take: PAGE_SIZE,
    skip: PAGE_SIZE * (parseInt(page ?? '1', 10) - 1),
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className='p-8'>
      <h1 className='mb-8 font-bold text-4xl text-zinc-900 dark:text-zinc-200'>
        All Products
      </h1>

      {/* If no products are found */}
      {products.length === 0 ? (
        <p className='text-lg text-zinc-500 dark:text-zinc-400'>
          No products available.
        </p>
      ) : (
        <table className='w-full table-auto'>
          <thead>
            <tr className='border-zinc-200 dark:border-zinc-700 border-b text-left'>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Product Name
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Price
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Category
              </th>
              <th className='px-4 py-3 text-zinc-800 dark:text-zinc-300'>
                Type
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
            {products.map((product) => (
              <tr
                key={product.id}
                className='hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {product.name}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {/* Displaying the first price or a default message if no prices */}
                  {product.price}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {/* Display category name or default to 'Uncategorized' */}
                  {product.category?.name || 'Uncategorized'}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {/* Displaying product type */}
                  {product.type}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {/* Formatting the creation date */}
                  {new Date(product.createdAt).toLocaleDateString()}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  <div className='flex items-center space-x-4'>
                    {/* Edit Icon */}
                    <Link
                      href={`/admin/products/edit/${product.id}`}
                      className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 dark:text-blue-400 transition-colors'>
                      <FaEdit className='inline-block w-5 h-5 cursor-pointer' />
                    </Link>

                    {/* Delete Product Component */}
                    <DeleteProduct productId={product.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className='mx-auto w-full'>
            <ProductsPagination
              currPage={parseInt(page, 10) ?? 1}
              pageSize={PAGE_SIZE}
              totalProducts={totalProducts}
            />
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Products;
