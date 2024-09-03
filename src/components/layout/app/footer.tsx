import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-[#614385] to-[#516395] py-12 text-white'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='flex md:flex-row flex-col justify-between items-center'>
          {/* Branding */}
          <div className='mb-8 md:mb-0 text-center md:text-left'>
            <h2 className='font-bold text-3xl'>3 Zero Digital</h2>
            <p className='mt-2 text-sm'>
              Achieving perfection with 0 Vulnerability, 0 Downtime, 0 Error.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex space-x-8 mb-8 md:mb-0'>
            <Link
              href='/about'
              className='hover:text-zinc-300 transition-colors'>
              About Us
            </Link>
            <Link
              href='/services'
              className='hover:text-zinc-300 transition-colors'>
              Services
            </Link>
            <Link
              href='/contact'
              className='hover:text-zinc-300 transition-colors'>
              Contact
            </Link>
            <Link
              href='/privacy-policy'
              className='hover:text-zinc-300 transition-colors'>
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Links */}
          <div className='flex space-x-6'>
            <Link
              href='https://www.facebook.com'
              className='hover:text-zinc-300 transition-colors'>
              <FaFacebookF className='w-6 h-6' />
            </Link>
            <Link
              href='https://www.twitter.com'
              className='hover:text-zinc-300 transition-colors'>
              <FaTwitter className='w-6 h-6' />
            </Link>
            <Link
              href='https://www.linkedin.com'
              className='hover:text-zinc-300 transition-colors'>
              <FaLinkedinIn className='w-6 h-6' />
            </Link>
          </div>
        </div>

        <div className='border-zinc-200 dark:border-zinc-700 mt-8 pt-6 border-t text-center text-sm'>
          <p>&copy; 2024 3 Zero Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
