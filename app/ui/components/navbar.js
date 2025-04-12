import NavLink from './navlink';

export default function NavBar() {
  return (
    <nav className='flex pt-[6.25rem] px-[1.875rem] pb-0 justify-between items-start content-start gap-y-[2.5rem] self-stretch flex-wrap'>
      <NavLink name='zaliqa rosli' href='/' />
      <div className='flex min-w-[9.5rem] max-w-[12.5rem] pl-[1.875rem] content-end items-start gap-[1.875rem] flex-[1_0_0]'>
        <NavLink name='work' href='/work' />
        <NavLink name='about' href='/about' />
      </div>
    </nav>
  );
}
