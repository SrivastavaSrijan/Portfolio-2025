import { isStringParam } from '@/lib/utils';
import { createMetadata } from '@/lib/config/metadata';
import { fetchCaseStudyMetadata } from '@/lib/graphql/server';
import type { Metadata } from 'next';
import { NotFound } from '@/components/fragments';
import { CaseStudy } from '@/components/sections';

export const revalidate = 3600;
interface CaseStudyBySlugProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: CaseStudyBySlugProps): Promise<Metadata> {
  const { slug } = await params;
  const remoteMetadata = await fetchCaseStudyMetadata(slug);
  return createMetadata(remoteMetadata);
}

export default async function CaseStudyBySlug({ params }: CaseStudyBySlugProps) {
  const { slug } = await params;
  if (!isStringParam(slug)) {
    return <NotFound />;
  }
  return <CaseStudy slug={slug} />;
}
