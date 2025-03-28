import React from 'react';
import ProjectCard from './project-card';
import { cn } from '@/lib/utils';
import { WP_REST_API_Posts } from 'wp-types';

const ProjectList = ({
  style = 1,
  posts,
}: {
  style?: 1 | 2;
  posts: WP_REST_API_Posts;
}) => {
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            className={cn(
              'py-8',
              index !== posts.length - 1 && 'border-b-neutral-400 border-b',
            )}>
            <ProjectCard style={style} post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
