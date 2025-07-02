import type {
  GetAllTagsQuery,
  GetCaseStudiesByParamsQuery,
} from '@/lib/graphql/__generated__/hooks';

// Extract the exact data types from the GraphQL queries
export type AllTagsData = NonNullable<GetAllTagsQuery['CaseStudies']>['docs'];
export type JournalCaseStudies = NonNullable<GetCaseStudiesByParamsQuery['CaseStudies']>['docs'];
export type JournalData = NonNullable<GetCaseStudiesByParamsQuery['Journal']>;

// The UI component receives the processed data
export interface JournalUIProps {
  title?: string;
  subtitle?: string;
  description?: string;
  caseStudies: JournalCaseStudies;
  paginatedTags: string[][];
  selectedTag: string | null;
}

// Wrapper component props
export interface JournalWrapperProps {
  searchParams?: {
    tags?: string;
  };
}
