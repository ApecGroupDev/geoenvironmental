// app/sitemap.ts
import type { MetadataRoute } from 'next'

export const revalidate = 86400 // Re-generate daily

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoenvironmental.vercel.app'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ]
}
