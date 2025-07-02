import type { GetFeaturedCaseStudiesQuery } from '@/lib/graphql/__generated__/hooks';

// Extract the exact FeaturedCaseStudies data type from the GraphQL query
export type FeaturedCaseStudiesData = NonNullable<GetFeaturedCaseStudiesQuery['FeaturedCaseStudy']>;

// The UI component receives the exact data shape from GraphQL
export type FeaturedCaseStudiesUIProps = FeaturedCaseStudiesData;

// Wrapper component props - currently none needed
export type FeaturedCaseStudiesWrapperProps = Record<string, never>;
