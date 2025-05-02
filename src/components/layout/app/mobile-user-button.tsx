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

const MobileUserButton = () => {
  const { status, data, update } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuItemClick = () => {
    // Close the dropdown menu when a menu item is clicked
    setDropdownOpen(false);
  };

  if (status === 'authenticated') {
    return (
      <DropdownMenu
        open={isDropdownOpen}
        onOpenChange={(open) => setDropdownOpen(open)}>
        <DropdownMenuTrigger asChild>
          <button>
            <UserIcon />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-4 w-56'>
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

export default MobileUserButton;
