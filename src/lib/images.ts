import fs from "node:fs";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");

/**
 * Real product screenshots are dropped in by hand (see public/images/originals/README.txt).
 * Until a given file lands, components fall back to a labeled placeholder instead of a broken <img>.
 */
export function hasImage(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(publicDir, publicPath.replace(/^\//, "")));
  } catch {
    return false;
  }
}
