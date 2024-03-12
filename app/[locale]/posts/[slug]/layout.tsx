import { GeneralLayout } from 'layouts/GeneralLayout';
import "styles/global.scss";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GeneralLayout hasNavigation={false}>
      {children}
    </GeneralLayout>
  )
}
