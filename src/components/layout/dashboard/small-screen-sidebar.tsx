import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Logout from './logout';
import { SidebarItem } from './data';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import Image from 'next/image';

const SmallScreenSidebar = ({ data }: { data: SidebarItem[] }) => {
  const userRole = 'admin';

  return (
    <aside className='block top-2 left-2 absolute lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className='lg:hidden'>
            <FaBars className='w-6 h-6' />
          </Button>
        </SheetTrigger>

        <SheetContent
          side='left'
          className='flex flex-col justify-between bg-gradient-to-br from-[#614385] to-[#516395] w-64 h-screen text-white'>
          <nav className='flex-1 space-y-4 mt-4'>
            <SheetHeader>
              <SheetTitle>
                <SheetClose asChild>
                  <Link href='/'>
                    <Image
                      src='/images/logo-light.png'
                      alt='Logo'
                      width={140}
                      height={140}
                    />
                  </Link>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>

            <Accordion type='single' collapsible>
              {data
                .filter((item) => item.roles.includes(userRole))
                .map((item, index) => (
                  <div key={index}>
                    {item.subItems ? (
                      <AccordionItem value={item.label}>
                        <AccordionTrigger className='flex justify-between items-center hover:bg-white px-4 py-2 rounded-lg w-full text-white hover:text-[#614385] transition'>
                          <span className='flex items-center'>
                            {item.icon && (
                              <span className='mr-3'>{item.icon}</span>
                            )}
                            {item.label}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className='ml-4'>
                          {item.subItems.map((subItem, subIndex) => (
                            <SheetClose asChild key={subIndex}>
                              <Link
                                href={subItem.href || '#'}
                                className='flex items-center hover:bg-white px-4 py-2 rounded-lg text-white hover:text-[#614385] transition'>
                                {subItem.icon && (
                                  <span className='mr-3'>{subItem.icon}</span>
                                )}
                                {subItem.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={item.href || '#'}
                          className='flex items-center hover:bg-white px-4 py-2 rounded-lg text-white hover:text-[#614385] transition'>
                          {item.icon && (
                            <span className='mr-3'>{item.icon}</span>
                          )}
                          {item.label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
            </Accordion>
          </nav>

          <Logout />
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default SmallScreenSidebar;
