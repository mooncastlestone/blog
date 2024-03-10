'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

export function Post({ content }: { content: MDXRemoteProps }) {
  return <MDXRemote {...content} />;
}