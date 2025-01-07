'use server';
import { auth } from '@/auth';
import OrderConfirmationEmailTemplate from '@/components/email/order-confirmation-email-template';
import { sendEmail } from '@/lib/send-email';
import { stripe } from '@/lib/stripe/stripe';
import prisma from '@/prisma/db';
import { orderSchema } from '@/schema/payment/order-schema';
import { z } from 'zod';

export const createOrder = async (data: z.infer<typeof orderSchema>) => {
  const {
    productId,
    quantity,
    metaData,
    email,
    productType,
    firstName,
    lastName,
    note,
    websites,
  } = orderSchema.parse(data);

  console.log(data.metaData);

  try {
    const session = await auth();
    let userId: string;

    if (session) {
      const user = await prisma.user.findFirst({
        where: { email: session.user?.email },
      });
      if (!user) throw new Error("User doesn't exist");
      userId = user.id;
    } else {
      const user = await prisma.user.findFirst({ where: { email } });
      if (!user) {
        const stripeCustomer = await stripe.customers.create({
          email,
          name: `${firstName} ${lastName}`,
        });
        const newUser = await prisma.user.create({
          data: {
            email,
            name: `${firstName} ${lastName}`,
            stripeCustomerId: stripeCustomer.id,
          },
        });
        userId = newUser.id;
      } else {
        userId = user.id;
      }
    }

    let price: number;
    let productName: string;

    if (productType === 'template') {
      const template = await prisma.template.findUnique({
        where: { id: productId },
      });
      if (!template) throw new Error('Template not found');
      if (!template.price) throw new Error('Price not found');
      price = template.price;
      productName = template.name;
    } else {
      const product = await prisma.product.findUnique({
        where: { id: productId },
        include: { prices: true },
      });
      if (!product) throw new Error('Product not found');
      if (!product.prices[0]?.unitAmount) throw new Error('Price not found');
      price = product.prices[0]?.unitAmount || 0;
      productName = product.name;
    }

    const parsedMetaData = metaData ? JSON.parse(metaData) : {};

    // Use a transaction for atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Step 1: Create the order
      const order = await tx.order.create({
        data: {
          userId,
          quantity: parseInt(quantity),
          total: price * parseInt(quantity),
          productId,
          note,
          websiteDetails: websites,
          metadata: parsedMetaData,
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

      return { order, payment };
    });

    // Step 3: Send confirmation email
    await sendEmail({
      name: `${firstName} ${lastName}`,
      subject: 'Order Confirmation',
      to: email,
      react: OrderConfirmationEmailTemplate({
        customerName: `${firstName} ${lastName}`,
        orderId: result.order.id,
        productName,
        productPrice: `$${price}`,
      }),
    });

    return {
      success: true,
      message: 'Order created successfully',
      order: result.order,
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: error.message || 'Error creating order',
    };
  }
};
