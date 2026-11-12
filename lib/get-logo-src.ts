import fs from 'fs';
import path from 'path';

/**
 * Returns the public URL of the logo injected by the App Builder, or the
 * default Pulse Factor icon when no uploaded logo is present.
 *
 * Checked in priority order: png → jpg → jpeg → webp.
 * The App Builder always writes exactly one of these to public/ at deploy time.
 *
 * Server-side only — uses fs.existsSync which is not available in client
 * components. Call from a Server Component (e.g. app/layout.tsx) and pass
 * the result down via LogoSrcProvider.
 */
export function getLogoSrc(): string | null {
  const publicDir = path.join(process.cwd(), 'public');
  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    if (fs.existsSync(path.join(publicDir, `logo.${ext}`))) {
      return `/logo.${ext}`;
    }
  }
  return fs.existsSync(path.join(publicDir, 'icon.svg')) ? '/icon.svg' : null;
}
