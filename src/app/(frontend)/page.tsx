import { Hero, ContactForm } from '@/components/sections';
import { Navbar } from '@/components/ui';

export default async function HomePage() {
  return (
    <div className="home bg-background min-h-screen flex flex-col @container">
      <Navbar />
      <Hero />
      <ContactForm />
    </div>
  );
}
