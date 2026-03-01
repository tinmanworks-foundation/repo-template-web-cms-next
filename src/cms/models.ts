export type ContentType = {
  id: string;
  label: string;
};

export type MediaAsset = {
  id: string;
  url: string;
  mimeType: string;
  filename: string;
};

export type ContentBlock = {
  id: string;
  kind: 'text' | 'markdown' | 'embed' | 'media';
  value: string;
};

export type ContentEntry = {
  id: string;
  type: string;
  slug: string;
  title: string;
  summary: string;
  blocks: ContentBlock[];
  assets: MediaAsset[];
  publishedAt: string;
};

export type ContentQuery = {
  limit?: number;
  offset?: number;
};
