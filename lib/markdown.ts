import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

const options: Options = {
  theme: "dark-plus",
  defaultLang: "javascript",
  keepBackground: false,
}

export const serializeMdx = (source: string) => {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      // @ts-ignore
      rehypePlugins: [[rehypePrettyCode, options]],
      format: 'mdx',
    },
  });
};