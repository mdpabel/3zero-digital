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
import { useActionState, useTransition } from 'react';
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
import Message from './message';
import Spinner from '../common/spinner';
import { loginAction } from '@/actions/auth/login';
import { LoginSchema } from '@/schema/auth/login-schmea';

type LoginFormSchema = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const [{ message, success }, action] = useActionState(loginAction, {
    success: false,
    message: '',
  });
  const [pending, startTransition] = useTransition();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <Card className='mx-auto my-10 max-w-md text-zinc-800 dark:text-zinc-200'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Sign in to your account</CardTitle>
        <CardDescription className='text-zinc-800 dark:text-zinc-200'>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          action={async (formData) => {
            const isValid = await form.trigger();
            if (isValid) {
              startTransition(() => action(formData));
            }
          }}
          className='space-y-4'>
          <CardContent className='gap-4 grid pb-4'>
            {message && (
              <Message type={success ? 'success' : 'error'} message={message} />
            )}

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='user@domain.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className='flex flex-col gap-2 x'>
            <Button className='w-full' type='submit'>
              {pending ? <Spinner /> : 'Sign In'}
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
