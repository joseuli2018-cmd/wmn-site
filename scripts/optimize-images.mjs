import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();

const targets = [
  {
    input: path.join(root, 'public', 'destaque-converte-bem.jpeg'),
    output: path.join(root, 'public', 'optimized', 'hero-home.webp'),
    width: 960,
    quality: 70,
  },
  {
    input: path.join(root, 'public', 'destaque-muito-afeto.jpeg'),
    output: path.join(root, 'public', 'optimized', 'detail-home.webp'),
    width: 720,
    quality: 70,
  },
  {
    input: path.join(root, 'Galeria', 'casamento', 'WhatsApp Image 2026-03-12 at 17.15.23.jpeg'),
    output: path.join(root, 'public', 'optimized', 'collection-wedding.webp'),
    width: 560,
    quality: 68,
  },
  {
    input: path.join(root, 'Galeria', 'casamento', 'debut', 'WhatsApp Image 2026-03-12 at 17.21.47.jpeg'),
    output: path.join(root, 'public', 'optimized', 'collection-debut.webp'),
    width: 560,
    quality: 68,
  },
];

await fs.mkdir(path.join(root, 'public', 'optimized'), { recursive: true });

for (const target of targets) {
  await sharp(target.input)
    .rotate()
    .resize({ width: target.width, withoutEnlargement: true })
    .webp({ quality: target.quality, effort: 6 })
    .toFile(target.output);
}

console.log(`Optimized ${targets.length} images into public/optimized.`);