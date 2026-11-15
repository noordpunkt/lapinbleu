/**
 * Black-ink-on-white engraving → white ink on transparent PNG.
 * Usage: node scripts/to-transparent-ink.mjs public/images/foo.png [...]
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: node scripts/to-transparent-ink.mjs <image.png> [...]");
  process.exit(1);
}

for (const input of files) {
  const abs = path.resolve(input);
  const { data, info } = await sharp(abs)
    .ensureAlpha()
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
    const v = data[i];
    // paper → transparent; ink → white with alpha from darkness
    let ink;
    if (v >= 200) ink = 0;
    else if (v <= 72) ink = 255;
    else ink = Math.round(((200 - v) / (200 - 72)) * 255);
    out[j] = 255;
    out[j + 1] = 255;
    out[j + 2] = 255;
    out[j + 3] = ink;
  }

  const tmp = abs + ".ink.tmp";
  await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(tmp);
  fs.renameSync(tmp, abs);
  console.log("ink:", path.basename(abs));
}
