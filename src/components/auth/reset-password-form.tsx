'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import Message from './message';
import Spinner from '../common/spinner';
import Link from 'next/link';
import { useSignIn } from '@clerk/nextjs';
import { catchClerkError } from '@/lib/utils';

const resetPasswordSchema = z.object({
  code: z.string().min(1, 'Reset code is required'),
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
});

type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'error' | 'success' | 'init';
    message: string;
  }>();
  const router = useRouter();
  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: ResetPasswordSchema) => {
    setIsLoading(true);

    if (!isLoaded) {
      return;
    }

    try {
      setMessage({
        message: '',
        type: 'init',
      });

      const resetPasswordAttemp = await signIn?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code: data.code,
        password: data.newPassword,
      });

      if (resetPasswordAttemp?.status === 'complete') {
        await setActive({ session: resetPasswordAttemp.createdSessionId });
        setMessage({
          type: 'success',
          message: 'Password has been reset successfully! Redirecting...',
        });
        setIsLoading(false);
        setTimeout(() => router.push('/dashboard'), 300);
      }
    } catch (error) {
      const message = catchClerkError(error);
      setMessage({
        type: 'error',
        message: message || 'Failed to reset password. Please try again later.',
      });
      setIsLoading(false);
    }
  };

  return (
    <Card className='mx-auto my-10 max-w-md text-zinc-800 dark:text-zinc-200'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Reset Password</CardTitle>
        <CardDescription className='text-zinc-800 dark:text-zinc-200'>
          Enter the reset code and your new password
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <CardContent className='gap-4 grid pb-0'>
            {message?.message && (
              <Message type={message.type} message={message.message} />
            )}

            <FormField
              control={form.control}
              name='code'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reset Code</FormLabel>
                  <FormControl>
                    <Input
                      className='border-zinc-800 dark:border-zinc-200 border'
                      placeholder='Enter reset code'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='newPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      className='border-zinc-800 dark:border-zinc-200 border'
                      type='password'
                      placeholder='Enter new password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className='flex flex-col gap-2'>
            <Button className='w-full' type='submit'>
              {isLoading ? <Spinner /> : 'Reset Password'}
            </Button>
            <div className='text-center'>
              <span className='text-muted-foreground text-sm'>
                Remembered your password?{' '}
                <Link
                  href='/login'
                  className='text-primary text-sm hover:underline'>
                  Sign In
                </Link>
              </span>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default ResetPasswordForm;
