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
import { useActionState, useEffect, useTransition } from 'react';
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
import { useRouter, useSearchParams } from 'next/navigation';
import PasswordInputField from './password-field';
import { useSession } from 'next-auth/react';

type LoginFormSchema = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [{ message, success }, action] = useActionState(loginAction, {
    success: false,
    message: '',
  });
  const [pending, startTransition] = useTransition();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const callbackUrl = searchParams.get('callbackUrl') ?? '/';

  useEffect(() => {
    if (success && message) {
      router.push(callbackUrl);
      session.update();
    }
  }, [message, message]);

  return (
    <Card className='mx-auto my-10 max-w-md'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Sign in to your account</CardTitle>
        <CardDescription className=''>
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
          <input type='hidden' name='callbackUrl' value={callbackUrl} />
          <CardContent className='gap-4 grid pb-4'>
            {message && (
              <Message type={success ? 'success' : 'error'} message={message} />
            )}

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='user@domain.com' {...field} />
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

            <input type='hidden' name='honeypot' />
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
            <div className='text-center'>
              <Link
                href='/reset-password'
                className='text-primary text-sm hover:underline'>
                Forgot Password?
              </Link>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
