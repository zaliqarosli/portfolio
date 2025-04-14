import CTA from './ui/components/cta';

export default function Home() {
  return (
    <main className='flex max-w-[47.0625rem] min-h-[45.1rem] xs:min-h-[40.1rem] pt-[2.5rem] px-[1.875rem] sm:pt-[5rem] sm:pb-[2.5rem] sm:mb-[2.5rem] justify-end items-center self-stretch flex-wrap xxs:flex-nowrap mx-auto w-full'>
      <div
        id='logo'
        className='flex min-w-[8.6875rem] items-start gap-[0.9375rem] flex-[1_0_0] self-stretch mr-[-2.375rem]'
      >
        <div
          id='first-name'
          className='flex max-w-[7.0625rem] flex-col items-center flex-[1_0_0] self-stretch'
        >
          <h1 className='flex-[1_0_0] self-stretch text-center break-all'>
            zaliqa
          </h1>
        </div>
        <div
          id='last-name'
          className='flex max-w-[9.5rem] flex-col justify-end items-center flex-[1_0_0] self-stretch'
        >
          {/* <h1 className='self-stretch text-right break-all mb-[-4.3rem] xs:mb-[-1.9rem] xs:mt-[20rem]'> */}
          <h1 className='self-stretch text-right break-all mb-[-3rem] xxs:mb-[0rem]'>
            rosli
          </h1>
        </div>
      </div>
      <div
        id='content-container'
        className='flex pt-[11.45rem] pr-[0.625rem] pb-0 pl-0 flex-col justify-end items-end gap-[19.6875rem] self-stretch'
      >
        <div
          id='content'
          className='flex min-w-[15.5rem] flex-col justify-end items-end gap-[1.6875rem] flex-[1_0_0]'
        >
          <h3 className='min-w-[15.0625rem]'>UI & WEB</h3>
          <h5 className='self-stretch text-right'>Designer x Developer</h5>
          <div className='flex min-h-[9.375rem] flex-col justify-between items-end flex-[1_0_0]'>
            <h4 className='text-right'>montreal, qc</h4>
            <CTA name='work-cta' href='/work'>
              see my work
            </CTA>
          </div>
        </div>
      </div>
    </main>
  );
}
