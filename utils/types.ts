import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  title: string;
  description: string;
  category: string;
  createdAt: string;
  thumbnailUrl: string;
}

export type PostForList = Post & {
  fileName: string;
  published: boolean;
}

export type PostForDetail = Post & {
  content: MDXRemoteSerializeResult;
}

export type Locale = 'ko' | 'en';

export type Language = {
  code: Locale;
  text: string;
}