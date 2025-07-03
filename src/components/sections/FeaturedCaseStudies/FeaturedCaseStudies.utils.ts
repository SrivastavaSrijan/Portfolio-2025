import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server/types';

// Extract the exact FeaturedCaseStudies data type from the PayloadFetchTypeMap
export type FeaturedCaseStudiesData =
  PayloadFetchTypeMap[PayloadEntity.FeaturedCaseStudies]['result'];

// The UI component receives the exact data shape from GraphQL
export type FeaturedCaseStudiesUIProps = FeaturedCaseStudiesData;

// Wrapper component props - currently none needed
export type FeaturedCaseStudiesWrapperProps = Record<string, never>;
