import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

export async function buildOgImage(
  title: string,
  subtitle?: string,
  accentColor: 'cyan' | 'violet' = 'cyan',
) {
  const logoData = await readFile(join(process.cwd(), 'public/devian-labs-logo.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  const orbColor =
    accentColor === 'cyan'
      ? 'rgba(6, 182, 212, 0.28)'
      : 'rgba(124, 58, 237, 0.28)';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#09090b',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Purple orb — top right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
          }}
        />
        {/* Accent orb — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orbColor} 0%, transparent 70%)`,
          }}
        />

        {/* Grid lines — subtle */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 80px',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Top: logo + brand name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              width={72}
              height={72}
              alt="Devian Labs"
              style={{ borderRadius: 18 }}
            />
            <span style={{ color: '#a1a1aa', fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' }}>
              Devian Labs
            </span>
          </div>

          {/* Middle: title + subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 900 }}>
            <div
              style={{
                fontSize: title.length > 30 ? 58 : 72,
                fontWeight: 800,
                color: '#fafafa',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div style={{ fontSize: 26, color: '#71717a', lineHeight: 1.5 }}>
                {subtitle}
              </div>
            )}
          </div>

          {/* Bottom: gradient line + domain */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                height: 3,
                width: 48,
                background: 'linear-gradient(to right, #22d3ee, #a78bfa)',
                borderRadius: 999,
              }}
            />
            <span style={{ color: '#3f3f46', fontSize: 18, letterSpacing: '0.02em' }}>
              devianlabs.com
            </span>
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
