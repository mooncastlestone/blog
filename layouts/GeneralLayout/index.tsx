import { ReactNode } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames/bind';
import Image from 'next/image';
import logo from "public/images/logo_black.png"
import { Navigation } from 'components/common/Navigation';

const cx = classnames.bind(styles);

interface GeneralLayoutProps {
  children: ReactNode;
  hasNavigation?: boolean;
}

export const GeneralLayout = ({ children, hasNavigation = true }: GeneralLayoutProps) => {
  return (
    <main className={cx('container')}>
      <header className={cx("header")}>
        <div className={cx("logoWrapper")}>
          <Image src={logo} alt="logo" layout="fill" />
        </div>
        {hasNavigation && <Navigation />}
      </header>
      {children}
      <footer className={cx("footer")}>
        <p>Copyright 2024. <a href="https://github.com/mooon3356" target="_blank" className={cx("githubId")}>@mooon3356</a> all rights reserved.</p>
      </footer>
    </main>
  );
};
