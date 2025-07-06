import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

export type SkillsData = PayloadFetchTypeMap[PayloadEntity.Skills]['result'];

export type SkillsUIProps = SkillsData;

export type SkillsWrapperProps = Record<string, never>;
