import Blogs from '@/components/blog/blogs';
import { generateTitleFromSlug } from '@/lib/utils';
import { fetchCategories } from '@/lib/wordpress/fetch-category';
import { Metadata } from 'next';
import { WP_REST_API_Category } from 'wp-types';

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { slug } = await params;

  return {
    title: generateTitleFromSlug(slug),
    alternates: {
      canonical: `/category/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = await fetchCategories();

  // Ensure posts is an array before passing it to BlogList
  if (!Array.isArray(categories)) {
    return [];
  }

  return categories.map((category: WP_REST_API_Category) => ({
    slug: category.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string; search: string }>;
};

const page = async ({ params, searchParams }: Props) => {
  const { page, search } = await searchParams;
  const { slug } = await params;

  return <Blogs page={+page} categorySlug={slug} search={search} />;
};

export default page;
