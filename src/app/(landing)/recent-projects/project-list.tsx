import React from 'react';
import ProjectCard from './project-card';
import { cn } from '@/lib/utils';
import { fetchCaseStudies } from '@/lib/wordpress/case-study';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ComponentWrapper from '@/components/common/component-wrapper';

const ProjectList = async ({ style = 1 }: { style?: 1 | 2 }) => {
  const projects = await fetchCaseStudies();

  return (
    <ComponentWrapper>
      <div className='py-10'>
        {/* Header Section */}
        <div className='mx-auto mb-10 max-w-4xl text-center'>
          <h2 className='font-bold text-4xl'>
            Showcasing Excellence: Our Recent Projects
          </h2>
          <p className='mt-2 text-lg'>
            Explore the latest digital solutions crafted by 3 Zero Digital,
            focusing on innovation, security, and seamless performance.
          </p>
        </div>
        <ul>
          {projects.map((project, index) => (
            <li
              key={index}
              className={cn(
                'py-8',
                index !== projects.length - 1 &&
                  'border-b-neutral-400 border-b',
              )}>
              <ProjectCard style={style} project={project} />
            </li>
          ))}
        </ul>
      </div>

      <div className='flex justify-center mb-10'>
        <Button>
          <Link href='/recent-projects'>Explore More</Link>
        </Button>
      </div>
    </ComponentWrapper>
  );
};

export default ProjectList;
