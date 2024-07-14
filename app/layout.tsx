import { Metadata } from 'next';
import "styles/global.scss";
import { GA_TRACKING_ID, TITLES } from 'utils/constants';
import { Locale } from 'utils/types';
import { GoogleAnalytics } from '@next/third-parties/google'
import NextTopLoader from 'nextjs-toploader';

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
        <NextTopLoader color="#48464d" />
        {children}
        <GoogleAnalytics gaId={GA_TRACKING_ID} />
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
