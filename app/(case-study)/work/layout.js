'use client';

import CaseStudyFooter from './../../ui/components/case-study-footer';
import IconComponent from '@/app/ui/components/icon-component';
import { caseStudies } from '../../lib/case-studies';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [scrollY, updateScrollY] = useState(0);

  // Get the last segment of pathname, and find the next modulo index from that path in caseStudies list
  const segments = usePathname().split('/');
  // Remove last segment from pathname
  const path = segments.pop();
  const nextIndex =
    (caseStudies.findIndex((e) => e.path === path) + 1) % caseStudies.length;
  const nextPage = caseStudies[nextIndex];

  useEffect(
    () =>
      addEventListener('scroll', (event) => {
        updateScrollY(window.scrollY);
      }),
    []
  );

  const displayScrollArrow = scrollY > '500' ? 'xl:flex' : 'xl:hidden';

  return (
    <>
      {children}
      {/* scroll up arrow */}
      <Link
        className={`hidden ${displayScrollArrow} p-[5rem] justify-center items-center fixed bottom-0 right-0 transition-[display] duration-1000 ease-out`}
        href='#top'
      >
        <IconComponent
          href='/arrow-up-icon.svg'
          width={36}
          height={1}
          className='w-[4.25rem] h-[4rem] bg-white opacity-80 shadow-md shadow-brown-shadow'
          alt='arrow icon pointing up'
        />
      </Link>
      <CaseStudyFooter
        nextPageTitle={nextPage.title}
        nextPagePath={`${segments.join('/')}/${nextPage.path}`}
      />
    </>
  );
}
