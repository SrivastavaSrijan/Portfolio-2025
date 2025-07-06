import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

// Extract the exact FeaturedCaseStudies data type from the PayloadFetchTypeMap
type FeaturedCaseStudiesData = PayloadFetchTypeMap[PayloadEntity.FeaturedCaseStudies]['result'];

export type FeaturedCaseStudiesUIProps = FeaturedCaseStudiesData;

export type FeaturedCaseStudiesWrapperProps = Record<string, never>;
