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

const couponSchema = z.object({
  coupon: z
    .string()
    .min(2, {
      message: 'Coupon must be at least 2 characters.',
    })
    .max(30),
});

const CouponForm = () => {
  const form = useForm<z.infer<typeof couponSchema>>({
    resolver: zodResolver(couponSchema),
    defaultValues: {
      coupon: '',
    },
  });

  function onSubmit(values: z.infer<typeof couponSchema>) {
    console.log(values);
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
          <Button type='submit'>Apply</Button>
        </div>
      </form>
    </Form>
  );
};

export default CouponForm;
