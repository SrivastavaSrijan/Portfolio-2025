import { AssetsMap } from '@/lib/assets';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-4 text-white lg:px-20 lg:py-8">
      <Link href="/">
        <img src={AssetsMap.SVG.Logo} alt="Logo" className="h-6 lg:h-7.5" />
      </Link>
    </nav>
  );
};
