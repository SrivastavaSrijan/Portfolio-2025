import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type { SerializedHeadingNode } from '@payloadcms/richtext-lexical';

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

    // Apply ID to all headings for better navigation/linking
    return (
      <Tag id={id} className={`rich-text-${node.tag}`}>
        {nodesToJSX({ nodes: node.children })}
      </Tag>
    );
  },
};
