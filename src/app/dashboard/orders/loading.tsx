import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const tableHeaders = [
  'Order Number',
  'Date',
  'Status',
  'Total',
  'Items',
  'Actions',
];
const pageTitle = 'Your Orders';

const TableSkeleton = () => {
  return (
    <div className='bg-white dark:bg-[#030712] px-10 py-10 md:py-20'>
      <div className='mx-auto max-w-6xl container'>
        <h1 className='mb-6 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
          {pageTitle}
        </h1>

        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeaders.map((heading) => (
                  <TableHead key={heading}>{heading}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <TableRow key={i}>
                    {Array(6)
                      .fill(0)
                      .map((_, j) => (
                        <TableCell key={j}>
                          <div className='bg-gray-300 dark:bg-zinc-700 rounded w-full h-4 animate-pulse'></div>
                        </TableCell>
                      ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
