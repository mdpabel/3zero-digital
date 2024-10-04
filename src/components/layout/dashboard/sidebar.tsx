import React from 'react';
import BigScreenSidebar from './big-screen-sidebar';
import SmallScreenSidebar from './small-screen-sidebar';
import {
  adminDashboardSidebarItems,
  customerDashboardSidebarItems,
} from './data';

const Sidebar = ({ type }: { type: 'customer' | 'admin' }) => {
  const data =
    type === 'admin'
      ? adminDashboardSidebarItems
      : customerDashboardSidebarItems;

  return (
    <>
      <BigScreenSidebar data={data} />
      <SmallScreenSidebar data={data} />
    </>
  );
};

export default Sidebar;
