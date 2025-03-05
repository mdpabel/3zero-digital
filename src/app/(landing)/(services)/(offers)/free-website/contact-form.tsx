'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ name, email, business, message });
    setSubmitted(true);
  };

  return (
    <section id='contact' className='bg-primary/5 py-16'>
      <div className='mx-auto px-4 container'>
        <div className='mx-auto max-w-3xl'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 font-bold text-3xl'>
              Claim Your Free Website Today
            </h2>
            <p className='text-muted-foreground'>
              Fill out the form below and our team will contact you within 24
              hours to get started on your free website.
            </p>
          </div>

          {submitted ? (
            <Card>
              <CardContent className='pt-6 text-center'>
                <CheckCircle className='mx-auto mb-4 w-16 h-16 text-primary' />
                <h3 className='mb-2 font-bold text-2xl'>Thank You!</h3>
                <p className='mb-4 text-muted-foreground'>
                  We've received your information and will contact you within 24
                  hours to discuss your free website.
                </p>
                <Button onClick={() => setSubmitted(false)}>
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className='pt-6'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
                    <div className='space-y-2'>
                      <label htmlFor='name' className='font-medium text-sm'>
                        Your Name
                      </label>
                      <Input
                        id='name'
                        placeholder='John Smith'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <label htmlFor='email' className='font-medium text-sm'>
                        Email Address
                      </label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='john@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='business' className='font-medium text-sm'>
                      Business Name
                    </label>
                    <Input
                      id='business'
                      placeholder='Your Business Name'
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message' className='font-medium text-sm'>
                      Tell us about your business
                    </label>
                    <Textarea
                      id='message'
                      placeholder='What does your business do? What would you like to achieve with your website?'
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type='submit' className='w-full'>
                    Submit
                  </Button>
                  <p className='text-muted-foreground text-xs text-center'>
                    By submitting this form, you agree to our{' '}
                    <Link href='#' className='underline'>
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href='#' className='underline'>
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
