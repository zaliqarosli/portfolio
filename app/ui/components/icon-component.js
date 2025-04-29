import Image from 'next/image';

export default function IconComponent({
  href,
  width,
  height,
  className = '',
  alt,
}) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Image src={href} width={width} height={height} alt={alt} />
    </div>
  );
}
