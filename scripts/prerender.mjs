import { config } from 'dotenv';
import { execSync } from 'child_process';
import puppeteer from 'puppeteer-core';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const STATIC_ROUTES = [
  '/',
  '/features',
  '/case-studies',
  '/pricing',
  '/contact-us',
  '/book-a-demo',
  '/terms-of-service',
  '/privacy-policy',
  '/data-processing-agreement',
  '/interactive-demo',
  '/free-customer-success-ai-tools',
  '/free-customer-success-ai-tools/qbr-deck-generator',
];

function startStaticServer(dir, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(dir, req.url === '/' ? 'index.html' : req.url);

      if (!existsSync(filePath)) {
        filePath = join(dir, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const contentTypes = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          png: 'image/png',
          jpg: 'image/jpeg',
          jpeg: 'image/jpeg',
          svg: 'image/svg+xml',
          json: 'application/json',
          woff: 'font/woff',
          woff2: 'font/woff2',
        };
        res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => resolve(server));
  });
}

function deduplicateMetaTags(html) {
  const helmetTitleMatch = html.match(/<title data-rh="true">([^<]*)<\/title>/);
  if (helmetTitleMatch) {
    html = html.replace(/<title>([^<]*)<\/title>/, '');
    html = html.replace(
      helmetTitleMatch[0],
      `<title>${helmetTitleMatch[1]}</title>`
    );
  }

  const helmetDescMatch = html.match(/<meta name="description" content="([^"]*)" data-rh="true">/);
  if (helmetDescMatch) {
    html = html.replace(/<meta name="description" content="[^"]*">\s*/, '');
    html = html.replace(
      helmetDescMatch[0],
      `<meta name="description" content="${helmetDescMatch[1]}">`
    );
  }

  const helmetKeywordsMatch = html.match(/<meta name="keywords" content="([^"]*)" data-rh="true">/);
  if (helmetKeywordsMatch) {
    html = html.replace(/<meta name="keywords" content="[^"]*">\s*/, '');
    html = html.replace(
      helmetKeywordsMatch[0],
      `<meta name="keywords" content="${helmetKeywordsMatch[1]}">`
    );
  }

  const helmetCanonicalMatch = html.match(/<link rel="canonical" href="([^"]*)" data-rh="true">/);
  if (helmetCanonicalMatch) {
    html = html.replace(/<link rel="canonical" href="[^"]*">\s*/, '');
    html = html.replace(
      helmetCanonicalMatch[0],
      `<link rel="canonical" href="${helmetCanonicalMatch[1]}">`
    );
  }

  const ogProperties = ['og:type', 'og:url', 'og:title', 'og:description', 'og:image', 'og:site_name'];
  for (const prop of ogProperties) {
    const helmetOgMatch = html.match(new RegExp(`<meta property="${prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" content="([^"]*)" data-rh="true">`));
    if (helmetOgMatch) {
      const staticOgRegex = new RegExp(`<meta property="${prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" content="[^"]*">\\s*`);
      html = html.replace(staticOgRegex, '');
      html = html.replace(
        helmetOgMatch[0],
        `<meta property="${prop}" content="${helmetOgMatch[1]}">`
      );
    }
  }

  const twitterProperties = ['twitter:card', 'twitter:url', 'twitter:title', 'twitter:description', 'twitter:image'];
  for (const prop of twitterProperties) {
    const helmetTwMatch = html.match(new RegExp(`<meta property="${prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" content="([^"]*)" data-rh="true">`));
    if (helmetTwMatch) {
      const staticTwRegex = new RegExp(`<meta property="${prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" content="[^"]*">\\s*`);
      html = html.replace(staticTwRegex, '');
      html = html.replace(
        helmetTwMatch[0],
        `<meta property="${prop}" content="${helmetTwMatch[1]}">`
      );
    }
  }

  const helmetRobotsMatch = html.match(/<meta name="robots" content="([^"]*)" data-rh="true">/);
  if (helmetRobotsMatch) {
    html = html.replace(/<meta name="robots" content="[^"]*">\s*/, '');
    html = html.replace(
      helmetRobotsMatch[0],
      `<meta name="robots" content="${helmetRobotsMatch[1]}">`
    );
  }

  html = html.replace(/ data-rh="true"/g, '');

  return html;
}

async function prerender() {
  const allRoutes = STATIC_ROUTES;
  console.log(`Pre-rendering ${allRoutes.length} routes`);

  const port = 4173;
  const server = await startStaticServer(distDir, port);
  console.log(`Static server running on port ${port}`);

  let chromePath = '/usr/bin/chromium';
  if (!existsSync(chromePath)) {
    chromePath = execSync('which chromium || which google-chrome-stable || which google-chrome', { encoding: 'utf-8' }).trim();
  }

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const route of allRoutes) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:${port}${route}`;
      console.log(`  Rendering: ${route}`);

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      await page.waitForSelector('#root', { timeout: 10000 });
      await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 1000)));

      let html = await page.content();

      html = html.replace(
        /<script type="module" src="\/src\/main\.tsx"><\/script>/,
        ''
      );

      html = deduplicateMetaTags(html);

      const routePath = route === '/' ? '' : route;
      const outputDir = join(distDir, routePath);
      mkdirSync(outputDir, { recursive: true });
      writeFileSync(join(outputDir, 'index.html'), html, 'utf-8');

      await page.close();
    } catch (err) {
      console.error(`  Failed to render ${route}:`, err.message);
    }
  }

  await browser.close();
  server.close();
  console.log('Pre-rendering complete!');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
