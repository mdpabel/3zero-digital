'use server';
import { auth } from '@/auth';
import OrderConfirmationEmailTemplate from '@/components/email/order-confirmation-email-template';
import ResetPasswordEmailTemplate from '@/components/email/reset-password-email-template';
import { encrypt } from '@/lib/jwt/jwt-token';
import { sendEmail } from '@/lib/send-email';
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
    couponId,
  } = orderSchema.parse(data);

  try {
    const session = await auth();
    let userId: string | undefined = undefined; // Initialize userId as undefined

    if (session) {
      // If the session exists, fetch the user
      const user = await prisma.user.findFirst({
        where: { email: session.user?.email },
      });
      if (!user) throw new Error("User doesn't exist");
      userId = user.id; // Assign the userId from the session
    } else {
      // If no session, check if the user exists by email
      const user = await prisma.user.findFirst({ where: { email } });

      if (user) {
        return {
          success: false,
          accountExist: true,
          message:
            'We found an existing account associated with this email address. Please log in to proceed with checkout.',
        };
      }

      if (!user) {
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

    if (!userId) {
      throw new Error('User ID is not assigned');
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
      });
      if (!product) throw new Error('Product not found');
      if (!product.price) throw new Error('Price not found');
      price = product.price || 0;
      productName = product.name;
    }

    // const parsedMetaData =
    //   metaData && metaData !== 'undefined' ? JSON.parse(metaData) : {};

    // fetch coupon
    let coupon = undefined;

    if (couponId) {
      coupon = await prisma.coupon.findUnique({
        where: { id: couponId },
      });
    }

    if (coupon) {
      if (coupon.discountType === 'FLAT' && coupon.discount < price) {
        price = price - coupon.discount;
      } else if (coupon.discountType === 'PERCENTAGE') {
        price = price - (price * coupon.discount) / 100;
      }
    }

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
          // metadata: parsedMetaData,
          couponId: coupon?.id,
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

    try {
      // Step 3: Send confirmation email
      await sendEmail({
        name: `${firstName} ${lastName}`,
        subject: 'Order Confirmation',
        to: email,
        react: OrderConfirmationEmailTemplate({
          customerName: `${firstName} ${lastName}`,
          orderId: result.order.id,
          productName,
          productPrice: `$${price.toFixed(2)}`,
        }),
      });
    } catch (error) {
      console.log('Error sending order confirmation email', error);
    }

    try {
      // Generate a JWT for the password reset with a 1-hour expiration
      const resetToken = await encrypt({
        userId: userId,
      });

      // Create the reset URL with the JWT token
      const resetUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/update-password?token=${resetToken}`;

      // Send the reset password email with the token (use your email service)
      await sendEmail({
        to: email,
        subject: 'Password Reset Request',
        replyTo: 'no-reply@3zerodigital.com',
        name: firstName + ' ' + lastName,
        react: ResetPasswordEmailTemplate({
          name: firstName + ' ' + lastName,
          resetLink: resetUrl,
        }),
      });
    } catch (error) {
      console.log('Error sending password reset email', error);
    }

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
