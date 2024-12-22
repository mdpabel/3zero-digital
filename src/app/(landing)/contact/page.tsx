import ContactForm from './contact-form';
import { genMetaData } from '@/app/seo';
import lazy from 'next/dynamic';

export const dynamic = 'force-static';

export const metadata = genMetaData({
  title: 'Contact us',
  url: '/contact',
});

const ContactPage = () => {
  return (
    <div className='px-4 md:px-20 py-12 md:py-24'>
      <div className='mx-auto p-4 max-w-7xl'>
        <h2 className='font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Contact Us
        </h2>
        <p className='mt-4 text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
          Have questions or need assistance? Reach out to us, and we’ll be happy
          to help.
        </p>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-3 mt-12'>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl text-zinc-800 dark:text-zinc-200'>
              Email
            </span>
            <a
              href='mailto:support@3zerodigital.com'
              className='text-zinc-600 dark:text-zinc-400 hover:underline'>
              support@3zerodigital.com
            </a>
          </div>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl text-zinc-800 dark:text-zinc-200'>
              Phone
            </span>
            <a
              href='tel:+447878798374'
              className='text-zinc-600 dark:text-zinc-400 hover:underline'>
              +44 7878 798374
            </a>
          </div>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl text-zinc-800 dark:text-zinc-200'>
              Address
            </span>
            <p className='text-zinc-600 dark:text-zinc-400'>
              Suite A 82 James Carter Road, <br />
              Mildenhall, Bury St. Edmunds, <br />
              England, United Kingdom, IP28 7DE
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
