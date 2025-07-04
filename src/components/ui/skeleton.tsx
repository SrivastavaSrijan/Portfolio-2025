import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const skeletonVariants = cva('animate-pulse rounded-md', {
  variants: {
    variant: {
      default: 'bg-accent',
      primary: 'bg-primary/40',
      secondary: 'bg-secondary/40',
      brand: 'bg-brand',
      tertiary: 'bg-tertiary/40',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export type SkeletonVariants = VariantProps<typeof skeletonVariants>['variant'];

interface SkeletonProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div data-slot="skeleton" className={cn(skeletonVariants({ variant, className }))} {...props} />
  );
}

export { Skeleton, skeletonVariants };
