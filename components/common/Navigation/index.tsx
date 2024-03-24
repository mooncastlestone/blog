"use client";

import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Link from 'next/link';
import { useChangeLocale, useCurrentLocale, useScopedI18n } from 'locales/client';
import { LanguageSelector } from '../LanguageSelector';
import { Locale } from 'utils/types';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);

export const Navigation = () => {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const pathname = usePathname();

  const scopedT = useScopedI18n("navigation");

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
          <Link href="/posts" className={cx(pathname.includes("/posts") && "active")}>{scopedT("menuListItem.posts")}</Link>
        </li>
        <li className={cx("menuListItem")}>
          <Link href="/" className={cx(pathname.includes("/lab") && "active", "disabled")}>{scopedT("menuListItem.lab")}</Link>
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