'use server';

import { auth } from '@/auth';
import prisma from '@/prisma/db';
import { revalidatePath } from 'next/cache';

export const deleteOrder = async (orderId: string) => {
  const session = await auth();

  if (process.env.NODE_ENV === 'production') {
    return {
      success: false,
      message: 'Only super admin can delete the orders.',
    };
  }

  if (!session || !session.user || session.user.role !== 'ADMIN') {
    return {
      success: false,
      message: 'You are not authorized to delete order',
    };
  }

  try {
    await prisma.order.delete({
      where: {
        id: orderId,
      },
    });

    revalidatePath('/admin/orders');

    return {
      success: true,
      message: 'Order deleted',
    };
  } catch (error: any) {
    console.log(error);

    return {
      success: true,
      message: error.message || 'Something went wrong',
    };
  }
};
