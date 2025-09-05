// Localization Import
import createMiddleware from 'next-intl/middleware'

// Routing Import
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(zh-HK|en-GB|zh-CN|ms-MY|vi-VN|ug-CN|ko-KR|th-TH|kk-KZ|ru-RU)/:path*'],
  matcher: ['/', '/((?!_next|api|.*\\..*).*)'],
}
