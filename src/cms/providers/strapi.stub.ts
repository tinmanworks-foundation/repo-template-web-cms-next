import type { CmsAdapter } from '../adapter';
import type { ContentEntry, ContentQuery, ContentType } from '../models';

export class StrapiStubAdapter implements CmsAdapter {
  async listContentTypes(): Promise<ContentType[]> {
    return [];
  }
  async listEntries(_type: string, _query?: ContentQuery): Promise<ContentEntry[]> {
    void _type;
    void _query;
    return [];
  }
  async getEntryBySlug(_type: string, _slug: string): Promise<ContentEntry | null> {
    void _type;
    void _slug;
    return null;
  }
}
