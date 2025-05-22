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
import { ServiceWithProducts } from '@/lib/product/get-product';
import UserButton from './user-button';
import ComponentWrapper from '@/components/common/component-wrapper';
import SearchForm from '@/components/common/search';

const BigScreenNavbar = ({ services }: { services: ServiceWithProducts[] }) => {
  return (
    <ComponentWrapper className='hidden lg:block z-50'>
      <div className='flex justify-between items-center h-16'>
        <Logo />
        <NavigationMenu>
          <NavigationMenuList className='space-x-0'>
            {services.map(({ slug, name, products, id }) => (
              <NavigationMenuItem asChild key={id}>
                {products.length > 0 ? (
                  <li>
                    <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='gap-3 grid md:grid-cols-2 p-4 w-[680px]'>
                        {products?.map(({ description, slug, name, id }) => (
                          <ListItem
                            key={id}
                            title={name}
                            href={slug}
                            className=''>
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
                      className={cn(navigationMenuTriggerStyle())}>
                      <Link prefetch={true} href={slug!}>
                        {name}{' '}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center space-x-3'>
          <SearchForm />
          <UserButton />
        </div>
      </div>
    </ComponentWrapper>
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
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ',
            className,
          )}
          {...props}>
          <div className='font-medium text-sm leading-none'>{title}</div>
          <p className='text-muted-foreground text-sm line-clamp-2 leading-snug'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

export default BigScreenNavbar;
