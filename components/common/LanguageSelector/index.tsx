import { useState, useRef, useEffect } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import languageIcon from "public/icons/language.svg";
import classNames from 'classnames/bind';
import { LANGUAGES } from 'utils/constants';
import { Locale } from 'utils/types';
import { useOutsideClick } from 'hooks';

const cx = classNames.bind(styles);

type LanguageSelectorProps = {
  onSelect: (selectedLocale: Locale) => void;
};

export const LanguageSelector = ({ onSelect }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectItem = (selectedLocale: Locale) => {
    onSelect(selectedLocale);
    setIsOpen(false);
  }

  useOutsideClick(toggleButtonRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={toggleButtonRef} className={cx("container")}>
      <button onClick={handleButtonClick} className={cx("toggleButton")}>
        <Image src={languageIcon} alt="language" fill />
      </button>
      {isOpen && (
        <ul className={cx("list")}>
          {LANGUAGES.map((language) => {
            const { code, text } = language;
            return (
              <li
                key={code}
              >
                <button onClick={() => handleSelectItem(code)} className={cx("item")}>
                  {text}
                </button>
              </li>
            )
          })}
        </ul>
      )
      }
    </div >
  );
};
