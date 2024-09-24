'use client';
import { useSignIn } from '@clerk/nextjs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { useRouter, useSearchParams } from 'next/navigation';
import { catchClerkError } from '@/lib/utils';
import Message from './message';
import Spinner from '../common/spinner';
import PasswordInputField from './password-field';
import { login } from '@/lib/swell/account';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'error' | 'success' | 'init';
    message: string;
  }>();
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  const redirectUrl = searchParams.get('redirect_url') || '/dashboard';

  const onSubmit = async (data: LoginFormSchema) => {
    setIsLoading(true);
    if (!isLoaded) return;

    const { email, password } = data;

    try {
      setMessage({ message: '', type: 'init' });

      const [signInAttempt, swellLogin] = await Promise.all([
        signIn.create({ identifier: email, password }),
        login({ email, password }),
      ]);

      if (signInAttempt.status === 'complete') {
        await setActive({
          session: signInAttempt.createdSessionId,
        });

        // await fetch('/api/clerk/update-metadata', {
        //   method: 'POST',
        // });

        setMessage({
          type: 'success',
          message: 'Login successful! Redirecting...',
        });

        router.push(redirectUrl);
      } else {
        setMessage({
          type: 'error',
          message: 'Additional verification required',
        });
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (error) {
      const errorMessage = catchClerkError(error);
      setMessage({ type: 'error', message: errorMessage });
      console.error(JSON.stringify(error, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className='mx-auto my-10 max-w-md text-zinc-800 dark:text-zinc-200'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Sign in to your account</CardTitle>
        <CardDescription className='text-zinc-800 dark:text-zinc-200'>
          Enter your email below to login to your account
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

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInputField field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='text-right'>
              <Link
                href='/forgot-password'
                className='text-muted-foreground text-sm hover:underline'>
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col gap-2'>
            <Button className='w-full' type='submit'>
              {isLoading ? <Spinner /> : 'Sign In'}
            </Button>
            <div className='text-center'>
              <span className='text-muted-foreground text-sm'>
                Don&apos;t have an account?{' '}
                <Link
                  href='/signup'
                  className='text-primary text-sm hover:underline'>
                  Register
                </Link>
              </span>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
