import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const routes = ['/', '/program', '/platform', '/for-practitioners', '/pricing', '/about'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date('2026-04-27'),
  }));
}
