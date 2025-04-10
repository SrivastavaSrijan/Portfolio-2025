import { useGetWorkButtonsSuspenseQuery } from '@/lib/graphql/__generated__/hooks';
import { Button } from '../ui';

interface WorkButtonProps {
  className?: string;
  invert?: boolean;
}
export const WorkButtons = ({ invert = false }: WorkButtonProps) => {
  const { data: buttonData } = useGetWorkButtonsSuspenseQuery();

  const { buttons = [] } = buttonData?.WorkButton ?? {};

  return (
    <div className="flex w-full justify-between md:w-fit md:justify-end md:gap-5">
      {buttons.map((button) => (
        <Button
          variant="outlined"
          color={invert ? 'brand' : 'ghost'}
          key={button.text}
          onClick={() => {
            if (button.url) {
              window.open(button.url, '_blank');
            }
          }}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};
