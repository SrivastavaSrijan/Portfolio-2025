import { Suspense } from 'react';
import { fetchFooterData, fetchWorkButtonsData } from '@/lib/graphql/server';
import { FooterUI } from './Footer.ui';
import { FooterSkeleton } from './Footer.skeleton';
import type { FooterWrapperProps } from './Footer.utils';

/**
 * Footer Server Component - Clean and simple
 */
async function FooterServer(_props: FooterWrapperProps) {
  const [footerData, workButtonsData] = await Promise.all([
    fetchFooterData(),
    fetchWorkButtonsData(),
  ]);

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
