import { notFound } from 'next/navigation';
import { createCmsAdapter } from '@/cms/client';

type Props = { params: Promise<{ type: string; slug: string }> };

export default async function EntryPage({ params }: Props) {
  const { type, slug } = await params;
  const adapter = createCmsAdapter(process.env.CMS_PROVIDER);
  const entry = await adapter.getEntryBySlug(type, slug);

  if (!entry) {
    notFound();
  }

  return (
    <main>
      <h1>{entry.title}</h1>
      <p>{entry.summary}</p>
      {entry.blocks.map((block) => (
        <section key={block.id}>
          <h2>{block.kind}</h2>
          <p>{block.value}</p>
        </section>
      ))}
    </main>
  );
}
