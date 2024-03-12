"use client";

import { useChangeLocale, useCurrentLocale } from 'locales/client';

export const ChangeLocaleButton = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleButtonClick = () => {
    changeLocale(locale === 'ko' ? 'en' : 'ko');
  }

  return (
    <button onClick={handleButtonClick}>버튼</button>
  )
}