import { Navbar } from '@/components/ui';
import { AssetsMap } from '@/lib/assets';

export default async function HomePage() {
  return (
    <div className="home bg-background min-h-screen flex flex-col @container">
      <Navbar />
      <div className="flex flex-col md:px-20 md:py-10 md:gap-4 py-5 px-10 gap-2">
        <div className="flex items-end md:gap-10 gap-3">
          <h1 className="md:text-display-1 text-3xl text-brand">Srijan Srivastava</h1>
          <div className="rounded-r-full rounded-l-full bg-primary md:w-3xs w-40 md:h-20 h-10 flex place-items-end-safe justify-start">
            <img src={AssetsMap.Images.Face} alt="Face" className="object-cover h-full" />
          </div>
        </div>
        <h2 className="md:text-display-2 text-2xl text-brand">Frontend Developer.</h2>
      </div>
    </div>
  );
}
