import { PostDetail } from 'components/posts/PostDetail';
import { getPostBySlug } from 'data-access';
import { getCurrentLocale } from 'locales/server';

type PostPageProps = {
  params: {
    slug: string;
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const locale = getCurrentLocale();
  const post = await getPostBySlug(decodeURIComponent(params.slug), locale);

  return <PostDetail {...post} />
}