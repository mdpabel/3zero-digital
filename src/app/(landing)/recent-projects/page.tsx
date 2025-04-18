import { fetchRecentProjects } from '@/lib/wordpress/recent-projects/get-projects';
import React from 'react';
import ProjectList from './project-list';
import { fetchCaseStudies } from '@/lib/wordpress/case-study';

const RecentProjectsPage = () => {
  return (
    <div className='mx-auto'>
      <ProjectList />
    </div>
  );
};

export default RecentProjectsPage;
