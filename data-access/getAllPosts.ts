import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { Locale, PostForList } from 'utils/types';
import { POSTS_DIRECTORY_PATH } from 'utils/constants';
import { formatDate } from 'utils/formatDate';

// 모든 포스트 데이터 가져오기
export const getAllPosts = (locale: Locale): PostForList[] => {
  const targetDirectoryPath = path.join(POSTS_DIRECTORY_PATH, locale);

  const postFileNames = fs
    .readdirSync(targetDirectoryPath)
    .filter((path) => /\.mdx?$/.test(path));

  const mappedPosts = postFileNames.map((fileName) => {
    const source = fs.readFileSync(path.join(targetDirectoryPath, fileName))
    const { data } = matter(source);
    const { title, description, createdAt, category, thumbnailUrl, published } = data as PostForList;

    return {
      title,
      description,
      category,
      thumbnailUrl,
      published,
      createdAt: formatDate(new Date(createdAt), locale),
      fileName: fileName.replace(/\.mdx?$/, ""),
    }
  });

  return mappedPosts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
};
