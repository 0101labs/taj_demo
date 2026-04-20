/**
 * Taj PWA — Service Worker
 * Strategy:
 *   · Precache app shell on install (HTML, manifest, icons)
 *   · Network-first for HTML (stay fresh), falling back to cache, then offline page
 *   · Cache-first for static assets (images, icons)
 *   · Never touch cross-origin (embed.liveavatar.com, fonts.googleapis.com, unsplash) — let network handle
 */

const VERSION = 'taj-v1.0.0';
const CACHE = `taj-shell-${VERSION}`;

const SHELL = [
  './',
  './Taj.html',
  './Taj Hospitality PWA.html',
  './offline.html',
  './manifest.webmanifest',
  './assets/taj-logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
];

// ── Install: precache the shell ───────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL))
          .then(() => self.skipWaiting())
  );
});

// ── Activate: clean old caches ────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: route by request type ──────────────────────────
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Cross-origin: skip (let network handle — LiveAvatar, Google Fonts, Unsplash)
  if (url.origin !== self.location.origin) return;

  // HTML navigations: network-first, fall back to cache, then offline page
  const isHTML =
    req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) => hit || caches.match('./offline.html'))
        )
    );
    return;
  }

  // Everything else (CSS, JS, images, icons): cache-first
  event.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        // Only cache successful basic responses
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      });
    })
  );
});
