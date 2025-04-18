import { cn, formatDate } from '@/lib/utils';
import { CaseStudy } from '@/lib/wordpress/case-study';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { WP_REST_API_Post } from 'wp-types';

type Props = {
  project: CaseStudy; // Extend the type to include `tagNames`
  style?: 1 | 2;
};

const ProjectCard = ({ project, style = 1 }: Props) => {
  console.log(project);
  return (
    <article>
      <div
        className={cn(
          'space-y-2',
          style === 1 &&
            'xl:items-center gap-8 xl:space-y-0 xl:grid xl:grid-cols-7',
        )}>
        {/* Date */}
        <div className='col-span-2'>
          {process.env.NODE_ENV === 'production' ? (
            <Image
              src={project.featuredImage}
              alt={project.title}
              width={400}
              height={400}
              className='w-full h-full aspect-h-2 aspect-w-2'
            />
          ) : (
            <img
              src={project.featuredImage}
              alt={project.title}
              width={400}
              height={400}
              className='w-full h-full object-fill aspect-h-2 aspect-w-2'
            />
          )}
        </div>

        {/* Blog Content */}
        <div className='space-y-5 xl:col-span-5'>
          <div className='space-y-6'>
            {/* Title and Tags */}
            <div>
              {/* Title */}
              <h2 className='font-bold text-2xl leading-8 tracking-tight'>
                <Link
                  href={`/blog/${project.slug}`}
                  className='text-foreground'>
                  {project.title}
                </Link>
              </h2>
            </div>

            {/* Description */}
            <div
              className='max-w-none text-muted-foreground prose'
              dangerouslySetInnerHTML={{ __html: project.description || '' }}
            />

            {/* Tags */}
            <div className='flex flex-wrap'>
              {project.services?.length ? (
                project.services.map((service) => (
                  <span
                    key={service}
                    className='mr-3 font-medium text-sm uppercase'>
                    {service}
                  </span>
                ))
              ) : (
                <span className='text-muted-foreground'>No tags</span>
              )}
            </div>
          </div>

          {/* Read More */}
          <div className='font-medium text-base leading-6'>
            <Link
              href={project.slug}
              aria-label={`Read more: "${project.title}"`}>
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
