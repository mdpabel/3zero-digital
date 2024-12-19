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
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const DashboardSidebar = async ({ type }: { type: 'admin' | 'dashboard' }) => {
  const session = await auth();

  if (!session) {
    return redirect('/login');
  }

  const name = session?.user?.name!;
  const email = session?.user?.email!;
  const avatar = '';

  const items =
    type === 'admin'
      ? adminDashboardSidebarItems
      : customerDashboardSidebarItems;

  return (
    <Sidebar variant='sidebar'>
      <SidebarHeader className='primary-color'>
        <Link className='p-1' href='/'>
          <Image src={logo} alt='Logo' width={140} height={140} />
        </Link>
      </SidebarHeader>
      <SidebarContent className='primary-color'>
        <SidebarNavMain items={items} />
      </SidebarContent>
      <SidebarFooter className='primary-color'>
        <NavUser avatar={avatar} email={email} name={name} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
