import Blogs from '@/components/blog/blogs';
import SearchForm from '@/components/blog/search-form';
import { genMetaData } from '@/app/seo';
import { WP_REST_API_Posts } from 'wp-types';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';

export const metadata = genMetaData({
  title: 'Blog',
  url: '/blog',
});

export async function generateStaticParams() {
  const { posts, total } = await getPostsWithTagNames();

  const data = posts as WP_REST_API_Posts;

  return data.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  searchParams: Promise<{ page: string; search: string }>;
};

const page = async ({ searchParams }: Props) => {
  const { page, search } = await searchParams;

  return (
    <div>
      <SearchForm />
      <Blogs page={+page} search={search} />
    </div>
  );
};

export default page;
