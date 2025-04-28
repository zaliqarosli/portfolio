'use client';

import { useEffect } from 'react';
import Icon from './icon-component';

export default function GlobalFooter() {
  const email = 'zaliqarosli@gmail.com';
  const useNavigator = () => {
    useEffect(() => {
      navigator.clipboard.writeText(email);
    }, []);
  };

  return (
    <footer className='flex pt-[3.75rem] px-[2.5rem] pb-[2.5rem] flex-col justify-center items-end self-stretch'>
      <div className='flex flex-col items-end'>
        <div className='flex flex-col items-start gap-[2.75rem] self-stretch'>
          <div className='flex flex-col items-end gap-[1rem]'>
            <div className='flex pl-[0.3125rem] justify-center items-center'>
              <h4>get in touch</h4>
            </div>
            <div className='flex pl-[0.4375rem] justify-center items-center'>
              {/* TO-DO: Add tooltip alerting 'copied!' */}
              <strong
                className='text-right cursor-pointer'
                onClick={useNavigator}
              >
                {email}
              </strong>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className='flex pl-[3rem] justify-between items-center self-stretch'>
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
            <Icon
              href='/email-icon-desktop.svg'
              width='45'
              height='45'
              className='hidden 2xl:block'
              alt='letter icon svg'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
