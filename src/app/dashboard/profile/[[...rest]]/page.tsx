'use client';
import { UserProfile } from '@clerk/nextjs';
import { dark, experimental__simple } from '@clerk/themes';
import { useTheme } from 'next-themes';

const ProfilePage = () => {
  const { theme } = useTheme();

  return (
    <div className='mx-auto py-10 max-w-4xl'>
      <h1 className='mb-8 font-bold text-4xl text-gray-800 dark:text-gray-200'>
        Manage Your Profile
      </h1>
      <UserProfile
        appearance={{
          baseTheme: theme === 'dark' ? dark : experimental__simple,
          elements: {
            rootBox: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
            card: {
              backgroundColor: 'rgba(97, 67, 133, 0.9)',
              boxShadow: 'none',
              borderRadius: '8px',
            },
            headerTitle: {
              color: '#ffffff',
            },
            formButtonPrimary: {
              backgroundColor: 'rgba(81, 99, 149, 1)',
              borderRadius: '8px',
            },
            formFieldInput: {
              backgroundColor: '#f1f1f1',
              borderColor: '#614385',
            },
            formFieldLabel: {
              color: '#ffffff',
            },
          },
        }}
      />
    </div>
  );
};

export default ProfilePage;
