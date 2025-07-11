import { Button } from '@/components/ui';
import Link from 'next/link';
import type { PayloadEntity, PayloadFetchTypeMap } from '@/lib/graphql/server';

interface WorkButtonProps {
  className?: string;
  invert?: boolean;
  buttons?: PayloadFetchTypeMap[PayloadEntity.WorkButtons]['result']['buttons'];
}

export const WorkButtons = ({ invert = false, buttons = [] }: WorkButtonProps) => {
  return (
    <div className="flex w-full justify-between lg:w-fit lg:justify-end lg:gap-5">
      {buttons.map((button) => (
        <Link href={button.url || '#'} key={button.text} passHref target="_blank">
          <Button variant="outlined" color={!invert ? 'brand' : 'accent'}>
            {button.text}
          </Button>
        </Link>
      ))}
    </div>
  );
};
