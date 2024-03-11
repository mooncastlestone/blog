import Link from 'next/link';
import { getAllPosts } from 'data-access';
import { getCurrentLocale } from 'locales/server';
import { ChangeLocaleButton } from 'components/ChangeLocaleButton';

export default function PostsPage() {
  const locale = getCurrentLocale();
  const posts = getAllPosts(locale);

  return (
    <div>
      <h1>PostsPage</h1>
      <ChangeLocaleButton />

      {posts.map((post) => {
        const { title, description, fileName } = post;
        return ((
          <li key={fileName}>
            <Link href={`/posts/${fileName}`}
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