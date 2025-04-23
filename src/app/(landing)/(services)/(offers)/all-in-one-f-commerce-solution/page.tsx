import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Facebook,
  Gift,
  Globe,
  Search,
  ShieldCheck,
  Smartphone,
  Store,
} from 'lucide-react';
import React from 'react';
import Hero from '@/components/common/Hero';
import Link from 'next/link';

const FCommerce = () => {
  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <Hero
        subHeadline='All-in-One F-Commerce Solution for New Entrepreneurs'
        headline='Launch Your Online Business in One Week'
        description='Everything you need to establish your online presence and start selling - all in one affordable package.'
      />

      <section id='features' className='py-12 w-full'>
        <div className='px-4 md:px-6 container'>
          <div className='flex flex-col justify-center items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block bg-primary px-3 py-1 rounded-lg text-primary-foreground text-sm'>
                All-Inclusive Package
              </div>
              <h2 className='font-bold text-3xl md:text-4xl/tight tracking-tighter'>
                What's Included
              </h2>
              <p className='max-w-[900px] text-muted-foreground md:text-xl'>
                Our F-Commerce Starter Package gives you everything you need to
                establish a professional online presence.
              </p>
            </div>
          </div>
          <div className='items-center gap-6 lg:gap-12 grid lg:grid-cols-2 mx-auto py-12 max-w-5xl'>
            <div className='gap-6 grid'>
              <div className='flex items-start gap-4'>
                <div className='flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10 shrink-0'>
                  <Globe className='w-5 h-5 text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='font-bold text-xl'>Domain Name</h3>
                  <ul className='space-y-1 text-muted-foreground text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      1-year registration (.com/.store/.shop)
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Branded, professional domain
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10 shrink-0'>
                  <ShieldCheck className='w-5 h-5 text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='font-bold text-xl'>Fast & Secure Hosting</h3>
                  <ul className='space-y-1 text-muted-foreground text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />1
                      year hosting included
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      SSL certificate included
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      99.9% uptime guaranteed
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10 shrink-0'>
                  <Smartphone className='w-5 h-5 text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='font-bold text-xl'>
                    Professional Website (5 Pages)
                  </h3>
                  <ul className='space-y-1 text-muted-foreground text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Homepage, Product/Service, About, Contact
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Facebook/Instagram feed integration
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Mobile-optimized and fast-loading
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='gap-6 grid'>
              <div className='flex items-start gap-4'>
                <div className='flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10 shrink-0'>
                  <Search className='w-5 h-5 text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='font-bold text-xl'>Basic SEO Setup</h3>
                  <ul className='space-y-1 text-muted-foreground text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Meta tags, sitemap, robots.txt
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Google Search Console setup
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Keyword-optimized content structure
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10 shrink-0'>
                  <Facebook className='w-5 h-5 text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='font-bold text-xl'>Facebook Page Setup</h3>
                  <ul className='space-y-1 text-muted-foreground text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Cover photo + Profile photo design
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Shop integration (optional)
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      CTA button + automated reply setup
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10 shrink-0'>
                  <Store className='w-5 h-5 text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='font-bold text-xl'>
                    Google My Business Setup
                  </h3>
                  <ul className='space-y-1 text-muted-foreground text-sm'>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Profile creation & business info setup
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Image & post upload
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle2 className='mr-2 w-4 h-4 text-primary' />
                      Review management guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='bonus' className='py-12 w-full'>
        <div className='px-4 md:px-6 container'>
          <div className='flex flex-col justify-center items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block bg-primary px-3 py-1 rounded-lg text-primary-foreground text-sm'>
                Exclusive Bonus
              </div>
              <h2 className='font-bold text-3xl md:text-4xl/tight tracking-tighter'>
                Added Value
              </h2>
            </div>
          </div>
          <div className='items-center gap-6 grid mx-auto py-12 max-w-sm'>
            <div className='bg-card shadow-lg p-6 border rounded-xl'>
              <div className='flex justify-center mb-4'>
                <div className='flex justify-center items-center bg-primary/10 rounded-full w-12 h-12'>
                  <Gift className='w-6 h-6 text-primary' />
                </div>
              </div>
              <h3 className='mb-4 font-bold text-xl text-center'>
                Bonus Inclusions
              </h3>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                  <span>30-min training on how to manage everything</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                  <span>1-month free support for minor updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id='pricing' className='py-12 w-full'>
        <div className='px-4 md:px-6 container'>
          <div className='flex flex-col justify-center items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='font-bold text-3xl md:text-4xl/tight tracking-tighter'>
                Affordable Investment
              </h2>
              <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                Get your business online with our all-inclusive package at a
                fraction of the cost.
              </p>
            </div>
          </div>
          <div className='mx-auto py-12 max-w-md' id='getStarted'>
            <div className='bg-card shadow-lg border rounded-lg'>
              <div className='flex flex-col p-6 md:p-8'>
                <div className='space-y-2'>
                  <h3 className='font-bold text-2xl'>
                    F-Commerce Starter Package
                  </h3>
                  <p className='text-muted-foreground'>
                    Everything you need to get started online
                  </p>
                </div>
                <div className='flex items-baseline mt-6 font-bold text-6xl'>
                  $199
                  <span className='ml-1 font-normal text-muted-foreground text-xl'>
                    /one-time
                  </span>
                </div>
                <ul className='space-y-3 mt-8'>
                  <li className='flex items-center'>
                    <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                    <span>Domain Name (1-year registration)</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                    <span>Fast & Secure Hosting (1 year)</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                    <span>Professional 5-Page Website</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                    <span>Basic SEO Setup</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                    <span>Facebook Page Setup</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                    <span>Google My Business Setup</span>
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle2 className='mr-2 w-5 h-5 text-primary' />
                    <span>Training & 1-month Support</span>
                  </li>
                </ul>
                <Button size='lg' className='mt-8'>
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id='cta'
        className='bg-gray-900 py-12 md:py-16 w-full text-white'>
        <div className='px-4 md:px-6 container'>
          <div className='flex flex-col justify-center items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='font-bold text-3xl md:text-4xl/tight tracking-tighter'>
                Ready to Launch Your Online Business?
              </h2>
              <p className='max-w-[600px] md:text-xl'>
                Get started today and have your complete online presence set up
                within one week.
              </p>
            </div>
            <div className='flex min-[400px]:flex-row flex-col gap-4'>
              <Button asChild className='px-5 md:px-10 py-6 text-lg'>
                <Link href='#getStarted'>Get Started Now</Link>
              </Button>
              <Button asChild className='px-5 md:px-10 py-6 text-lg'>
                <Link href='/book-a-call'>Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FCommerce;
