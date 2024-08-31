'use server';

import { cookies } from 'next/headers';

export const handleThemeSwitcher = async (formData: FormData) => {
  const cookieStore = cookies();
  const theme = formData.get('theme') as string;
  cookieStore.set('theme', theme ?? 'light');
};
