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
import { checkoutSchema } from '@/schema/payment/checkout-schema';
import Spinner from '@/components/common/spinner';
import { toast } from 'react-toastify';
import Message from '@/components/auth/message';
import { Session } from 'next-auth';
import { createOrder } from '@/actions/order/create-order';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// Extended Product type to include prices
type ExtendedProduct = Product & { prices: Price[] };

const Checkout = ({ session }: { session: Session | null }) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [orderState, orderAction] = useActionState(createOrder, {
    success: false,
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
      firstName: session?.user?.name?.split(' ')[0] || '',
      lastName: session?.user?.name?.split(' ')[1] || '',
      email: session?.user?.email || '',
      websites: '',
      note: '',
      paymentType: 'manual',
    },
    mode: 'onChange',
  });

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
                    const values = form.getValues();

                    if (values.paymentType !== 'manual') {
                      toast.warn(
                        'Only manual payment is available at the moment.',
                      );
                    }

                    orderAction({
                      productId: product.id,
                      quantity: quantity.toString(),
                      metaData: JSON.stringify(metaData),
                      email: values.email,
                      paymentMode: paymentMode as 'payment' | 'subscription',
                      firstName: values.firstName,
                      lastName: values.lastName,
                    });

                    localStorage.removeItem('productId');
                    localStorage.removeItem('quantity');
                    localStorage.removeItem('metaData');
                    localStorage.removeItem('paymentMode');
                  });
                }
              }}
              className='space-y-6'>
              <div className='space-y-4 pb-8 border-b'>
                <div className='flex flex-col justify-between gap-4'>
                  <h2 className='font-semibold text-xl'>Contact Information</h2>
                  <p className='text-sm'>
                    We'll use this information to process your order and keep
                    you updated.
                  </p>
                  {status === 'unauthenticated' && (
                    <div>
                      <Link href='/login'>
                        Already have an account? Please login
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

              {/* Payment Method Section */}
              <FormField
                control={form.control}
                name='paymentType'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Payment Mode</FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value); // Update the form state
                        }}
                        className='flex flex-col gap-2'>
                        <div className='flex items-center gap-4'>
                          <RadioGroupItem value='paypal' id='paypal' />
                          <Label htmlFor='paypal'>PayPal</Label>
                        </div>
                        <div className='flex items-center gap-4'>
                          <RadioGroupItem value='stripe' id='stripe' />
                          <Label htmlFor='stripe'>Stripe</Label>
                        </div>
                        <div className='flex items-center gap-4'>
                          <RadioGroupItem value='manual' id='manual' />
                          <Label htmlFor='manual'>Manual Payment</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Button
                  disabled={form.getValues('paymentType') !== 'manual'}
                  type='submit'
                  className='flex items-center gap-2 mb-6 py-6 w-full text-lg'>
                  {form.getValues('paymentType') !== 'manual'
                    ? 'Not Available'
                    : 'Complete Checkout'}{' '}
                  {pending && <Spinner />}
                </Button>

                {orderState.message && (
                  <Message
                    message={orderState.message}
                    type={orderState.success ? 'success' : 'error'}
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
                <ul className='list-disc list-inside'>
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
