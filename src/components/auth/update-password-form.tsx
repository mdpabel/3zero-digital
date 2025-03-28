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
import { useSearchParams } from 'next/navigation';
import Message from './message';
import Spinner from '../common/spinner';
import { UpdatePasswordSchema } from '@/schema/auth/update-password-schema';
import { updatePassword } from '@/actions/auth/update-password';
import PasswordInputField from './password-field';

type UpdatePasswordFormSchema = z.infer<typeof UpdatePasswordSchema>;

const UpdatePasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token'); // Get token from URL parameters
  const [{ message, success }, action] = useActionState(updatePassword, {
    success: false,
    message: '',
  });
  const [pending, startTransition] = useTransition();

  const form = useForm<UpdatePasswordFormSchema>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <Card className='mx-auto my-10 max-w-md'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Set Your New Password</CardTitle>
        <CardDescription>
          Enter your new password below to complete the password reset process.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          action={async (formData) => {
            const isValid = await form.trigger();

            formData.set('token', token || '');

            if (isValid && token) {
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
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <PasswordInputField field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder='********' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <input type='hidden' name='honeypot' />
          </CardContent>
          <CardFooter className='flex flex-col gap-2 x'>
            <Button className='w-full' type='submit'>
              {pending ? <Spinner /> : 'Update Password'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default UpdatePasswordForm;
