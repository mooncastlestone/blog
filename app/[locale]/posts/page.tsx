import styles from './index.module.scss';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { getAllPosts } from 'data-access';
import { getCurrentLocale } from 'locales/server';

const cx = classNames.bind(styles);

export default function PostsPage() {
  const locale = getCurrentLocale();
  const posts = getAllPosts(locale);

  return (
    <ul className={cx("list")}>
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
    </ul>
  )
}