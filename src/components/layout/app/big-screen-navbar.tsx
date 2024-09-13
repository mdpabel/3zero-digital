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

const BigScreenNavbar = () => {
  return (
    <div className='lg:block z-50 hidden mx-auto px-4 max-w-6xl container'>
      <div className='flex justify-between items-center h-16'>
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            {services.map(({ href, label, subMenu }, index) => (
              <NavigationMenuItem asChild key={label}>
                {subMenu ? (
                  <li>
                    <NavigationMenuTrigger className='text-zinc-800 dark:text-zinc-200'>
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]'>
                        {subMenu?.map(
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
                      <Link href={href}>{label} </Link>
                    </NavigationMenuLink>
                  </li>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex items-center space-x-6'>
          <ThemeSwitcher />
          <Button
            variant='outline'
            className='border-zinc-800 dark:border-zinc-200 border'>
            <Link href='/login'>Get Started</Link>
          </Button>
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
