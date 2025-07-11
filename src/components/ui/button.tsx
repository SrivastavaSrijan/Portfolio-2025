import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        contained: 'shadow-xs',
        outlined: 'border bg-none shadow-xs rounded-full',
        text: 'hover:!bg-[transparent]',
        link: 'underline-offset-8 underline hover:!bg-[transparent]',
      },
      color: {
        primary:
          'text-primary-foreground bg-primary hover:bg-primary/90 dark:text-primary-foreground',
        secondary:
          'text-secondary-foreground bg-secondary hover:bg-secondary/80 dark:text-secondary-foreground',
        destructive:
          'text-white bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        brand: 'dark:border-brand dark:hover:bg-brand/50 dark:text-brand',
        accent: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
      },
      size: {
        default:
          'lg:h-9 h-6  px-2 lg:px-4 py-1 lg:py-2 has-[>svg]:px-3 md:text-base text-xs px-2.5',
        sm: 'h-8  gap-1.5 px-3 has-[>svg]:px-2.5 text-xs',
        lg: 'h-10 px-4 lg:px-6 has-[>svg]:px-4 md:text-lg text-sm',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'contained',
      color: 'primary',
      size: 'default',
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'brand',
        class: 'bg-brand dark:text-accent hover:bg-brand/10 dark:bg-brand',
      },
      {
        variant: 'outlined',
        color: 'primary',
        class: 'border-primary text-primary hover:bg-primary/10',
      },
      {
        variant: 'outlined',
        color: 'secondary',
        class: 'border-secondary text-secondary hover:bg-secondary/10',
      },
      {
        variant: 'outlined',
        color: 'destructive',
        class: 'border-destructive text-destructive hover:bg-destructive/10',
      },
      {
        variant: 'outlined',
        color: 'accent',
        class: 'border-accent text-brand hover:bg-brand/10 dark:border-accent dark:text-accent',
      },
      {
        variant: 'outlined',
        color: 'brand',
        class: 'border-brand text-brand hover:bg-brand/10 dark:border-brand dark:text-brand',
      },
      {
        variant: 'text',
        color: 'primary',
        class: 'text-primary hover:bg-primary/10',
      },
      {
        variant: 'text',
        color: 'secondary',
        class: 'text-secondary hover:bg-secondary/10',
      },
      {
        variant: 'text',
        color: 'destructive',
        class: 'text-destructive hover:bg-destructive/10',
      },
      {
        variant: 'link',
        color: 'accent',
        class: 'text-accent hover:bg-accent/10 dark:text-accent',
      },
    ],
  }
);

function Button({
  className,
  variant,
  color,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, color, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
