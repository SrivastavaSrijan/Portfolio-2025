import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server/types';

// Extract the exact data types from the PayloadFetchTypeMap
export type AllTagsData = PayloadFetchTypeMap[PayloadEntity.AllTags]['result'];
export type JournalCaseStudies =
  PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result']['caseStudies'];
export type JournalData =
  PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result']['journal'];

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
