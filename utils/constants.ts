import path from "path";
import { Language } from './types';

export const POSTS_DIRECTORY_PATH = path.join(process.cwd(), "posts");

export const LANGUAGES: Language[] = [
  {
    code: 'ko',
    text: '한글'
  },
  {
    code: 'en',
    text: 'English'

  }
];