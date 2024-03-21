"use client";

import styles from "./index.module.scss"
import classNames from 'classnames/bind';
import Link from 'next/link';
import { PostForList } from 'utils/types';
import { useCurrentLocale } from 'locales/client';

const cx = classNames.bind(styles);

type PostListItemProps = PostForList;

export const PostListItem = ({ title, description, fileName, category, createdAt }: PostListItemProps) => {
  const currentLocale = useCurrentLocale();

  return (
    <li className={cx(["container", currentLocale])}>
      <span className={cx("category")}>{category}</span>
      <Link href={`/posts/${fileName}`} className={cx("headlineGroup")}>
        <h1 className={cx("title")}>{title}</h1>
        <p className={cx("description")}>{description}</p>
      </Link>
      <span className={cx('createdAt')}>{createdAt}</span>
    </li>
  )
}