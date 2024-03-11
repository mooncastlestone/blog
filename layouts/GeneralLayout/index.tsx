import { ReactNode } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames/bind';
import Image from 'next/image';
import logo from "public/images/logo_black.png"
import { Navigation } from 'components/Navigation';

const cx = classnames.bind(styles);

interface GeneralLayoutProps {
  children: ReactNode;
}

export const GeneralLayout = ({ children }: GeneralLayoutProps) => {
  return (
    <main className={cx('container')}>
      <section className={cx("inner")}>
        <div className={cx("logoWrapper")}>
          <Image src={logo} alt="logo" layout="fill" />
        </div>
        <Navigation />
      </section>
      {children}
    </main>
  );
};
