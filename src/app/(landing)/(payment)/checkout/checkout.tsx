'use client';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Price, Product } from '@prisma/client';
import { useCheckout } from './use-checkout';

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(50),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(50),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  websites: z.string().optional(),
  note: z.string().optional(),
});

const Checkout = ({
  quantity,
  product,
  metaData,
}: {
  quantity: number;
  product: Product & { prices: Price[] };
  metaData?: string[];
}) => {
  useCheckout();
  const { data } = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      websites: '',
      note: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Submitted Data:', data);
  };

  return (
    <div className='mx-auto py-10 p-4 max-w-6xl'>
      <div className='gap-10 grid grid-cols-1 md:grid-cols-5'>
        {/* Checkout Form */}
        <div className='col-span-3'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='space-y-6'>
              {/* Contact Information */}
              <div className='space-y-4 pb-8 border-b'>
                <div className='flex justify-between items-center gap-4'>
                  <div>
                    <h2 className='font-semibold text-xl'>
                      Contact Information
                    </h2>
                    <p className='text-gray-600 text-sm'>
                      We'll use this information to process your order and keep
                      you updated.
                    </p>
                  </div>
                  <Link
                    href='/login?redirect_url=checkout'
                    className='text-blue-600 hover:underline'>
                    Already have an account? Login
                  </Link>
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
                <p className='mb-4 text-gray-600 text-sm'>
                  Provide your website URLs below. If you have multiple,
                  separate them with commas.
                </p>

                <FormField
                  control={form.control}
                  name='websites'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>Website URLs</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='https://www.example1.com, https://www.example2.com'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Add multiple website URLs separated by commas.
                      </FormDescription>
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

              <Button type='submit' className='py-6 w-full text-lg'>
                Complete Checkout
              </Button>
            </form>
          </Form>
        </div>

        {/* Order Summary */}
        <div className='col-span-2'>
          <div className='shadow-sm p-6 border rounded-lg'>
            <h3 className='mb-4 pb-4 border-b font-semibold text-xl'>
              Order Summary
            </h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Product</h4>
                <p>{product.name}</p>
                <p className='text-gray-500 text-sm'>{product.description}</p>
              </div>
              <div>
                <h4 className='font-medium'>Quantity</h4>
                <p>{quantity}</p>
              </div>
              {metaData && metaData.length > 0 && (
                <div>
                  <h4 className='font-medium'>Additional Metadata</h4>
                  <ul className='text-gray-600 list-disc list-inside'>
                    {metaData.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className='flex justify-between items-center mt-6 pt-4 border-t'>
              <h4 className='font-medium'>Total</h4>
              <p className='font-bold text-lg'>
                ${(product.prices[0]?.unitAmount || 0) * quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
