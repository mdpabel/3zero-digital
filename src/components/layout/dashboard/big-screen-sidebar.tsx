'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import Logout from './logout';
import { SidebarItem } from './data';
import Logo from '../app/logo';
import Image from 'next/image';

const BigScreenSidebar = ({ data }: { data: SidebarItem[] }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/dashboard' || href === '/admin') {
      return href === pathname;
    }
    return href === pathname;
  };

  return (
    <aside className='top-0 left-0 fixed lg:flex flex-col justify-between hidden bg-gradient-to-br from-[#614385] to-[#516395] w-64 h-screen text-white sidebar'>
      <div className='p-4'>
        <Link href='/'>
          <Image
            src='/images/logo-light.png'
            alt='Logo'
            width={140}
            height={140}
          />
        </Link>

        <nav className='flex-1 space-y-4 mt-6'>
          <Accordion type='single' collapsible>
            {data.map((item, index) => (
              <div key={index}>
                {item.subItems ? (
                  <AccordionItem value={item.label} className='border-0'>
                    <AccordionTrigger
                      className={cn(
                        'flex items-center justify-between w-full px-4 py-2 rounded-lg text-white hover:bg-white hover:text-[#614385] transition mb-4',
                        isActive(item.href!) && 'bg-white text-[#614385]',
                      )}>
                      <span className='flex items-center'>
                        {item.icon && <span className='mr-3'>{item.icon}</span>}
                        {item.label}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className='ml-4'>
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href || '#'}
                          className={cn(
                            'flex items-center hover:bg-white px-4 py-2 rounded-lg text-white hover:text-[#614385] transition mb-2',
                            isActive(subItem.href) && 'bg-white text-[#614385]',
                          )}>
                          {subItem.icon && (
                            <span className='mr-3'>{subItem.icon}</span>
                          )}
                          {subItem.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className={cn(
                      'flex items-center hover:bg-white px-4 py-2 rounded-lg text-white hover:text-[#614385] transition mb-4',
                      isActive(item.href || '') && 'bg-white text-[#614385]',
                    )}>
                    {item.icon && <span className='mr-3'>{item.icon}</span>}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </Accordion>
        </nav>
      </div>

      <Logout />
    </aside>
  );
};

export default BigScreenSidebar;
