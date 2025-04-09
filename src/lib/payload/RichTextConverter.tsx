import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type { SerializedQuoteNode, SerializedTextNode } from '@payloadcms/richtext-lexical';

export const richTextConverter: JSXConverters<SerializedQuoteNode | SerializedTextNode> = {
  quote: ({ node, nodesToJSX }) => {
    return (
      <blockquote className="my-6 border-gray-300 border-l-4 pl-4 italic dark:border-gray-600">
        {nodesToJSX({ nodes: node.children })}
      </blockquote>
    );
  },
  code: ({ node, nodesToJSX }) => {
    return (
      <pre className="my-6 overflow-x-auto rounded-md bg-gray-100 p-4 text-sm dark:bg-gray-800">
        <code className="font-mono">{nodesToJSX({ nodes: node.children })}</code>
      </pre>
    );
  },
  text: ({ node }) => {
    // Handle different text formatting styles
    if (!node || !node.text) return null;

    const { text, format } = node;

    // Simple case - no formatting
    if (!format) return text;

    // We need to wrap the text in various formatting elements
    let result = <>{text}</>;

    // Apply formatting in order
    if (format & 1) {
      // Bold
      result = <strong>{result}</strong>;
    }
    if (format & 2) {
      // Italic
      result = <em>{result}</em>;
    }
    if (format & 4) {
      // Underline
      result = <u>{result}</u>;
    }
    if (format & 8) {
      // Strikethrough
      result = <span className="line-through">{result}</span>;
    }
    if (format & 16) {
      // Code
      result = (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800">
          {result}
        </code>
      );
    }
    if (format & 32) {
      // Subscript
      result = <sub className="text-xs">{result}</sub>;
    }
    if (format & 64) {
      // Superscript
      result = <sup className="text-xs">{result}</sup>;
    }

    return result;
  },
};
