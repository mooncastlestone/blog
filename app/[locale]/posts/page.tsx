import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { getAllPosts } from 'data-access';
import { getCurrentLocale } from 'locales/server';
import Link from 'next/link';

const cx = classNames.bind(styles);

export default function PostsPage() {
  const locale = getCurrentLocale();
  const posts = getAllPosts(locale);

  return (
    <ul className={cx("list")}>
      {posts.map((post) => {
        const { title, description, fileName, category, createdAt } = post;
        return ((
          <li key={fileName} className={cx("item")}>
            <Link href={`/posts/${fileName}`} className={cx("itemHeadlineGroup")}>
              <h1 className={cx("itemTitle")}>{title}</h1>
              <p className={cx("itemDescription")}>{description}</p>
            </Link>
            <span className={cx("itemHashtag")}>{category}</span>
            <span className={cx('itemCreatedAt')}>Jan 11, 2024</span>
          </li>
        ))
      })}
    </ul >
  )
}