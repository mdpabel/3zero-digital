import React from 'react';
import { genMetaData } from '@/app/seo';
import Templates from '@/components/shop/templates';

export const metadata = genMetaData({
  title: 'Shop',
  url: '/shop',
});

const ShopPage = async () => {
  return <Templates />;
};

export default ShopPage;
