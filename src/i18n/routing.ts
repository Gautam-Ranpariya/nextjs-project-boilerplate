// Localization Import
import { createNavigation } from 'next-intl/navigation'

// Routing Import
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en-US', 'hi-IN', 'fr-FR', 'ar-SA'],

  // Used when no locale matches
  defaultLocale: 'en-US',
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
