
import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { POSTS_DIRECTORY_PATH } from 'utils/constants';
import { Locale, Post, PostForDetail } from 'utils/types';

// 포스트 상세 데이터 가져오기
export const getPostBySlug = (slug: string, locale: Locale): PostForDetail => {
  const targetDirectoryPath = path.join(POSTS_DIRECTORY_PATH, locale);

  const postfilePath = path.join(targetDirectoryPath, `${slug}.mdx`);
  const source = fs.readFileSync(postfilePath);

  const { content, data } = matter(source);
  const { title, description, category, createdAt } = data as Post;

  return {
    title,
    description,
    category,
    createdAt,
    content,
  }
}