import Icon from './icon';

export default function Footer() {
  return (
    <footer className='flex pt-[3.75rem] px-[2.5rem] pb-[2.5rem] flex-col justify-center items-end self-stretch w-full'>
      <div className='flex flex-col items-end'>
        <div className='flex flex-col items-start gap-[2.75rem] self-stretch'>
          <div className='flex flex-col items-end gap-[1rem]'>
            <h4 className='flex pl-[0.3125rem] content-center items-center'>
              get in touch
            </h4>
            <strong className='flex text-right pl-[0.4375rem] content-center items-center '>
              zaliqarosli@gmail.com
            </strong>
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
