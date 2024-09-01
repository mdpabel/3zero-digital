'use server';

import { signIn } from '@/app/auth';

export const login = async (formData: FormData) => {
  try {
    const res = await signIn('resend', formData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
