// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'node:path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import {
  ContactForms,
  Media,
  Users,
  CaseStudies,
  Experiences,
  Tags,
} from './lib/payload/collections';
import {
  FeaturedCaseStudies,
  FeaturedExperiences,
  Footer,
  Hero,
  Journal,
  Skills,
  WorkButtons,
} from './lib/payload/globals';
import { seoConfig } from './lib/payload/seoConfig';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
import dotenv from 'dotenv';
dotenv.config({ quiet: true });

// Load environment variables from .env file
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, ContactForms, CaseStudies, Experiences, Tags],
  globals: [Hero, Skills, WorkButtons, FeaturedCaseStudies, Footer, Journal, FeaturedExperiences],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,

  plugins: [
    // storage-adapter-placeholder
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
    seoPlugin(seoConfig),
  ],
});
