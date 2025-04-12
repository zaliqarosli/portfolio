import CTA from './ui/components/cta';

export default function Home() {
  return (
    <main className='flex max-w-[47.0625rem] min-h-[48.9375rem] py-[3.25rem] px-[1.875rem] justify-end items-center self-stretch flex-wrap xs:flex-nowrap m-auto'>
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
          <h1 className='self-stretch text-right break-all mb-[-3rem] xs:mb-[0rem]'>
            rosli
          </h1>
        </div>
      </div>
      <div
        id='content-container'
        className='flex pt-[11.3125rem] pr-[0.625rem] pb-0 pl-0 flex-col justify-end items-end gap-[19.6875rem] self-stretch'
      >
        <div
          id='content'
          className='flex min-w-[15.5rem] flex-col justify-end items-end gap-[1.6875rem] flex-[1_0_0]'
        >
          <h3 className='min-w-[15.0625rem]'>UI & WEB</h3>
          <h5 className='self-stretch text-right'>Designer x Developer</h5>
          <div className='flex min-h-[9.375rem] flex-col justify-between items-end flex-[1_0_0]'>
            <h4 className='text-right'>montreal, qc</h4>
            <CTA>see my work</CTA>
          </div>
        </div>
      </div>
    </main>
  );
}
