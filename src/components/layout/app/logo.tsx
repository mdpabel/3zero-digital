import Link from 'next/link';
import Image from 'next/image';
import logoLight from '@/../public/images/logo-light.png';
import logoDark from '@/../public/images/logo-dark.png';

const Logo = () => {
  return (
    <div className='inline-block'>
      <Link href='/'>
        <Image
          className='dark:block hidden'
          src={logoDark}
          alt='Logo'
          width={110}
        />
        <Image className='dark:hidden' src={logoLight} alt='Logo' width={110} />
      </Link>
    </div>
  );
};

export default Logo;
