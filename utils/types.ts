import { MDXRemoteProps } from 'next-mdx-remote';

export type Post = {
  title: string;
  category: string;
  createdAt: string;
}

export type PostForList = Post & {
  description: string;
  fileName: string;
}

export type PostForDetail = Post & {
  content: MDXRemoteProps;
}

export type Locale = 'ko' | 'en';