import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Frequently Asked Questions - Affordable Website Development',
});

const faqs = [
  {
    question: 'What is included in your cheap website development package?',
    answer:
      'Our affordable package includes a responsive website with a custom domain, hosting setup, essential pages (Home, About, Contact), and basic SEO optimization to help you get started online.',
  },
  {
    question: 'Can I customize my website with your cheap plan?',
    answer:
      'Yes, even with the affordable package, you can customize the layout, colors, fonts, and content of your website. We also offer premium customization options for advanced needs.',
  },
  {
    question: 'How do you keep the costs low while delivering quality?',
    answer:
      'We use proven tools and templates to streamline the development process, ensuring high-quality websites at an affordable price. We also focus on essential features for your business to keep the scope manageable and cost-effective.',
  },
  {
    question: 'What type of websites can you create with your cheap plan?',
    answer:
      'We specialize in creating business websites, personal blogs, portfolio sites, and small e-commerce stores. The affordable plan works for any basic website needs, with the option to upgrade as your business grows.',
  },
  {
    question: 'Are there any hidden fees with the cheap website development?',
    answer:
      'No, there are no hidden fees. Our pricing is transparent, and we provide clear quotes upfront. Additional costs may apply if you want extra features, such as advanced e-commerce functionality or custom integrations.',
  },
  {
    question: 'How long does it take to build my website?',
    answer:
      'Depending on the complexity of the project, a basic website can be completed in as little as 7 to 14 days. We aim to get your website live as quickly as possible while ensuring quality.',
  },
  {
    question: 'Do you offer ongoing maintenance for cheap websites?',
    answer:
      'Yes, we offer affordable ongoing maintenance plans to ensure your website stays updated and secure. We can help with regular updates, backups, security patches, and troubleshooting.',
  },
  {
    question: 'Can I make changes to my website after it is built?',
    answer:
      'Absolutely! We will provide you with an easy-to-use content management system (CMS), such as WordPress, so you can make changes to your website anytime. Alternatively, we offer post-launch support if you prefer assistance.',
  },
  {
    question: 'What if I want to add e-commerce features later on?',
    answer:
      'We can easily upgrade your website to include e-commerce features like an online store, payment processing, and product management. You can scale up your site as your business grows.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      'Yes! All our websites are fully responsive and optimized for mobile devices, ensuring that your site looks great on desktops, tablets, and smartphones.',
  },
  {
    question: 'Do you provide domain and hosting services?',
    answer:
      'Yes, we offer domain registration and hosting services as part of our affordable website development package. We ensure your site is hosted on reliable, fast servers with SSL encryption for security.',
  },
  {
    question: 'How do you ensure SEO is handled with the cheap plan?',
    answer:
      'We include basic SEO optimization in the package, such as meta tags, title descriptions, and keyword-friendly content. This helps your site rank higher on search engines, making it easier for customers to find you.',
  },
  {
    question: 'Can I get support if I have issues with my cheap website?',
    answer:
      'Yes, we offer email support and troubleshooting for your website. If you run into issues, our team is ready to help you resolve them as quickly as possible.',
  },
];

const FAQ = () => {
  return (
    <div className='px-4 md:px-20 py-12 md:py-24'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-8 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Frequently Asked Questions - Affordable Website Development
        </h2>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className='text-base'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
