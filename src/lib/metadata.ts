import type { Metadata } from 'next';

type MetadataProps = {
  title: string;
  metadata?: Omit<Metadata, 'title'>;
};

export function generatePageMetadata({
  title,
  metadata = {},
}: MetadataProps): Metadata {
  return {
    title,
    ...metadata,
  };
}