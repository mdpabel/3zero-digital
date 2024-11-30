'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeSwitcher = ({ className = '' }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const dark = theme === 'dark';

  return (
    <div className={cn('flex justify-center items-center', className)}>
      <form className='flex justify-center items-center'>
        {dark ? (
          <button
            onClick={() => setTheme('light')}
            name='theme'
            value='light'
            type='submit'
            aria-label='Switch to light mode'>
            <MoonStarIcon />
          </button>
        ) : (
          <button
            onClick={() => setTheme('dark')}
            name='theme'
            value='dark'
            type='submit'
            aria-label='Switch to dark mode'>
            <SunIcon />
          </button>
        )}
      </form>
    </div>
  );
};

export default ThemeSwitcher;
