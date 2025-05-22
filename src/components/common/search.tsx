'use client';
import { useDebounce } from 'use-debounce';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn, formatDate } from '@/lib/utils';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { File, Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { WP_REST_API_Posts } from 'wp-types';
import Spinner from '../common/spinner';
import { searchDb } from '@/lib/config/search-db';
import { ScrollArea } from '../ui/scroll-area';
import { Product } from '@prisma/client';
import { getProducts } from '@/actions/product/get-products';

const SearchForm = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);
  const [services, setServices] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value] = useDebounce(search, 300);

  useEffect(() => {
    if (!value) {
      setPosts([]);
      setServices([]);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [{ posts }, products] = await Promise.all([
          getPostsWithTagNames({ search: value }),
          getProducts(value),
        ]);

        if (Array.isArray(posts)) {
          setPosts(posts as WP_REST_API_Posts);
        }

        if (Array.isArray(products)) {
          setServices(products as Product[]);
        }
      } catch (error) {
        console.error('Error fetching search data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [value]);

  console.log({
    posts,
    services,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          aria-label='Search'
          className='flex items-center p-2 rounded-full transition'>
          <Search className='w-5 h-5 text-gray-700 dark:text-gray-300 transition' />
        </button>
      </DialogTrigger>

      <DialogContent className='w-full lg:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>
            <div className='flex items-center dark:bg-gray-800 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus-within:ring-[#614385] focus-within:ring-2'>
              {isLoading ? (
                <Spinner className='mr-2 w-6 h-6 text-gray-400 dark:text-gray-200' />
              ) : (
                <Search className='mr-2 w-5 h-5 text-gray-400 dark:text-gray-200' />
              )}
              <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Type to search...'
                className='bg-transparent outline-none w-full text-gray-800 dark:text-gray-200 text-sm placeholder-gray-400'
              />
            </div>
          </DialogTitle>
          <DialogDescription className='mt-2 text-gray-500 text-sm'>
            Start typing to search. Press <kbd>ESC</kbd> to close.
          </DialogDescription>
        </DialogHeader>

        {services.length > 0 && (
          <ScrollArea className='p-4 border rounded-md w-full max-h-[250px]'>
            <div>
              <div className='p-1 overflow-hidden font-semibold text-foreground text-sm'>
                Services
              </div>
              <div className='space-y-0.5'>
                {services.map((item) => (
                  <Link
                    href={item.id}
                    key={item.slug}
                    className={cn(
                      'relative w-full hover:bg-zinc-500 flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-3 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
                    )}>
                    <File />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {posts.length > 0 && (
              <div className='mt-2 border-t'>
                <div className='mt-2 p-1 overflow-hidden font-semibold text-foreground text-sm'>
                  Blog Posts
                </div>
                <div className='space-y-0.5'>
                  {posts.map((item) => (
                    <Link
                      href={`/blog/${item.slug}`}
                      key={item.id}
                      className={cn(
                        'relative w-full hover:bg-zinc-500 flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-3 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
                      )}>
                      <File />
                      {item.title.rendered}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </ScrollArea>
        )}

        {services.length === 0 && posts.length === 0 && (
          <ScrollArea className='p-4 border rounded-md w-full max-h-[250px] md:max-h-[300px]'>
            <div>
              {searchDb.services.map((serviceGroup) => (
                <div key={serviceGroup.title}>
                  <div className='p-1 overflow-hidden font-semibold text-foreground text-sm'>
                    {serviceGroup.title}
                  </div>
                  <div className='space-y-0.5'>
                    {serviceGroup.items.map((item) => (
                      <Link
                        href={item.href}
                        key={item.href}
                        className={cn(
                          'relative w-full hover:bg-zinc-500 flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-3 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
                        )}>
                        <File />
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}

        <DialogFooter>
          <div className='flex flex-wrap justify-start items-center gap-2 text-sm'>
            <span className='text-gray-500'>Try searching for:</span>
            <Button
              variant='link'
              size='sm'
              onClick={() => setSearch('Malware Removal')}
              className='px-2 py-1'>
              Malware Removal
            </Button>
            <Button
              variant='link'
              size='sm'
              onClick={() => setSearch('WordPress')}
              className='px-2 py-1'>
              WordPress
            </Button>
            <Button
              variant='link'
              size='sm'
              onClick={() => setSearch('Development')}
              className='px-2 py-1'>
              Development
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchForm;
