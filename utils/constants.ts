import path from "path";
import { Language } from './types';

export const POSTS_DIRECTORY_PATH = path.join(process.cwd(), "posts");

export const LANGUAGES: Language[] = [
  {
    code: 'ko',
    text: '한국어'
  },
  {
    code: 'en',
    text: 'English'

  }
];

export const TITLES = {
  ko: "기록소",
  en: "Programmer's Log",
} as const;

export const DESCRIPTIONS = {
  ko: "소프트웨어 개발과 독서를 통해 지속적인 발전을 추구하며, 다양한 주제에 대해 고민하는 블로그입니다.",
  en: "Exploring personal growth and sharing insights from the journey as a software engineer on my blog.",
} as const;

export const AUTHORS = {
  ko: "문성석",
  en: "Seongseok Moon",
} as const;

export const GA_TRACKING_ID = "G-1SBFZCNRDM";