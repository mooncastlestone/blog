
import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { POSTS_DIRECTORY_PATH } from 'utils/constants';
import { Locale, Post, PostForDetail } from 'utils/types';
import { formatDate } from 'utils/formatDate';
import { serializeMdx } from 'lib/markdown';

// 포스트 상세 데이터 가져오기
export const getPostBySlug = async (slug: string, locale: Locale): Promise<PostForDetail> => {
  const targetDirectoryPath = path.join(POSTS_DIRECTORY_PATH, locale);

  const postfilePath = path.join(targetDirectoryPath, `${slug}.mdx`);
  const source = fs.readFileSync(postfilePath);

  const { content, data } = matter(source);

  const serializedContent = await serializeMdx(content);
  const { title, description, category, createdAt, thumbnailUrl } = data as Post;

  return {
    title,
    description,
    category,
    thumbnailUrl,
    createdAt: formatDate(new Date(createdAt), locale),
    content: serializedContent
  }
}