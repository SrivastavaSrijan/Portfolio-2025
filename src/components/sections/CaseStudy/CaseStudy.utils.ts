import type { GetCaseStudyBySlugQuery } from '@/lib/graphql/__generated__/hooks';

// Extract the exact CaseStudy data type from the GraphQL query
export type CaseStudyData = NonNullable<GetCaseStudyBySlugQuery['CaseStudies']>['docs'][0];

// The UI component receives the exact data shape from GraphQL
export type CaseStudyUIProps = CaseStudyData;

// Wrapper component props
export interface CaseStudyWrapperProps {
  slug: string;
}
