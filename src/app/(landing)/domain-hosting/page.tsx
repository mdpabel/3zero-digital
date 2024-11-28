import PricingTable from './pricing-table';
import FAQ from './faq';
import DomainSearch from './domain-search';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Domain hosting',
});

const DomainHosting = () => {
  const product = {
    price: 10,
    origPrice: 20,
    id: 'domain-hosting-id',
    name: '',
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900 px-6 py-16'>
      <div className='mx-auto max-w-6xl container'>
        {/* Promotional Section */}
        <div className='mb-16 text-center'>
          <h1 className='mb-4 font-extrabold text-5xl text-gray-800 md:text-6xl dark:text-white'>
            Website for Just $10!
          </h1>
          <p className='mb-6 text-gray-600 text-xl dark:text-gray-300'>
            Premium Hosting, Templates, and Domain for Everyone.
          </p>
          <p className='mb-8 text-gray-500 text-lg dark:text-gray-400'>
            Get a domain, email, 2GB hosting, and access to over 100 pre-built
            templates for just $10. Ideal for students, teachers, freelancers,
            and bloggers looking to launch their website.
          </p>
          <a
            href='#pricing'
            className='shadow-lg px-10 py-4 rounded-lg font-semibold text-white transition-transform primary-color hover:scale-105'>
            Get Started for $10
          </a>
        </div>

        <DomainSearch />
        <PricingTable product={product} />
        <FAQ />
      </div>
    </section>
  );
};

export default DomainHosting;
