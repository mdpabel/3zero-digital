'use client';
import React, { useEffect, useState } from 'react';
import {
  CreditCard,
  LifeBuoy,
  LogIn,
  LogInIcon,
  LogOut,
  Settings,
  User,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

// Define menu items as an array
const menuItems = [
  {
    label: 'Orders',
    icon: <CreditCard />,
    shortcut: '⌘O',
    href: '/me/orders',
  },
  {
    label: 'Support',
    icon: <LifeBuoy />,
    href: '/me/support',
  },
  {
    label: 'Profile',
    icon: <User />,
    shortcut: '⇧⌘P',
    href: '/me/profile',
  },
];

const UserButton = () => {
  const { status, data, update } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const role = data?.user?.role;

  if (role === 'ADMIN') {
    return (
      <Link
        href='/admin'
        className='flex flex-shrink-0 justify-center items-center gap-x-2 space-x-1 bg-gray-50 aria-disabled:bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:aria-disabled:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 aria-disabled:opacity-75 disabled:opacity-75 shadow-sm px-3 py-2 rounded-md focus-visible:outline-0 focus:outline-none ring-1 ring-gray-300 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 dark:ring-gray-700 ring-inset w-auto font-medium text-gray-700 dark:text-gray-200 text-sm aria-disabled:cursor-not-allowed disabled:cursor-not-allowed'>
        <span>Admin Panel</span>
      </Link>
    );
  }

  const handleMenuItemClick = () => {
    // Close the dropdown menu when a menu item is clicked
    setDropdownOpen(false);
  };

  if (status === 'unauthenticated') {
    return (
      <div className='flex items-center gap-x-2'>
        <Link
          prefetch={true}
          href='/login'
          className='flex flex-shrink-0 justify-center items-center gap-x-2 space-x-1 bg-gray-50 aria-disabled:bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:aria-disabled:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 aria-disabled:opacity-75 disabled:opacity-75 shadow-sm px-3 py-2 rounded-md focus-visible:outline-0 focus:outline-none ring-1 ring-gray-300 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 dark:ring-gray-700 ring-inset w-auto font-medium text-gray-700 dark:text-gray-200 text-sm aria-disabled:cursor-not-allowed disabled:cursor-not-allowed'>
          <span>Login</span>
        </Link>

        <Link
          prefetch={true}
          href='/signup'
          className='flex flex-shrink-0 justify-center items-center gap-x-2 bg-gray-900 aria-disabled:bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:aria-disabled:bg-white dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white aria-disabled:opacity-75 disabled:opacity-75 shadow-sm px-3 py-2 rounded-md focus-visible:outline-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-inset w-auto font-medium !text-white dark:text-gray-900 text-sm aria-disabled:cursor-not-allowed disabled:cursor-not-allowed primary-color'>
          <span>Register</span>
        </Link>
      </div>
    );
  }

  if (status === 'authenticated') {
    const firstChar = data?.user?.name?.charAt(0) ?? 'U';

    return (
      <DropdownMenu
        open={isDropdownOpen}
        onOpenChange={(open) => setDropdownOpen(open)}>
        <DropdownMenuTrigger asChild>
          <button className='flex flex-shrink-0 justify-center items-center gap-x-2 space-x-1 bg-gray-50 aria-disabled:bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:aria-disabled:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 aria-disabled:opacity-75 disabled:opacity-75 shadow-sm px-3 py-2 rounded-md focus-visible:outline-0 focus:outline-none ring-1 ring-gray-300 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 dark:ring-gray-700 ring-inset w-auto font-medium text-gray-700 dark:text-gray-200 text-sm aria-disabled:cursor-not-allowed disabled:cursor-not-allowed'>
            <span>MY Account</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-20 w-56'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {menuItems.map((item, index) => (
              <DropdownMenuItem key={index} className='space-x-2'>
                <Link
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className='flex items-center space-x-2 w-full'>
                  {item.icon}
                  <span>{item.label}</span>
                  {item.shortcut && (
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  )}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='space-x-2'>
            <Button
              onClick={async () => {
                signOut({
                  redirectTo: '/',
                });
                update();
                setDropdownOpen(false);
              }}
              type='submit'
              className='space-x-2 bg-transparent border-none w-full'
              variant='outline'>
              <LogOut />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export default UserButton;
