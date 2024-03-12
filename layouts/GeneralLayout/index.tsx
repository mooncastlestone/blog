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
    </main>
  );
};
