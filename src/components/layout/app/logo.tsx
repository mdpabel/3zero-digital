import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='inline-block'>
      <Link href='/'>
        <Image src='/images/logo-7.png' alt='Logo' width={70} height={70} />
      </Link>
    </div>
  );
};

export default Logo;
