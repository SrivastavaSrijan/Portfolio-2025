import type { GetSkillsQuery } from '@/lib/graphql/__generated__/hooks';

// Extract the exact Skills data type from the GraphQL query
export type SkillsData = NonNullable<GetSkillsQuery['Skill']>;

// The UI component receives the exact data shape from GraphQL
export type SkillsUIProps = SkillsData;

// Wrapper component props - currently none needed
export type SkillsWrapperProps = Record<string, never>;
