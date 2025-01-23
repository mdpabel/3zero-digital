import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { jobs } from './data';

export const metadata: Metadata = {
  title: 'Careers | Your Company Name',
  description:
    'Join our team and help shape the future of technology. Explore our current job openings and find your next career opportunity.',
};

export default async function CareerPage() {
  return (
    <div className='mx-auto px-4 py-12 p-4 max-w-6xl'>
      <section className='mb-16 text-center'>
        <h1 className='mb-4 font-bold text-4xl'>Join Our Team</h1>
        <p className='mx-auto max-w-2xl text-muted-foreground text-xl'>
          At [Your Company Name], we're on a mission to [brief mission
          statement]. Join us and be part of something extraordinary.
        </p>
      </section>

      <section className='mb-16'>
        <h2 className='mb-8 font-semibold text-3xl'>Why Work With Us</h2>
        <div className='gap-8 grid md:grid-cols-3'>
          {[
            {
              title: 'Innovation',
              description:
                'Work on cutting-edge technology that shapes the future.',
            },
            {
              title: 'Growth',
              description:
                'Continuous learning and career development opportunities.',
            },
            {
              title: 'Impact',
              description:
                'Make a real difference in the lives of millions of users.',
            },
          ].map((perk, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{perk.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{perk.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='mb-8 font-semibold text-3xl'>Open Positions</h2>
        <div className='gap-6 grid md:grid-cols-2'>
          {jobs.map((job) => (
            <Card key={job.id} className='hover:shadow-lg transition-shadow'>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.department}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <Badge variant='secondary'>{job.location}</Badge>
                  <Badge variant='outline'>{job.type}</Badge>
                </div>
                <Link
                  href={`/careers/${job.slug}`}
                  className='font-medium text-sm hover:underline'>
                  View Details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
