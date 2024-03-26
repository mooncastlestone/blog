import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { getAllPosts } from 'data-access';
import { GeneralLayout } from 'layouts/GeneralLayout';
import { PostListItem } from 'components/posts/PostListItem';
import { Metadata } from 'next';
import { Locale } from 'utils/types';
import { LOGO_URL, TITLES } from 'utils/constants';

const cx = classNames.bind(styles);

const DESCRIPTIONS = {
  ko: "소프트웨어 개발과 독서를 통해 지속적인 발전을 추구하며, 다양한 주제에 대해 고민하는 블로그입니다.",
  en: "Exploring personal growth and sharing insights from the journey as a software engineer on my blog.",
} as const;

type PostPageProps = {
  params: {
    locale: Locale;
  }
}

export default function PostsPage({ params }: PostPageProps) {
  const posts = getAllPosts(params.locale);

  return (
    <GeneralLayout>
      <ul className={cx("list")}>
        {posts.map((post) => {
          if (post.published) {
            return <PostListItem key={post.fileName}  {...post} />
          } else {
            return <></>;
          }
        })}
      </ul >
    </GeneralLayout>
  )
}

export async function generateMetadata(
  { params }: PostPageProps,
): Promise<Metadata> {
  const locale = params.locale;

  return {
    title: TITLES[locale],
    description: DESCRIPTIONS[locale],
    openGraph: {
      siteName: TITLES[locale],
      type: 'website',
      description: DESCRIPTIONS[locale],
      images: [{ url: LOGO_URL }]
    },
    twitter: {
      title: TITLES[locale],
      description: DESCRIPTIONS[locale],
      images: [{ url: LOGO_URL }],
      card: "summary_large_image"
    }
  }
}