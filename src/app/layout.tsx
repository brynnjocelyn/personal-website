import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { JsonLd, organizationSchema, websiteSchema } from '@/components/JsonLd'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Jocelyn Knight',
    default:
      'Jocelyn Knight - Software Developer, entrepreneur, and all-around nerd',
  },
  description:
    'I’m Jocelyn, a software developer and entrepreneur based in Las Vegas. I’m the founder and CEO of B&M Development Services, where we develop technologies that empower organizations to maximize the value of their data.',
  metadataBase: new URL('https://jocelynknight.dev'),
  authors: [{ name: 'Jocelyn Knight' }],
  creator: 'Jocelyn Knight',
  publisher: 'Jocelyn Knight',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Jocelyn Knight - Software Developer, entrepreneur, and all-around nerd',
    description: 'I\'m Jocelyn, a software developer and entrepreneur based in Las Vegas. I\'m the founder and CEO of B&M Development Services, where we develop technologies that empower organizations to maximize the value of their data.',
    url: 'https://jocelynknight.dev',
    siteName: 'Jocelyn Knight',
    images: [
      {
        url: '/portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Jocelyn Knight',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jocelyn Knight - Software Developer, entrepreneur, and all-around nerd',
    description: 'I\'m Jocelyn, a software developer and entrepreneur based in Las Vegas. I\'m the founder and CEO of B&M Development Services.',
    creator: '@jocelynknight',
    images: ['/portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
    canonical: 'https://jocelynknight.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
