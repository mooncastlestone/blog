import fs from "fs";
import matter from 'gray-matter';
import path from "path";

// Get the path to the posts directory
export const POSTS_PATH = path.join(process.cwd(), "posts");

// Get all post file names
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));


export const getPostBySlug = (slug: string) => {
  const postfilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postfilePath);

  const { content, data } = matter(source);

  return {
    content,
    data: data as {
      title: string;
      description: string;
    }
  }
}