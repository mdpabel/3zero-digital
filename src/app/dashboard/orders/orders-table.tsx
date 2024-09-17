'use client';
import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Order } from 'swell-js';

const OrdersTable = ({ orders }: { orders: Order[] }) => {
  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: 'Order Number',
        accessorKey: 'number',
      },
      {
        header: 'Date',
        accessorKey: 'date_created',
        cell: (info) => formatDate(info.getValue<string>()),
      },
      {
        header: 'Status',
        accessorKey: 'status',
      },
      {
        header: 'Total',
        accessorKey: 'grand_total',
        cell: (info) => `$${info.getValue<number>().toFixed(2)}`,
      },
      {
        header: 'Items',
        accessorKey: 'item_quantity',
        cell: (info) =>
          `${info.getValue<number>()} item${
            info.getValue<number>() > 1 ? 's' : ''
          }`,
      },
      {
        header: 'Actions',
        accessorKey: 'id',
        cell: (info) => (
          <Link
            href={`/orders/${info.getValue<string>()}`}
            className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-4 py-2 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
            View Details
          </Link>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className='overflow-x-auto'>
      <Table>
        <TableCaption>Your recent orders</TableCaption>
        <TableHeader>
          <TableRow>
            {table.getFlatHeaders().map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder ? null : (
                  <div
                    className={`cursor-pointer ${
                      header.column.getCanSort() ? 'select-none' : ''
                    }`}
                    onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {header.column.getIsSorted() === 'asc' && ' 🔼'}
                    {header.column.getIsSorted() === 'desc' && ' 🔽'}
                  </div>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className='py-5'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='text-center'>
                No orders found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className='flex justify-between items-center mt-4'>
        <div>
          <button
            className='bg-gray-300 dark:bg-gray-700 disabled:opacity-50 px-4 py-2 rounded'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </button>
          <button
            className='bg-gray-300 dark:bg-gray-700 disabled:opacity-50 ml-2 px-4 py-2 rounded'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Next
          </button>
        </div>
        <span>
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <select
          className='bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded'
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}>
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OrdersTable;
