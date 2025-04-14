import './tailwind.css';
import { ApolloWrapper, ProgressProviderClient } from '@/components/context';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from '@/components/ui';
import { Navbar } from '@/components/fragments';
import { Footer } from '@/components/sections';
import { createMetadata, defaultMetadata } from '@/lib/config/metadata';

export const metadata = createMetadata(defaultMetadata);
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" className="dark">
      <body>
        <ProgressProviderClient>
          <ApolloWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <SpeedInsights />
            <Toaster position="top-right" />
          </ApolloWrapper>
        </ProgressProviderClient>
      </body>
    </html>
  );
}
