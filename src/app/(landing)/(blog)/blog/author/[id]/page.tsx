import BlogList from '@/components/blog/blog-list';
import Blogs from '@/components/blog/blogs';
import Pagination from '@/components/blog/pagination';
import SearchForm from '@/components/blog/search-form';
import ComponentWrapper from '@/components/common/component-wrapper';
import { getPosts } from '@/lib/wordpress/fetch-posts';
import React, { Suspense } from 'react';
import { WP_REST_API_Post, WP_REST_API_Posts } from 'wp-types';

const POSTS_PER_PAGE = 5;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) {
    return <ComponentWrapper>Invalid ID</ComponentWrapper>;
  }

  const { posts, total } = await getPosts({
    authorId: +id,
  });

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  const post = (posts as WP_REST_API_Posts)[0] as WP_REST_API_Post;
  const author =
    ((post as WP_REST_API_Post).yoast_head_json as any)?.author ||
    '3Zero digital editorial';

  return (
    <div>
      <div className='flex md:flex-row flex-col justify-between items-center'>
        <SearchForm />
        <h3>Posts By: {author}</h3>
      </div>
      <BlogList style={2} posts={posts as WP_REST_API_Posts} />
      <Suspense>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </div>
  );
};

export default page;
