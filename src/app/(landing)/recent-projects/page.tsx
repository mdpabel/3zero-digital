import { fetchRecentProjects } from '@/lib/wordpress/recent-projects/get-projects';
import React from 'react';
import ProjectList from './project-list';

const RecentProjectsPage = async () => {
  const projects = await fetchRecentProjects();

  return (
    <div className='mx-auto'>
      <ProjectList posts={projects} />
    </div>
  );
};

export default RecentProjectsPage;
