"use client";

import classNames from 'classnames/bind';
import Iframe from "react-iframe";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface CodepenProps {
  slug: string;
}

export const Codepen = ({ slug }: CodepenProps) => {
  return (
    <div className={cx("container")}>
      <Iframe
        url={`https://codepen.io/mooon3356/embed/${slug}?default-tab=result&editable=true&theme-id=dark`}
        width="100%"
        height="450px"
        loading="lazy"
        display="initial"
        position="relative"
        allowFullScreen={true}
      />
    </div>
  );
};
