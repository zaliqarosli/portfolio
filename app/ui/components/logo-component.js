import Image from 'next/image';

export default function LogoComponent({
  href,
  width,
  height,
  className = '',
  alt,
}) {
  return (
    <div
      className={`flex h-[6.25rem] 2xl:h-[9.375rem] justify-center items-center`}
    >
      <Image
        src={href}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </div>
  );
}
