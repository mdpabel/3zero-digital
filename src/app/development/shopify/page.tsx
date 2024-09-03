import { FaShopify } from 'react-icons/fa';
import { redirect } from 'next/navigation';
import SelectInput from '@/components/development/select';
import Input from '@/components/development/input';
import CheckboxGroup from '@/components/development/checkbox-group';
import Textarea from '@/components/development/textarea';
import { shopifyFormSubmission } from '@/actions/shopify-form-submission';

export default function Shopify() {
  const storeTypes = [
    { value: 'Fashion', label: 'Fashion' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Beauty', label: 'Beauty' },
    { value: 'Health', label: 'Health' },
    { value: 'Home Decor', label: 'Home Decor' },
    { value: 'Jewelry', label: 'Jewelry' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Other', label: 'Other' },
  ];

  const budgetOptions = [
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
    {
      value: 'Payment Gateway Integration',
      label: 'Payment Gateway Integration',
    },
    { value: 'Inventory Management', label: 'Inventory Management' },
    { value: 'SEO Optimization', label: 'SEO Optimization' },
    { value: 'Social Media Integration', label: 'Social Media Integration' },
    { value: 'Customer Reviews', label: 'Customer Reviews' },
    { value: 'Discount Coupons', label: 'Discount Coupons' },
    { value: 'Analytics & Reporting', label: 'Analytics & Reporting' },
    { value: 'Live Chat', label: 'Live Chat' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div className='bg-white dark:bg-[#0B1120] px-4 md:px-20 py-12 md:py-24'>
      <div className='mx-auto w-full max-w-4xl'>
        <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Shopify Store Design & Development
        </h2>
        <p className='mx-auto mb-8 md:mb-12 max-w-3xl text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
          At 3Zero Digital, we create Shopify stores with{' '}
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
            action={shopifyFormSubmission}
            method='POST'
            className='relative bg-white dark:bg-gray-900 shadow-xl p-6 md:p-10 rounded-lg'>
            <div className='-top-10 left-1/2 absolute flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg rounded-full w-16 md:w-20 h-16 md:h-20 transform -translate-x-1/2'>
              <FaShopify className='text-2xl text-white md:text-3xl' />
            </div>

            <SelectInput
              id='storeType'
              label='Type of Store'
              name='storeType'
              options={storeTypes}
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
              id='products'
              label='Number of Products'
              name='products'
              placeholder='Enter number of products'
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
              type='text'
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

            <button
              type='submit'
              className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mt-8 py-3 rounded-lg w-full font-semibold text-white transform hover:scale-105 transition-transform'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
