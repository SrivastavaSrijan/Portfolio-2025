import './tailwind.css';
import { ApolloWrapper } from '@/components/context';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { metadata as importedMeta } from '@/lib/config/metadata';
import { Toaster } from '@/components/ui';
import { Navbar } from '@/components/fragments';

export const metadata = importedMeta;
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" className="dark">
      <body>
        <ApolloWrapper>
          <Navbar />
          <main>{children}</main>
          <SpeedInsights />
          <Toaster position="top-right" />
        </ApolloWrapper>
      </body>
    </html>
  );
}
