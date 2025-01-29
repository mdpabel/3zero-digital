import Templates from '@/components/shop/templates';
import React from 'react';

const TemplateCategory = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return <Templates category={slug} />;
};

export default TemplateCategory;
