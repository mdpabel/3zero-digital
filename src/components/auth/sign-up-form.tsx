'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import VerifyEmail from './verify-email-form';
import Spinner from '../common/spinner';
import { catchClerkError } from '@/lib/utils';
import Message from './message';
import PasswordInputField from './password-field';
import { createAccount } from '@/lib/swell/account';

const signUpSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignUpFormSchema = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'error' | 'success' | 'init';
    message: string;
  }>();
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: SignUpFormSchema) => {
    setIsLoading(true);
    if (!isLoaded) return;

    const { email, firstName, lastName, password } = data;

    try {
      await Promise.all([
        signUp.create({ emailAddress: email, password, firstName, lastName }),
        createAccount({ email, password, firstName, lastName }),
      ]);

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setMessage({
        type: 'success',
        message: 'Check your email for verification.',
      });
      router.push('/verify-email');
    } catch (error) {
      setMessage({ type: 'error', message: catchClerkError(error) });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className='mx-auto my-10 max-w-md text-zinc-800 dark:text-zinc-200'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Create a new account</CardTitle>
        <CardDescription className='text-zinc-800 dark:text-zinc-200'>
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <CardContent className='gap-4 grid pb-0'>
            {message?.message && (
              <Message type={message.type} message={message.message} />
            )}
            <div className='gap-2 grid grid-cols-1 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        className='border-zinc-800 dark:border-zinc-200 border'
                        placeholder='First Name'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className='border-zinc-800 dark:border-zinc-200 border'
                        placeholder='Last Name'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
              {isLoading ? <Spinner /> : 'Register'}
            </Button>
            <div className='text-center'>
              <span className='text-muted-foreground text-sm'>
                Already have an account?{' '}
                <Link
                  href='/login'
                  className='text-primary text-sm hover:underline'>
                  Login
                </Link>
              </span>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default SignUpForm;
