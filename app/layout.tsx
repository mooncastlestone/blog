import { Metadata } from 'next';
import "styles/global.scss";

export const metadata: Metadata = {
  title: 'Moon.log',
  icons: {
    icon: "/images/logo.png",
  }
}

// TODO: dynamic lang attribute based on the locale of the page
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  )
}
