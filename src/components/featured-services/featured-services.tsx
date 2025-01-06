import React from 'react';
import FeaturedServicesCarousel from './featured-services-carousel';
import { getProduct } from '@/lib/product/get-product';

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
