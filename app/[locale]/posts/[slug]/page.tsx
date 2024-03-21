import { PostDetail } from 'components/posts/PostDetail';
import { getPostBySlug } from 'data-access';
import { Metadata } from 'next';
import path from 'path';
import { POSTS_DIRECTORY_PATH } from 'utils/constants';
import { Locale } from 'utils/types';
import fs from 'fs';

type PostPageProps = {
  params: {
    slug: string;
    locale: Locale;
  }
}

export async function generateStaticParams() {
  const directoryPaths = {
    ko: path.join(POSTS_DIRECTORY_PATH, 'ko'),
    en: path.join(POSTS_DIRECTORY_PATH, 'en'),
  }

  const fileNames = {
    ko: fs.readdirSync(directoryPaths.ko),
    en: fs.readdirSync(directoryPaths.en),
  }

  return [
    ...fileNames.ko.map((fileName) => ({ slug: fileName.replace(/\.mdx?$/, "") })),
    ...fileNames.en.map((fileName) => ({ slug: fileName.replace(/\.mdx?$/, "") })),
  ]
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug, locale } = params;

  let pattern = /[\uAC00-\uD7A3]/;

  if (locale === "ko" && !pattern.test(decodeURIComponent(slug))) {
    return <></>
  }

  if (locale === "en" && pattern.test(decodeURIComponent(slug))) {
    return <></>
  }

  const post = await getPostBySlug(decodeURIComponent(slug), locale);

  return <PostDetail {...post} />
}

export async function generateMetadata(
  { params }: PostPageProps,
): Promise<Metadata> {
  const { slug, locale } = params;

  let pattern = /[\uAC00-\uD7A3]/;

  if (locale === "ko" && !pattern.test(decodeURIComponent(slug))) {
    return {}
  }

  if (locale === "en" && pattern.test(decodeURIComponent(slug))) {
    return {}
  }

  const post = await getPostBySlug(decodeURIComponent(slug), locale);

  const { title, description, thumbnailUrl } = post;

  return {
    title,
    description,
    authors: [{ name: "Moon.log" }],
    openGraph: {
      images: [
        {
          url: thumbnailUrl,
        }
      ]
    }
  }
}