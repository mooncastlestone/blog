
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POSTS_PATH, postFilePaths } from 'utils/markdown'
import Link from 'next/link';

export default function PostsPage() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath
    }
  });

  return (
    <div>
      <h1>PostsPage</h1>
      {posts.map((post) => (
        <li key={post.filePath}>
          <Link
            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            {post.data.title}
          </Link>
        </li>
      ))}
    </div>
  )
}