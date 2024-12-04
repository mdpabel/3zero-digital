import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { services } from '@/services';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import logoDark from '@/../public/images/logo-dark.png';

// Define the navigation items in arrays
const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const servicesLinks = [
  { name: 'Our Services', href: '/services' },
  { name: 'Web Development', href: '/web-development' },
  { name: 'SEO Services', href: '/seo-services' },
];

const policiesLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
];

const Footer: React.FC = () => (
  <footer className='bg-gradient-to-r from-[#614385] to-[#516395] py-12 text-white'>
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
      {/* Footer Main Content */}
      <div className='gap-8 grid grid-cols-1 md:grid-cols-4'>
        {/* Logo & Social Media */}
        <div className='flex flex-col items-center md:items-start'>
          <div className='inline-block'>
            <Link href='/'>
              <Image src={logoDark} alt='Logo' width={110} />
            </Link>
          </div>
          <p className='mt-2 text-center text-sm md:text-left'>
            Achieving perfection with 0 Vulnerability, 0 Downtime, 0 Error.
          </p>

          {/* Contact Info */}
          <div className='mt-6 text-center md:text-left'>
            <p className='text-sm'>
              <strong>Phone:</strong> +44 7878 798374
            </p>
            <p className='text-sm'>
              <strong>Email:</strong>{' '}
              <Link
                href='mailto:support@3zerodigital.com'
                className='hover:underline'>
                support@3zerodigital.com
              </Link>
            </p>
            <p className='text-sm'>
              <strong>Address:</strong> Suite A 82 James Carter Road,
              Mildenhall, Bury St. Edmunds, England, United Kingdom, IP28 7DE
            </p>
          </div>

          <div className='flex space-x-6 mt-6'>
            <Link
              href='https://www.facebook.com/3zerodigital.LLC'
              target='_blank'
              aria-label='Visit our Facebook page'
              className='hover:text-zinc-300 transition-colors'>
              <FaFacebookF className='w-6 h-6' />
            </Link>
            <Link
              href='https://x.com/3ZeroDigital'
              target='_blank'
              aria-label='Visit our Twitter profile'
              className='hover:text-zinc-300 transition-colors'>
              <FaXTwitter className='w-6 h-6' />
            </Link>
            <Link
              href='https://www.linkedin.com/company/3zerodigital'
              target='_blank'
              aria-label='Visit our LinkedIn profile'
              className='hover:text-zinc-300 transition-colors'>
              <FaLinkedinIn className='w-6 h-6' />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='mb-4 font-semibold text-lg'>Quick Links</h3>
          <ul className='space-y-2'>
            {quickLinks.map((link) => (
              <li key={link.name} className='py-3 border-b'>
                <Link
                  href={link.href}
                  className='hover:text-zinc-300 transition-colors'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className='mb-4 font-semibold text-lg'>Services</h3>
          <Accordion type='multiple' className='w-full'>
            {services.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className='flex items-center gap-2'>
                  {service.label}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='space-y-2 mt-4'>
                    {service.serviceCategories.map((item, subIndex) => (
                      <li key={subIndex} className='flex items-center gap-2'>
                        {item.icon}
                        <Link href={item.href} className='hover:underline'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Policies */}
        <div>
          <h3 className='mb-4 font-semibold text-lg'>Policies</h3>
          <ul className='space-y-2'>
            {policiesLinks.map((link) => (
              <li key={link.name} className='py-3 border-b'>
                <Link
                  href={link.href}
                  className='hover:text-zinc-300 transition-colors'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='border-zinc-200 dark:border-zinc-700 mt-8 pt-6 border-t text-center text-sm'>
        <p>
          &copy; {new Date().getFullYear()} 3Zero Digital. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
