/**
 * Line-art cleanup: grayscale, white background, ink lines stay black.
 * Usage: node scripts/purify-bw-image.mjs public/images/foo.png [more.png...]
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: node scripts/purify-bw-image.mjs <image.png> [...]");
  process.exit(1);
}

for (const input of files) {
  const abs = path.resolve(input);
  const { data, info } = await sharp(abs)
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const v = data[i];
  // Push paper tones to pure white; deepen ink
    let out;
    if (v >= 200) out = 255;
    else if (v <= 72) out = 0;
    else {
      const t = (200 - v) / (200 - 72);
      out = Math.round(255 - t * 255);
    }
    data[i] = out;
  }

  const tmp = abs + ".purify.tmp";
  await sharp(data, { raw: { width, height, channels: 1 } })
    .png({ compressionLevel: 9 })
    .toFile(tmp);
  fs.renameSync(tmp, abs);
  console.log("purified:", path.basename(abs));
}
