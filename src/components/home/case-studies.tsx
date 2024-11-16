import { fetchCaseStudies } from '@/lib/wordpress';
import React from 'react';
import CaseStudyCarousel from './case-studies-carousel';

const CaseStudies = async () => {
  const caseStudies = (await fetchCaseStudies()).reverse();

  return <CaseStudyCarousel data={caseStudies} />;
};

export default CaseStudies;
