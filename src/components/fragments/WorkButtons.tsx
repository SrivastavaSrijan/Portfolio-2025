import type { GetWorkButtonsQuery } from '@/lib/graphql/__generated__/hooks';
import { Button } from '../ui';
import Link from 'next/link';

interface WorkButtonProps {
  className?: string;
  invert?: boolean;
  buttons?: NonNullable<GetWorkButtonsQuery['WorkButton']>['buttons'];
}

export const WorkButtons = ({ invert = false, buttons = [] }: WorkButtonProps) => {
  return (
    <div className="flex w-full justify-between md:w-fit md:justify-end md:gap-5">
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
