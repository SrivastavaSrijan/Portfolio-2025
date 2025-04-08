import type React from 'react';
import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { jsxConverter } from '@/lib/payload/coverters';
import { cn } from '@/lib/utils'; // Assuming you have this utility from shadcn/ui

type Props = {
  data: SerializedEditorState;
  containerClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function RichText({ data, className, containerClassName, ...rest }: Props) {
  // Check if data exists to avoid rendering errors
  if (!data) {
    return null;
  }

  return (
    <div className={cn('rich-text-container', containerClassName)}>
      <RichTextConverter
        {...rest}
        data={data}
        className={cn('prose dark:prose-invert max-w-none', className)}
        converters={jsxConverter}
      />
    </div>
  );
}
