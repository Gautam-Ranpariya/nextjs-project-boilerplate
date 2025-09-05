// Common Components Import
import LocaleProvider from 'common/components/LocaleProvider'

// Utility Import
import { getDirection } from 'common/utils/get-direction'

// Next.js Import
import type { Metadata } from 'next'

// Style Import
import '../globals.css'

// Localization Import
import { getMessages } from 'next-intl/server'

// Metadata config
export const metadata: Metadata = {
  title: 'Gautam Ranpariya',
  description:
    'Passionate frontend developer skilled in React, Next.js, and modern web technologies, creating seamless digital experiences that drive results.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'UI Developer',
    'Web Developer Portfolio',
    'Gautam Ranpariya',
  ],
  authors: [{ name: 'Gautam Ranpariya', url: 'https://gautam-portfolio-rho.vercel.app/' }],
  creator: 'Gautam Ranpariya',
  publisher: 'Gautam Ranpariya',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://gautam-portfolio-rho.vercel.app/',
  },
  openGraph: {
    title: 'Gautam Ranpariya | Frontend Developer Portfolio',
    description:
      'Frontend Developer specializing in React, Next.js, and modern web technologies. Explore projects, skills, and contact for collaboration.',
    url: 'https://gautam-portfolio-rho.vercel.app/',
    siteName: 'Gautam Ranpariya',
    images: [
      {
        url: 'https://gautam-portfolio-rho.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gautam Ranpariya Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gautam Ranpariya | Frontend Developer Portfolio',
    description:
      'Frontend Developer skilled in React, Next.js & modern web technologies. Building seamless digital experiences.',
    creator: '@yourTwitterHandle',
    images: ['https://gautam-portfolio-rho.vercel.app/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  // themeColor: "#0f172a", // slate-900 for dark modern theme
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const resolvedParams = await params

  // Variable
  const locale = resolvedParams.locale || 'en-US'

  // Get the direction of the current locale
  const direction = getDirection(locale)

  // Get the translations for the current locale
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} dir={direction}>
      <body>
        <LocaleProvider locale={locale} messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
