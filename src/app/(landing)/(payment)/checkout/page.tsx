import { Suspense } from 'react';
import Checkout from './checkout';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Checkout',
  url: '/checkout',
});

const page = () => {
  return (
    <Suspense fallback='loading...'>
      <Checkout />
    </Suspense>
  );
};

export default page;
