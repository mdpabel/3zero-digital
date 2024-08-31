import { handleThemeSwitcher } from '@/actions/theme-switcher';
import { cn } from '@/lib/utils';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import React from 'react';

const ThemeSwitcher = ({ className = '' }: { className?: string }) => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;
  const dark = theme === 'dark';

  return (
    <div className={cn('flex justify-center items-center ', className)}>
      <form
        action={handleThemeSwitcher}
        className='flex justify-center items-center'>
        {dark ? (
          <button name='theme' value='light' type='submit'>
            <MoonStarIcon />
          </button>
        ) : (
          <button name='theme' value='dark' type='submit'>
            <SunIcon />
          </button>
        )}
      </form>
    </div>
  );
};

export default ThemeSwitcher;
