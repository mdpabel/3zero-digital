import Hero from '@/components/common/Hero';
import React from 'react';
import Checklist from './check-list';
import ProjectSteps from '@/components/development/project-steps';
import { steps } from './data';
import Comparison from '@/components/development/comparison';
import ContactUs from '@/components/common/contact-us';
import ComponentWrapper from '@/components/common/component-wrapper';

const page = () => {
  return (
    <ComponentWrapper>
      <Hero
        headline='Website Health Check'
        subHeadline='Ensure Your Website is Secure, Fast, and Optimized'
        description='Scan your website for performance, security, and SEO issues with our free Website Health Check tool. Get instant insights and actionable recommendations to keep your site running at its best—zero vulnerabilities, zero downtime, zero errors!'
      />
      <Checklist />
      <ProjectSteps
        steps={steps}
        title='🔐 Comprehensive Website Security and Performance Check'
        subtitle='We ensure your website is secure, optimized, and performs at its best through detailed checks and improvements.'
      />
      <div id='getStarted'>
        <ContactUs />
      </div>
      <Comparison />
    </ComponentWrapper>
  );
};

export default page;
