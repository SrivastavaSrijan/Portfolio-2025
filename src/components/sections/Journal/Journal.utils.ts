import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

type JournalCaseStudies = PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result'];
export type AllTagsData = PayloadFetchTypeMap[PayloadEntity.AllTags]['result'];
export type TagData = AllTagsData[number];

export interface JournalWrapperProps {
  selectedTag?: TagData;
}

export interface JournalUIProps extends JournalCaseStudies, JournalWrapperProps {
  tags: AllTagsData;
}
