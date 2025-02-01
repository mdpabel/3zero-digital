'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { applyCoupon } from '@/actions/coupon/apply-coupon';
import { useToast } from '@/hooks/use-toast';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Spinner from '@/components/common/spinner';

const couponSchema = z.object({
  coupon: z
    .string()
    .min(2, {
      message: 'Coupon must be at least 2 characters.',
    })
    .max(30),
});

const CouponForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const { toast } = useToast();
  const [pending, setPending] = useState(false);
  const form = useForm<z.infer<typeof couponSchema>>({
    resolver: zodResolver(couponSchema),
    defaultValues: {
      coupon: '',
    },
  });

  async function onSubmit(values: z.infer<typeof couponSchema>) {
    setPending(true);
    const { message, success, coupon } = await applyCoupon(values.coupon);
    if (message) {
      toast({
        title: message,
        variant: success ? 'default' : 'destructive',
      });
    }

    const params = new URLSearchParams(searchParams);

    const existingCouponId = params.get('couponId');

    if (existingCouponId) {
      params.delete('couponId');
    }

    if (coupon && coupon?.id) {
      params.set('couponId', coupon?.id);
      params.set('discount', coupon?.discount.toString());
      params.set('discountType', coupon?.discountType);
    }
    router.replace(pathName + '?' + params.toString());
    setPending(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='py-5'>
        <div className='gap-4 grid grid-cols-1'>
          <FormField
            control={form.control}
            name='coupon'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coupon</FormLabel>
                <FormControl>
                  <Input placeholder='OFF20' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>{pending ? <Spinner /> : 'Apply'}</Button>
        </div>
      </form>
    </Form>
  );
};

export default CouponForm;
