import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

export type AllTagsData = PayloadFetchTypeMap[PayloadEntity.AllTags]['result'];
export type JournalCaseStudies =
  PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result']['caseStudies'];
export type JournalData =
  PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result']['journal'];

export interface JournalUIProps {
  title?: string;
  subtitle?: string;
  description?: string;
  caseStudies: JournalCaseStudies;
  paginatedTags: string[][];
  selectedTag: string | null;
}

export interface JournalWrapperProps {
  searchParams?: {
    tags?: string;
  };
}
