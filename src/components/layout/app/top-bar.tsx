import Link from 'next/link';
import { cn } from '@/lib/utils';

const TopBar = () => {
  return (
    <div
      className={cn(
        'bg-gradient-to-r text-white primary-color h-10 flex items-center',
      )}>
      <div className='mx-auto max-w-6xl container'>
        <div className='flex justify-between items-center font-semibold text-sm'>
          <div>
            0 Vulnerability, 0 Downtime, 0 Error. Flawless, secure digital
            solutions every time.
          </div>
          <nav className='md:block hidden'>
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
