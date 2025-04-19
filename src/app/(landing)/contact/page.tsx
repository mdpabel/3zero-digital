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
      <div className='mx-auto p-4 max-w-4xl'>
        <h2 className='font-bold text-zinc-800 dark:text-zinc-200 text-3xl md:text-5xl text-center'>
          Contact Us
        </h2>
        <p className='mt-4 text-zinc-700 dark:text-zinc-400 text-lg md:text-xl text-center'>
          Have questions or need assistance? Reach out to us, and we’ll be happy
          to help.
        </p>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-3 mt-12'>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl'>Email</span>
            <a
              href='mailto:support@3zerodigital.com'
              className='text-zinc-600 dark:text-zinc-400 hover:underline'>
              support@3zerodigital.com
            </a>
          </div>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl'>Phone</span>
            <a
              href='tel:+447878798374'
              className='text-zinc-600 dark:text-zinc-400 hover:underline'>
              +44 7878 798374
            </a>
          </div>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl'>Address</span>
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
