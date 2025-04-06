'use server';
import { auth } from '@/auth';
import OrderConfirmationEmailTemplate from '@/components/email/order-confirmation-email-template';
import ResetPasswordEmailTemplate from '@/components/email/reset-password-email-template';
import { encrypt } from '@/lib/jwt/jwt-token';
import { sendEmail } from '@/lib/send-email';
import prisma from '@/prisma/db';
import { z } from 'zod';
import { orderSchema } from '@/schema/payment/order-schema';

// Custom type definition directly in the function
type OrderData = {
  productId?: string; // Only used if productType is 'product'
  templateId?: string; // Only used if productType is 'template'
  quantity: number;
  metaData?: string;
  email: string;
  productType: 'product' | 'template'; // This determines if we are creating a product or template order
  firstName: string;
  lastName: string;
  note?: string;
  websites?: string;
  couponId?: string;
};

export const createAdminOrder = async (data: OrderData) => {
  // Destructuring and validating input data
  const {
    productId,
    templateId,
    quantity,
    metaData,
    email,
    productType,
    firstName,
    lastName,
    note,
    websites,
    couponId,
  } = data;

  let userId: string | undefined = undefined; // Initialize userId as undefined

  if (email) {
    // If the session exists, fetch the user
    const user = await prisma.user.findFirst({
      where: { email: email },
    });
    if (!user) throw new Error("User doesn't exist");
    userId = user.id; // Assign the userId from the session
  } else {
    // If no session, check if the user exists by email
    const user = await prisma.user.findFirst({ where: { email } });

    if (user) {
      userId = user.id;
    } else if (!user) {
      // If no user exists, create a new one
      const newUser = await prisma.user.create({
        data: {
          email,
          name: `${firstName} ${lastName}`,
        },
      });
      userId = newUser.id; // Assign the new user's id to userId
    }
  }

  try {
    let dbProductId = productId;
    let dbTemplateId = templateId;
    let price = 0;

    if (productId) {
      const product = await prisma.product.findUnique({
        where: {
          id: productId,
        },
      });
      if (!product) {
        throw new Error('Product not found');
      }
      dbProductId = product.id;
      price = product.price;
    }

    if (templateId) {
      const template = await prisma.template.findUnique({
        where: {
          id: templateId,
        },
      });
      if (!template) {
        throw new Error('Template not found');
      }
      dbProductId = template.id;
      dbTemplateId = template.id;
      price = template.price;
    }

    // Use a transaction for atomicity
    const result = await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          productId: dbProductId!,
          // templateId: dbTemplateId,
          quantity: parseInt(quantity.toString()),
          total: price,
          userId: userId!,
          note,
          websiteDetails: websites,
          couponId: couponId ? couponId : null,
        },
      });

      // Step 2: Create the payment
      const payment = await tx.payment.create({
        data: {
          orderId: order.id,
          amount: order.total,
          metadata: {
            email,
            note,
            websites,
          },
        },
      });

      // Create a welcome message automatically after the order is created
      await tx.message.create({
        data: {
          content:
            "Thank you for your order! We're excited to start working on your service. Please provide any additional details you’d like us to know.",
          userId,
          orderId: order.id, // Link the message to the order
          isAdmin: false, // Customer message
        },
      });

      return { order, payment };
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create order');
  }
};
