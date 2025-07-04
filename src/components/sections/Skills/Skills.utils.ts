import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

// Extract the exact Skills data type from the PayloadFetchTypeMap
export type SkillsData = PayloadFetchTypeMap[PayloadEntity.Skills]['result'];

// The UI component receives the exact data shape from GraphQL
export type SkillsUIProps = SkillsData;

// Wrapper component props - currently none needed
export type SkillsWrapperProps = Record<string, never>;
