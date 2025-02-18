import BlogList from '@/components/blog/blog-list';
import Blogs from '@/components/blog/blogs';
import Pagination from '@/components/blog/pagination';
import SearchForm from '@/components/blog/search-form';
import { getPosts } from '@/lib/wordpress/fetch-posts';
import React, { Suspense } from 'react';
import { WP_REST_API_Posts } from 'wp-types';

const POSTS_PER_PAGE = 5;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) {
    return <div className='mx-auto p-4 max-w-6xl'>Invalid ID</div>;
  }

  const { posts, total } = await getPosts({
    authorId: +id,
  });

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <div>
      <SearchForm />
      <BlogList style={2} posts={posts as WP_REST_API_Posts} />
      <Suspense>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </div>
  );
};

export default page;
