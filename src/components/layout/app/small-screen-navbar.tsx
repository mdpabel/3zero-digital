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
import React from 'react';
import { services } from '@/services';

const SmallScreenNavbar = () => {
  return (
    <div className='block z-50 lg:hidden mx-auto px-4 max-w-6xl max-h-screen container'>
      <div className='flex justify-between items-center h-16'>
        <Logo />
        <div className='flex items-center space-x-5'>
          <ThemeSwitcher className='shadow-lg shadow-zinc-800/9 rounded-full w-9 h-9' />
          <DropdownMenu>
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
              {services?.map(({ description, href, label, subMenu }, index) => (
                <React.Fragment key={`${label}-${index}`}>
                  {subMenu ? (
                    <div>
                      <Accordion type='single' collapsible>
                        <AccordionItem value={`item-${index}`}>
                          <AccordionTrigger
                            style={{
                              padding: '10px 4px',
                            }}>
                            {label}
                          </AccordionTrigger>
                          <AccordionContent>
                            {subMenu.map(
                              ({ description, href, label }, subIndex) => (
                                <DropdownMenuItem key={`${label}-${subIndex}`}>
                                  <Link className='w-full' href={href}>
                                    {label}
                                  </Link>
                                </DropdownMenuItem>
                              ),
                            )}
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
                        asChild>
                        <div className='block py-2 w-full font-medium text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-100 transition cursor-pointer'>
                          {label}
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
