import type { PayloadFetchTypeMap, PayloadEntity } from '@/lib/graphql/server';

export type FooterData = PayloadFetchTypeMap[PayloadEntity.Footer]['result'];
type WorkButtonsButtons = PayloadFetchTypeMap[PayloadEntity.WorkButtons]['result']['buttons'];

export type FooterUIProps = FooterData & {
  workButtons?: WorkButtonsButtons;
};
export type FooterWrapperProps = Record<string, never>;
