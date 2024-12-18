import { LogOut } from 'lucide-react';
import { signOut } from '@/auth';
import { revalidatePath } from 'next/cache';

export function NavUser({
  avatar,
  email,
  name,
}: {
  name: string;
  email: string | undefined;
  avatar: string | undefined;
}) {
  return (
    <div className='space-y-4'>
      <form
        action={async () => {
          'use server';
          await signOut({
            redirectTo: '/login',
          });
          revalidatePath('/login');
        }}>
        <button type='submit' className='flex items-center gap-2 text-white'>
          <LogOut />
          Log out
        </button>
      </form>

      <div className='flex-1 grid text-left text-sm text-white leading-tight'>
        <span className='font-semibold truncate'>{name}</span>
        <span className='text-xs truncate'>{email}</span>
      </div>
    </div>
  );
}
