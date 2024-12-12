import React from 'react';
import CheapWebsiteDevelopment from './cheap-website-development';
import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('affordable-web-development');

const page = () => {
  return <CheapWebsiteDevelopment />;
};

export default page;
