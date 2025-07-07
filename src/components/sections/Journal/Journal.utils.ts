import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';
import type { TagData } from '@/lib/graphql/server/types';
import { uniqBy } from 'lodash';

type JournalCaseStudies = PayloadFetchTypeMap[PayloadEntity.CaseStudiesByParams]['result'];
type AllTagsData = PayloadFetchTypeMap[PayloadEntity.AllTags]['result'];

export interface JournalWrapperProps {
  selectedTag?: TagData;
}

export interface JournalUIProps extends JournalCaseStudies, JournalWrapperProps {
  paginatedTags: string[][];
}

export function getAllJournalTags(allTagsData: AllTagsData): TagData[] {
  return uniqBy(allTagsData.flatMap((doc) => doc.tags).filter(Boolean), 'id');
}
