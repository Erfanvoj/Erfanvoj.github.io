import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.resolve('public/assets');
const files = fs.readdirSync(assetsDir);

console.log('Optimizing images in:', assetsDir);

for (const file of files) {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const inputPath = path.join(assetsDir, file);
    const webpPath = path.join(assetsDir, `${baseName}.webp`);

    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing ${file} (${metadata.width}x${metadata.height})...`);

    // Generate high quality WebP
    await sharp(inputPath)
      .webp({ quality: 84, effort: 6 })
      .toFile(webpPath);

    const origSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    console.log(`  -> Created ${baseName}.webp: ${(origSize/1024).toFixed(1)}KB -> ${(webpSize/1024).toFixed(1)}KB (-${Math.round((1 - webpSize/origSize)*100)}%)`);
  }
}

console.log('Image optimization complete.');
