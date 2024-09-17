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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Message from './message';
import Spinner from '../common/spinner';
import { useAuth, useSignIn } from '@clerk/nextjs';
import { catchClerkError } from '@/lib/utils';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isLoading, setIsLoading] = useState(false);
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [message, setMessage] = useState<{
    type: 'error' | 'success' | 'init';
    message: string;
  }>();
  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: ForgotPasswordSchema) => {
    setIsLoading(true);

    if (!isLoaded) {
      return;
    }

    try {
      setMessage({
        message: '',
        type: 'init',
      });

      const forgotPasswordAttempt = await signIn?.create({
        strategy: 'reset_password_email_code',
        identifier: data.email,
      });

      if (forgotPasswordAttempt.status === 'needs_first_factor') {
        // await setActive({ session: forgotPasswordAttempt.createdSessionId });
        setMessage({
          type: 'success',
          message: 'OTP sent! Check your email.',
        });
        setIsLoading(false);
        setTimeout(() => router.push('/reset-password'), 300);
      }
    } catch (error) {
      const message = catchClerkError(error);
      setMessage({
        type: 'error',
        message:
          message ||
          'Failed to send password reset email. Please try again later.',
      });
      setIsLoading(false);
    }
  };

  return (
    <Card className='mx-auto my-10 max-w-md text-zinc-800 dark:text-zinc-200'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Forgot Password</CardTitle>
        <CardDescription className='text-zinc-800 dark:text-zinc-200'>
          Enter your email address to receive an OTP.
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
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className='border-zinc-800 dark:border-zinc-200 border'
                      placeholder='m@example.com'
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
              {isLoading ? <Spinner /> : 'Send Reset Link'}
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

export default ForgotPasswordForm;
