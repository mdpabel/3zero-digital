import { Suspense } from 'react';
import FetchProductComponent from './fetch-product-component';

const page = () => {
  return (
    <Suspense>
      <FetchProductComponent />
    </Suspense>
  );
};

export default page;
