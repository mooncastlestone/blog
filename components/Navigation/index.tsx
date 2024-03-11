"use client";

import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Image from 'next/image';
import languageIcon from "public/icons/language.svg"
import darkModeIcon from "public/icons/moon.svg"
import Link from 'next/link';

const cx = classNames.bind(styles);


export const Navigation = () => {
  return (
    <nav className={cx("container")}>
      <ul className={cx("menuList")}>
        <li className={cx("menuListItem")}>
          <Link href="/posts">기록소</Link>
        </li>
        <li className={cx("menuListItem")}>
          <Link href="/posts">작업실</Link>
        </li>
      </ul>
      <aside>
        <ul className={cx("asideList")}>
          <li className={cx("asideListItem")}>
            <button>
              <Image src={languageIcon} alt="globe" fill />
            </button>
          </li>
          <li className={cx("asideListItem")}>
            <button>
              <Image src={darkModeIcon} alt="moon" fill />
            </button>
          </li>
        </ul>
      </aside>
    </nav>
  )
}