import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
import { currentUser } from '@clerk/nextjs/server';

const DashboardSidebar = async ({ type }: { type: 'admin' | 'dashboard' }) => {
  const user = await currentUser();

  const name = user?.firstName + ' ' + user?.lastName;
  const email = user?.primaryEmailAddress?.emailAddress;
  const avatar = user?.imageUrl;

  const items =
    type === 'admin'
      ? adminDashboardSidebarItems
      : customerDashboardSidebarItems;

  return (
    <Sidebar variant='sidebar'>
      <SidebarHeader className='primary-color'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='/'>
                <Image src={logo} alt='Logo' width={140} height={140} />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
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
