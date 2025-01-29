import { Metadata } from 'next';
import { Suspense } from 'react';
import { PageContainer } from '@/components/ui/page-container';
import { Alert } from '@/components/ui/alert';

interface PageProps {
  params: {
    slug: string;
  };
}

// Simulate data fetching
async function getData(slug: string) {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    title: `Content for ${slug}`,
    description: `This is the content for ${slug}`,
    created: Date.now() / 1000,
    author: 'testuser',
  };
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const data = await getData(params.slug);
  
  const title = `${data.title} - Site Name`;
  const description = data.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: new Date(data.created * 1000).toISOString(),
      authors: [data.author],
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

async function Content({ slug }: { slug: string }) {
  const data = await getData(slug);

  return (
    <article className="prose lg:prose-xl">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className="mt-4 text-sm text-gray-500">
        Posted by {data.author} on {new Date(data.created * 1000).toLocaleDateString()}
      </div>
    </article>
  );
}

export default async function Page({ params }: PageProps) {
  try {
    return (
      <PageContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Content slug={params.slug} />
        </Suspense>
      </PageContainer>
    );
  } catch (error) {
    return (
      <PageContainer>
        <Alert variant="destructive">
          {error instanceof Error ? error.message : 'An error occurred'}
        </Alert>
      </PageContainer>
    );
  }
}