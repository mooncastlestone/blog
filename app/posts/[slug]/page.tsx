import { Post } from 'app/components/Post';
import { serialize } from "next-mdx-remote/serialize";
import { getPostBySlug } from "utils/markdown";

type PostPageProps = {
  params: {
    slug: string;
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { content, data } = getPostBySlug(params.slug);
  const serializedContent = await serialize(content);

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Post content={serializedContent} />
    </main>
  );
}