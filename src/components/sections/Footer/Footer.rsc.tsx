import { Suspense } from 'react';
import { fetchFooterData } from '@/lib/graphql/server';
import { FooterUI } from './Footer.ui';
import { FooterSkeleton } from './Footer.skeleton';
import type { FooterWrapperProps } from './Footer.utils';

/**
 * Footer Server Component - Clean and simple
 */
async function FooterServer(_props: FooterWrapperProps) {
  const data = await fetchFooterData();
  return <FooterUI {...data} />;
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
