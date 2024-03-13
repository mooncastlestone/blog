"use client";

import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Link from 'next/link';
import { useChangeLocale, useCurrentLocale } from 'locales/client';
import { LanguageSelector } from '../LanguageSelector';
import { Locale } from 'utils/types';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);

export const Navigation = () => {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const pathname = usePathname();

  const handleLanguageSelect = (selectedLocale: Locale) => {
    if (selectedLocale === currentLocale) {
      return;
    }

    changeLocale(selectedLocale);
  }

  return (
    <nav className={cx("container")}>
      <ul className={cx("menuList")}>
        <li className={cx("menuListItem")}>
          <Link href="/posts" className={cx((pathname === "/posts" || pathname === "/en/posts") && "active")}>기록소</Link>
        </li>
        <li className={cx("menuListItem")}>
          <Link href="/" className={cx(pathname === "/lab" && "active", "disabled")}>작업실</Link>
        </li>
      </ul>
      <aside>
        <ul className={cx("asideList")}>
          <li className={cx("asideListItem")}>
            <LanguageSelector onSelect={handleLanguageSelect} />
          </li>
        </ul>
      </aside>
    </nav>
  )
}