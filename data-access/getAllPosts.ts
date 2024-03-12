import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { Locale, Post, PostForList } from 'utils/types';
import { POSTS_DIRECTORY_PATH } from 'utils/constants';

// 모든 포스트 데이터 가져오기
export const getAllPosts = (locale: Locale): PostForList[] => {
  const targetDirectoryPath = path.join(POSTS_DIRECTORY_PATH, locale);

  const postFileNames = fs
    .readdirSync(targetDirectoryPath)
    .filter((path) => /\.mdx?$/.test(path));

  return postFileNames.map((fileName) => {
    const source = fs.readFileSync(path.join(targetDirectoryPath, fileName))
    const { data } = matter(source);
    const { title, description, createdAt, category } = data as Post;

    return {
      title,
      description,
      createdAt,
      category,
      fileName: fileName.replace(/\.mdx?$/, "")
    }
  });
};
