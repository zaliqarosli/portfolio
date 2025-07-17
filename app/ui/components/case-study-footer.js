'use client';

import { useState } from 'react';
import Icon from './icon-component';
import Link from 'next/link';

export default function CaseStudyFooter({ nextPageTitle, nextPagePath }) {
  const [isCopied, setIsCopied] = useState(false);
  const toCopy = 'zaliqarosli@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(toCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1400);
    } catch (err) {
      console.error('Failed to copy to clipboard: ', err);
    }
  };

  return (
    <footer className='bg-primary flex pt-[5rem] pr-[4rem] pb-[2.5rem] pl-[5.25rem] flex-col items-start self-stretch'>
      <div className='flex max-w-[51.875rem] flex-col items-start gap-[5rem]'>
        <Link
          key='nextPagePath'
          href={nextPagePath}
          className='flex flex-col items-start gap-[1.25rem] self-stretch'
        >
          <div className='flex pl-[0.3125rem] items-start self-stretch'>
            <h6 className='flex-[1_0_0]'>Next case study</h6>
          </div>
          <div className='flex justify-center items-center self-stretch'>
            <h2>{nextPageTitle}</h2>
            <Icon
              href='/arrow-right-icon-desktop.svg'
              width='36'
              height='36'
              alt='right facing arrow svg'
              className='flex pt-[0.3125rem] pr-[0.0625rem] pb-[0rem] pl-[1.875rem] flex-col justify-center items-start self-stretch stroke-[1.5px] stroke-midgray'
            />
          </div>
        </Link>
        <div className='flex pr-[4.125rem] flex-col items-start gap-[2.75rem]'>
          <div className='flex flex-col items-start gap-[1rem]'>
            <div className='flex pl-[0.3125rem] justify-center items-center'>
              <h4>get in touch</h4>
            </div>
            <div className='flex pl-[0.4375rem] justify-center items-center'>
              <strong
                className='text-right cursor-pointer relative'
                onClick={copyToClipboard}
              >
                {toCopy}
                {isCopied && (
                  <div className='tooltip text-xs text-white bg-secondary py-[0.5rem] px-[1rem] w-min rounded-sm absolute right-[-1rem] bottom-[-3rem] transform-[rotate(-5deg)] after:content-[""] after:absolute after:top-[-7.5px] after:left-1/2 after:ml-[-4px] after:border-4 after:border-solid after:border-transparent after:border-b-secondary '>
                    Copied!
                  </div>
                )}
              </strong>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className='flex py-[0rem] pr-[2.5rem] pl-[0.5rem] justify-between items-center self-stretch'>
            <a href='https://github.com/zaliqarosli' target='_blank'>
              <Icon
                href='/github-icon-mobile.svg'
                width='30'
                height='30'
                className='block 2xl:hidden'
                alt='github icon svg'
              />
            </a>
            <a href='https://github.com/zaliqarosli' target='_blank'>
              <Icon
                href='/github-icon-desktop.svg'
                width='45'
                height='45'
                className='hidden 2xl:block'
                alt='github icon svg'
              />
            </a>
            <a href='https://www.linkedin.com/in/zaliqarosli/' target='_blank'>
              <Icon
                href='/linkedin-icon-mobile.svg'
                width='30'
                height='30'
                className='block 2xl:hidden'
                alt='linkedin icon svg'
              />
            </a>
            <a href='https://www.linkedin.com/in/zaliqarosli/' target='_blank'>
              <Icon
                href='/linkedin-icon-desktop.svg'
                width='45'
                height='45'
                className='hidden 2xl:block'
                alt='linkedin icon svg'
              />
            </a>
            <a
              href='mailto:zaliqarosli@gmail.com?subject=Hello!'
              target='_blank'
            >
              <Icon
                href='/email-icon-mobile.svg'
                width='30'
                height='30'
                className='block 2xl:hidden'
                alt='letter icon svg'
              />
            </a>
            <a
              href='mailto:zaliqarosli@gmail.com?subject=Hello!'
              target='_blank'
            >
              <Icon
                href='/email-icon-desktop.svg'
                width='45'
                height='45'
                className='hidden 2xl:block'
                alt='letter icon svg'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
