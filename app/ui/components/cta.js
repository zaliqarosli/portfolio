export default function CTA({ children }) {
  return (
    <button className='flex p-[1.25rem] justify-center items-center self-stretch bg-secondary text-center text-white'>
      <span className='flex-[1_0_0] w-min'>{children}</span>
    </button>
  );
}
