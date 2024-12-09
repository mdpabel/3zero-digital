import Comments from '@/components/comment/comments';
import CommentsSkeleton from '@/components/comment/comments-skeleton';
import { getPosts, getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { getMediaById } from '@/lib/wordpress/media';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { WP_REST_API_Post } from 'wp-types';

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { slug } = await params;

  // Fetch the post by slug
  const { posts } = await getPosts({ slug });

  const post = Array.isArray(posts) ? posts[0] : posts;

  // If no post is found, return undefined
  if (!post) {
    return;
  }

  const data = post as WP_REST_API_Post & {
    meta: {
      yoast_head_json: any;
    };
  };

  const yoast_head_json = data.meta.yoast_head_json;

  // Fallback to Yoast SEO or WordPress post data
  const title = yoast_head_json?.title || post.title.rendered;
  const description = yoast_head_json?.og_description || post.excerpt.rendered;
  const ogTitle = yoast_head_json?.og_title || title;
  const ogDescription = yoast_head_json?.og_description || description;
  const ogImage =
    yoast_head_json?.og_image ||
    (await getMediaById(post.featured_media!))?.source_url;
  const canonical = 'https://www.3zerodigital.com/' + post.slug;
  const robots = yoast_head_json?.robots || {
    index: 'index',
    follow: 'follow',
  }; // Default robots rules
  const author = yoast_head_json?.author || 'Unknown'; // Default author
  const publishedTime = yoast_head_json?.article_published_time || post.date;
  const twitterCard = yoast_head_json?.twitter_card || 'summary_large_image';

  // Return all metadata, combining Yoast SEO data and WordPress data
  return {
    title,
    description,
    robots: robots, // Include robots directive if available
    alternates: {
      canonical,
    }, // Include canonical URL if available
    authors: [author],

    // twitter: {
    //   card: twitterCard,
    //   title: ogTitle,
    //   description: ogDescription,
    //   images: [ogImage],
    // },
    // // schema: yoast_head_json?.schema, // Include schema if available
  };
}

export async function generateStaticParams() {
  const { posts } = await getPosts();

  // Ensure posts is an array before passing it to BlogList
  if (!Array.isArray(posts)) {
    return [];
  }

  return posts.map((post: WP_REST_API_Post) => ({
    slug: post.slug,
  }));
}

const BlogPage = async ({ params }: Props) => {
  const { slug } = await params;

  // Fetch the post by slug
  const { posts } = await getPostsWithTagNames({
    slug,
  });

  // Ensure `posts` is a single post
  const post = (Array.isArray(posts) ? posts[0] : posts) as WP_REST_API_Post & {
    tagDetails?: { name: string; slug: string }[];
  };
  // Handle case where the post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className='space-y-4 mx-auto px-4 py-8 max-w-3xl'>
      {/* Date */}
      <div className='text-neutral-500 dark:text-neutral-400'>
        Published on {new Date(post.date).toLocaleDateString()}
      </div>

      {/* Title */}
      <h1 className='mb-4 font-bold text-3xl'>{post.title.rendered}</h1>

      {/** Back to blog posts ------- Tags */}
      <div className='grid lg:grid-cols-2 w-full'>
        <div>
          <Link
            className='flex items-center gap-1 mr-3 font-medium text-[#614385] text-sm transition'
            href='/blog'>
            <ArrowLeft /> Back to the blog
          </Link>
        </div>
        <div className='flex flex-wrap justify-end'>
          {post.tagDetails?.length ? (
            post.tagDetails.map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/tag/${slug}`}
                className='mr-3 font-medium text-[#614385] text-sm hover:text-[#614385]uppercase transition'>
                {name}
              </Link>
            ))
          ) : (
            <span className='text-muted-foreground'>No tags</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className='pb-10 border-b border-b-neutral-400 max-w-full dark:prose-invert prose'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      <Suspense fallback={<CommentsSkeleton />}>
        {/* Comments */}
        <Comments postId={post.id} />
      </Suspense>
    </article>
  );
};

export default BlogPage;
