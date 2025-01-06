import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import prisma from '@/prisma/db';
import RestoreTemplate from './restore-template';

const DeletedTemplates = async () => {
  const templates = await prisma.template.findMany({
    where: {
      deleted: true,
    },
    include: {
      categories: true,
    },
  });

  return (
    <div className='px-10 py-10'>
      {/* Header */}
      <header className='flex justify-between items-center mb-10'>
        <h1 className='font-bold text-4xl'>Deleted Templates</h1>
      </header>

      {/* Template Table */}
      <div className='overflow-x-auto'>
        {templates.length === 0 ? (
          <div className='py-10 text-center text-gray-500'>
            <p>No templates found. Start by adding a new template.</p>
          </div>
        ) : (
          <table className='bg-white dark:bg-gray-900 shadow-md rounded-lg min-w-full'>
            <thead className='bg-gray-100 dark:bg-gray-800'>
              <tr>
                <th className='px-6 py-3 font-medium text-gray-700 text-left text-sm dark:text-gray-300'>
                  Name
                </th>
                <th className='px-6 py-3 font-medium text-gray-700 text-left text-sm dark:text-gray-300'>
                  Category
                </th>
                <th className='px-6 py-3 font-medium text-gray-700 text-left text-sm dark:text-gray-300'>
                  Price
                </th>
                <th className='px-6 py-3 font-medium text-gray-700 text-left text-sm dark:text-gray-300'>
                  Sale Price
                </th>
                <th className='px-6 py-3 font-medium text-center text-gray-700 text-sm dark:text-gray-300'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template) => (
                <tr key={template.id} className='border-t'>
                  <td className='px-6 py-4 text-gray-800 text-sm dark:text-gray-200'>
                    {template.name}
                  </td>
                  <td className='px-6 py-4 text-gray-800 text-sm dark:text-gray-200'>
                    {/* Display all categories as a comma-separated list */}
                    {template.categories
                      .map((category) => category.name)
                      .join(', ')}
                  </td>
                  <td className='px-6 py-4 text-gray-800 text-sm dark:text-gray-200'>
                    ${template.price.toFixed(2)}
                  </td>
                  <td className='px-6 py-4 text-gray-800 text-sm dark:text-gray-200'>
                    ${template.salePrice.toFixed(2)}
                  </td>
                  <td className='px-6 py-4 text-center'>
                    <div className='flex justify-center space-x-2'>
                      {/* Edit Icon */}
                      <Link
                        href={`/admin/products/edit/1`}
                        className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 dark:text-blue-400 transition-colors'>
                        <FaEdit className='inline-block w-5 h-5' />
                      </Link>
                      {/* Delete Product Component */}
                      <RestoreTemplate templateId={template.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DeletedTemplates;
