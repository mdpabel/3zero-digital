'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
