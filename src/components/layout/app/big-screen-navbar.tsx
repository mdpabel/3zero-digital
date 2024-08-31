import React from 'react';
import Logo from './logo';
import { menu } from './header';
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

const BigScreenNavbar = () => {
  return (
    <div className='mx-auto max-w-6xl container'>
      <div className='flex justify-between items-center h-16'>
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            {menu.map(({ href, label, subMenu }, index) => (
              <NavigationMenuItem asChild key={index}>
                {subMenu ? (
                  <div>
                    <NavigationMenuTrigger className='text-zinc-800 dark:text-zinc-200'>
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]'>
                        {subMenu?.map(({ description, href, label }, index) => (
                          <ListItem
                            key={label + index}
                            title={label}
                            href={href}
                            className='text-zinc-800 dark:text-zinc-200'>
                            {description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </div>
                ) : (
                  <Link href={href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-zinc-800 dark:text-zinc-200',
                      )}>
                      {label}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex items-center space-x-6'>
          <ThemeSwitcher />
          <Button variant='outline' className='border border-black'>
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
