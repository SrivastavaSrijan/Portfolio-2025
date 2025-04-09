import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: "Srijan Srivastava's portfolio - case studies, blogs, projects and more.",
  title: 'Srijan / Frontend',
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
};
