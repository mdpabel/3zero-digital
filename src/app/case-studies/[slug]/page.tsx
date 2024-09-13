import DOMPurify from 'isomorphic-dompurify';
import { fetchCaseStudies, fetchCaseStudyBySlug } from '@/lib/wordpress';

export const dynamic = 'force-static';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const caseStudies = await fetchCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

const CaseStudy = async ({ params }: Props) => {
  const caseStudy = await fetchCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  // Sanitize the content to prevent any XSS or injection issues
  const cleanContent = DOMPurify.sanitize(caseStudy.content);

  return (
    <div className='bg-white dark:bg-[#0B1120] px-4 md:px-20 py-6 md:py-12'>
      {/* Hero Section */}
      <h1 className='mb-4 pb-3 font-bold text-center text-xl text-zinc-800 md:text-2xl dark:text-zinc-200'>
        {caseStudy.title}
      </h1>

      {/* Outcomes Section */}
      <section>
        <div className='bg-gray-100 dark:bg-gray-900 shadow p-8 rounded-lg'>
          <h2 className='mb-4 font-bold text-2xl text-center text-zinc-800 dark:text-zinc-200'>
            The Outcome
          </h2>
          <p className='text-center text-gray-600 dark:text-gray-400'>
            {caseStudy.outcome ||
              'Through our expert services, we delivered outstanding results that exceeded the client’s expectations.'}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section>
        <div className='max-w-none dark:prose-invert prose prose-lg'>
          <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
        </div>
      </section>

      {/* Call to Action */}
      <section className='shadow-lg mx-auto py-12 rounded-lg max-w-6xl text-center text-white primary-color'>
        <h2 className='mb-4 font-semibold text-3xl'>
          Interested in similar results?
        </h2>
        <p className='mb-6'>
          Get in touch with us today and see how we can help your business
          succeed.
        </p>
        <button className='bg-white hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold text-indigo-600'>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CaseStudy;
