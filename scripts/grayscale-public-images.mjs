/**
 * Rewrites public/images/*.{png,jpg,jpeg} as true grayscale (luminance only).
 * Run after adding new photos: node scripts/grayscale-public-images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../public/images");

for (const name of fs.readdirSync(dir)) {
  if (!/\.(png|jpe?g)$/i.test(name)) continue;
  const input = path.join(dir, name);
  const tmp = input + ".grayscale.tmp";
  const ext = path.extname(name).toLowerCase();
  let pipeline = sharp(input).grayscale();
  if (ext === ".png") {
    await pipeline.png({ compressionLevel: 9 }).toFile(tmp);
  } else {
    await pipeline.jpeg({ quality: 92, mozjpeg: true }).toFile(tmp);
  }
  fs.renameSync(tmp, input);
  console.log("grayscale:", name);
}
