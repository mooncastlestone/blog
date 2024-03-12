
import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { POSTS_DIRECTORY_PATH } from 'utils/constants';
import { Locale, Post, PostForDetail } from 'utils/types';
import { serialize } from 'next-mdx-remote/serialize';

// 포스트 상세 데이터 가져오기
export const getPostBySlug = async (slug: string, locale: Locale): Promise<PostForDetail> => {
  const targetDirectoryPath = path.join(POSTS_DIRECTORY_PATH, locale);

  const postfilePath = path.join(targetDirectoryPath, `${slug}.mdx`);
  const source = fs.readFileSync(postfilePath);

  const { content, data } = matter(source);

  const serializedContent = await serialize(content);
  const { title, category, createdAt } = data as Post;

  return {
    title,
    category,
    createdAt,
    content: serializedContent
  }
}