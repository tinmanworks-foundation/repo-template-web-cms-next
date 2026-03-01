import type { ContentEntry, ContentQuery, ContentType } from './models';

export interface CmsAdapter {
  listContentTypes(): Promise<ContentType[]>;
  listEntries(type: string, query?: ContentQuery): Promise<ContentEntry[]>;
  getEntryBySlug(type: string, slug: string): Promise<ContentEntry | null>;
}
