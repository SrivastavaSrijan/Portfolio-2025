import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

type JournalCaseStudies = PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result'];
export type AllTagsData = PayloadFetchTypeMap[PayloadEntity.AllTags]['result'];

export interface JournalWrapperProps {
  selectedTag?: AllTagsData[number];
}

export interface JournalUIProps extends JournalCaseStudies, JournalWrapperProps {
  tags: string[];
}
