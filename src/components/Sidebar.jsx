import Image from 'next/image';
import NavLink from './ui/NavLink';

export default function Sidebar() {
  return (
    <aside className="menu w-full bg-base-200 text-base-content h-screen flex flex-col">
      <div className='flex justify-center items-center'>
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <NavLink />
    </aside>
  );
}
