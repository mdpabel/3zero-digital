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

  const affordablePersonalWebDevelopment = await getProduct(
    'affordable-personal-website-development',
  );

  const affordablePersonalLiteWebDevelopment = await getProduct(
    'affordable-personal-website-development-lite',
  );

  return (
    <FeaturedServicesCarousel
      affordableWebDevelopmentId={affordableWebDevelopment.productId}
      affordablePersonalWebDevelopmentId={
        affordablePersonalWebDevelopment.productId
      }
      affordablePersonalLiteWebDevelopmentId={
        affordablePersonalLiteWebDevelopment.productId
      }
    />
  );
};

export default FeaturedServices;
