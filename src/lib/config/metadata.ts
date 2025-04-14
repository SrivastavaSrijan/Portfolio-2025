import type { Metadata } from 'next';
import { AssetsMap } from '../assets';
import type { GetHeroMetaQuery } from '../graphql/__generated__/hooks';
import type { WithFlexibleTypename } from '../utils';

export const defaultMetadata = {
  title: 'Srijan / Frontend',
  description: 'Srijan is a frontend engineer who loves to build passionately and with conviction.',
  image: { url: AssetsMap.RemoteImages.Preview },
  __typename: 'Meta',
};

// Apply the utility type to the GraphQL generated type
type MetadataPayload = WithFlexibleTypename<NonNullable<GetHeroMetaQuery['Hero']>['meta']>;

export const createMetadata = (data: MetadataPayload) => {
  const {
    title: remoteTitle = null,
    description: remoteDesc = null,
    image: remoteImage = {},
    // __typename can now be any string
  } = data ?? {};
  const title = remoteTitle ?? defaultMetadata.title;
  const description = remoteDesc ?? defaultMetadata.description;
  const image = remoteImage?.url ?? defaultMetadata.image.url;

  const metadata = {
    icons: {
      icon: [
        {
          url: '/assets/favicons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/assets/favicons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/assets/favicons/favicon.ico',
          sizes: 'any',
        },
      ],
      apple: {
        url: '/assets/favicons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      other: [
        {
          rel: 'android-chrome-192x192',
          url: '/assets/favicons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          rel: 'android-chrome-512x512',
          url: '/assets/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          rel: 'manifest',
          url: '/assets/favicons/site.webmanifest',
        },
      ],
    },
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.srijansrivastava.com',
      title: title,
      description: description,
      siteName: title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Srijan / Frontend',
      description: description,
      images: [image],
      creator: '@yourTwitterHandle',
    },
  } satisfies Metadata;
  return metadata;
};
