'use client';
import React, {
  useActionState,
  useEffect,
  useState,
  useTransition,
} from 'react';
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
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCheckout } from './use-checkout';
import { Price, Product } from '@prisma/client';
import CheckoutSkeleton from './checkout-skeleton';
import { createStripeSession } from '@/actions/payment/create-checkout-session';
import { checkoutSchema } from '@/schema/payment/checkout-schema';
import { signUpAction as SignUp } from '@/actions/auth/signup';
import Spinner from '@/components/common/spinner';
import { useToast } from 'react-toastify';
import Message from '@/components/auth/message';

// Extended Product type to include prices
type ExtendedProduct = Product & { prices: Price[] };

const Checkout = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [stripeSessionState, createStripeSessionAction] = useActionState(
    createStripeSession,
    {
      success: true,
      message: '',
      sessionUrl: '',
    },
  );
  const [signUpState, signUpAction] = useActionState(SignUp, {
    success: true,
    message: '',
  });

  const { isLocalStorageLoading } = useCheckout();
  const searchParams = useSearchParams();

  const productId = searchParams.get('productId');
  const quantityParam = searchParams.get('quantity') || '1';
  const metaDataParam = searchParams.get('metaData') || '';
  const paymentMode = searchParams.get('paymentMode') || 'payment';

  const [product, setProduct] = useState<ExtendedProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [quantity, setQuantity] = useState<number>(1);
  const [metaData, setMetaData] = useState<string[]>([]);

  // Form Setup
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      websites: '',
      note: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (stripeSessionState.sessionUrl) {
      router.push(stripeSessionState.sessionUrl);
    }
  }, [stripeSessionState.sessionUrl, router]);

  useEffect(() => {
    if (isLocalStorageLoading || !productId) return;

    setLoading(true);

    const parsedQuantity = Math.max(parseInt(quantityParam, 10), 1);
    const parsedMetaData = metaDataParam
      ? metaDataParam.split(',').map((item) => item.trim())
      : [];

    setQuantity(parsedQuantity);
    setMetaData(parsedMetaData);

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product data.');

        const data: { product: ExtendedProduct } = await response.json();

        if (!data.product || !data.product.id || !data.product.prices) {
          throw new Error('Invalid product data.');
        }

        setProduct(data.product);
      } catch (err) {
        setError('Product not found. Please check the product ID.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [isLocalStorageLoading, productId]);

  if (isLocalStorageLoading || loading) {
    return <CheckoutSkeleton />;
  }

  if (error || !productId || !product) {
    return (
      <div className='mt-10 text-center text-red-500'>
        <p>{error || 'Missing or invalid product information.'}</p>
      </div>
    );
  }

  return (
    <div className='mx-auto py-10 p-4 max-w-6xl'>
      <div className='gap-10 grid grid-cols-1 md:grid-cols-5'>
        {/* Checkout Form */}
        <div className='col-span-3'>
          <Form {...form}>
            <form
              action={async () => {
                const isValid = await form.trigger();
                if (isValid) {
                  startTransition(() => {
                    const signUpFormData = new FormData();
                    const values = form.getValues();
                    signUpFormData.append('firstName', values.firstName);
                    signUpFormData.append('lastName', values.lastName);
                    signUpFormData.append('email', values.email);

                    const checkoutSessionFormData = new FormData();
                    checkoutSessionFormData.append('email', values.email);
                    checkoutSessionFormData.append('productId', product.id);
                    checkoutSessionFormData.append(
                      'quantity',
                      quantity.toString(),
                    );
                    checkoutSessionFormData.append('paymentMode', paymentMode);
                    if (metaData) {
                      checkoutSessionFormData.append(
                        'metaData',
                        JSON.stringify(metaData),
                      );
                    }

                    signUpAction(signUpFormData);
                    createStripeSessionAction(checkoutSessionFormData);
                    localStorage.removeItem('productId');
                    localStorage.removeItem('quantity');
                    localStorage.removeItem('metaData');
                    localStorage.removeItem('paymentMode');
                  });
                }
              }}
              className='space-y-6'>
              <div className='space-y-4 pb-8 border-b'>
                <h2 className='font-semibold text-xl'>Contact Information</h2>
                <p className='text-gray-600 text-sm'>
                  We'll use this information to process your order and keep you
                  updated.
                </p>

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
                      <FormLabel>Website URLs</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='https://example.com'
                          {...field}
                        />
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

              <div>
                <Button
                  type='submit'
                  className='flex items-center gap-2 mb-6 py-6 w-full text-lg'>
                  Complete Checkout {pending && <Spinner />}
                </Button>
                {signUpState.message && (
                  <Message
                    message={signUpState.message}
                    type={signUpState.success ? 'success' : 'error'}
                  />
                )}

                {stripeSessionState.message && (
                  <Message
                    message={stripeSessionState.message}
                    type={stripeSessionState.success ? 'success' : 'error'}
                  />
                )}
              </div>
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
            </div>

            {metaData && metaData.length > 0 && (
              <div className='mt-6'>
                <h4 className='font-medium'>Additional Metadata</h4>
                <ul className='text-gray-600 list-disc list-inside'>
                  {metaData.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </div>
            )}

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
