export type Post = {
  title: string;
  description: string;
}

export type PostForList = Post & {
  fileName: string;
}

export type PostForDetail = Post & {
  content: string;
}

export type Locale = 'ko' | 'en';