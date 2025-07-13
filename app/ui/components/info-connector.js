export default function InfoConnector({ type = 'single' }) {
  return (
    <div className='flex flex-col items-center flex-[1_0_0]'>
      {type === 'double' && (
        <div className='w-[0.3125rem] h-[0.3125rem] fill-midgray'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='5'
            height='5'
            viewBox='0 0 5 5'
            fill='none'
          >
            <circle cx='2.5' cy='2.5' r='2.5' fill='--color-midgray' />
          </svg>
        </div>
      )}
      <div className='pr-[0.0625rem] w-[0.0625rem] border-r border-solid border-midgray'></div>
      <div className='w-[0.3125rem] h-[0.3125rem] fill-midgray'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='5'
          height='5'
          viewBox='0 0 5 5'
          fill='none'
        >
          <circle cx='2.5' cy='2.5' r='2.5' fill='--color-midgray' />
        </svg>
      </div>
    </div>
  );
}
