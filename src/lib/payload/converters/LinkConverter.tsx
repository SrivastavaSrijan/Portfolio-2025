import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type { SerializedHeadingNode } from '@payloadcms/richtext-lexical';

export const LinkConverter: JSXConverters<SerializedHeadingNode> = {
  link: ({ node, nodesToJSX }) => {
    return (
      <a
        href={node?.fields?.url}
        target={node?.fields?.newTab ? '_blank' : '_parent'}
        className="cursor-pointer text-purple-500 hover:underline"
      >
        {nodesToJSX({ nodes: node.children })}
      </a>
    );
  },
};
