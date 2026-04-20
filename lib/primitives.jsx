// Taj PWA — shared primitives (logo, icons, UI bits)

// ─── Taj monogram logo — stylized dome + star
const TajLogo = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 40 30" fill="none">
    {/* Star (top) */}
    <path d="M20 2 L20.8 5.5 L24 6 L20.8 6.5 L20 10 L19.2 6.5 L16 6 L19.2 5.5 Z" fill={color}/>
    {/* Dome */}
    <path d="M8 26 Q8 14 20 12 Q32 14 32 26 Z" fill="none" stroke={color} strokeWidth="1.2"/>
    {/* Base */}
    <rect x="6" y="26" width="28" height="1.2" fill={color}/>
    {/* Side towers */}
    <rect x="6" y="20" width="1.2" height="6" fill={color}/>
    <rect x="32.8" y="20" width="1.2" height="6" fill={color}/>
  </svg>
);

// ─── Taj wordmark
const TajWordmark = ({ color = 'currentColor', size = 18, tracking = 8 }) => (
  <span style={{
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: size, fontWeight: 500, letterSpacing: tracking,
    color, textTransform: 'uppercase',
  }}>TAJ</span>
);

// ─── Icons (24px grid, 1.6 stroke)
const Icon = {
  search: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"/><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  heart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21s-8-5.3-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.7-8 11-8 11h-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  heartFill: <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 21s-8-5.3-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.7-8 11-8 11h-2z" fill="currentColor"/></svg>,
  home: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  compass: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="m8 16 2-6 6-2-2 6-6 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  key: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="15" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M11 12 21 2m-4 4 3 3m-5-1 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  user: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  back: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  close: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  share: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3v13m0-13 4 4m-4-4-4 4M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  filter: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M7 12h10m-7 6h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  map: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 3v16m6-14v16" stroke="currentColor" strokeWidth="1.5"/></svg>,
  star: <svg width="14" height="14" viewBox="0 0 24 24"><path d="m12 2 3 7 7 .5-5.5 4.5L18 21l-6-4-6 4 1.5-7L2 9.5 9 9z" fill="currentColor"/></svg>,
  starOutline: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="m12 2 3 7 7 .5-5.5 4.5L18 21l-6-4-6 4 1.5-7L2 9.5 9 9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  cal: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18M8 3v4m8-4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  guest: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  pin: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  spa: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 20c-3-2-6-5-6-9 0 0 3 1 6 4 3-3 6-4 6-4 0 4-3 7-6 9z M12 15V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  walk: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="13" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="m8 22 3-7-3-3 4-5 4 5-1 4m-3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  dine: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 2v20M6 12a3 3 0 0 0 3-3V2H3v7a3 3 0 0 0 3 3zm12-10c-2 0-4 2-4 5v5h4v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  yoga: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M4 20c2-2 5-3 8-3s6 1 8 3M8 20l-1-7 5-1 5 1-1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  wifi: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9a14 14 0 0 1 18 0M6 12a10 10 0 0 1 12 0M9 15a6 6 0 0 1 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="19" r="1.2" fill="currentColor"/></svg>,
  pool: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5S16 18 18 18s2-1.5 4-1.5M7 15V6a3 3 0 0 1 6 0M7 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  lock: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.6"/></svg>,
  chat: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 19V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  plus: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  minus: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  check: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m5 12 5 5L20 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  chevRight: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  sparkle: <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2 13 9l7 1-7 1-1 7-1-7-7-1 7-1z M19 14l.5 2.5L22 17l-2.5.5L19 20l-.5-2.5L16 17l2.5-.5z" fill="currentColor"/></svg>,
  leaf: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 19c0-8 7-14 16-14-1 9-6 14-14 14m-2 0 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  bed: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 18v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M3 14h18M8 8V6h8v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  area: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 9V4h5M4 15v5h5m6 0h5v-5m0-6V4h-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  eye: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
};

// ─── Ornamental divider (horizontal jali-inspired rule)
const Ornament = ({ color = 'currentColor', width = 120 }) => (
  <svg width={width} height="12" viewBox="0 0 120 12" fill="none" style={{ display: 'block' }}>
    <line x1="0" y1="6" x2="52" y2="6" stroke={color} strokeWidth="0.8"/>
    <line x1="68" y1="6" x2="120" y2="6" stroke={color} strokeWidth="0.8"/>
    <path d="M60 2 L63 6 L60 10 L57 6 Z" fill={color}/>
    <circle cx="52" cy="6" r="1.2" fill={color}/>
    <circle cx="68" cy="6" r="1.2" fill={color}/>
  </svg>
);

// ─── Star rating
const Stars = ({ rating, color = '#8E744B', size = 12 }) => {
  const full = Math.floor(rating);
  return (
    <div style={{ display: 'inline-flex', gap: 2, alignItems: 'center', color }}>
      {[0, 1, 2, 3, 4].map(i => (
        <span key={i} style={{ display: 'inline-flex', width: size, height: size }}>
          {i < full ? Icon.star : Icon.starOutline}
        </span>
      ))}
    </div>
  );
};

// ─── Button
const TajButton = ({ children, onClick, variant = 'primary', full = false, tokens, size = 'md', style = {}, disabled = false }) => {
  const t = tokens;
  const sizes = {
    sm: { h: 36, px: 16, fs: 13 },
    md: { h: 48, px: 24, fs: 14 },
    lg: { h: 56, px: 28, fs: 15 },
  }[size];
  const variants = {
    primary: { bg: t.ink, color: t.bg, border: 'none' },
    gold: { bg: t.gold, color: '#fff', border: 'none' },
    outline: { bg: 'transparent', color: t.ink, border: `1px solid ${t.ink}` },
    ghost: { bg: 'transparent', color: t.ink, border: 'none' },
  }[variant];
  return (
    <button onClick={disabled ? undefined : onClick} style={{
      height: sizes.h,
      padding: `0 ${sizes.px}px`,
      background: variants.bg,
      color: variants.color,
      border: variants.border,
      borderRadius: 999,
      fontFamily: t.sans,
      fontSize: sizes.fs,
      fontWeight: 500,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: full ? '100%' : 'auto',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      transition: 'transform 0.15s, opacity 0.15s',
      ...style,
    }}
    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
    onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      {children}
    </button>
  );
};

// ─── Label (uppercase spaced tracking — Taj hallmark)
const Eyebrow = ({ children, color, tracking = 2.5, size = 11 }) => (
  <div style={{
    fontFamily: '"Inter", sans-serif',
    fontSize: size, fontWeight: 500,
    letterSpacing: tracking, textTransform: 'uppercase',
    color,
  }}>{children}</div>
);

// ─── Serif heading
const Serif = ({ children, size = 32, weight = 400, color, style = {}, italic = false }) => (
  <div style={{
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: size, fontWeight: weight, lineHeight: 1.05,
    letterSpacing: -0.3, color,
    fontStyle: italic ? 'italic' : 'normal',
    ...style,
  }}>{children}</div>
);

Object.assign(window, { TajLogo, TajWordmark, Icon, Ornament, Stars, TajButton, Eyebrow, Serif });
