'use client';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import ThemeSwitcher from '../../common/theme-switcher';
import { FaBars } from 'react-icons/fa';
import Logo from './logo';
import { services } from '@/services';
import { ServiceWithProducts } from '@/lib/product/get-product';
import MobileUserButton from './mobile-user-button';
import { useSession } from 'next-auth/react';

const SmallScreenNavbar = ({
  services,
}: {
  services: ServiceWithProducts[];
}) => {
  const { status } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuItemClick = () => {
    // Close the dropdown menu when a menu item is clicked
    setDropdownOpen(false);
  };

  return (
    <div className='lg:hidden block z-50 mx-auto px-4 max-w-6xl max-h-screen container'>
      <div className='flex justify-between items-center h-16'>
        <Logo />
        <div className='flex items-center space-x-5'>
          {/* <ThemeSwitcher className='shadow-lg shadow-zinc-800/9 rounded-full w-9 h-9' /> */}
          <MobileUserButton />

          <DropdownMenu
            open={isDropdownOpen}
            onOpenChange={(open) => setDropdownOpen(open)}>
            <DropdownMenuTrigger>
              <div className='flex justify-center items-center shadow-lg shadow-zinc-800/9 backdrop-blur rounded-full w-9 h-9'>
                <FaBars className='w-5 h-5' />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              style={{
                padding: '0 16px',
              }}
              className='mx-auto mt-2 px-4 sm:px-8 lg:px-12 w-screen'>
              {services?.map(
                ({ slug, description, icon, name, products, id }) => (
                  <React.Fragment key={id}>
                    {products ? (
                      <div>
                        <Accordion type='single' collapsible>
                          <AccordionItem value={id}>
                            <AccordionTrigger
                              style={{
                                padding: '10px 4px',
                              }}>
                              {name}
                            </AccordionTrigger>
                            <AccordionContent>
                              {products.map(({ slug, name, id }, subIndex) => (
                                <DropdownMenuItem
                                  key={`${id}-${subIndex}`}
                                  onClick={handleMenuItemClick}>
                                  <Link className='w-full' href={slug}>
                                    {name}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    ) : (
                      <div>
                        <DropdownMenuItem
                          style={{
                            padding: '10px 4px',
                          }}
                          asChild
                          onClick={handleMenuItemClick}>
                          <div className='block py-2 w-full font-medium text-zinc-800 hover:text-teal-500 dark:text-zinc-100 text-sm transition cursor-pointer'>
                            {name}
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </div>
                    )}
                  </React.Fragment>
                ),
              )}
              <div>
                {status === 'unauthenticated' && (
                  <div className='flex justify-between items-center gap-10 mt-3 mb-8'>
                    <div className='w-full'>
                      <DropdownMenuItem asChild onClick={handleMenuItemClick}>
                        <Link
                          prefetch={true}
                          href='/login'
                          className='flex flex-shrink-0 justify-center items-center gap-x-2 space-x-1 bg-gray-50 aria-disabled:bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:aria-disabled:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 aria-disabled:opacity-75 disabled:opacity-75 shadow-sm px-3 py-2 rounded-md focus-visible:outline-0 focus:outline-none ring-1 ring-gray-300 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 dark:ring-gray-700 ring-inset w-full font-medium text-gray-700 dark:text-gray-200 text-sm text-center aria-disabled:cursor-not-allowed disabled:cursor-not-allowed'>
                          <span>Login</span>
                        </Link>
                      </DropdownMenuItem>
                    </div>

                    <div className='w-full'>
                      <DropdownMenuItem asChild onClick={handleMenuItemClick}>
                        <Link
                          prefetch={true}
                          href='/signup'
                          className='flex flex-shrink-0 justify-center items-center gap-x-2 bg-gray-900 aria-disabled:bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:aria-disabled:bg-white dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white aria-disabled:opacity-75 disabled:opacity-75 shadow-sm px-3 py-2 rounded-md focus-visible:outline-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-inset w-full font-medium !text-white dark:text-gray-900 text-sm text-center aria-disabled:cursor-not-allowed disabled:cursor-not-allowed primary-color'>
                          <span>Register</span>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
