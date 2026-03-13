import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const serverDir = join(__dirname, '..', 'dist-server');

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

async function staticRender() {
  console.log(`Static rendering ${STATIC_ROUTES.length} routes...`);

  const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

  const { render } = await import(join(serverDir, 'entry-server.js'));

  for (const route of STATIC_ROUTES) {
    try {
      console.log(`  Rendering: ${route}`);
      const { html: appHtml, helmet } = render(route);

      let pageHtml = template;

      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      if (helmet) {
        if (helmet.title) {
          const titleStr = helmet.title.toString();
          const titleMatch = titleStr.match(/<title[^>]*>([^<]*)<\/title>/);
          if (titleMatch) {
            pageHtml = pageHtml.replace(
              /<title>[^<]*<\/title>/,
              `<title>${titleMatch[1]}</title>`
            );
          }
        }

        if (helmet.meta) {
          const metaStr = helmet.meta.toString();
          const metaTags = metaStr.match(/<meta[^>]+>/g) || [];

          for (const tag of metaTags) {
            const nameMatch = tag.match(/name="([^"]*)"/);
            const propMatch = tag.match(/property="([^"]*)"/);
            const contentMatch = tag.match(/content="([^"]*)"/);

            if (contentMatch) {
              if (nameMatch) {
                const regex = new RegExp(
                  `<meta name="${nameMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" content="[^"]*"\\s*/?>`,
                );
                if (regex.test(pageHtml)) {
                  pageHtml = pageHtml.replace(regex, `<meta name="${nameMatch[1]}" content="${contentMatch[1]}">`);
                }
              }
              if (propMatch) {
                const regex = new RegExp(
                  `<meta property="${propMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" content="[^"]*"\\s*/?>`,
                );
                if (regex.test(pageHtml)) {
                  pageHtml = pageHtml.replace(regex, `<meta property="${propMatch[1]}" content="${contentMatch[1]}">`);
                }
              }
            }
          }
        }

        if (helmet.link) {
          const linkStr = helmet.link.toString();
          const canonicalMatch = linkStr.match(/href="([^"]*)"/);
          if (canonicalMatch) {
            pageHtml = pageHtml.replace(
              /<link rel="canonical" href="[^"]*"\s*\/?>/,
              `<link rel="canonical" href="${canonicalMatch[1]}" />`
            );
          }
        }

        if (helmet.script) {
          const scriptStr = helmet.script.toString();
          const scriptBlocks = scriptStr.match(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g) || [];
          for (const block of scriptBlocks) {
            const jsonMatch = block.match(/>([^<]+)</);
            if (!jsonMatch) continue;
            try {
              const parsed = JSON.parse(jsonMatch[1]);
              const topType = parsed['@type'];
              if (topType && pageHtml.includes(`"@type":"${topType}"`) || pageHtml.includes(`"@type": "${topType}"`)) {
                continue;
              }
            } catch {}
            pageHtml = pageHtml.replace('</head>', `    ${block}\n  </head>`);
          }
        }
      }

      const routePath = route === '/' ? '' : route;
      const outputDir = join(distDir, routePath);
      mkdirSync(outputDir, { recursive: true });
      writeFileSync(join(outputDir, 'index.html'), pageHtml, 'utf-8');
    } catch (err) {
      console.error(`  Failed to render ${route}:`, err.message);
    }
  }

  console.log('Static rendering complete!');
}

staticRender().catch((err) => {
  console.error('Static rendering failed:', err);
  process.exit(1);
});
