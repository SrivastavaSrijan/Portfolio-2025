import type { GetFeaturedExperiencesQuery } from '@/lib/graphql/__generated__/hooks';

// Extract the exact FeaturedExperiences data type from the GraphQL query
export type FeaturedExperiencesData = NonNullable<
  GetFeaturedExperiencesQuery['FeaturedExperience']
>;

// The UI component receives the exact data shape from GraphQL
export type FeaturedExperiencesUIProps = FeaturedExperiencesData;

// Wrapper component props - currently none needed
export type FeaturedExperiencesWrapperProps = Record<string, never>;
