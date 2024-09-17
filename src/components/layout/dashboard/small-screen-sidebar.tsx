import React from 'react';
import { dashboardSidebarItems } from './data'; // Same data used in BigScreenSidebar
import Link from 'next/link';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'; // Sheet component
import { Button } from '@/components/ui/button';
import Logout from './logout';

const SmallScreenSidebar = () => {
  const userRole = 'customer';

  return (
    <aside className='block top-2 left-2 absolute lg:hidden'>
      {/* Trigger for the Sidebar (Hamburger Menu) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className='lg:hidden'>
            <FaBars className='w-6 h-6' />
          </Button>
        </SheetTrigger>

        {/* Sidebar Content */}
        <SheetContent
          side='left'
          className='flex flex-col justify-between bg-gradient-to-br from-[#614385] to-[#516395] w-64'>
          <nav className='flex-1 space-y-4 mt-4'>
            <SheetHeader>
              <SheetTitle>
                <SheetClose asChild>
                  <Link href='/'>Logo</Link>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>

            {dashboardSidebarItems
              .filter((item) => item.roles.includes(userRole))
              .map((item, index) => (
                <div key={index}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className='flex items-center hover:bg-white px-4 py-2 rounded-lg text-white hover:text-[#614385] transition'>
                      {item.icon && <span className='mr-3'>{item.icon}</span>}
                      <span>{item.label}</span>
                    </Link>
                  </SheetClose>
                </div>
              ))}
          </nav>

          {/* Logout Button */}
          <Logout />
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default SmallScreenSidebar;
