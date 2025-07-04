import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

// Extract the exact FeaturedExperiences data type from the PayloadFetchTypeMap
export type FeaturedExperiencesData =
  PayloadFetchTypeMap[PayloadEntity.FeaturedExperiences]['result'];

// The UI component receives the exact data shape from GraphQL
export type FeaturedExperiencesUIProps = FeaturedExperiencesData;

// Wrapper component props - currently none needed
export type FeaturedExperiencesWrapperProps = Record<string, never>;
