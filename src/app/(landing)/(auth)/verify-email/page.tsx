import { genMetaData } from '@/app/seo';
import { verifyToken } from '@/lib/auth/jwt-token';
import prisma from '@/prisma/db';
import { notFound } from 'next/navigation'; // For handling not found situations
import Link from 'next/link';
import { CheckCircle, XCircle } from 'lucide-react';

export const metadata = genMetaData({
  title: 'Verify email',
  url: '/verify-email',
});

type Props = {
  searchParams: Promise<{ token: string }>;
};

const VerifyEmail = async ({ searchParams }: Props) => {
  const { token } = await searchParams;

  if (!token) {
    return notFound(); // Return a 404 if no token is provided
  }

  try {
    // Verify the token
    const payload = await verifyToken(token);

    // Update email verification status in the database
    await prisma.user.update({
      where: {
        email: payload.email,
      },
      data: {
        emailVerified: new Date(),
      },
    });

    // Return success response
    return (
      <div className='mx-auto px-4 py-12 max-w-3xl text-center container'>
        <div className='bg-gray-100 dark:bg-gray-900 shadow-lg p-8 rounded-lg'>
          <div className='flex justify-center items-center text-green-500'>
            <CheckCircle size={50} className='mr-4' />
            <div>
              <h2 className='font-semibold text-2xl'>
                Your email has been successfully verified!
              </h2>
              <p className='mt-4'>
                You can now{' '}
                <Link href='/login' className='text-blue-500'>
                  log in to your account
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error verifying the token:', error);

    // Return error response if token is invalid or expired
    return (
      <div className='mx-auto px-4 py-12 max-w-3xl text-center container'>
        <div className='bg-gray-100 dark:bg-gray-900 shadow-lg p-8 rounded-lg'>
          <div className='flex justify-center items-center text-red-500'>
            <XCircle size={50} className='mr-4' />
            <div>
              <h2 className='font-semibold text-2xl'>
                Invalid or expired token
              </h2>
              <p className='mt-4'>
                The verification link you used is either invalid or expired.
                Please try{' '}
                <Link href='/resend-verification' className='text-blue-500'>
                  requesting a new verification link
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default VerifyEmail;
