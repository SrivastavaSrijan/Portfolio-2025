import { Suspense } from 'react';
import { fetchHeroData } from '@/lib/actions/revalidation';
import { HeroUI } from './Hero.ui';
import { HeroSkeleton } from './Hero.skeleton';
import type { HeroWrapperProps } from './Hero.utils';

/**
 * Hero Server Component - Clean and simple
 */
async function HeroServer(_props: HeroWrapperProps) {
  const data = await fetchHeroData();
  return <HeroUI {...data} />;
}

/**
 * Hero component with Suspense boundary
 */
export default function Hero(props: HeroWrapperProps) {
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <HeroServer {...props} />
    </Suspense>
  );
}
