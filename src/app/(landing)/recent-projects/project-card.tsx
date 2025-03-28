import { cn, formatDate } from '@/lib/utils';
import { getMediaById } from '@/lib/wordpress/media';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { WP_REST_API_Post } from 'wp-types';

type Props = {
  post: WP_REST_API_Post & {
    tagDetails?: { name: string; slug: string }[];
  }; // Extend the type to include `tagNames`
  style?: 1 | 2;
};

const ProjectCard = async ({ post, style = 1 }: Props) => {
  const featuredImage = (await getMediaById(post.featured_media!))?.source_url;

  return (
    <article>
      <div className={cn('gap-20 flex items-center')}>
        {/* Date */}
        <div className='flex flex-col justify-center'>
          <dl>
            <dt className='sr-only'>Published on</dt>
            <dd className='font-medium text-muted-foreground text-base leading-6'>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </dd>
          </dl>

          {/* Featured Image */}
          {featuredImage && (
            <Image
              src={featuredImage}
              width={200}
              height={200}
              alt={post.title.raw || 'Featured Image'}
            />
          )}
        </div>

        {/* Blog Content */}
        <div className='space-y-5 w-full'>
          <div className='space-y-6'>
            {/* Title and Tags */}
            <div>
              {/* Title */}
              <h2 className='font-bold text-2xl leading-8 tracking-tight'>
                <Link href={post.link} className='text-foreground'>
                  {post.title.rendered}
                </Link>
              </h2>

              {/* Tags */}
              <div className='flex flex-wrap'>
                {post.tagDetails?.length ? (
                  post.tagDetails.map((tagDetail) => (
                    <Link
                      key={tagDetail.name}
                      href={`/tag/${tagDetail.slug}`}
                      className='mr-3 font-medium text-teal-600 hover:text-teal-700 text-sm uppercase transition'>
                      {tagDetail.name}
                    </Link>
                  ))
                ) : (
                  <span className='text-muted-foreground'>No tags</span>
                )}
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
              href={post.link}
              className='text-black dark:text-white transition'
              aria-label={`Read more: "${post.title.rendered}"`}>
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
