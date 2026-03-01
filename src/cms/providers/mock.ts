import type { CmsAdapter } from '../adapter';
import type { ContentEntry, ContentType } from '../models';

const contentTypes: ContentType[] = [
  { id: 'article', label: 'Article' },
  { id: 'note', label: 'Note' }
];

const entries: ContentEntry[] = [
  {
    id: 'entry-001',
    type: 'article',
    slug: 'entry-001',
    title: 'Entry 001',
    summary: 'Neutral sample entry.',
    blocks: [{ id: 'block-1', kind: 'text', value: 'Sample content block.' }],
    assets: [],
    publishedAt: '2026-03-01T00:00:00Z'
  }
];

export class MockCmsAdapter implements CmsAdapter {
  async listContentTypes(): Promise<ContentType[]> {
    return contentTypes;
  }

  async listEntries(type: string): Promise<ContentEntry[]> {
    return entries.filter((entry) => entry.type === type);
  }

  async getEntryBySlug(type: string, slug: string): Promise<ContentEntry | null> {
    return entries.find((entry) => entry.type === type && entry.slug === slug) ?? null;
  }
}
