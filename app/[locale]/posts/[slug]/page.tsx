import { PostDetail } from 'components/PostDetail';
import { getPostBySlug } from 'data-access';
import { getCurrentLocale } from 'locales/server';
import { serialize } from "next-mdx-remote/serialize";

type PostPageProps = {
  params: {
    slug: string;
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const locale = getCurrentLocale();
  const { title, description, content } = getPostBySlug(decodeURIComponent(params.slug), locale);
  const serializedContent = await serialize(content);

  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
      <PostDetail content={serializedContent} />
    </main>
  );
}