/**
 * Fix files that start with --- but have no closing ---
 * Remove the leading --- line from these files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

const brokenFiles = [
  'orientdig-consolidation-guide.md',
  'orientdig-dashboard-guide.md',
  'orientdig-delivery-guide.md',
  'orientdig-first-order.md',
  'orientdig-getting-started.md',
  'orientdig-how-to-buy.md',
  'orientdig-how-to-order.md',
  'orientdig-new-user-guide.md',
  'orientdig-order-guide.md',
  'orientdig-ordering-process.md',
  'orientdig-payment-guide.md',
  'orientdig-platform-guide.md',
  'orientdig-purchase-guide.md',
  'orientdig-registration-guide.md',
  'orientdig-shipping-methods.md',
  'orientdig-shipping-options.md',
  'orientdig-shopping-guide.md',
  'orientdig-top-up-guide.md',
  'orientdig-warehouse-guide.md',
];

let fixed = 0;
for (const file of brokenFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove leading ---\n
  if (content.startsWith('---\n')) {
    content = content.substring(4); // remove '---\n'
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
