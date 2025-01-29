import { PageContainer } from '@/components/ui/page-container';
import Link from 'next/link';

export default function Home() {
  return (
    <PageContainer>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Example Pages</h1>
        <div className="grid gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Link
              key={i}
              href={`/page-${i}`}
              className="block p-4 rounded-lg border hover:border-primary"
            >
              Example Page {i}
            </Link>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}