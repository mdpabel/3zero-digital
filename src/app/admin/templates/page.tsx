'use client';
import Link from 'next/link';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import DeleteTemplate from './delete-template';

const AllTemplates = () => {
  // Dummy data for templates
  const templates = [
    {
      id: '1',
      name: 'Modern Portfolio Template',
      description: 'A sleek portfolio template for modern creatives.',
      price: 59.0,
      salePrice: 49.0,
      images: [
        'https://via.placeholder.com/300x200?text=Image+1',
        'https://via.placeholder.com/300x200?text=Image+2',
      ],
      category: 'Portfolio',
    },
    {
      id: '2',
      name: 'Ecommerce Store Template',
      description: 'A powerful template for online stores.',
      price: 89.0,
      salePrice: 79.0,
      images: [
        'https://via.placeholder.com/300x200?text=Image+1',
        'https://via.placeholder.com/300x200?text=Image+2',
      ],
      category: 'Ecommerce',
    },
    {
      id: '3',
      name: 'Blog & Magazine Template',
      description: 'Perfect for bloggers and online magazines.',
      price: 69.0,
      salePrice: 59.0,
      images: [
        'https://via.placeholder.com/300x200?text=Image+1',
        'https://via.placeholder.com/300x200?text=Image+2',
      ],
      category: 'Blogging',
    },
  ];

  const handleEdit = (id) => {
    console.log(`Edit template with id: ${id}`);
    // Add edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete template with id: ${id}`);
    // Add delete logic here
  };

  const handleAddNew = () => {
    console.log('Add new template');
    // Add logic for adding new template
  };

  return (
    <div className='px-10 py-10'>
      {/* Header */}
      <header className='flex justify-between items-center mb-10'>
        <h1 className='font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
          Manage Templates
        </h1>
        <button
          onClick={handleAddNew}
          className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-md px-6 py-3 rounded-lg text-white'>
          Add New Template
        </button>
      </header>

      {/* Template Table */}
      <div className='overflow-x-auto'>
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
                  {template.category}
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
                    <DeleteTemplate />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTemplates;
