'use client';
import { LogOut } from 'lucide-react';
import { signOut } from '@/auth';
import { revalidatePath } from 'next/cache';
import { useSession } from 'next-auth/react';

export function NavUser() {
  const { data } = useSession();
  const email = data?.user?.email || 'No email';
  const name = data?.user?.name || 'No name';

  return (
    <div className='space-y-4'>
      <form
        action={async () => {
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

      <div className='flex-1 grid text-white text-sm text-left leading-tight'>
        <span className='font-semibold truncate'>{name}</span>
        <span className='text-xs truncate'>{email}</span>
      </div>
    </div>
  );
}
