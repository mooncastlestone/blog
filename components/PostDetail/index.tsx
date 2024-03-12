'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

export function PostDetail({ content }: { content: MDXRemoteProps }) {
  return <MDXRemote {...content} />;
}