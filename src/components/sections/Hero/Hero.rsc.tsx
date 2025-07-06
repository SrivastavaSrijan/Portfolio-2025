import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { HeroUI } from './Hero.ui';
import { HeroSkeleton } from './Hero.skeleton';
import type { HeroWrapperProps } from './Hero.utils';

/**
 * Hero Server Component - Clean and simple
 */
async function HeroServer(_props: HeroWrapperProps) {
  const [heroData, workButtonsData] = await Promise.all([
    api.get(PayloadEntity.Hero),
    api.get(PayloadEntity.WorkButtons),
  ]);

  if (!heroData || !workButtonsData) {
    return <HeroSkeleton />;
  }

  return <HeroUI {...heroData} workButtons={workButtonsData.buttons} />;
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
