import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import ThemeSwitcher from '@/components/common/theme-switcher';
import { services } from '@/services';
import { SignedIn, SignedOut } from '@clerk/nextjs';

const BigScreenNavbar = () => {
  return (
    <div className='lg:block z-50 hidden mx-auto px-4 max-w-6xl container'>
      <div className='flex justify-between items-center h-16'>
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            {services.map(({ href, label, subMenuItems }, index) => (
              <NavigationMenuItem asChild key={label}>
                {subMenuItems.length > 0 ? (
                  <li>
                    <NavigationMenuTrigger className='text-zinc-800 dark:text-zinc-200'>
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]'>
                        {subMenuItems?.map(
                          ({ description, href, label }, subIndex) => (
                            <ListItem
                              key={label}
                              title={label}
                              href={href}
                              className='text-zinc-800 dark:text-zinc-200'>
                              {description}
                            </ListItem>
                          ),
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </li>
                ) : (
                  <li>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-zinc-800 dark:text-zinc-200',
                      )}>
                      <Link prefetch={true} href={href}>
                        {label}{' '}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                )}
              </NavigationMenuItem>
            ))}
            <li>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  'text-zinc-800 dark:text-zinc-200',
                )}>
                <Link prefetch={true} href='/case-studies'>
                  Case Studies
                </Link>
              </NavigationMenuLink>
            </li>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center space-x-6'>
          <ThemeSwitcher />

          {/* Conditionally show based on login status */}
          <Button
            variant='outline'
            className='border-zinc-800 dark:border-zinc-200 border'>
            <Link prefetch={true} href='/login'>
              Get Started
            </Link>
          </Button>
          {/* 
          <SignedIn>
            <Button
              variant='outline'
              className='border-zinc-800 dark:border-zinc-200 border'>
              <Link prefetch={true} href='/dashboard'>Dashboard</Link>
            </Button>
          </SignedIn> */}
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          prefetch={true}
          href={props.href!}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-zinc-800 dark:text-zinc-200',
            className,
          )}
          {...props}>
          <div className='font-medium text-sm leading-none'>{title}</div>
          <p className='line-clamp-2 text-muted-foreground text-sm leading-snug'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

export default BigScreenNavbar;
