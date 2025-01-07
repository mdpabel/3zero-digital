'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { checkoutSchema } from '@/schema/payment/checkout-schema';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createOrder } from '@/actions/order/create-order';
import { toast, useToast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Spinner from '@/components/common/spinner';

type Props = {
  firstName?: string;
  lastName?: string;
  email?: string;
  isLoggedIn?: boolean;
  productId: string;
  quantity: string;
  metaData: string;
  productType: string;
};

const PlaceOrderForm = ({
  firstName,
  lastName,
  email,
  isLoggedIn = false,
  metaData,
  productId,
  quantity,
  productType,
}: Props) => {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName,
      lastName,
      email,
      websites: '',
      note: '',
    },
    mode: 'onChange',
  });

  async function onSubmit(values: z.infer<typeof checkoutSchema>) {
    setPending(true);
    const { message, success, order } = await createOrder({
      ...values,
      productType: productType as 'product' | 'template',
      productId,
      quantity,
      metaData,
    });

    if (success && order?.id) {
      toast.success('Order placed successfully!');
      router.push(`/order-details/${order.id}`);
    } else {
      toast.error(message);
    }

    setPending(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-4 pb-8 border-b'>
          <div className='space-y-4'>
            <h2 className='font-semibold text-xl'>Contact Information</h2>
            <p className='text-sm'>
              We’ll use this information to create an account on 3 Zero Digital,
              process your order, keep you updated, and ensure a smooth
              experience.
            </p>
            {!isLoggedIn && (
              <div className='text-sm'>
                <Link
                  href='/login?callbackUrl=place-order'
                  className='text-blue-600 hover:underline'>
                  Already have an account? Log in here.
                </Link>
              </div>
            )}
          </div>

          <div className='flex md:flex-row flex-col gap-4'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='John' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='example@domain.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Website Details */}
        <div>
          <h2 className='font-semibold text-xl'>Website Details</h2>
          <FormField
            control={form.control}
            name='websites'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Website URLs Or Template Name/URL</FormLabel>
                <FormControl>
                  <Textarea placeholder='https://example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Additional Notes */}
        <FormField
          control={form.control}
          name='note'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Any special requests or comments?'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='w-full'>
          {pending ? <Spinner /> : 'Place order'}
        </Button>
      </form>
    </Form>
  );
};

export default PlaceOrderForm;
