import { fetchCaseStudies } from '@/lib/case-study';
import React from 'react';
import CaseStudyCarousel from './case-studies-carousel';

const CaseStudies = async () => {
  const caseStudies = (await fetchCaseStudies()).reverse();

  return <CaseStudyCarousel data={caseStudies} />;
};

export default CaseStudies;
