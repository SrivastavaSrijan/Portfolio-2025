import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type {
  SerializedParagraphNode,
  SerializedQuoteNode,
  SerializedHorizontalRuleNode,
  SerializedTextNode,
} from '@payloadcms/richtext-lexical';
import type { SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical';
import type { ReactNode } from 'react';

// Helper function to handle text node formatting that can be reused
export const formatTextNode = (
  textNode: SerializedTextNode & { format?: number },
  index: number
) => {
  const format = textNode.format || 0;

  switch (format) {
    // Inline code (format 16)
    case 16:
      return (
        <code
          key={index}
          className="whitespace-pre bg-black-700 px-1.5 py-0.5 font-mono text-orange-300 text-xs"
        >
          {textNode.text}
        </code>
      );

    // Italic (format 2)
    case 2:
      return <em key={index}>{textNode.text}</em>;

    // Bold (format 1)
    case 1:
      return <strong key={index}>{textNode.text}</strong>;

    // Bold and italic (format 3)
    case 3:
      return (
        <strong key={index}>
          <em>{textNode.text}</em>
        </strong>
      );

    // Underline (format 4)
    case 4:
      return <u key={index}>{textNode.text}</u>;

    // Strikethrough (format 8)
    case 8:
      return <s key={index}>{textNode.text}</s>;

    // Subscript (format 32)
    case 32:
      return <sub key={index}>{textNode.text}</sub>;

    // Superscript (format 64)
    case 64:
      return <sup key={index}>{textNode.text}</sup>;

    // Default - regular text
    default:
      return <span key={index}>{textNode.text}</span>;
  }
};

// Helper to render children nodes with appropriate formatting
export const renderFormattedChildren = (
  children: SerializedLexicalNode[],
  nodesToJSX: (args: { nodes: SerializedLexicalNode[] }) => ReactNode
) => {
  return children.map((child, index) => {
    // Special handling for code blocks
    if ('type' in child && child.type === 'code') {
      return (
        <code
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className="whitespace-pre bg-black-700 px-1.5 py-0.5 font-mono text-orange-300 text-xs"
        >
          {nodesToJSX({ nodes: (child as SerializedParagraphNode).children })}
        </code>
      );
    }

    // Handle text nodes with different formats
    if ('text' in child && 'format' in child) {
      return formatTextNode(child as SerializedTextNode & { format: number }, index);
    }

    // Use default rendering for other node types
    return nodesToJSX({ nodes: [child] });
  });
};

const Code = ({
  node,
  nodesToJSX,
}: {
  node: SerializedParagraphNode | SerializedQuoteNode;
  nodesToJSX: (args: { nodes: SerializedLexicalNode[] }) => ReactNode;
}) => {
  // Render the code block with its children
  return (
    <pre className="my-4 overflow-x-auto rounded-lg bg-black-700 p-4">
      <code className="block font-mono text-orange-300 text-xs leading-relaxed">
        {nodesToJSX({ nodes: node.children })}
      </code>
    </pre>
  );
};

export const ParagraphConverter: JSXConverters<
  SerializedParagraphNode | SerializedQuoteNode | SerializedHorizontalRuleNode | SerializedTextNode
> = {
  code: Code,

  horizontalrule: () => {
    return <hr className="my-8 border-black-200 border-t dark:border-black-200" />;
  },

  quote: ({ node, nodesToJSX }) => {
    return (
      // we use blockquotes for code blocks cuz payload doesn't support code blocks
      <blockquote className="my-6 border-primary border-l-4 pl-6 text-black-600 italic dark:text-black-300">
        <Code node={node as SerializedQuoteNode} nodesToJSX={nodesToJSX} />
      </blockquote>
    );
  },

  paragraph: ({ node, nodesToJSX }) => {
    // Skip empty paragraphs
    if (
      node.children.length === 0 ||
      (node.children.length === 1 && 'text' in node.children[0] && node.children[0].text === '')
    ) {
      return <div className="my-1 md:my-2" />;
    }

    // Use the shared helper function for rendering formatted text
    const formattedChildren = renderFormattedChildren(node.children, nodesToJSX);

    return <p className="leading-relaxed">{formattedChildren}</p>;
  },

  // Add a text node handler (this won't typically be used directly in the paragraph converter,
  // but we export it for use in the list converter)
  text: ({ node }) => {
    // This will be used to handle standalone text nodes
    if ('text' in node && node.text) {
      if ('format' in node) {
        return formatTextNode(node as SerializedTextNode & { format: number }, 0);
      }
    }
    return <span>{node.text}</span>;
  },
};
