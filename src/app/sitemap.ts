import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://jocelynknight.dev'
  
  // Get all articles
  const articles = await getAllArticles()
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/articles',
    '/projects',
    '/speaking',
    '/uses',
    '/home-lab',
    '/resume',
  ]
  
  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Article URLs
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))
  
  return [...staticUrls, ...articleUrls]
}