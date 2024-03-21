'use client';

import classNames from 'classnames/bind';
import style from "./index.module.scss";
import { MDXRemote } from 'next-mdx-remote';
import { PostForDetail } from 'utils/types';
import Link from 'next/link';
import { useCurrentLocale, useScopedI18n } from 'locales/client';

const cx = classNames.bind(style);

type PostDetailProps = PostForDetail;

export function PostDetail({ title, category, createdAt, content }: PostDetailProps) {
  const scopedT = useScopedI18n("postDetail");
  const currentLocale = useCurrentLocale();

  return (
    <main className={cx(["container", currentLocale])}>
      <header className={cx("header")}>
        <span className={cx("category")}>{category}</span>
        <h1 className={cx("title")}>{title}</h1>
        <div className={cx("headerSubInfo")}>
          <Link href="/" className={cx("author")}>{scopedT("headerSubInfo.author")}</Link>
          <span className={cx("createdAt")}>{createdAt}</span>
        </div>
      </header>
      <section className={cx("markdown")}>
        <MDXRemote {...content} />
      </section>
    </main>
  );
}