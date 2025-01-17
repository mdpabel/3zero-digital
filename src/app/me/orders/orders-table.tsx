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
import { cn, formatDate } from '@/lib/utils';
import { FaEye } from 'react-icons/fa';
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
import {
  Order,
  OrderStatus,
  Payment,
  PaymentStatus,
  Product,
} from '@prisma/client';

const OrdersTable = ({
  orders,
}: {
  orders: (Order & {
    product: Product;
    payment: Payment[]; // Include related payments
  })[];
}) => {
  const columns = useMemo<
    ColumnDef<Order & { product: Product; payment: Payment[] }>[]
  >(
    () => [
      {
        header: 'Service',
        accessorKey: 'product.name',
        cell: (info) => info.getValue<string>(),
      },
      {
        header: 'Date',
        accessorKey: 'createdAt',
        cell: (info) => formatDate(info.getValue<string>()),
      },
      {
        header: 'Order Status',
        accessorKey: 'status',
        cell: (info) => {
          const status = info.getValue<OrderStatus>();
          return status.charAt(0).toUpperCase() + status.slice(1);
        },
      },
      {
        header: 'Total',
        accessorKey: 'total',
        cell: (info) => `$${info.getValue<number>().toFixed(2)}`,
      },
      {
        header: 'Payment Status',
        accessorKey: 'paymentStatus',
        cell: (info) => {
          const payments = info.row.original.payment;
          return payments.length
            ? payments
                .map(
                  (payment) =>
                    payment.status.charAt(0).toUpperCase() +
                    payment.status.slice(1),
                )
                .join(', ')
            : 'No Payment';
        },
      },
      {
        header: 'Actions',
        accessorKey: 'id',
        cell: (info) => (
          <div className='flex space-x-2'>
            <Link href={`/me/orders/${info.getValue<string>()}`}>View</Link>
            {info.row.original.payment.some(
              (payment) => payment.status === 'unpaid',
            ) && (
              <a
                href={`/order-details/${info.getValue<string>()}`}
                className='text-blue-500 underline'>
                Pay Now
              </a>
            )}
          </div>
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
    <div className='w-full overflow-auto'>
      <Table className='relative'>
        <TableCaption>Your recent orders</TableCaption>
        <TableHeader>
          <TableRow>
            {table.getFlatHeaders().map((header) => (
              <TableHead key={header.id} className='text-nowrap'>
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
                  <TableCell key={cell.id} className={cn('py-5 text-nowrap')}>
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

      <div className='flex flex-wrap justify-between items-center gap-2 mt-4 max-w-full'>
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
