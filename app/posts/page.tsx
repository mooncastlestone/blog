import Link from 'next/link';
import { getAllPosts } from 'data-access';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>PostsPage</h1>
      {posts.map((post) => {
        const { title, description, fileName } = post;
        return ((
          <li key={fileName}>
            <Link
              href={`/posts/${fileName}`}
            >
              {title}
            </Link>
            <p>{description}</p>
          </li>
        ))
      })}
    </div>
  )
}