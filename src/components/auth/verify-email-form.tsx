'use client';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { catchClerkError } from '@/lib/utils';
import Spinner from '../common/spinner';
import Message from './message';
import { useSignUp } from '@clerk/nextjs';

// Define the schema using Zod
const otpSchema = z.object({
  code: z.string().length(6, 'OTP code must be exactly 6 digits'),
});

type OTPFormSchema = z.infer<typeof otpSchema>;

const VerifyEmailForm = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [message, setMessage] = useState<{
    type: 'error' | 'success' | 'init';
    message: string;
  }>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<OTPFormSchema>({
    resolver: zodResolver(otpSchema),
    mode: 'onTouched',
  });

  const handleVerify = async (data: OTPFormSchema) => {
    setIsLoading(true);

    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: data.code,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ clerkUserId: completeSignUp.createdUserId }),
        });
        setMessage({
          type: 'success',
          message: 'Email verified successfully! 🎉. Redirecting...',
        });

        setTimeout(() => {
          router.push('/dashboard');
        }, 300);
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
      setIsLoading(false);
    } catch (err: any) {
      const errorMessage = catchClerkError(err);
      setMessage({
        type: 'error',
        message: errorMessage,
      });
      console.error('Error:', JSON.stringify(err, null, 2));
      setIsLoading(false);
    }
  };

  return (
    <Card className='mx-auto my-10 max-w-md text-zinc-800 dark:text-zinc-200'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Verify Your Email</CardTitle>
        <CardDescription className='text-zinc-800 dark:text-zinc-200'>
          Enter the 6-digit code sent to your email
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleVerify)} className='space-y-4'>
          <CardContent className='gap-4 grid'>
            {message?.message && (
              <Message type={message.type} message={message.message} />
            )}

            <FormField
              control={form.control}
              name='code'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP {...field} maxLength={6} className='mx-auto'>
                      <InputOTPGroup className='w-full'>
                        {Array.from({ length: 6 }).map((_, index) => (
                          <InputOTPSlot
                            key={index}
                            className='border-zinc-800 dark:border-zinc-200 border w-full'
                            index={index}
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className='flex flex-col gap-2'>
            <Button className='w-full' type='submit'>
              {isLoading ? <Spinner /> : 'Verify'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default VerifyEmailForm;
