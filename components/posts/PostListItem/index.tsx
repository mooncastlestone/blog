import styles from "./index.module.scss"
import classNames from 'classnames/bind';
import Link from 'next/link';
import { PostForList } from 'utils/types';

const cx = classNames.bind(styles);

type PostListItemProps = PostForList;

export const PostListItem = ({ title, description, fileName, category, createdAt }: PostListItemProps) => {

  return (
    <li className={cx("container")}>
      <span className={cx("hashtag")}>{category}</span>
      <Link href={`/posts/${fileName}`} className={cx("headlineGroup")}>
        <h1 className={cx("title")}>{title}</h1>
        <p className={cx("description")}>{description}</p>
      </Link>
      <span className={cx('createdAt')}>2024년 3월 11일</span>
    </li>
  )
}