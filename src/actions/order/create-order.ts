'use server';

import { auth } from '@/auth';
import OrderConfirmationEmailTemplate from '@/components/email/order-confirmation-email-template';
import { sendEmail } from '@/lib/send-email';
import { stripe } from '@/lib/stripe/stripe';
import prisma from '@/prisma/db';
import { paymentIntentSchema } from '@/schema/payment/payment-intent-schema';
import { z } from 'zod';

export const createOrder = async (
  _: any,
  payload: z.infer<typeof paymentIntentSchema>,
) => {
  try {
    const {
      productId,
      quantity,
      paymentMode,
      metaData,
      email,
      productType,
      firstName,
      lastName,
      note,
      websites,
    } = paymentIntentSchema.parse(payload);

    // Check if there is an active session
    const session = await auth();
    let userId: string;

    if (session) {
      // Use the existing account if the session exists
      const user = await prisma.user.findFirst({
        where: {
          email: session.user?.email,
        },
      });

      if (!user) {
        throw new Error("User doesn't exist");
      }

      userId = user.id;
    } else {
      // Check if a user already exists with the given email
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (!user) {
        // Step 1: Create a Stripe customer
        const stripeCustomer = await stripe.customers.create({
          email: email,
          name: `${firstName} ${lastName}`,
        });

        // Step 2: Create the new user in the database
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

    if (!userId) {
      throw new Error('User not found');
    }

    let templateId: string | undefined = undefined;

    if (productType === 'template') {
      templateId = productId;
    }

    let price: number; // Default value for price
    let productName: string;

    if (productType === 'template') {
      const fetchedTemplate = await prisma.template.findUnique({
        where: {
          id: templateId,
        },
      });

      if (!fetchedTemplate) {
        throw new Error('Template not found');
      }

      price = fetchedTemplate.price;
      productName = fetchedTemplate.name;
    } else {
      const fetchedProduct = await prisma.product.findUnique({
        where: {
          id: productId,
        },
        include: {
          prices: true,
        },
      });

      if (!fetchedProduct) {
        throw new Error('Product not found');
      }

      if (fetchedProduct.type === 'STANDARD') {
        price = fetchedProduct.prices[0]?.unitAmount; // Default to 0 if no price is found
        productName = fetchedProduct.name;
      } else {
        // Handle other product types if necessary
        throw new Error('Not implemented yet');
      }
    }

    const parsedMetaData = metaData ? JSON.parse(metaData) : {};

    // Check if the product or template ID is provided

    if (!productId || !price) {
      throw new Error('Product ID or price not found');
    }

    // Create the order in the database
    const order = await prisma.order.create({
      data: {
        userId,
        productId: productId ? productId : templateId!,
        quantity: parseInt(quantity),
        total: price * parseInt(quantity),
        metadata: parsedMetaData,
        templateId,
        note,
        websiteDetails: websites,
      },
    });

    try {
      await sendEmail({
        name: `${firstName} ${lastName}`,
        subject: 'Order Confirmation',
        to: email,
        react: OrderConfirmationEmailTemplate({
          customerName: `${firstName} ${lastName}`,
          orderId: order.id,
          productName: productName,
          productPrice: `$${price}`,
        }),
      });
    } catch (error) {
      console.log(error);
    }

    return {
      success: true,
      message: 'Order created successfully',
      order,
    };
  } catch (error: any) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(error);
      return {
        success: false,
        message: error.message || 'Error creating order',
      };
    } else {
      throw new Error(error);
    }
  }
};
