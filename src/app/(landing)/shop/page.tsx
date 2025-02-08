import React, { Suspense } from 'react';
import { genMetaData } from '@/app/seo';
import Templates from '@/components/shop/templates';
import TemplatesSkeleton from './loading';

export const metadata = genMetaData({
  title: 'Shop',
  url: '/shop',
});

const ShopPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  return (
    <Suspense key={page} fallback={<TemplatesSkeleton />}>
      <Templates currentPage={+page} />
    </Suspense>
  );
};

export default ShopPage;
