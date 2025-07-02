import type {
  GetExperienceBySlugQuery,
  GetCaseStudiesByParamsQuery,
} from '@/lib/graphql/__generated__/hooks';

// Extract the exact Experience data type from the GraphQL query
export type ExperienceData = NonNullable<GetExperienceBySlugQuery['Experiences']>['docs'][0];

// Extract the case studies data type
export type ExperienceCaseStudies = NonNullable<GetCaseStudiesByParamsQuery['CaseStudies']>['docs'];

// The UI component receives the exact data shape from GraphQL
export interface ExperienceUIProps {
  experience: ExperienceData;
  caseStudies: ExperienceCaseStudies;
}

// Wrapper component props
export interface ExperienceWrapperProps {
  slug: string;
}
