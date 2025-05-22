'use client';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import Checkout from '@/components/payment/checkout';
import ComponentWrapper from '@/components/common/component-wrapper';

const WEBSITE_TYPES = [
  'Personal Portfolio',
  'e-Commerce',
  'Freelancer Portfolio',
  'Professional Blogging',
] as const;

const DOMAIN_OPTIONS = [
  { value: '.xyz', label: '.xyz (Free)' },
  { value: '.com', label: '.com (+$10/year)' },
] as const; // Make it a readonly constant

// Extract domain values as a tuple
const DOMAIN_VALUES = ['.xyz', '.com'] as const;

const INCLUDED_FEATURES = [
  'SSL Certificate',
  'Business Email',
  'Initial Performance Optimization',
  'Security',
  'Easy to Use WordPress Dashboard Access',
];

const configuratorSchema = z.object({
  websiteType: z.enum(WEBSITE_TYPES),
  domain: z.enum(DOMAIN_VALUES),
  hosting: z.enum(['basic', 'premium', 'pro']),
  ram: z.number().min(1).max(2),
  storage: z.number().min(2).max(100),
});

const Configurator = () => {
  const form = useForm<z.infer<typeof configuratorSchema>>({
    resolver: zodResolver(configuratorSchema),
    defaultValues: {
      websiteType: 'Personal Portfolio',
      domain: '.xyz',
      hosting: 'basic',
      ram: 1,
      storage: 2,
    },
  });

  const calculatePrice = (values: z.infer<typeof configuratorSchema>) => {
    let price = 0; // Base price
    // website type
    if (values.websiteType !== 'e-Commerce') {
      price += 4;
    } else if (values.websiteType === 'e-Commerce') {
      price += 20;
    }

    // domain type
    if (values.domain === '.com') {
      price += 7;
    } else if (values.domain === '.xyz') {
      price += 3;
    }

    if (values.ram === 1) {
      price += 4;
    } else if (values.ram === 2) {
      price += 15;
    } else if (values.ram === 3) {
      price += 60;
    } else if (values.ram === 4) {
      price += 70;
    }

    price += values.storage * 0.5;

    return price.toFixed(2);
  };

  const onSubmit = (values: z.infer<typeof configuratorSchema>) => {
    console.log('Configuration submitted:', values);
  };

  return (
    <ComponentWrapper className='items-center gap-6 grid grid-cols-1 md:grid-cols-2 rounded-lg'>
      {/* Left Column: Customization Section */}
      <div>
        <h3 className='font-bold text-2xl text-center'>
          Customize your website development plan below:
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            {/* Website Type Selection */}
            <FormField
              name='websiteType'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website Type:</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Website Type' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {WEBSITE_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Domain Selection */}
            <FormField
              name='domain'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose Your Domain:</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Domain' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {DOMAIN_OPTIONS.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* RAM Selection */}
            <FormField
              name='ram'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select RAM (GB):</FormLabel>
                  <FormControl>
                    <input
                      type='range'
                      min='1'
                      max='4'
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      className='w-full'
                    />
                  </FormControl>
                  <div className='mt-1 text-sm'>{field.value} GB</div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Storage Selection */}
            <FormField
              name='storage'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Storage (GB):</FormLabel>
                  <FormControl>
                    <input
                      type='range'
                      min='2'
                      max='100'
                      step='10'
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      className='w-full'
                    />
                  </FormControl>
                  <div className='mt-1 text-sm'>{field.value} GB</div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type='submit'
              className='bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-300 mt-4 px-6 py-2 rounded font-semibold text-white dark:text-black'>
              Save Configuration
            </button>
          </form>
        </Form>
      </div>

      {/* Right Column: Pricing Summary */}
      <div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden'>
        <div className='bg-[#614385] py-6 text-white text-center'>
          <h3 className='font-bold text-2xl'>Affordable Website Development</h3>
          <p className='mt-2 font-extrabold text-5xl'>
            ${calculatePrice(form.watch())}
          </p>
          <p className='mt-2 text-lg'>One-time fee. No hidden charges.</p>
        </div>

        <div className='flex flex-col justify-between p-8'>
          <ul className='space-y-4 text-left'>
            <li className='flex items-center gap-3'>
              <FaCheck className='text-[#614385] text-lg' />
              Affordable {form.watch('websiteType')} Website
            </li>
            <li className='flex items-center gap-3'>
              <FaCheck className='text-[#614385] text-lg' />
              Domain: {form.watch('domain')}
            </li>
            <li className='flex items-center gap-3'>
              <FaCheck className='text-[#614385] text-lg' />
              RAM: {form.watch('ram')} GB
            </li>
            <li className='flex items-center gap-3'>
              <FaCheck className='text-[#614385] text-lg' />
              Storage: {form.watch('storage')} GB
            </li>

            {INCLUDED_FEATURES.map((feature) => (
              <li key={feature} className='flex items-center gap-3'>
                <FaCheck className='text-[#614385] text-lg' />
                {feature}
              </li>
            ))}
          </ul>

          <div className='pt-10 w-full'>
            <Checkout
              productId=''
              paymentMode='payment'
              quantity={1}
              className='w-full'
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Configurator;
