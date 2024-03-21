import { ReactElement } from 'react'
import { I18nProviderClient } from 'locales/client'

export async function generateStaticParams() {
  return [
    {
      locale: 'ko'
    },
    {
      locale: 'en'
    }
  ]
}



export default function SubLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  )
}