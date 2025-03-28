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
import { useSearchParams } from 'next/navigation';
import { ResetPasswordSchema } from '@/schema/auth/reset-password-schema';
import { resetPassword } from '@/actions/auth/reset-password';

type ResetPasswordFormSchema = z.infer<typeof ResetPasswordSchema>;

const ResetPasswordForm = () => {
  const [{ message, success }, action] = useActionState(resetPassword, {
    success: true,
    message: '',
  });
  const [pending, startTransition] = useTransition();

  const form = useForm<ResetPasswordFormSchema>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <Card className='mx-auto my-10 max-w-md'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Reset your password</CardTitle>
        <CardDescription className=''>
          Enter your email below to reset your password
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='user@domain.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <input type='hidden' name='honeypot' />
          </CardContent>
          <CardFooter className='flex flex-col gap-2 x'>
            <Button className='w-full' type='submit'>
              {pending ? <Spinner /> : 'Reset Password'}
            </Button>
            <div className='text-center'>
              <span className='text-muted-foreground text-sm'>
                Remember your password?{' '}
                <Link
                  href='/login'
                  className='text-primary text-sm hover:underline'>
                  Login here
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
