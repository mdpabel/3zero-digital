import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Frequently asked questions',
});

export const dynamic = 'force-static';

const faqs = [
  {
    question: 'What services does 3Zero Digital offer?',
    answer:
      'We provide a wide range of services, including web development, maintenance, troubleshooting, digital marketing, and custom solutions like authentication systems and database management.',
  },
  {
    question: 'What makes 3Zero Digital different from other agencies?',
    answer:
      'At 3Zero Digital, we prioritize achieving perfection with our 3Zero principles: 0 Vulnerability, 0 Downtime, and 0 Error, ensuring robust, secure, and reliable solutions for our clients.',
  },
  {
    question: 'How can I get started with 3Zero Digital?',
    answer:
      "You can start by reaching out through our contact form on the website or emailing us directly. Let us know your requirements, and we'll guide you through the next steps.",
  },
  {
    question: 'Do you offer custom web development solutions?',
    answer:
      'Yes, we specialize in custom web development tailored to your specific business needs, including backend systems, APIs, and integrations.',
  },
  {
    question: 'Can you help with website security and malware removal?',
    answer:
      'Absolutely! We have extensive experience in fixing hacked websites, removing malware, and implementing security measures to prevent future attacks.',
  },
  {
    question: 'What technologies do you use in your projects?',
    answer:
      'Our team is proficient in JavaScript, TypeScript, Node.js, React, MongoDB, PostgreSQL, MySQL, and other modern technologies.',
  },
  {
    question: 'Do you provide support for WordPress websites?',
    answer:
      'Yes, we offer WordPress services, including development, troubleshooting, migration, and template customization.',
  },
  {
    question: 'How do you ensure 0 Downtime in your solutions?',
    answer:
      'We implement industry-best practices such as load balancing, optimized deployment pipelines, and robust server configurations to ensure maximum uptime.',
  },
  {
    question: 'Do you offer ongoing maintenance services?',
    answer:
      'Yes, we provide comprehensive maintenance plans to ensure your website or application remains secure, updated, and fully functional.',
  },
  {
    question: 'What is included in your $10 website launch campaign?',
    answer:
      'Our $10 campaign includes a domain name, shared hosting, and a prebuilt WordPress template to help you launch your first website with minimal investment.',
  },
  {
    question: 'Can you assist with setting up payment gateways?',
    answer:
      'Yes, we can integrate and configure various payment gateways to suit your business needs, ensuring a secure and smooth transaction process for your customers.',
  },
  {
    question: 'How do you handle customer support?',
    answer:
      'Our team is available to assist you via email or our support system, ensuring timely and effective resolutions to your queries.',
  },
];

const FAQPage = () => {
  return (
    <div className='bg-white dark:bg-[#0B1120] px-4 md:px-20 py-12 md:py-24'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-8 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Frequently Asked Questions
        </h2>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
