// Taj PWA Design Tokens
// Based on Taj Hotels brand DNA: heritage, luxury, Indian craft, gold fusion

const TAJ_TOKENS_CLASSIC = {
  // Core palette — "Classic Taj": cream / ivory / gold fusion
  bg: '#F6F1E8',           // warm ivory
  bgElevated: '#FDFAF3',   // cream card
  bgDeep: '#EDE4D2',       // deeper sand
  ink: '#1A1611',          // near-black warm
  inkSoft: '#4A4238',      // body
  inkMuted: '#8A8275',     // caption
  hairline: 'rgba(26, 22, 17, 0.10)',

  gold: '#8E744B',         // gold fusion — brand primary
  goldDeep: '#6B5634',
  goldLight: '#C4A874',
  goldPale: '#E8DCC2',

  oxblood: '#5B2A2A',      // accent (jewel tone)
  teal: '#1F3B3B',         // accent (jewel tone)
  saffron: '#C46B2D',      // accent (warm)

  success: '#4A6B3E',
  error: '#8B2E2E',

  // Elevation
  shadowSoft: '0 1px 2px rgba(26,22,17,0.04), 0 4px 16px rgba(26,22,17,0.04)',
  shadowMed: '0 2px 6px rgba(26,22,17,0.06), 0 12px 32px rgba(26,22,17,0.08)',
  shadowDeep: '0 4px 12px rgba(26,22,17,0.10), 0 24px 60px rgba(26,22,17,0.14)',

  // Radius
  r_sm: 8,
  r_md: 14,
  r_lg: 22,
  r_xl: 32,

  // Type
  serif: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
  sans: '"Inter", -apple-system, system-ui, sans-serif',
  mono: '"SF Mono", ui-monospace, monospace',
};

const TAJ_TOKENS_HERITAGE = {
  ...TAJ_TOKENS_CLASSIC,
  bg: '#1F1610',
  bgElevated: '#2A1F16',
  bgDeep: '#15100A',
  ink: '#F6EEDC',
  inkSoft: '#D8CBAF',
  inkMuted: '#8A7E65',
  hairline: 'rgba(246, 238, 220, 0.12)',
  gold: '#C4A874',
  goldDeep: '#8E744B',
  goldLight: '#E8DCC2',
  goldPale: '#3A2E1F',
  shadowSoft: '0 1px 2px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.4)',
  shadowMed: '0 2px 6px rgba(0,0,0,0.4), 0 12px 32px rgba(0,0,0,0.5)',
  shadowDeep: '0 4px 12px rgba(0,0,0,0.5), 0 24px 60px rgba(0,0,0,0.6)',
};

window.TAJ_TOKENS_CLASSIC = TAJ_TOKENS_CLASSIC;
window.TAJ_TOKENS_HERITAGE = TAJ_TOKENS_HERITAGE;
