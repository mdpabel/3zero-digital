import { cn, formatDate } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { WP_REST_API_Post } from 'wp-types';

type Props = {
  post: WP_REST_API_Post & {
    tagDetails?: { name: string; slug: string }[];
  }; // Extend the type to include `tagNames`
  style?: 1 | 2;
};

const BlogCard = ({ post, style = 1 }: Props) => {
  return (
    <article>
      <div
        className={cn(
          'space-y-2',
          style === 1 &&
            'xl:items-baseline xl:space-y-0 xl:grid xl:grid-cols-4',
        )}>
        {/* Date */}
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='font-medium text-muted-foreground text-base leading-6'>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </dd>
        </dl>

        {/* Blog Content */}
        <div className='space-y-5 xl:col-span-3'>
          <div className='space-y-6'>
            {/* Title and Tags */}
            <div>
              {/* Title */}
              <h2 className='font-bold text-2xl leading-8 tracking-tight'>
                <Link href={`/blog/${post.slug}`} className='text-foreground'>
                  {post.title.rendered}
                </Link>
              </h2>

              {/* Tags */}
              <div className='flex justify-between items-center'>
                <div className='flex flex-wrap'>
                  {post.tagDetails?.length ? (
                    post.tagDetails.map((tagDetail) => (
                      <Link
                        key={tagDetail.name}
                        href={`/tag/${tagDetail.slug}`}
                        className='mr-3 font-medium text-[#614385] hover:text-[#614385] text-sm uppercase transition'>
                        {tagDetail.name}
                      </Link>
                    ))
                  ) : (
                    <span className='text-muted-foreground'>No tags</span>
                  )}
                </div>

                {/* Author */}
                <div className='font-medium text-neutral-800 dark:text-neutral-200 text-sm'>
                  By{' '}
                  <Link href={`/blog/author/${post.author}`}>
                    {(post.yoast_head_json as any)?.author ||
                      '3Zero digital editorial'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Description */}
            <div
              className='max-w-none text-muted-foreground prose'
              dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }}
            />
          </div>

          {/* Read More */}
          <div className='font-medium text-base leading-6'>
            <Link
              href={post.link.replace(
                'https://blog.3zerodigital.com',
                'https://3zerodigital.com/blog',
              )}
              className='text-[#614385] hover:text-[#614385] transition'
              aria-label={`Read more: "${post.title.rendered}"`}>
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
