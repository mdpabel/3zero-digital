import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='inline-block'>
      <Link href='/'>
        <Image
          src='/images/logo-light.png'
          alt='Logo'
          width={140}
          height={140}
          className='dark:hidden'
        />
        <Image
          src='/images/logo-dark.png'
          alt='Logo'
          width={140}
          height={140}
          className='dark:block hidden'
        />
      </Link>
    </div>
  );
};

export default Logo;
