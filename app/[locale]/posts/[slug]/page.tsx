import { PostDetail } from 'components/posts/PostDetail';
import { getPostBySlug } from 'data-access';
import { Metadata } from 'next';
import { Locale } from 'utils/types';

type PostPageProps = {
  params: {
    slug: string;
    locale: Locale;
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug, locale } = params;

  const post = await getPostBySlug(decodeURIComponent(slug), locale);

  return <PostDetail {...post} />
}

export async function generateMetadata(
  { params }: PostPageProps,
): Promise<Metadata> {
  const { slug, locale } = params;

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