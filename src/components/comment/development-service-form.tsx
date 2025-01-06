'use client';

import React, { ReactNode, useActionState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { developmentFormSubmissionAction } from '@/actions/form/development-service-form';

// Data Arrays
const websiteTypes = ['Blog', 'E-Commerce', 'Portfolio', 'Business'];
const budgets = ['$500-$1000', '$1000-$5000', '$5000-$10,000', 'Above $10,000'];
const projectTimelines = ['1 Week', '2 Weeks', '1 Month', 'More than 1 Month'];
const numberOfPages = Array.from({ length: 10 }, (_, i) => `${i + 1}`);
const functionalities = [
  'Blog',
  'E-Commerce',
  'Portfolio',
  'User Authentication',
  'SEO Optimization',
  'Contact Forms',
  'API Integration',
  'Custom Design',
];

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  typeOfWebsite: z.string().nonempty('Please select a type of website'),
  estimatedBudget: z.string().nonempty('Please enter your budget'),
  numberOfPages: z.string().nonempty('Please enter the number of pages'),
  projectTimeline: z.string().nonempty('Please enter the project timeline'),
  requiredFunctionalities: z
    .array(z.string())
    .nonempty('Please select at least one functionality'),
  sampleSites: z.string().optional(),
  additionalDetails: z.string().optional(),
});

type Props = {
  title: string;
  Icon: ReactNode;
};

const DevelopmentServiceForm = ({ Icon, title }: Props) => {
  const [state, action] = useActionState(developmentFormSubmissionAction, {
    success: true,
    message: '',
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requiredFunctionalities: [],
    },
  });

  return (
    <div id='getStarted' className='mx-auto mt-12 max-w-4xl'>
      <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-4xl dark:text-zinc-200'>
        {title}
      </h2>
      <p className='mx-auto mb-8 md:mb-12 max-w-3xl text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
        At 3Zero Digital, we deliver robust, scalable, and secure {title}
        solutions with virtually{' '}
        <span className='font-bold'>0 Vulnerability</span>,{' '}
        <span className='font-bold'>0 Downtime</span>, and{' '}
        <span className='font-bold'>0 Error</span>. Built for perfection.
      </p>
      <Form {...form}>
        <form
          action={action}
          className='relative space-y-5 dark:bg-gray-900 shadow-xl p-6 md:p-10 rounded-lg'>
          <div className='-top-10 left-1/2 absolute flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg rounded-full w-16 md:w-20 h-16 md:h-20 transform -translate-x-1/2'>
            {Icon}
          </div>
          {/* Name */}
          <FormField
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Your Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Your Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Type of Website */}
          <FormField
            name='typeOfWebsite'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Website</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent>
                      {websiteTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Estimated Budget */}
          <FormField
            name='estimatedBudget'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Budget</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select your budget' />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Number of Pages */}
          <FormField
            name='numberOfPages'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Pages</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select pages' />
                    </SelectTrigger>
                    <SelectContent>
                      {numberOfPages.map((page) => (
                        <SelectItem key={page} value={page}>
                          {page} Page{page !== '1' ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Timeline */}
          <FormField
            name='projectTimeline'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Timeline</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select timeline' />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTimelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Required Functionalities */}
          <FormField
            name='requiredFunctionalities'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Required Functionalities</FormLabel>
                <FormControl>
                  <div className='gap-4 grid grid-cols-2'>
                    {functionalities.map((func, index) => (
                      <div key={func} className='flex items-center space-x-2'>
                        <Checkbox
                          value={func}
                          id={'' + index}
                          checked={field.value?.includes(func)}
                          onCheckedChange={(checked) => {
                            const value = [...(field.value || [])];
                            if (checked) value.push(func);
                            else value.splice(value.indexOf(func), 1);
                            field.onChange(value);
                          }}
                        />
                        <label htmlFor={'' + index}>{func}</label>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Additional Comments */}
          <FormField
            name='additionalDetails'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Comments (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Add any additional details here...'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DevelopmentServiceForm;
