'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';
import { useState } from 'react';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        ref={(el) => {
          const parent = el?.closest('[data-state]');
          const dataIsOpen = parent?.getAttribute('data-state');
          setIsOpen(dataIsOpen === 'open');
        }}
        className={cn(
          // biome-ignore lint/nursery/useSortedClasses: biome messes up the class order
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md md:py-4 py-2 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="scale-50 text-muted-foreground transition-transform duration-200 md:scale-100 "
        >
          <title>Expand/Collapse</title>
          {/* Horizontal line (always visible) */}
          <line x1="5" y1="12" x2="19" y2="12" />
          {/* Vertical line (rotates out when open) */}
          <line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
            className={cn('origin-center transition-transform duration-200', {
              'rotate-0': !isOpen,
              'rotate-90 opacity-0': isOpen,
            })}
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      // biome-ignore lint/nursery/useSortedClasses: biome messes up the class order
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
