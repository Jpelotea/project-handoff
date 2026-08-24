import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const pages = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.name.endsWith('.html')) pages.push(full);
  }
}
await walk(root);
const failures = [];
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const links = [...html.matchAll(/(?:href|src)=["']([^"'#?]+)["']/g)].map((match) => match[1]);
  for (const link of links) {
    if (/^(?:https?:|mailto:|tel:|data:)/.test(link)) continue;
    const pathname = link.startsWith('/') ? link.slice(1) : path.join(path.relative(root, path.dirname(page)), link);
    const target = path.resolve(root, pathname);
    const candidates = path.extname(target) ? [target] : [target, path.join(target, 'index.html'), `${target}.html`];
    let found = false;
    for (const candidate of candidates) {
      try { await access(candidate); found = true; break; } catch {}
    }
    if (!found) failures.push(`${path.relative(root, page)} -> ${link}`);
  }
}
if (failures.length) {
  console.error(`Broken internal assets or links:\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`Checked ${pages.length} HTML pages: no broken internal links.`);
