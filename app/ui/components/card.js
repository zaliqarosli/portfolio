import Image from 'next/image';

export default function Card({ projectTitle, srcImage }) {
  return (
    <div className='flex min-w-[23.125rem] max-w-[42.2rem] min-h-[21.75rem] max-h-[40rem] flex-col flex-[1_0_0] aspect-[185/174] shadow-md shadow-brown-shadow'>
      <div className='min-w-[21.875rem] min-h-[13.835rem] flex-[1_0_0] relative'>
        <Image
          src={srcImage}
          fill={true}
          alt={`screenshot of ${projectTitle} project`}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='flex p-[1.875rem] flex-col gap-[1.25rem]'>
        <strong>View case study</strong>
        <h4 className='self-stretch'>{projectTitle}</h4>
      </div>
    </div>
  );
}
