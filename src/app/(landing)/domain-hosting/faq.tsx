import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className='mt-16'>
      <h2 className='mb-10 font-bold text-3xl text-center text-gray-800 dark:text-white'>
        Frequently Asked Questions
      </h2>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='font-semibold text-gray-800 text-lg dark:text-white'>
            What does the $10 package include?
          </AccordionTrigger>
          <AccordionContent className='mt-2 text-gray-600 dark:text-gray-300'>
            The $10 package includes a free domain, free email address, 2GB
            hosting, 2GB NVMe storage, daily backups, free SSL, and access to
            100+ pre-built templates. It also comes with full security, zero
            vulnerabilities, zero downtime, and zero errors.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger className='font-semibold text-gray-800 text-lg dark:text-white'>
            How can I start using the service?
          </AccordionTrigger>
          <AccordionContent className='mt-2 text-gray-600 dark:text-gray-300'>
            Simply click on the &quot;Checkout Now&quot; button, make the
            payment, and we will guide you through setting up your domain,
            hosting, and website.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger className='font-semibold text-gray-800 text-lg dark:text-white'>
            Is customer support included?
          </AccordionTrigger>
          <AccordionContent className='mt-2 text-gray-600 dark:text-gray-300'>
            Yes, we offer 24 Yes, we offer 24/7 customer support to assist you
            with any issues related to your domain, hosting, or website setup.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-4'>
          <AccordionTrigger className='font-semibold text-gray-800 text-lg dark:text-white'>
            Can I upgrade my hosting plan later?
          </AccordionTrigger>
          <AccordionContent className='mt-2 text-gray-600 dark:text-gray-300'>
            Yes, you can upgrade your hosting plan anytime to accommodate more
            traffic, storage, or features. Contact our support team, and we’ll
            assist you with the upgrade process.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-5'>
          <AccordionTrigger className='font-semibold text-gray-800 text-lg dark:text-white'>
            What makes NVMe storage better than traditional storage?
          </AccordionTrigger>
          <AccordionContent className='mt-2 text-gray-600 dark:text-gray-300'>
            NVMe storage offers much faster read/write speeds compared to
            traditional hard drives, resulting in faster website loading times
            and a smoother experience for your visitors.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
