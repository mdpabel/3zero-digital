'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { SidebarItem } from './data';

export function SidebarNavMain({ items }: { items: SidebarItem[] }) {
  const { data, status } = useSession();

  console.log({ data, status });

  const role = data?.user?.role ?? 'CUSTOMER';

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isAllowed = item.roles.includes(role ?? '');
          if (!isAllowed) return null;

          return (
            <Collapsible key={item.label} asChild defaultOpen={false}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={item.label}>
                  <Link
                    href={item.href}
                    className='flex items-center py-5 text-white'>
                    {item.icon}
                    <span className='ml-2'>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
                {item.subItems && item.subItems.length > 0 && (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className='data-[state=open]:rotate-90'>
                        <ChevronRight />
                        <span className='sr-only'>Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.label}>
                            <SidebarMenuSubButton asChild>
                              <Link
                                href={subItem.href}
                                className='flex items-center py-5 text-white'>
                                {subItem.icon}
                                <span className='ml-2'>{subItem.label}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                )}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
