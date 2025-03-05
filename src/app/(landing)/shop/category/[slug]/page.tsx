import Templates from '@/components/shop/templates';
import React, { Suspense } from 'react';
import TemplatesSkeleton from '../../loading';

const TemplateCategory = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string }>;
}) => {
  const { slug } = await params;
  const { page } = await searchParams;

  return (
    <Suspense key={slug + '' + page} fallback={<TemplatesSkeleton />}>
      <Templates category={slug} currentPage={+page} />
    </Suspense>
  );
};

export default TemplateCategory;
