import Image from 'next/image';

export default function Icon({ href, width, height, className = '', alt }) {
  return (
    <div className={`flex content-center items-center ${className}`}>
      <Image src={href} width={width} height={height} alt={alt} />
    </div>
  );
}
