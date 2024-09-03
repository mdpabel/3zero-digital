import { FaWordpress } from 'react-icons/fa';
import { redirect } from 'next/navigation';
import SelectInput from '@/components/development/select';
import Input from '@/components/development/input';
import CheckboxGroup from '@/components/development/checkbox-group';
import Textarea from '@/components/development/textarea';
import FormButton from '@/components/common/form-button';
import { wordpressFormSubmission } from '@/actions/wordpress-form-submission';

export default function WordPress() {
  const websiteTypes = [
    { value: 'Blog', label: 'Blog' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Portfolio', label: 'Portfolio' },
    { value: 'Newspaper', label: 'Newspaper' },
    { value: 'Magazine', label: 'Magazine' },
    { value: 'Educational', label: 'Educational' },
    { value: 'Non-Profit', label: 'Non-Profit' },
    { value: 'Other', label: 'Other' },
  ];

  const budgetOptions = [
    { value: '200-500', label: '$200 - $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-5000', label: '$1,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000+', label: '$10,000+' },
  ];

  const timelineOptions = [
    { value: '1-2 months', label: '1-2 months' },
    { value: '2-4 months', label: '2-4 months' },
    { value: '4-6 months', label: '4-6 months' },
    { value: '6+ months', label: '6+ months' },
  ];

  const functionalitiesOptions = [
    { value: 'Contact Form', label: 'Contact Form' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Search', label: 'Search' },
    { value: 'Blog', label: 'Blog' },
    { value: 'Newsletter Signup', label: 'Newsletter Signup' },
    { value: 'User Login/Registration', label: 'User Login/Registration' },
    { value: 'Booking System', label: 'Booking System' },
    { value: 'Portfolio/Gallery', label: 'Portfolio/Gallery' },
    { value: 'Social Media Integration', label: 'Social Media Integration' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div className='bg-white dark:bg-[#0B1120] px-4 md:px-20 py-12 md:py-24'>
      <div className='mx-auto w-full max-w-4xl'>
        <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          WordPress Site Design & Development
        </h2>
        <p className='mx-auto mb-8 md:mb-12 max-w-3xl text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
          At 3Zero Digital, we develop WordPress sites with{' '}
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
          . Built for perfection.
        </p>

        <div className='mt-12'>
          <form
            action={wordpressFormSubmission}
            method='POST'
            className='relative bg-white dark:bg-gray-900 shadow-xl p-6 md:p-10 rounded-lg'>
            <div className='-top-10 left-1/2 absolute flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg rounded-full w-16 md:w-20 h-16 md:h-20 transform -translate-x-1/2'>
              <FaWordpress className='text-2xl text-white md:text-3xl' />
            </div>

            <SelectInput
              id='websiteType'
              label='Type of Website'
              name='websiteType'
              options={websiteTypes}
              required
            />
            <SelectInput
              id='budget'
              label='Estimated Budget'
              name='budget'
              options={budgetOptions}
              required
            />
            <Input
              id='pages'
              label='Number of Pages'
              name='pages'
              placeholder='Enter number of pages'
              required
              type='number'
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
