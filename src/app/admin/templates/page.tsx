import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import DeleteTemplate from './delete-template';
import prisma from '@/prisma/db';

const AllTemplates = async () => {
  // Fetch templates with their categories using the join table
  const templates = await prisma.template.findMany({
    where: {
      deleted: false,
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  return (
    <div className='px-10 py-10'>
      {/* Header */}
      <header className='flex justify-between items-center mb-10'>
        <h1 className='font-bold text-4xl'>Manage Templates</h1>
        <button className='bg-gradient-to-r from-[#614385] to-[#516395] hover:opacity-90 shadow-md px-6 py-3 rounded-lg text-white transition'>
          Add New Template
        </button>
      </header>

      {/* Template Table */}
      <div className='overflow-x-auto'>
        {templates.length === 0 ? (
          <div className='py-10 text-gray-500 text-center'>
            <p>No templates found. Start by adding a new template.</p>
          </div>
        ) : (
          <table className='bg-white dark:bg-gray-900 shadow-md rounded-lg min-w-full border-collapse'>
            <thead className='bg-gray-100 dark:bg-gray-800'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 font-medium text-gray-700 dark:text-gray-300 text-sm text-left'>
                  Name
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 font-medium text-gray-700 dark:text-gray-300 text-sm text-left'>
                  Categories
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 font-medium text-gray-700 dark:text-gray-300 text-sm text-left'>
                  Price
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 font-medium text-gray-700 dark:text-gray-300 text-sm text-left'>
                  Sale Price
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 font-medium text-gray-700 dark:text-gray-300 text-sm text-center'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template) => (
                <tr key={template.id} className='dark:border-gray-700 border-t'>
                  <td className='px-6 py-4 text-gray-800 dark:text-gray-200 text-sm'>
                    {template.name}
                  </td>
                  <td className='px-6 py-4 text-gray-800 dark:text-gray-200 text-sm'>
                    {/* Extract category names from the join table */}
                    {template.categories
                      .map((join) => join.category.name)
                      .join(', ') || 'No Categories'}
                  </td>
                  <td className='px-6 py-4 text-gray-800 dark:text-gray-200 text-sm'>
                    ${template.price.toFixed(2)}
                  </td>
                  <td className='px-6 py-4 text-gray-800 dark:text-gray-200 text-sm'>
                    ${template.salePrice.toFixed(2)}
                  </td>
                  <td className='px-6 py-4 text-center'>
                    <div className='flex justify-center space-x-2'>
                      {/* Edit Icon */}
                      <Link
                        href={`/admin/templates/${template.id}`}
                        aria-label={`Edit ${template.name}`}
                        className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 dark:text-blue-400 transition-colors'>
                        <FaEdit className='inline-block w-5 h-5' />
                      </Link>
                      {/* Delete Product Component */}
                      <DeleteTemplate templateId={template.id} />
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

export default AllTemplates;
