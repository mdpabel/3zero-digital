import prisma from '@/prisma/db';
import RestoreProduct from './restore-product';

const getProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      deleted: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return products;
};

const DeletedProducts = async () => {
  const products = await getProducts();

  return (
    <div className='p-8'>
      <h1 className='mb-8 font-bold text-4xl text-zinc-900 dark:text-zinc-200'>
        All Deleted Products
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
                  {/* Display Price: Handle Standard and Subscription Products */}
                  {product.price}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {product.category?.name || 'Uncategorized'}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  {new Date(product.createdAt).toLocaleDateString()}
                </td>
                <td className='border-zinc-200 dark:border-zinc-700 px-4 py-3 border-b'>
                  <div className='flex items-center space-x-4'>
                    {/* Restore product action */}
                    <RestoreProduct productId={product.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DeletedProducts;
