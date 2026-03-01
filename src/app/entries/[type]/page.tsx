import Link from 'next/link';
import { createCmsAdapter } from '@/cms/client';

type Props = { params: Promise<{ type: string }> };

export default async function EntryTypePage({ params }: Props) {
  const { type } = await params;
  const adapter = createCmsAdapter(process.env.CMS_PROVIDER);
  const entries = await adapter.listEntries(type);

  return (
    <main>
      <h1>Entries: {type}</h1>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <Link href={`/entries/${entry.type}/${entry.slug}`}>{entry.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
