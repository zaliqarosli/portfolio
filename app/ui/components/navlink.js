'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLink({ name, href }) {
  const pathname = usePathname();

  return (
    <Link
      key={name}
      href={href}
      className={clsx('flex pb-[0.3125rem] flex-col items-start self-stretch', {
        'border-b border-inherit border-solid': pathname === href,
      })}
    >
      <h4 className='text-center'>{name}</h4>
    </Link>
  );
}
