"use client";

import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Image from 'next/image';
import darkModeIcon from "public/icons/moon.svg"
import Link from 'next/link';
import { useChangeLocale, useCurrentLocale } from 'locales/client';
import { LanguageSelector } from '../LanguageSelector';
import { Locale } from 'utils/types';

const cx = classNames.bind(styles);

export const Navigation = () => {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

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
          <Link href="/posts">기록소</Link>
        </li>
        <li className={cx("menuListItem")}>
          <Link href="/posts">작업실</Link>
        </li>
      </ul>
      <aside>
        <ul className={cx("asideList")}>
          <li className={cx("asideListItem")}>
            <LanguageSelector onSelect={handleLanguageSelect} />
          </li>
          <li className={cx("asideListItem")}>
            <button className={cx("changeThemeButton")}>
              <Image src={darkModeIcon} alt="moon" fill />
            </button>
          </li>
        </ul>
      </aside>
    </nav>
  )
}