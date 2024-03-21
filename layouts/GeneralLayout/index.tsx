import { ReactNode } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames/bind';
import Image from 'next/image';
import logo from "public/images/logo.png"
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
          <Image src={logo} alt="logo" fill />
        </div>
        {hasNavigation && <Navigation />}
      </header>
      {children}
      <footer className={cx("footer")}>
        <p>Copyright 2024. <a href="https://github.com/mooncastlestone" target="_blank" className={cx("githubId")}>@mooncastlestone</a> all rights reserved.</p>
      </footer>
    </main>
  );
};
