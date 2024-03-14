import { getCurrentLocale } from 'locales/server';
import { Metadata } from 'next';
import "styles/global.scss";

export const metadata: Metadata = {
  title: 'Moon.log',
  icons: {
    icon: "/images/logo.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentLocale = getCurrentLocale();

  return (
    <html lang={currentLocale}>
      <body>
        {children}
      </body>
    </html>
  )
}
