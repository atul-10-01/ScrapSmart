import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

// Convert pipeline to a promise-based function
const pipelineAsync = promisify(pipeline);

// Define your site's URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/dumping-page', changefreq: 'daily', priority: 0.9 },
  { url: '/form', changefreq: 'daily', priority: 0.9 },
  { url: '/signin', changefreq: 'monthly', priority: 0.7 },
  { url: '/new-account', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog1', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog2', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog3', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog4', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog5', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog6', changefreq: 'weekly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://scrap-smart.vercel.app' });
const writeStream = createWriteStream('./public/sitemap.xml');

async function generateSitemap() {
  try {
    for (const link of links) {
      sitemap.write(link);
    }
    sitemap.end();

    // Use pipeline to pipe the sitemap stream to the write stream
    await pipelineAsync(sitemap, writeStream);
    console.log('Sitemap created!');
  } catch (error) {
    console.error('Error creating sitemap:', error);
  }
}

generateSitemap();
