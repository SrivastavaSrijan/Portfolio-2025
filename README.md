# Portfolio Website

A modern, type-safe portfolio website built with Next.js, PayloadCMS, and GraphQL. Features a streamlined content management workflow with automatic type generation, React Server Components, and robust error handling.

## 🚀 Quick Start

1. **Clone and install dependencies**
   ```bash
   yarn install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Configure your database, Payload secret, and other environment variables
   ```

3. **Start development with codegen**
   ```bash
   yarn dev:codegen
   ```
   This runs both the Next.js development server and GraphQL codegen in watch mode.

   Or start them separately:
   ```bash
   yarn dev          # Start Next.js dev server (port 3002)
   yarn codegen:watch # Start GraphQL codegen watcher
   ```

4. **Access the application**
   - Frontend: [http://localhost:3002](http://localhost:3002)
   - Admin Panel: [http://localhost:3002/admin](http://localhost:3002/admin)
   - GraphQL Playground: [http://localhost:3002/api/graphql-playground](http://localhost:3002/api/graphql-playground)

## 🏗️ Architecture Overview

This portfolio uses a modern, resilient, type-safe architecture:

- **Next.js 15** with App Router and React Server Components
- **PayloadCMS** for content management with GraphQL API
- **Apollo Client** for GraphQL queries with server-side rendering
- **TypeScript** with automatic type generation from GraphQL schema
- **Tailwind CSS** with Radix UI components
- **Vercel** deployment with PostgreSQL and Blob storage
- **Centralized Error Handling** for graceful degradation during deployments

## 🛡️ Error Handling & Resilience

The application features a robust error handling system designed to handle the "chicken and egg" problem common in headless CMS deployments:

### The Problem
During deployment, your frontend might build before your CMS is fully available, causing build failures when trying to fetch data for static generation.

### Our Solution
**Centralized Error Handling in the Data Layer:**

```typescript
// All error handling happens in Api.ts
async fetch() {
  try {
    const result = await query(/* ... */);
    return result.data;
  } catch (error) {
    // Log error centrally
    logError(error, context);
    // Return null for graceful handling
    return null;
  }
}
```

**Simple, Predictable Components:**

```typescript
// Server components handle null data gracefully
async function ComponentServer() {
  const data = await api.get(PayloadEntity.Something);
  
  if (!data) {
    return <ComponentSkeleton />; // or <NotFound /> for dynamic pages
  }
  
  return <ComponentUI {...data} />;
}
```

### Benefits:
- ✅ **Build Resilience**: Builds never fail due to CMS unavailability
- ✅ **Graceful Degradation**: Shows skeletons/empty states instead of crashes
- ✅ **Centralized Logging**: All errors logged in one place for debugging
- ✅ **ISR Fallback**: Uses Incremental Static Regeneration when static generation fails
- ✅ **Clean Components**: No try/catch blocks cluttering component logic

## 📝 Content Management Workflow

### Adding New Content Types

Follow this workflow to add new content to your portfolio:

#### 1. Create PayloadCMS Collection or Global

**For Collections** (e.g., Blog Posts, Projects):
```typescript
// src/lib/payload/collections/BlogPosts.ts
import type { CollectionConfig } from 'payload';

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  labels: {
    singular: 'Blog Post',
    plural: 'Blog Posts',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAll],
    afterDelete: [revalidateAll],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
  ],
};
```

**For Globals** (e.g., About Section, Contact Info):
```typescript
// src/lib/payload/globals/About.ts
import type { GlobalConfig } from 'payload';
import { api } from '@/lib/graphql/server/Api';

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => api.revalidateAll()],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
  ],
};
```

#### 2. Register in Payload Config

Add your new collection/global to `src/payload.config.ts`:

```typescript
import { BlogPosts } from './lib/payload/collections';
import { About } from './lib/payload/globals';

export default buildConfig({
  collections: [
    // ...existing collections
    BlogPosts,
  ],
  globals: [
    // ...existing globals
    About,
  ],
  // ...rest of config
});
```

#### 3. Create GraphQL Query

Create a GraphQL query file:

```graphql
# src/lib/graphql/queries/getBlogPosts.graphql
query GetBlogPosts {
  BlogPosts {
    docs {
      id
      title
      content
      slug
      publishedAt
    }
  }
}

# src/lib/graphql/queries/getAbout.graphql
query GetAbout {
  About {
    title
    description
  }
}
```

#### 4. Run CodeGen

Generate TypeScript types from your GraphQL schema:

```bash
yarn codegen
```

This automatically generates:
- TypeScript types in `src/lib/graphql/__generated__/`
- Apollo hooks in `src/lib/graphql/__generated__/hooks.ts`

#### 5. Add to PayloadEntity Enum

Add your new entity to the enum in `src/lib/graphql/server/types.ts`:

```typescript
export enum PayloadEntity {
  // ...existing entities
  BlogPosts = 'blog-posts',
  About = 'about',
}
```

#### 6. Add Type Mappings and Extractors

Add type mappings and data extractors:

```typescript
// In PayloadFetchTypeMap
export type PayloadFetchTypeMap = {
  // ...existing mappings
  [PayloadEntity.BlogPosts]: {
    query: GetBlogPostsQuery;
    result: NonNullable<GetBlogPostsQuery['BlogPosts']>['docs'];
  };
  [PayloadEntity.About]: {
    query: GetAboutQuery;
    result: NonNullable<GetAboutQuery['About']>;
  };
};

// In PayloadFetchConfig
export const PayloadFetchConfig = {
  // ...existing configs
  [PayloadEntity.BlogPosts]: {
    document: GetBlogPostsDocument,
    extractData: (data: GetBlogPostsQuery) => {
      return data.BlogPosts?.docs ?? null;
    },
    tags: [PayloadEntity.BlogPosts],
  },
  
  [PayloadEntity.About]: {
    document: GetAboutDocument,
    extractData: (data: GetAboutQuery) => {
      return data.About ?? null;
    },
    tags: [PayloadEntity.About],
  },
};
```

#### 7. Create React Server Component

Create a component that uses the new data:

```typescript
// src/components/sections/BlogPosts/BlogPosts.rsc.tsx
import { Suspense } from 'react';
import { api, PayloadEntity } from '@/lib/graphql/server';
import { BlogPostsUI } from './BlogPosts.ui';
import { BlogPostsSkeleton } from './BlogPosts.skeleton';

async function BlogPostsServer() {
  const blogPosts = await api.get(PayloadEntity.BlogPosts);
  
  if (!blogPosts) {
    return <BlogPostsSkeleton />;
  }
  
  return <BlogPostsUI posts={blogPosts} />;
}

export default function BlogPosts() {
  return (
    <Suspense fallback={<BlogPostsSkeleton />}>
      <BlogPostsServer />
    </Suspense>
  );
}
```

#### 8. Update Payload Types

Generate updated Payload types:

```bash
yarn update
```

This runs:
- `payload generate:types` - Generates TypeScript types for Payload
- `payload generate:importmap` - Updates import maps

### 🎯 That's it! Your new content type is ready.

The system automatically handles:
- ✅ Type safety across the entire stack
- ✅ GraphQL schema generation
- ✅ Cache invalidation when content changes
- ✅ Server-side rendering with React Server Components
- ✅ Loading states and graceful error handling
- ✅ Build resilience during deployments

## 🛠️ Development Scripts

```bash
# Development
yarn dev                 # Start Next.js development server
yarn dev:codegen        # Start dev server + codegen watcher

# Code Generation
yarn codegen            # Generate GraphQL types once
yarn codegen:watch      # Watch for GraphQL changes

# Build & Deploy
yarn build              # Build for production
yarn start              # Start production server

# Code Quality
yarn format             # Format code with Biome
yarn precommit          # Lint and type check

# Payload CMS
yarn update             # Generate Payload types and import maps
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (frontend)/              # Frontend routes
│   ├── (payload)/               # Payload CMS admin
│   └── api/                     # API routes
├── components/
│   ├── sections/                # Page sections with RSC pattern
│   │   └── [Component]/
│   │       ├── Component.rsc.tsx    # Server Component
│   │       ├── Component.ui.tsx     # Client Component (UI)
│   │       ├── Component.skeleton.tsx # Loading skeleton
│   │       └── Component.utils.ts   # Utilities & types
│   ├── fragments/               # Reusable UI components
│   └── ui/                      # Base UI components (Radix + Tailwind)
├── lib/
│   ├── graphql/
│   │   ├── __generated__/       # Auto-generated GraphQL types
│   │   ├── queries/             # GraphQL query files
│   │   └── server/              # Server-side GraphQL utilities
│   ├── payload/
│   │   ├── collections/         # Payload collections
│   │   ├── globals/             # Payload globals
│   │   └── converters/          # Rich text converters
│   ├── apollo/                  # Apollo Client setup
│   └── config/                  # App configuration
└── payload.config.ts            # Payload CMS configuration
```

## 🚀 Deployment

This portfolio is optimized for Vercel deployment:

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Vercel automatically builds and deploys

The app uses:
- **Vercel Postgres** for the database
- **Vercel Blob Storage** for media files
- **ISR (Incremental Static Regeneration)** for optimal performance

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
# Database
POSTGRES_URL=your_postgres_connection_string

# Payload CMS
PAYLOAD_SECRET=your_payload_secret_key

# Storage
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token

# Optional
NEXT_PUBLIC_VERCEL_URL=your_domain
```

## 🤝 Contributing

1. Follow the content workflow above for new features
2. Run `yarn precommit` before committing
3. Use conventional commit messages
4. Ensure all types are properly generated with `yarn codegen`

---

**Built with ❤️ using Next.js, PayloadCMS, and TypeScript**
