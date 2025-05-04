import React, { Suspense } from 'react';
import { genMetaData } from '@/app/seo';
import Templates from '@/components/shop/templates';
import TemplatesSkeleton from './loading';
import prisma from '@/prisma/db';

export const metadata = genMetaData({
  title: 'Shop',
  url: '/shop',
});

export async function generateStaticParams() {
  const templates = await prisma.template.findMany();

  return templates.map((template) => ({
    slug: template.slug,
  }));
}

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
