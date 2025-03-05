import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Lock, Mail, MessageSquare, Phone, Shield } from 'lucide-react';
import Link from 'next/link';
import ContactForm from './contact-form';
import FAQ from './faq';
import Reviews from './reviews';

const FreeWebsite = () => {
  return (
    <div className='flex flex-col mx-auto p-4 max-w-6xl'>
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='py-16 md:py-24'>
          <div className='mx-auto px-4 text-center container'>
            <div className='inline-block bg-primary/10 mb-6 px-4 py-1.5 rounded-full font-medium text-primary text-sm'>
              Limited Time Offer
            </div>
            <h1 className='mb-6 font-bold text-4xl md:text-6xl tracking-tight'>
              Get a <span className='text-primary'>FREE</span> Website for Your
              Business
            </h1>
            <p className='mx-auto mb-8 max-w-2xl text-muted-foreground text-xl'>
              Calling all small business owners! 📢 We are offering a
              professional website, free hosting, free SSL, and free business
              email.
            </p>
            <div className='flex sm:flex-row flex-col justify-center gap-4 mb-12'>
              <Button size='lg' asChild>
                <Link href='#contact'>Claim Your Free Website</Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='#features'>Learn More</Link>
              </Button>
            </div>
            <div className='inline-block p-4 rounded-lg text-red-500'>
              <p className='font-medium'>
                ❌ No hidden costs. No credit card details. ❌
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='features' className='py-16'>
          <div className='mx-auto px-4 container'>
            <div className='mb-16 text-center'>
              <h2 className='mb-4 font-bold text-3xl'>
                Everything You Need to Get Online
              </h2>
              <p className='mx-auto max-w-2xl text-muted-foreground'>
                Our free website package includes all the essentials to
                establish your online presence professionally.
              </p>
            </div>

            <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardContent className='pt-6'>
                  <Globe className='mb-4 w-12 h-12 text-primary' />
                  <h3 className='mb-2 font-bold text-xl'>
                    Professional Website
                  </h3>
                  <p className='text-muted-foreground'>
                    Custom-designed responsive website that looks great on all
                    devices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <Shield className='mb-4 w-12 h-12 text-primary' />
                  <h3 className='mb-2 font-bold text-xl'>
                    Free SSL Certificate
                  </h3>
                  <p className='text-muted-foreground'>
                    Secure your website with HTTPS to build trust with your
                    visitors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <Lock className='mb-4 w-12 h-12 text-primary' />
                  <h3 className='mb-2 font-bold text-xl'>Free Hosting</h3>
                  <p className='text-muted-foreground'>
                    Fast and reliable hosting to keep your website online 24/7.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <Mail className='mb-4 w-12 h-12 text-primary' />
                  <h3 className='mb-2 font-bold text-xl'>Business Email</h3>
                  <p className='text-muted-foreground'>
                    Professional email address with your domain name (e.g.,
                    you@yourbusiness.com).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <MessageSquare className='mb-4 w-12 h-12 text-primary' />
                  <h3 className='mb-2 font-bold text-xl'>Contact Form</h3>
                  <p className='text-muted-foreground'>
                    Allow customers to easily get in touch with you through your
                    website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='pt-6'>
                  <Phone className='mb-4 w-12 h-12 text-primary' />
                  <h3 className='mb-2 font-bold text-xl'>Mobile Responsive</h3>
                  <p className='text-muted-foreground'>
                    Your website will look and function perfectly on smartphones
                    and tablets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Reviews />
        {/* Contact Form */}
        <ContactForm />

        {/* FAQ Section */}
        <FAQ />
      </main>
    </div>
  );
};

export default FreeWebsite;
