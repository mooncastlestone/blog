import { Post } from 'components/Post';
import { getPostBySlug } from 'data-access';
import { serialize } from "next-mdx-remote/serialize";

type PostPageProps = {
  params: {
    slug: string;
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { title, description, content } = getPostBySlug(decodeURIComponent(params.slug));
  const serializedContent = await serialize(content);

  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
      <Post content={serializedContent} />
    </main>
  );
}