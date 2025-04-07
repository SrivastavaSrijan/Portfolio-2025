import { Button } from '@/components/ui/button';

export default async function HomePage() {
  return (
    <div className="home bg-black-700 min-h-screen flex flex-col @container">
      <div>
        <h1 className="text-display-1 text-brand px-5">My Website</h1>
        <Button>Hello</Button>
      </div>
    </div>
  );
}
