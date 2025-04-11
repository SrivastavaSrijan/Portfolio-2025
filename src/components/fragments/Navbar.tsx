import { AssetsMap } from '@/lib/assets';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-4 text-white md:px-20 md:py-8">
      <Link href="/">
        <img src={AssetsMap.SVG.Logo} alt="Logo" className="h-6 md:h-7.5" />
      </Link>
      <Menu className="h-5 cursor-pointer md:h-7.5" />
    </nav>
  );
};
