import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type { SerializedHeadingNode } from '@payloadcms/richtext-lexical';
import { cn } from '../utils';

export const headingConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({ node, nodesToJSX }) => {
    // Extract text content for ID generation
    const textContent = nodesToJSX({ nodes: node.children }).join('');

    // Generate slug-friendly ID for all headings (not just h2)
    const id = textContent
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-') // Handle multiple consecutive dashes
      .replace(/^-|-$/g, ''); // Remove leading/trailing dashes

    const Tag = node.tag;

    let className = 'md:font-normal font-medium';

    switch (node.tag) {
      case 'h1':
        className = cn('text-3xl md:text-display-4', className);
        break;
      case 'h2':
        className = cn('text-2xl md:text-display-3', className);
        break;
      case 'h3':
        className = cn('text-xl md:text-display-2', className);
        break;
      case 'h4':
        className = cn('text-lg md:text-display-1', className);
        break;
      case 'h5':
        className = cn('text-lg md:text-6xl', className);
        break;
      case 'h6':
        className = cn('text-base md:text-5xl', className);
        break;
    }

    // Apply ID to all headings for better navigation/linking
    return (
      <Tag id={id} className={cn(`rich-text-${node.tag}`, className)}>
        {nodesToJSX({ nodes: node.children })}
      </Tag>
    );
  },

  // Add any other heading levels you want to customize here
};
