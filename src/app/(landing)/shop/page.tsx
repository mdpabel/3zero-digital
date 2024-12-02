import React from 'react';
import { genMetaData } from '@/app/seo';
import Templates from '@/components/shop/templates';

export const dynamic = 'force-static';

export const metadata = genMetaData({
  title: 'Shop',
});

const ShopPage = async () => {
  return <Templates />;
};

export default ShopPage;
