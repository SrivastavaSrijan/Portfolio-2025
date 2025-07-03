import { isStringParam } from '@/lib/utils';
import { createMetadata } from '@/lib/config/metadata';
import { fetchCaseStudyMetadata, fetchAllCaseStudiesData } from '@/lib/graphql/server';
import type { Metadata } from 'next';
import { NotFound } from '@/components/fragments';
import { CaseStudy } from '@/components/sections';

export const revalidate = 3600;

export async function generateStaticParams() {
  // During build time, the Payload server might not be running
  // Return empty array to allow fallback to ISR
  try {
    const caseStudies = await fetchAllCaseStudiesData();
    return caseStudies.map((caseStudy) => ({
      slug: caseStudy.slug,
    }));
  } catch {
    // Error already logged in server action
    return [];
  }
}

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
