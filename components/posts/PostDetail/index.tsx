'use client';

import classNames from 'classnames/bind';
import style from "./index.module.scss";
import { MDXRemote } from 'next-mdx-remote';
import { PostForDetail } from 'utils/types';
import Link from 'next/link';

const cx = classNames.bind(style);

type PostDetailProps = PostForDetail;

export function PostDetail({ title, category, createdAt, content }: PostDetailProps) {
  return (
    <main className={cx("container")}>
      <header className={cx("header")}>
        <span className={cx("category")}>{category}</span>
        <h1 className={cx("title")}>{title}</h1>
        <div className={cx("headerSubInfo")}>
          <Link href="/" className={cx("author")}>문성석</Link>
          <span className={cx("createdAt")}>{createdAt}</span>
        </div>
      </header>
      <section className={cx("markdown")}>
        <MDXRemote {...content} />
      </section>
    </main>
  );
}