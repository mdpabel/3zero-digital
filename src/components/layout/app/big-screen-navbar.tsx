'use client';
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
import { useSession } from '@clerk/nextjs';
import { ServiceWithProducts } from '@/lib/product/get-product';

const BigScreenNavbar = ({ services }: { services: ServiceWithProducts[] }) => {
  const { isSignedIn } = useSession();

  return (
    <div className='lg:block z-50 hidden mx-auto px-4 max-w-6xl container'>
      <div className='flex justify-between items-center h-16'>
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            {services.map(({ slug, name, products, id }) => (
              <NavigationMenuItem asChild key={id}>
                {products.length > 0 ? (
                  <li>
                    <NavigationMenuTrigger className='text-zinc-800 dark:text-zinc-200'>
                      {name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]'>
                        {products?.map(({ description, slug, name }) => (
                          <ListItem
                            key={name}
                            title={name}
                            href={slug}
                            className='text-zinc-800 dark:text-zinc-200'>
                            {description}
                          </ListItem>
                        ))}
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
                      <Link prefetch={true} href={slug!}>
                        {name}{' '}
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
                <Link prefetch={true} href='/shop'>
                  Shop
                </Link>
              </NavigationMenuLink>
            </li>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center space-x-6'>
          <ThemeSwitcher />

          {/* Conditionally show based on login status */}
          <Button
            asChild
            variant='outline'
            className='border-zinc-800 dark:border-zinc-200 px-4 py-2 border text-base'>
            {isSignedIn ? (
              <Link prefetch={true} href='/dashboard'>
                Dashboard
              </Link>
            ) : (
              <Link prefetch={true} href='/login'>
                Get Started
              </Link>
            )}
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
