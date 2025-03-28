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

const SmallScreenNavbar = ({
  services,
}: {
  services: ServiceWithProducts[];
}) => {
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
          <ThemeSwitcher className='shadow-lg shadow-zinc-800/9 rounded-full w-9 h-9' />
          <DropdownMenu
            open={isDropdownOpen}
            onOpenChange={(open) => setDropdownOpen(open)}>
            <DropdownMenuTrigger>
              <div className='flex justify-center items-center bg-white/90 dark:bg-zinc-800/90 shadow-lg shadow-zinc-800/9 backdrop-blur rounded-full w-9 h-9'>
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
                {/* <DropdownMenuItem asChild onClick={handleMenuItemClick}>
                  <Link
                    className='block py-2 pb-6 pl-1 w-full font-medium text-zinc-800 hover:text-teal-500 dark:text-zinc-100 text-sm transition cursor-pointer'
                    href='/recent-projects'>
                    Recent Projects
                  </Link>
                </DropdownMenuItem> */}
                <DropdownMenuItem asChild onClick={handleMenuItemClick}>
                  <Link
                    className='block py-2 pb-6 pl-1 w-full font-medium text-zinc-800 hover:text-teal-500 dark:text-zinc-100 text-sm transition cursor-pointer'
                    href='/shop'>
                    Shop
                  </Link>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
