import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type {
  SerializedParagraphNode,
  SerializedQuoteNode,
  SerializedHorizontalRuleNode,
  SerializedTextNode,
} from '@payloadcms/richtext-lexical';

export const ParagraphConverter: JSXConverters<
  SerializedParagraphNode | SerializedQuoteNode | SerializedHorizontalRuleNode
> = {
  code: ({ node, nodesToJSX }) => {
    // This will apply to standalone code blocks
    return (
      <pre className="my-4 overflow-x-auto rounded-lg bg-black-700 p-4">
        <code className="block font-mono text-orange-300 text-xs leading-relaxed">
          {nodesToJSX({ nodes: node.children })}
        </code>
      </pre>
    );
  },

  horizontalrule: () => {
    return <hr className="my-8 border-black-200 border-t dark:border-black-200" />;
  },

  quote: ({ node, nodesToJSX }) => {
    return (
      <blockquote className="my-6 border-primary border-l-4 pl-6 text-black-600 italic dark:text-black-300">
        {nodesToJSX({ nodes: node.children })}
      </blockquote>
    );
  },

  paragraph: ({ node, nodesToJSX }) => {
    // Skip empty paragraphs
    if (
      node.children.length === 0 ||
      (node.children.length === 1 && 'text' in node.children[0] && node.children[0].text === '')
    ) {
      return null;
    }

    // Custom rendering for child nodes to handle text formatting
    const renderChildren = () => {
      return node.children.map((child, index) => {
        // Special handling for code blocks within paragraphs
        if ('type' in child && child.type === 'code') {
          return (
            <code
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="whitespace-nowrap bg-black-700 px-1.5 py-0.5 font-mono text-orange-300 text-xs"
            >
              {nodesToJSX({ nodes: (child as SerializedParagraphNode).children })}
            </code>
          );
        }

        // Handle text nodes with different formats based on the format property
        if ('text' in child && 'format' in child) {
          const textNode = child as SerializedTextNode & { format: number };
          const format = textNode.format;

          switch (format) {
            // Inline code (format 16)
            case 16:
              return (
                <code
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  className="whitespace-nowrap bg-black-700 px-1.5 py-0.5 font-mono text-orange-300 text-xs"
                >
                  {textNode.text}
                </code>
              );

            // Bold (format 2)
            case 2:
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              return <strong key={index}>{textNode.text}</strong>;

            // Italic (format 1)
            case 1:
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              return <em key={index}>{textNode.text}</em>;

            // Bold and italic (format 3)
            case 3:
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <strong key={index}>
                  <em>{textNode.text}</em>
                </strong>
              );

            // Underline (format 4)
            case 4:
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              return <u key={index}>{textNode.text}</u>;

            // Strikethrough (format 8)
            case 8:
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              return <s key={index}>{textNode.text}</s>;

            // Subscript (format 32)
            case 32:
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              return <sub key={index}>{textNode.text}</sub>;

            // Superscript (format 64)
            case 64:
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              return <sup key={index}>{textNode.text}</sup>;

            // Default - regular text
            default:
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              return <span key={index}>{textNode.text}</span>;
          }
        }

        // Use default rendering for other node types
        return nodesToJSX({ nodes: [child] });
      });
    };

    return <p className="my-4 leading-relaxed">{renderChildren()}</p>;
  },
};
