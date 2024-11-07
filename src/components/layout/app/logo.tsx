import Link from 'next/link';
import Image from 'next/image';
import logoLight from '@/../public/images/logo-light.png';
import logoDark from '@/../public/images/logo-dark.gif';

const Logo = () => {
  return (
    <div className='inline-block'>
      <Link href='/'>
        <Image
          src={logoLight}
          alt='Logo'
          width={150}
          height={150}
          className='dark:hidden'
        />
        <Image
          src={logoDark}
          alt='Logo'
          unoptimized
          width={150}
          height={150}
          className='dark:block hidden'
        />
      </Link>
    </div>
  );
};

export default Logo;
