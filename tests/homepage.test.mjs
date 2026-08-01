import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const css = readFileSync(resolve(root, 'styles.css'), 'utf8');
const js = readFileSync(resolve(root, 'script.js'), 'utf8');
const normalizedHtml = html.replace(/\s+/g, ' ');

for (const text of [
  'TradeNerva',
  'Safety-first autonomous trading',
  'Risk Gates',
  'My Stocks',
  'Risk Profile',
  'Trade Performance',
  'Request private access',
]) {
  assert.ok(html.includes(text), `Expected homepage to include "${text}"`);
}

assert.ok(
  normalizedHtml.includes('An AI-powered autonomous trading platform for short-term strategies, built around disciplined risk controls and automated order execution to maximize your gain.'),
  'Expected exact hero positioning statement',
);
assert.ok(html.includes('<canvas id="market-canvas"'), 'Expected animated market canvas');
assert.ok(html.includes('href="#capabilities"'), 'Expected capabilities nav link');
assert.ok(html.includes('href="#screens"'), 'Expected product nav link');
assert.ok(html.includes('href="#access"'), 'Expected access nav link');
assert.ok(css.includes('.hero'), 'Expected hero styling');
assert.ok(css.includes('@media (max-width: 900px)'), 'Expected responsive styles');
assert.ok(js.includes('requestAnimationFrame(draw)'), 'Expected animated hero scene');

console.log('Public homepage tests passed');
