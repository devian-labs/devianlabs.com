import { readFileSync } from "node:fs";
import { join } from "node:path";

/*
 * Intrinsic size of an image in /public, read from its file header (PNG, JPEG or WebP).
 * Server only. Returns undefined when the file can't be read or parsed, so callers
 * can carry on without dimensions.
 */

type Size = { width: number; height: number };

const cache = new Map<string, Size | undefined>();

export function publicImageSize(src: string): Size | undefined {
  if (!src.startsWith("/")) return undefined;
  if (cache.has(src)) return cache.get(src);
  let size: Size | undefined;
  try {
    size = parse(readFileSync(join(process.cwd(), "public", src)));
  } catch {
    size = undefined;
  }
  cache.set(src, size);
  return size;
}

function parse(b: Buffer): Size | undefined {
  // PNG: the IHDR chunk follows the 8-byte signature.
  if (b.readUInt32BE(0) === 0x89504e47) {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }

  // JPEG: walk the segments to the first start-of-frame marker.
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) return undefined;
      const marker = b[i + 1];
      const isSof = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isSof) return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
      i += 2 + b.readUInt16BE(i + 2);
    }
    return undefined;
  }

  // WebP: RIFF container with a lossy, lossless or extended first chunk.
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8 ") return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8X") return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
  }

  return undefined;
}
