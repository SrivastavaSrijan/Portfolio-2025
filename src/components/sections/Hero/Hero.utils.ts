import type { GetWorkButtonsQuery } from '@/lib/graphql/__generated__/hooks';
import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server/types';

// Extract the exact Hero data type from the PayloadFetchTypeMap
export type HeroData = PayloadFetchTypeMap[PayloadEntity.Hero]['result'];

// The UI component receives the exact data shape from GraphQL plus WorkButtons
export type HeroUIProps = HeroData & {
  workButtons?: NonNullable<GetWorkButtonsQuery['WorkButton']>['buttons'];
};

// Wrapper component props - currently none needed
export type HeroWrapperProps = Record<string, never>;
