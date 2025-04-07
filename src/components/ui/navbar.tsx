import { AssetsMap } from '@/lib/assets';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between md:px-20 md:py-8 px-10 py-4 text-white">
      <img src={AssetsMap.SVG.Logo} alt="Logo" className="md:h-10 h-5" />
      <Menu className="md:h-10 h-5 cursor-pointer" />
    </nav>
  );
};
