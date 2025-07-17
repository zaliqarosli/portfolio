export default function InfoConnector({ type = 'single' }) {
  return (
    <div className='info-connector flex flex-col items-center mb-[-2px]'>
      {type === 'double' && (
        <div className='w-[0.3125rem] h-[0.3125rem]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='5'
            height='5'
            viewBox='0 0 5 5'
          >
            <circle cx='2.5' cy='2.5' r='2.5' className='fill-midgray' />
          </svg>
        </div>
      )}
      <div className='line pr-[0.0625rem] w-[0.0625rem] border-r border-solid border-midgray h-full'></div>
      <div className='w-[0.3125rem] h-[0.3125rem]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='5'
          height='5'
          viewBox='0 0 5 5'
        >
          <circle cx='2.5' cy='2.5' r='2.5' className='fill-midgray' />
        </svg>
      </div>
    </div>
  );
}
