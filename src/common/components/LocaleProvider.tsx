'use client'

import { store } from 'common/lib/redux/store'
// Localization Import
import { NextIntlClientProvider } from 'next-intl'
import { Provider } from 'react-redux'
import { LocalProviderProps } from 'types/global'

const LocaleProvider = ({ children, locale, messages }: LocalProviderProps) => {
  return (
    <Provider store={store}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </Provider>
  )
}

export default LocaleProvider
