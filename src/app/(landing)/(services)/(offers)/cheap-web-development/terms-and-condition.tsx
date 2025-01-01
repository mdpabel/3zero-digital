import React from 'react';

const TermsAndConditions = () => {
  const terms = [
    {
      title: 'Domain Terms',
      description:
        'The domain registration terms are governed by Namecheap. By purchasing a domain through us, you agree to their terms of service.',
      link: 'https://www.namecheap.com/legal/',
      linkText: 'Namecheap Terms of Service',
    },
    {
      title: 'Hosting Terms',
      description:
        'Our hosting services are provided by UmmahHostBD. By using our hosting services, you agree to their terms and conditions.',
      link: 'https://ummahhostbd.com/terms-and-conditions',
      linkText: 'UmmahHostBD Terms and Conditions',
    },
    {
      title: 'Template Terms',
      description:
        'The terms for using the templates provided are outlined in our template terms. By using our templates, you agree to these terms.',
      link: '#',
      linkText: 'Template Terms',
    },
  ];

  return (
    <div className='px-6 py-16'>
      <h2 className='mb-6 font-bold text-4xl text-center text-zinc-800 dark:text-zinc-200'>
        📜 Terms and Conditions
      </h2>
      <p className='mb-8 text-center text-gray-600 text-lg dark:text-gray-400'>
        Please review the following terms for the services we provide.
      </p>
      <ul className='space-y-4 mx-auto max-w-2xl'>
        {terms.map((term, index) => (
          <li key={index} className='text-gray-800 dark:text-zinc-200'>
            <strong>{term.title}:</strong> {term.description}{' '}
            <a
              href={term.link}
              className='text-[#614385] hover:underline'
              target='_blank'
              rel='noopener noreferrer'>
              {term.linkText}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsAndConditions;
