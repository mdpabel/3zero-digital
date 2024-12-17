import { Suspense } from 'react';
import FetchProductComponent from './fetch-product-component';

const page = () => {
  return (
    <Suspense fallback='loading...'>
      <FetchProductComponent />
    </Suspense>
  );
};

export default page;
