import { FaCode } from 'react-icons/fa';
import SelectInput from '@/components/development/select';
import Input from '@/components/development/input';
import CheckboxGroup from '@/components/development/checkbox-group';
import Textarea from '@/components/development/textarea';
import FormButton from '@/components/common/form-button';
import { nextJsFullStackFormSubmission } from '@/actions/services-form/nextjs-fullstack-form-submission';

export const dynamic = 'force-static';

export default function NextJsFullStackDevelopment() {
  const projectTypes = [
    { value: 'Web Application', label: 'Web Application' },
    { value: 'E-commerce Platform', label: 'E-commerce Platform' },
    { value: 'Custom API Development', label: 'Custom API Development' },
    { value: 'SaaS', label: 'Software as a Service (SaaS)' },
    { value: 'CMS', label: 'Content Management System (CMS)' },
    { value: 'Enterprise Solution', label: 'Enterprise Solution' },
    { value: 'Other', label: 'Other' },
  ];

  const budgetOptions = [
    { value: '2000-5000', label: '$2,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-20000', label: '$10,000 - $20,000' },
    { value: '20000+', label: '$20,000+' },
  ];

  const timelineOptions = [
    { value: '1-3 months', label: '1-3 months' },
    { value: '3-6 months', label: '3-6 months' },
    { value: '6-9 months', label: '6-9 months' },
    { value: '9+ months', label: '9+ months' },
  ];

  const functionalitiesOptions = [
    { value: 'Authentication', label: 'Authentication' },
    { value: 'Database Management', label: 'Database Management' },
    { value: 'Custom API Integration', label: 'Custom API Integration' },
    {
      value: 'Real-time Features',
      label: 'Real-time Features (e.g., WebSockets)',
    },
    {
      value: 'Server-side Rendering (SSR)',
      label: 'Server-side Rendering (SSR)',
    },
    { value: 'Admin Dashboard', label: 'Admin Dashboard' },
    {
      value: 'Static Site Generation (SSG)',
      label: 'Static Site Generation (SSG)',
    },
    { value: 'Payment Gateway', label: 'Payment Gateway' },
    {
      value: 'Third-party Service Integration',
      label: 'Third-party Service Integration',
    },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div className='bg-white dark:bg-[#0B1120] px-4 md:px-20 py-12 md:py-24'>
      <div className='mx-auto w-full max-w-4xl'>
        <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Next.js Full Stack Development
        </h2>
        <p className='mx-auto mb-8 md:mb-12 max-w-3xl text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
          At 3Zero Digital, we build robust, scalable, and cutting-edge
          full-stack applications with{' '}
          <span className='font-bold text-zinc-800 dark:text-zinc-200'>
            0 Vulnerability
          </span>
          ,{' '}
          <span className='font-bold text-zinc-800 dark:text-zinc-200'>
            0 Downtime
          </span>
          , and{' '}
          <span className='font-bold text-zinc-800 dark:text-zinc-200'>
            0 Error
          </span>
          . Designed for excellence and scalability.
        </p>

        <div className='mt-12'>
          <form
            action={nextJsFullStackFormSubmission}
            method='POST'
            className='relative bg-white dark:bg-gray-900 shadow-xl p-6 md:p-10 rounded-lg'>
            <div className='-top-10 left-1/2 absolute flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg rounded-full w-16 md:w-20 h-16 md:h-20 transform -translate-x-1/2'>
              <FaCode className='text-2xl text-white md:text-3xl' />
            </div>

            <SelectInput
              id='projectType'
              label='Type of Project'
              name='projectType'
              options={projectTypes}
              required
            />
            <SelectInput
              id='budget'
              label='Estimated Budget'
              name='budget'
              options={budgetOptions}
              required
            />
            <SelectInput
              id='timeline'
              label='Project Timeline'
              name='timeline'
              options={timelineOptions}
              required
            />
            <CheckboxGroup
              idPrefix='functionalities'
              label='Required Functionalities'
              name='functionalities'
              options={functionalitiesOptions}
            />
            <Input
              id='sampleSites'
              label='Sample Sites or Design Links'
              name='sampleSites'
              placeholder='Paste your sample site or design link here'
              type='url'
            />
            <Input
              id='name'
              label='Your Name'
              name='name'
              placeholder='Enter your name'
              required
            />
            <Input
              id='email'
              label='Email Address'
              name='email'
              placeholder='Enter your email'
              required
            />
            <Textarea
              id='message'
              label='Additional Details or Questions'
              name='message'
              placeholder='Provide any additional details about your project'
            />

            <FormButton />
          </form>
        </div>
      </div>
    </div>
  );
}
