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
import { useActionState, useTransition } from 'react';
import Spinner from '../common/spinner';
import Message from './message';
import { SignUpSchema } from '@/schema/auth/create-user-schema';
import { signUpAction } from '@/actions/auth/signup';

type SignUpFormSchema = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
  const [{ message, success }, action] = useActionState(signUpAction, {
    success: false,
    message: '',
  });
  const [pending, startTransition] = useTransition();

  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
    },
  });

  return (
    <Card className='mx-auto my-10 max-w-md'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Create a new account</CardTitle>
        <CardDescription className=''>
          Enter your details below to create your account
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
          </CardContent>
          <CardFooter className='flex flex-col gap-2'>
            <Button className='w-full' type='submit'>
              {pending ? <Spinner /> : 'Register'}
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
