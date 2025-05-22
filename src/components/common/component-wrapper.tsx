import { cn } from '@/lib/utils';
import React, { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ComponentWrapper = ({ children, className, ...props }: Props) => {
  return (
    <div className={cn('mx-auto w-full px-4 max-w-6xl', className)} {...props}>
      {children}
    </div>
  );
};

export default ComponentWrapper;
