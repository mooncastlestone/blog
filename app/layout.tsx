import { Metadata } from 'next';
import "styles/global.scss";
import { TITLES } from 'utils/constants';
import { Locale } from 'utils/types';

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  }
}

// TODO: dynamic lang attribute based on the locale of the page
export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  )
}

export async function generateMetadata(
  { params }: RootLayoutProps,
): Promise<Metadata> {
  const locale = params.locale;

  return {
    title: TITLES[locale],
    icons: {
      icon: "/images/logo.png",
    }
  }
}
