import { format } from 'date-fns';
import { enUS, ko } from 'date-fns/locale';
import { Locale } from './types';

const FORMAT_STRINGS = {
  en: "MMM d, yyyy",
  ko: "yyyy년 M월 d일"
} as const;

const FORMAT_OPTIONS = {
  en: { locale: enUS },
  ko: { locale: ko }
} as const;

export const formatDate = (date: Date, locale: Locale) => {
  return format(date, FORMAT_STRINGS[locale], FORMAT_OPTIONS[locale]);
}