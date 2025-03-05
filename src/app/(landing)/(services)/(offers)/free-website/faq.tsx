import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <section id='faq' className='py-16'>
      <div className='mx-auto px-4 container'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 font-bold text-3xl'>
            Frequently Asked Questions
          </h2>
          <p className='mx-auto max-w-2xl text-muted-foreground'>
            Got questions? We've got answers. If you don't see your question
            here, feel free to contact us.
          </p>
        </div>

        <div className='mx-auto max-w-3xl'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                Is it really free? What's the catch?
              </AccordionTrigger>
              <AccordionContent>
                Yes, it's completely free. There are no hidden costs or credit
                card details required. We offer this service to help small
                businesses establish their online presence, and we hope that as
                your business grows, you might consider our premium services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                How long does it take to build my website?
              </AccordionTrigger>
              <AccordionContent>
                Once we have all your information and content, we typically
                deliver your website within 7-10 business days. Rush options are
                available if you need it sooner.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Do I own my website?</AccordionTrigger>
              <AccordionContent>
                You own all content and the design of your website. We provide
                the hosting and technical support as a service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>How many pages are included?</AccordionTrigger>
              <AccordionContent>
                The free package includes up to 5 pages (Home, About, Services,
                Gallery/Portfolio, and Contact). Additional pages can be added
                for a small fee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger>
                Can I update the website myself?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we provide a simple content management system that allows
                you to make basic updates to your website. For more complex
                changes, our team is available to help.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
