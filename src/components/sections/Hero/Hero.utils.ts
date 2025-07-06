import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

// Extract the exact Hero data type from the PayloadFetchTypeMap
type HeroData = PayloadFetchTypeMap[PayloadEntity.Hero]['result'];
type WorkButtonsButtons = PayloadFetchTypeMap[PayloadEntity.WorkButtons]['result']['buttons'];

// The UI component receives the exact data shape from GraphQL plus WorkButtons
export type HeroUIProps = HeroData & {
  workButtons?: WorkButtonsButtons;
};

// Wrapper component props - currently none needed
export type HeroWrapperProps = Record<string, never>;
