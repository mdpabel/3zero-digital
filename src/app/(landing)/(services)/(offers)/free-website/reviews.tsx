import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const Reviews = () => {
  return (
    <section id='testimonials' className='py-16'>
      <div className='mx-auto px-4 container'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 font-bold text-3xl'>What Our Clients Say</h2>
          <p className='mx-auto max-w-2xl text-muted-foreground'>
            Don't just take our word for it. Here's what small business owners
            like you have to say.
          </p>
        </div>

        <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-center mb-4'>
                <div className='mr-4'>
                  <Image
                    src='/placeholder.svg?height=60&width=60'
                    alt='Sarah Johnson'
                    width={60}
                    height={60}
                    className='rounded-full'
                  />
                </div>
                <div>
                  <h4 className='font-bold'>Sarah Johnson</h4>
                  <p className='text-muted-foreground text-sm'>
                    Flower Shop Owner
                  </p>
                </div>
              </div>
              <div className='flex mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='fill-yellow-400 w-4 h-4 text-yellow-400'
                  />
                ))}
              </div>
              <p className='text-muted-foreground'>
                "I couldn't believe it was free! My flower shop now has a
                beautiful website that has brought in so many new customers. The
                process was incredibly easy."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-center mb-4'>
                <div className='mr-4'>
                  <Image
                    src='/placeholder.svg?height=60&width=60'
                    alt='Michael Rodriguez'
                    width={60}
                    height={60}
                    className='rounded-full'
                  />
                </div>
                <div>
                  <h4 className='font-bold'>Michael Rodriguez</h4>
                  <p className='text-muted-foreground text-sm'>
                    Local Restaurant
                  </p>
                </div>
              </div>
              <div className='flex mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='fill-yellow-400 w-4 h-4 text-yellow-400'
                  />
                ))}
              </div>
              <p className='text-muted-foreground'>
                "The team at 3zerodigital delivered exactly what they promised.
                Our restaurant now has an online presence that matches our
                in-person experience."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-center mb-4'>
                <div className='mr-4'>
                  <Image
                    src='/placeholder.svg?height=60&width=60'
                    alt='Jennifer Lee'
                    width={60}
                    height={60}
                    className='rounded-full'
                  />
                </div>
                <div>
                  <h4 className='font-bold'>Jennifer Lee</h4>
                  <p className='text-muted-foreground text-sm'>
                    Consulting Services
                  </p>
                </div>
              </div>
              <div className='flex mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='fill-yellow-400 w-4 h-4 text-yellow-400'
                  />
                ))}
              </div>
              <p className='text-muted-foreground'>
                "Having a professional website has completely transformed my
                consulting business. I'm getting inquiries from clients I never
                would have reached before."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
