'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createWebsiteHealthReport } from '@/actions/website-health-report/create-website-health-report';
import { blacklistData } from '@/app/(landing)/(services)/(maintenance)/blacklist-removal/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import Spinner from '@/components/common/spinner';

export const WebsiteHealthReportSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email format' }),
  websiteUrl: z.string().url({ message: 'Invalid website URL' }),
  blacklistVendors: z.array(z.string()).optional(),
  malwareScanDetails: z
    .string()
    .min(1, { message: 'Malware scan details are required' }),
  malwareScanScreenshot: z
    .string()
    .url({ message: 'Invalid URL for malware scan screenshot' }),
  isInfected: z.boolean(),
  seoDetails: z.string().min(1, { message: 'SEO details are required' }),
  seoScreenshot: z.string().url({ message: 'Invalid URL for SEO screenshot' }),
  hasSeoIssues: z.boolean(),
  performanceDetails: z
    .string()
    .min(1, { message: 'Performance details are required' }),
  performanceScreenshot: z
    .string()
    .url({ message: 'Invalid URL for performance screenshot' }),
  performanceScore: z
    .string()
    .min(0, { message: 'Performance score must be a positive number' }),
  additionalNotes: z
    .string()
    .min(1, { message: 'Additional notes are required' }),
  opened: z
    .number()
    .int()
    .min(0, { message: 'Opened count must be a positive number' })
    .default(0),
});

const WebsiteHealthReport = () => {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof WebsiteHealthReportSchema>>({
    resolver: zodResolver(WebsiteHealthReportSchema),
    defaultValues: {
      name: '',
      email: '',
      websiteUrl: '',
      blacklistVendors: [],
      malwareScanDetails: '',
      malwareScanScreenshot: '',
      isInfected: false,
      seoDetails: '',
      seoScreenshot: '',
      hasSeoIssues: false,
      performanceDetails: '',
      performanceScreenshot: '',
      performanceScore: '',
      additionalNotes: '',
      opened: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof WebsiteHealthReportSchema>) => {
    setPending(true);
    const { message, success } = await createWebsiteHealthReport(data);

    toast({
      title: message,
      variant: success ? 'default' : 'destructive',
    });

    setPending(false);
  };

  return (
    <div className='shadow-md mx-auto p-8 border rounded-xl max-w-3xl'>
      <h2 className='mb-4 font-semibold text-2xl'>
        Create Website Analysis Report
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          {/* Name */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Website URL */}
          <FormField
            control={form.control}
            name='websiteUrl'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input type='url' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Blacklist Vendors */}
          <FormField
            control={form.control}
            name='blacklistVendors'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blacklist Vendors</FormLabel>
                <FormControl>
                  <select
                    multiple
                    className='p-2 border rounded-md w-full h-32'
                    value={field.value} // Ensures selected values persist
                    onChange={(e) => {
                      const selectedOptions = Array.from(
                        e.target.selectedOptions,
                        (option) => option.value,
                      );
                      field.onChange(selectedOptions); // Updates the field value as an array
                    }}>
                    {blacklistData.map((vendor) => (
                      <option key={vendor.name} value={vendor.name}>
                        {vendor.name}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Malware Scan Details */}
          <FormField
            control={form.control}
            name='malwareScanDetails'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Malware Scan Report Details</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Malware Scan Screenshot */}
          <FormField
            control={form.control}
            name='malwareScanScreenshot'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Malware Scan Screenshot URL</FormLabel>
                <FormControl>
                  <Input type='url' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='isInfected'
            render={({ field }) => (
              <FormItem className='flex items-center gap-2'>
                <FormLabel>Is Infected</FormLabel>
                <FormControl>
                  <Input
                    type='checkbox'
                    className='w-4'
                    checked={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SEO Scan Details */}
          <FormField
            control={form.control}
            name='seoDetails'
            render={({ field }) => (
              <FormItem>
                <FormLabel>SEO Scan Report Details</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SEO Screenshot */}
          <FormField
            control={form.control}
            name='seoScreenshot'
            render={({ field }) => (
              <FormItem>
                <FormLabel>SEO Report Screenshot URL</FormLabel>
                <FormControl>
                  <Input type='url' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='hasSeoIssues'
            render={({ field }) => (
              <FormItem className='flex items-center gap-2'>
                <FormLabel>Has SEO issue</FormLabel>
                <FormControl>
                  <Input
                    type='checkbox'
                    className='w-4'
                    checked={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Performance Scan Details */}
          <FormField
            control={form.control}
            name='performanceDetails'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Performance Scan Report Details</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Performance Screenshot */}
          <FormField
            control={form.control}
            name='performanceScreenshot'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Performance Report Screenshot URL</FormLabel>
                <FormControl>
                  <Input type='url' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Performance Score */}
          <FormField
            control={form.control}
            name='performanceScore'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Performance Score</FormLabel>
                <FormControl>
                  <Input type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Additional Notes */}
          <FormField
            control={form.control}
            name='additionalNotes'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type='submit' className='p-5 w-full' disabled={pending}>
            {pending ? <Spinner /> : 'Generate Report'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WebsiteHealthReport;
