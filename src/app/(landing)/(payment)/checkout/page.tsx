import { Suspense } from 'react';
import Checkout from './checkout';
import { genMetaData } from '@/app/seo';
import { auth } from '@/auth';
import { redirect } from 'next/dist/server/api-utils';

export const metadata = genMetaData({
  title: 'Checkout',
  url: '/checkout',
});

const page = async () => {
  const session = await auth();

  return (
    <Suspense fallback='loading...'>
      <Checkout session={session} />
    </Suspense>
  );
};

export default page;
