import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { Post, PostForList } from 'utils/types';
import { POSTS_DIRECTORY_PATH } from 'utils/constants';

// 모든 포스트 데이터 가져오기
export const getAllPosts = (): PostForList[] => {
  const postFileNames = fs
    .readdirSync(POSTS_DIRECTORY_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  return postFileNames.map((fileName) => {
    const source = fs.readFileSync(path.join(POSTS_DIRECTORY_PATH, fileName))
    const { data } = matter(source);
    const { title, description } = data as Post;

    return {
      title,
      description,
      fileName: fileName.replace(/\.mdx?$/, "")
    }
  });
};
