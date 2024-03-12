'use client';

import classNames from 'classnames/bind';
import style from "./index.module.scss";
import { MDXRemote } from 'next-mdx-remote';
import { PostForDetail } from 'utils/types';

const cx = classNames.bind(style);

type PostDetailProps = PostForDetail;

export function PostDetail({ title, category, createdAt, content }: PostDetailProps) {
  return (
    <main className={cx("container")}>
      <header className={cx("header")}>
        <h1 className={cx("title")}>{title}</h1>
        <div className={cx("headerSubInfo")}>
          <span className={cx("author")}>Seongseok Moon</span>
          <span className={cx("createdAt")}>Feb 11, 2024</span>
        </div>
      </header>
      <section className={cx("markdown")}>
        <MDXRemote {...content} />
      </section>
    </main>
  );
}