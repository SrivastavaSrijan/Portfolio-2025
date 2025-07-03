import type {
  GenerateDescription,
  GenerateImage,
  GenerateTitle,
  GenerateURL,
  SEOPluginConfig,
} from '@payloadcms/plugin-seo/types';
import type { CaseStudy, Experience } from '../../payload-types';
import { Hero } from './globals/Hero';
import { FullURLs } from '../config/routes';
import { AssetsMap } from '../assets';
import { Media, CaseStudies, Experiences } from './collections';
import { defaultMetadata } from '../config/metadata';
import { Journal } from './globals';

const Config = {
  MaxLengths: {
    description: 147,
    title: 47,
  },
  generateTitle: (title: string) => title,
  generateDescription: (description: string) =>
    description.length > Config.MaxLengths.description
      ? `${description.slice(0, Config.MaxLengths.description)}...`
      : description,

  defaults: {
    description: (title: string) => `${title}${Config.defaults.suffix}`,
    suffix: ' | Srijan / Frontend',
    title: defaultMetadata.title as string,
  },
};

// biome-ignore lint/suspicious/noExplicitAny: Lexical editor nodes have dynamic structure that's hard to type
const extractTextFromNodes = (root: { children?: any[] } | undefined): string => {
  if (!root || !root.children) return '';

  return root.children
    .map((node) => {
      // If node has text property, return it
      if ('text' in node) return node.text;
      // If node has children, recursively extract text
      if (node.children) return extractTextFromNodes(node);
      return '';
    })
    .join(' ')
    .trim();
};

/**
 * SEO Configuration with proper TypeScript typing
 */
const generateTitle: GenerateTitle = async ({ doc, collectionSlug, globalSlug }) => {
  // Handle globals first
  if (globalSlug === Hero.slug) {
    return defaultMetadata.title as string;
  }

  // Handle collections
  switch (collectionSlug) {
    case CaseStudies.slug: {
      const typedDoc = doc as CaseStudy;
      return Config.generateTitle(typedDoc.title || Config.defaults.title);
    }

    case Experiences.slug: {
      const typedDoc = doc as Experience;
      return `${typedDoc.title}${Config.defaults.suffix}`;
    }

    default: {
      // Use string indexing for title as a fallback
      const title = doc?.title as string | undefined;
      return title || Config.defaults.title;
    }
  }
};

const generateDescription: GenerateDescription = async ({ doc, collectionSlug, globalSlug }) => {
  // Handle globals first
  if (globalSlug === Hero.slug) {
    return defaultMetadata.description as string;
  }
  // Handle collections
  switch (collectionSlug) {
    case CaseStudies.slug: {
      const typedDoc = doc as CaseStudy;
      const defaultDescription = Config.defaults.description(typedDoc.title);
      if (typedDoc.summary) {
        const extractedText = extractTextFromNodes(typedDoc?.summary?.root);
        return extractedText
          ? extractedText.slice(0, Config.MaxLengths.description) +
              (extractedText.length > Config.MaxLengths.description ? '...' : '')
          : defaultDescription;
      }
      return defaultDescription;
    }

    case Experiences.slug: {
      const typedDoc = doc as Experience;

      const defaultDescription = Config.defaults.description(`${typedDoc.role}@${typedDoc.title}`);
      if (typedDoc.summary) {
        const extractedText = extractTextFromNodes(typedDoc?.summary?.root);
        return extractedText
          ? extractedText.slice(0, Config.MaxLengths.description) +
              (extractedText.length > Config.MaxLengths.description ? '...' : '')
          : defaultDescription;
      }
      return defaultDescription;
    }

    default: {
      // String indexing as fallback
      const description = doc?.description as string | undefined;
      return description || Config.defaults.description('Read more about me');
    }
  }
};

const generateImage: GenerateImage = async ({ doc, collectionSlug, globalSlug }) => {
  const previewImage = FullURLs.root + AssetsMap.RemoteImages.Preview;
  // For globals, use the default preview image
  if (globalSlug) {
    // Use the preview.jpg from metadata.ts as fallback
    return previewImage; // Will use the default image specified in the CMS
  }
  switch (collectionSlug) {
    case CaseStudies.slug: {
      const typedDoc = doc;

      return typedDoc.illustration ?? previewImage;
    }

    case Experiences.slug: {
      const typedDoc = doc;
      return typedDoc.thumbnailImage ?? previewImage;
    }

    default:
      return previewImage;
  }
};

/**
 * Generate URL for SEO preview
 */
const generateURL: GenerateURL = async ({ doc, collectionSlug, globalSlug }) => {
  if (globalSlug === Hero.slug) {
    return FullURLs.root;
  }

  switch (collectionSlug) {
    case CaseStudies.slug: {
      const typedDoc = doc as CaseStudy;
      return typedDoc.slug ? `${FullURLs.CaseStudies}${typedDoc.slug}` : FullURLs.root;
    }

    case Experiences.slug: {
      const typedDoc = doc as Experience;
      return typedDoc.slug ? `${FullURLs.Experience}${typedDoc.slug}` : FullURLs.root;
    }

    default:
      return FullURLs.root;
  }
};

/**
 * Main SEO Plugin configuration
 */
export const seoConfig: SEOPluginConfig = {
  collections: [CaseStudies.slug, Experiences.slug],
  globals: [Hero.slug, Journal.slug],
  uploadsCollection: Media.slug,
  tabbedUI: true,
  generateTitle,
  generateDescription,
  generateImage,
  generateURL,
};
