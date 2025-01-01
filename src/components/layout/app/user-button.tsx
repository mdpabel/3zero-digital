'use client';
import React, { useState } from 'react';
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
import { logout } from '@/actions/auth/logout';
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
  // {
  //   label: 'Settings',
  //   icon: <Settings />,
  //   shortcut: '⌘S',
  //   href: '/me/settings',
  // },
];

const UserButton = () => {
  const router = useRouter();
  const { status, data } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuItemClick = () => {
    // Close the dropdown menu when a menu item is clicked
    setDropdownOpen(false);
  };

  if (status === 'unauthenticated') {
    return (
      <Button
        asChild
        variant='outline'
        className='border-zinc-800 dark:border-zinc-200 px-4 py-2 border text-base'>
        <Link prefetch={true} href='/login' className='space-x-1'>
          <span>Login</span> <LogIn className='w-4 h-4' />
        </Link>
      </Button>
    );
  }

  if (status === 'authenticated') {
    const firstChar = data?.user?.name?.charAt(0) ?? 'U';

    return (
      <DropdownMenu
        open={isDropdownOpen}
        onOpenChange={(open) => setDropdownOpen(open)}>
        <DropdownMenuTrigger asChild>
          <Button className='border rounded-full' size='icon' variant='outline'>
            <UserIcon />
          </Button>
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
