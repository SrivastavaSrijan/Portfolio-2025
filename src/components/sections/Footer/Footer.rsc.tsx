import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';

import { FooterUI } from './Footer.ui';
import { FooterSkeleton } from './Footer.skeleton';
import type { FooterWrapperProps } from './Footer.utils';

/**
 * Footer Server Component - Clean and simple
 */
async function FooterServer(_props: FooterWrapperProps) {
  const [footerData, workButtonsData] = await Promise.all([
    api.get(PayloadEntity.Footer),
    api.get(PayloadEntity.WorkButtons),
  ]);

  if (!footerData || !workButtonsData) {
    return <FooterSkeleton />;
  }

  return <FooterUI {...footerData} workButtons={workButtonsData.buttons} />;
}

/**
 * Footer with Suspense boundary
 */
export default function Footer(props: FooterWrapperProps) {
  return (
    <Suspense fallback={<FooterSkeleton />}>
      <FooterServer {...props} />
    </Suspense>
  );
}
