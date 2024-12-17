import { Suspense } from 'react';
import Checkout from './checkout';

const page = () => {
  return (
    <Suspense fallback='loading...'>
      <Checkout />
    </Suspense>
  );
};

export default page;
