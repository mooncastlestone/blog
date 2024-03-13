import RootLayout from 'app/layout';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { getAllPosts } from 'data-access';
import { getCurrentLocale } from 'locales/server';
import { GeneralLayout } from 'layouts/GeneralLayout';
import { PostListItem } from 'components/posts/PostListItem';

const cx = classNames.bind(styles);

export default function PostsPage() {
  const locale = getCurrentLocale();
  const posts = getAllPosts(locale);

  return (
    <GeneralLayout>
      <ul className={cx("list")}>
        {posts.map((post) => {
          return ((
            <PostListItem key={post.fileName}  {...post} />
          ))
        })}
      </ul >
    </GeneralLayout>
  )
}