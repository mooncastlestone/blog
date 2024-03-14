import { format } from 'date-fns';
import { Locale } from './types';

const FORMAT_STRINGS = {
  en: "MMM d, yyyy",
  ko: "yyyy년 M월 d일"
} as const;

export const formatDate = (date: Date, locale: Locale) => {
  return format(date, FORMAT_STRINGS[locale]);
}