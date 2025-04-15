'use client';

import CaseStudyFooter from './../../ui/components/case-study-footer';
import { caseStudies } from '../../lib/case-studies';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  // Get the last segment of pathname, and find the next modulo index from that path in caseStudies list
  const segments = usePathname().split('/');
  // Remove last segment from pathname
  const path = segments.pop();
  const nextIndex =
    (caseStudies.findIndex((e) => e.path === path) + 1) % caseStudies.length;
  const nextPage = caseStudies[nextIndex];
  return (
    <>
      {children}
      <CaseStudyFooter
        nextPageTitle={nextPage.title}
        nextPagePath={`${segments.join('/')}/${nextPage.path}`}
      />
    </>
  );
}
