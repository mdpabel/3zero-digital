import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ComponentWrapper from '@/components/common/component-wrapper';

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
    <div className='py-10 md:py-20'>
      <ComponentWrapper>
        <h1 className='mb-6 font-bold text-zinc-800 dark:text-zinc-200 text-3xl md:text-5xl'>
          {pageTitle}
        </h1>

        <div
          style={{
            maxWidth: '100vw',
          }}
          className='w-full overflow-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeaders.map((heading) => (
                  <TableHead className='text-nowrap' key={heading}>
                    {heading}
                  </TableHead>
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
      </ComponentWrapper>
    </div>
  );
};

export default TableSkeleton;
