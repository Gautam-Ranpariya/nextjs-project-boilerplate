'use client'

// Localization Import
import { NextIntlClientProvider } from 'next-intl'

const LocaleProvider = ({ children, locale, messages }: LocalProviderProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export default LocaleProvider
