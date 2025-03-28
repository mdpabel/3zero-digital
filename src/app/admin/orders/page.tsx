import prisma from '@/prisma/db';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowRight, Trash } from 'lucide-react';
import DeleteOrder from './delete-order';
import { MdDetails } from 'react-icons/md';
import Link from 'next/link';

const Page = async () => {
  // Fetch orders along with related product and payment information
  const orders = await prisma.order.findMany({
    include: {
      product: true, // Include product details
      user: true, // Include user details (to get customer email)
      payment: true, // Include payment details
    },
  });

  return (
    <div className='mx-auto p-6 container'>
      <h1 className='mb-4 font-semibold text-3xl'>Order and Payment Details</h1>

      {/* Orders Table */}
      <Table className='w-full'>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Customer Email</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Gateway</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5}>No orders found.</TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <TableRow key={order.id}>
                {/* Date */}
                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>

                {/* Display customer email */}
                <TableCell>{order.user?.email}</TableCell>

                {/* Display product name */}
                <TableCell>{order.product?.name}</TableCell>

                {/* Display total price */}
                <TableCell>${order.total.toFixed(2)}</TableCell>

                {/* Display quantity */}
                <TableCell>{order.quantity}</TableCell>

                {/* Payment Gateway */}
                <TableCell>{order.payment[0]?.gateway}</TableCell>

                {/* Display payment status */}
                <TableCell>
                  {order.payment.length > 0
                    ? order.payment[0]?.status // assuming one payment per order
                    : 'Not Paid'}
                </TableCell>

                {/* Action */}
                <TableCell className='flex items-center gap-2'>
                  {/* <DeleteOrder orderId={order.id} /> */}
                  <Link href={`/admin/orders/${order.id}`}>
                    <ArrowRight className='cursor-pointer' />
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
