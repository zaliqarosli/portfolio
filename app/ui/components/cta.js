import Link from 'next/link';

export default function CTA({
  name,
  type = 'internal',
  href,
  style = null,
  children,
}) {
  let className =
    'flex p-[1.25rem] justify-center items-center self-stretch bg-secondary text-center text-white cta-button';

  if (style) {
    className += ` ${style}`;
  }
  return type === 'internal' ? (
    <Link key={name} href={href} className={className}>
      <span className='flex-[1_0_0] w-min'>{children}</span>
    </Link>
  ) : (
    <a
      key={name}
      href={href}
      className={
        'flex p-[1.25rem] justify-center items-center self-stretch bg-secondary text-center text-white cta-button ' +
        style
      }
    >
      <span className='flex-[1_0_0] w-min'>{children}</span>
    </a>
  );
}
