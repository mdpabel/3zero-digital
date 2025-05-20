import Link from 'next/link';
import { cn } from '@/lib/utils';

// Define the navigation items in an array
const navItems = [
  { href: '/shop', label: 'Templates' },
  { href: '/recent-projects', label: 'Recent Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
];

const TopBar = () => {
  return (
    <div
      className={cn(
        'bg-gradient-to-r text-white primary-color h-10 flex items-center',
      )}>
      <div className='mx-auto px-4 max-w-6xl container'>
        <div className='flex justify-between items-center font-medium text-sm'>
          <div className='hidden lg:block'>
            <Link
              href='/affordable-web-development'
              className='max-w-fit typewriter'>
              🎉 Build Your Business Website Today: Design, Domain, Hosting,
              SSL, and More for Just $79!
            </Link>
          </div>
          <div className='lg:hidden block'>
            <Link
              href='/affordable-web-development'
              className='max-w-fit typewriter'>
              🎉 Website, Domain, Hosting & More for just $79!
            </Link>
          </div>

          <nav className='hidden lg:block'>
            <ul className='flex justify-between items-center space-x-4'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
