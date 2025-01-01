'use server';
import { signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export const logout = async () => {
  try {
    await signOut();
  } catch (error: any) {
    if (isRedirectError(error)) {
      throw new Error('Redirect error');
    }
    console.log(error);
    throw new Error(error.message);
  }
};
