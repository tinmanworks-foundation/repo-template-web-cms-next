import type { CmsAdapter } from './adapter';
import { MockCmsAdapter } from './providers/mock';
import { PayloadStubAdapter } from './providers/payload.stub';
import { StrapiStubAdapter } from './providers/strapi.stub';

export function createCmsAdapter(provider: string | undefined): CmsAdapter {
  switch (provider) {
    case 'strapi':
      return new StrapiStubAdapter();
    case 'payload':
      return new PayloadStubAdapter();
    case 'mock':
    default:
      return new MockCmsAdapter();
  }
}
