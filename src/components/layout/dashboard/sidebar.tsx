import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { NavUser } from './nav-user';
import { SidebarNavMain } from './sidebar-nav-main';
import {
  adminDashboardSidebarItems,
  customerDashboardSidebarItems,
} from './data';
import logo from '@/../public/images/logo-dark.png';
import Link from 'next/link';
import Image from 'next/image';

const DashboardSidebar = async () => {
  return (
    <Sidebar variant='sidebar'>
      <SidebarHeader className='primary-color'>
        <Link className='p-1' href='/'>
          <Image src={logo} alt='Logo' width={140} height={140} />
        </Link>
      </SidebarHeader>
      <SidebarContent className='primary-color'>
        <SidebarNavMain />
      </SidebarContent>
      <SidebarFooter className='primary-color'>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
