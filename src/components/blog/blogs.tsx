import BlogList from '@/components/blog/blog-list';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { Suspense } from 'react';
import Pagination from './pagination';

type Props = {
  page: number;
  categorySlug?: string;
  tagSlug?: string;
  search?: string;
};

export const revalidate = 86400;

const POSTS_PER_PAGE = 5;

const Blogs = async ({ categorySlug, page, tagSlug, search }: Props) => {
  const { posts, total } = await getPostsWithTagNames({
    perPage: POSTS_PER_PAGE,
    page,
    categorySlug,
    tagSlug,
    search,
  });

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  // Ensure posts is an array before passing it to BlogList
  if (!Array.isArray(posts)) {
    throw new Error('Expected posts to be an array');
  }

  return (
    <>
      <BlogList style={2} posts={posts} />
      <Suspense>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </>
  );
};

export default Blogs;
