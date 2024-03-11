
import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { POSTS_DIRECTORY_PATH } from 'utils/constants';
import { Post, PostForDetail } from 'utils/types';

// 포스트 상세 데이터 가져오기
export const getPostBySlug = (slug: string): PostForDetail => {
  const postfilePath = path.join(POSTS_DIRECTORY_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postfilePath);

  const { content, data } = matter(source);
  const { title, description } = data as Post;

  return {
    title,
    description,
    content,
  }
}