import React from 'react';
import { getProduct } from '@/lib/product/get-product';
import dynamic from 'next/dynamic';

const FeaturedServicesCarousel = dynamic(
  () => import('./featured-services-carousel'),
);

const FeaturedServices = async () => {
  const affordableWebDevelopment = await getProduct(
    'affordable-web-development',
  );

  return (
    <FeaturedServicesCarousel
      affordableWebDevelopmentId={affordableWebDevelopment.productId}
    />
  );
};

export default FeaturedServices;
