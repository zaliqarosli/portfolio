import Image from 'next/image';

import CTA from '@/app/ui/components/cta';
import LogoComponent from '@/app/ui/components/logo-component';
import Timeline from './timeline';

export default function Page() {
  return (
    <main className='flex pt-[3.125rem] 2xl:pt-[5.4375rem] flex-col items-center gap-[5rem] w-full mb-[-5rem]'>
      <section
        id='profile-section'
        className='flex flex-col items-center w-full'
      >
        <div
          id='profile-pic-container'
          className='flex max-w-[57.75rem] px-[1.875rem] items-center z-10 w-full'
        >
          <Image
            src='/profile-picture@4x.jpg'
            width={1032}
            height={1032}
            alt={`portrait picture`}
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
            className='flex w-[16.125rem] 2xl:w-[24.1875rem] h-[16.125rem] 2xl:h-[24.1875rem] justify-center items-center aspect-[1/1] flex-[0_0_0]'
          />
        </div>
        <div
          id='bio-container'
          className='pt-[8.8125rem] px-[1.875rem] pb-[5rem] gap-[3.125rem] bg-offwhite/70 mt-[-5.0625rem] flex justify-center self-stretch'
        >
          <div className='flex max-w-[54rem] flex-col items-end gap-[5rem] self-stretch'>
            <section className='flex flex-col items-start gap-[2.5rem] self-stretch'>
              <header className='flex flex-col items-start gap-[0.9375rem] w-full min-[338px]:max-[341px]:w-71/100 min-[341px]:max-[436px]:w-7/10'>
                <h2 className='pl-[0.0625rem]'>Hello! I’m Zaliqa Rosli.</h2>
              </header>
              <figcaption>
                I’m a UI designer and frontend developer based in Montreal,
                Quebec. I have over 8 years of experience in fullstack software
                development, and have focused on frontend design and development
                over the last year. I’m passionate about visual communication
                and the intersection of art, design, and technology. Let me know
                if you have a project you’d like to work on together!
              </figcaption>
            </section>
            <div
              id='cta-group'
              className='flex flex-col items-end gap-[1.25rem]'
            >
              <h6 className='text-black text-right'>Interested in my work?</h6>
              <CTA
                name='contact-me'
                type='external'
                href='mailto:zaliqarosli@gmail.com?subject=Hello!'
              >
                Contact Me
              </CTA>
            </div>
          </div>
        </div>
      </section>
      <section
        id='skills-section'
        className='flex max-w-[57.75rem] px-[1.875rem] flex-col items-start gap-[1.875rem] w-full'
      >
        <h3>my skills</h3>
        <div
          id='logos'
          className='flex justify-center items-center content-center gap-[1.875rem] self-stretch flex-wrap'
        >
          <LogoComponent
            href='/Figma_logo.svg'
            width={144}
            height={39.69}
            className='w-[9rem] h-[2.5rem]'
            alt='figma logo'
          />
          <LogoComponent
            href='/Adobe_Photoshop_CC.svg'
            width={72}
            height={70.2}
            className='w-[4.5rem] h-[4.3875rem]'
            alt='adobe photoshop logo'
          />
          <LogoComponent
            href='/Adobe_Illustrator_CC.svg'
            width={72}
            height={70.2}
            className='w-[4.5rem] h-[4.3875rem]'
            alt='adobe illustrator logo'
          />
          <LogoComponent
            href='/HTML5_icon.svg'
            width={51.02}
            height={72}
            className='w-[3.2rem] h-[4.5rem]'
            alt='html5 logo'
          />
          <LogoComponent
            href='/Official_CSS_Logo.svg'
            width={72}
            height={72}
            className='w-[4.5rem] h-[4.5rem]'
            alt='css logo'
          />
          <LogoComponent
            href='/Unofficial_JavaScript_logo.svg'
            width={72}
            height={72}
            className='w-[4.5rem] h-[4.5rem]'
            alt='javascript logo'
          />
          <LogoComponent
            href='/nodejs_icon.png'
            width={1000}
            height={1000}
            className='w-[4.5rem] h-[4.82144rem]'
            alt='nodejs logo'
          />
          <LogoComponent
            href='/Typescript_logo_2020.svg'
            width={72}
            height={72}
            className='w-[4.5rem] h-[4.5rem]'
            alt='typescript logo'
          />
          <LogoComponent
            href='/Nextjs-logo.svg'
            width={148}
            height={30}
            className='w-[9.25rem] h-[1.875rem]'
            alt='nextjs logo'
          />
          <LogoComponent
            href='/Git-logo.svg'
            width={72}
            height={30.07}
            className='w-[4.5rem] h-[1.87956rem]'
            alt='git logo'
          />
          <LogoComponent
            href='/react_light.svg'
            width={144}
            height={43.28}
            className='w-[9rem] h-[2.705rem]'
            alt='react logo'
          />
          <LogoComponent
            href='/JQuery-Logo.svg'
            width={100}
            height={24.49}
            className='w-[6.25rem] h-[1.531rem]'
            alt='jquery logo'
          />
          <LogoComponent
            href='/Tailwind_CSS_logo.svg'
            width={241.97}
            height={30}
            className='w-[15.12338rem] h-[1.875rem]'
            alt='tailwind css logo'
          />
          <LogoComponent
            href='/bootstrap-wordmark.svg'
            width={72}
            height={72}
            className='w-[4.5rem] h-[4.5rem]'
            alt='bootstrap logo'
          />
          <LogoComponent
            href='/php-brands-solid.svg'
            width={100}
            height={80}
            className='w-[6.25rem] h-[5rem]'
            alt='php logo'
          />
          <LogoComponent
            href='/Gnu-bash-logo.svg'
            width={100}
            height={42.13}
            className='w-[6.25rem] h-[2.63313rem]'
            alt='gnu bash logo'
          />
          <LogoComponent
            href='/python-crop.svg'
            width={70.95}
            height={74.59}
            className='w-[3.917rem] h-[4.63244rem]'
            alt='python language logo'
          />
          <LogoComponent
            href='/Java_programming_language_logo.svg'
            width={54.55}
            height={100}
            className='w-[3.41rem] h-[6.25rem]'
            alt='java programmign language logo'
          />
          <LogoComponent
            href='/mariadb_logo.svg'
            width={100}
            height={81.55}
            className='w-[6.25rem] h-[5.1rem]'
            alt='mariadb logo'
          />
          <LogoComponent
            href='/mysql_logo.png'
            width={1280}
            height={1280}
            className='w-[5.3125rem] h-[5.3125rem]'
            alt='mysql logo'
          />
        </div>
        <div className='flex pt-[1.875rem] flex-col items-end self-stretch'>
          <div className='flex flex-col items-end gap-[1.25rem] w-max'>
            <h6>Want to know more?</h6>
            <CTA name='download-cv' type='external' href=''>
              Download CV
            </CTA>
          </div>
        </div>
      </section>
      <section
        id='experience-section'
        className='flex py-[6.25rem] px-[1.875rem] flex-col items-center gap-[1.875rem] self-stretch bg-offwhite/70'
      >
        <h3 className='max-w-[54rem] w-full'>my journey</h3>
        <div
          id='timeline'
          className='flex max-w-[54rem] py-[1.25rem] pr-[0.625rem] flex-col justify-center items-start self-center w-full'
        >
          <Timeline />
        </div>
        <div
          id='cta-group-2'
          className='flex max-w-[54rem] pt-[4.375rem] flex-col items-end gap-[1.25rem] w-full'
        >
          <div className='flex flex-col items-end gap-[1.25rem]'>
            <h6 className='text-black text-right'>If you haven’t already,</h6>
            <CTA name='work-cta' href='/work'>
              see my work
            </CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
