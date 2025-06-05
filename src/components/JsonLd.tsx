import Script from 'next/script'

interface JsonLdProps {
  data: Record<string, any>
}

/**
 * Component for rendering JSON-LD structured data
 * @param data - The structured data object to be rendered
 * @returns Script component with JSON-LD data
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Person schema for author information
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jocelyn Knight',
  url: 'https://jocelynknight.dev',
  image: 'https://jocelynknight.dev/portrait.jpg',
  sameAs: [
    'https://twitter.com/jocelynknight',
    'https://linkedin.com/in/jocelynknight',
    'https://github.com/jocelynknight',
  ],
  jobTitle: 'Software Developer & Entrepreneur',
  worksFor: {
    '@type': 'Organization',
    name: 'B&M Development Services',
  },
}

// Organization schema for company information
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'B&M Development Services',
  founder: {
    '@type': 'Person',
    name: 'Jocelyn Knight',
  },
  foundingDate: '2020',
  description: 'Technologies that empower organizations to maximize the value of their data',
  url: 'https://jocelynknight.dev',
  logo: 'https://jocelynknight.dev/images/logos/bm-devservies-logo-full-color.png',
}

// Website schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jocelyn Knight',
  url: 'https://jocelynknight.dev',
  author: personSchema,
  publisher: personSchema,
}

// Function to create Article schema
export function createArticleSchema({
  title,
  description,
  date,
  slug,
  image,
}: {
  title: string
  description: string
  date: string
  slug: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: personSchema,
    publisher: {
      ...personSchema,
      '@type': 'Person',
    },
    datePublished: date,
    dateModified: date,
    url: `https://jocelynknight.dev/articles/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://jocelynknight.dev/articles/${slug}`,
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: `https://jocelynknight.dev${image}`,
      },
    }),
  }
}