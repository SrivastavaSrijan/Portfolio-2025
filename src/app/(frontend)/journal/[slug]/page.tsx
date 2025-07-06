import { isStringParam } from '@/lib/utils';
import { createMetadata } from '@/lib/config/metadata';
import { api, PayloadEntity } from '@/lib/graphql/server';

import type { Metadata } from 'next';
import { NotFound } from '@/components/fragments';
import { CaseStudy } from '@/components/sections';

export const revalidate = 3600;

export async function generateStaticParams() {
  // During build time, the Payload server might not be running
  // Return empty array to allow fallback to ISR
  const caseStudies = await api.get(PayloadEntity.AllCaseStudies);

  if (!caseStudies) {
    // Error already logged in api.get, return empty array for ISR fallback
    return [];
  }

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

interface CaseStudyBySlugProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: CaseStudyBySlugProps): Promise<Metadata> {
  const { slug } = await params;
  const remoteMetadata = await api.get(PayloadEntity.CaseStudyMeta, {
    slug,
  });
  if (!remoteMetadata) {
    return createMetadata({});
  }
  return createMetadata(remoteMetadata);
}

export default async function CaseStudyBySlug({ params }: CaseStudyBySlugProps) {
  const { slug } = await params;
  if (!isStringParam(slug)) {
    return <NotFound />;
  }
  return <CaseStudy slug={slug} />;
}
