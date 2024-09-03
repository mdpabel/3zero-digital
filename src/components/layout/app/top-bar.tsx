import Link from 'next/link';
import { cn } from '@/lib/utils';

const TopBar = () => {
  return (
    <div
      className={cn(
        'bg-gradient-to-r text-white primary-color h-10 flex items-center',
      )}>
      <div className='mx-auto px-4 max-w-6xl container'>
        <div className='flex justify-between items-center font-medium text-sm'>
          <div className='lg:block hidden'>
            0 Vulnerability, 0 Downtime, 0 Error. Built for perfection.
          </div>
          <div className='block lg:hidden text-center'>
            0 Vulnerability, 0 Downtime, 0 Error
          </div>
          <nav className='lg:block hidden'>
            <ul className='flex justify-between items-center space-x-4'>
              <li>
                <Link href='/about-us' className='hover:underline'>
                  About us
                </Link>
              </li>
              <li>
                <Link href='/privacy' className='hover:underline'>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href='/faq'>FAQ</Link>
              </li>

              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
