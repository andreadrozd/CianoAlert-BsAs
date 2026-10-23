/* Service Worker de CyanoSat — habilita instalación (PWA) y uso offline.
   Estrategias:
   - Datos (manifest.json y data/*.geojson) y la página: PRIMERO RED, si no hay conexión → caché.
     Así una fecha nueva subida a GitHub se ve en la primera apertura.
   - Librerías y recursos fijos (Leaflet, íconos, etc.): PRIMERO CACHÉ, actualizando en segundo plano.
   Subí la versión del CACHE cuando cambien archivos fijos para forzar refresco. */
const CACHE = 'cyanosat-v8';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './manifest.webmanifest',
  './visor.html',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/geotiff@2.1.3/dist-browser/geotiff.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(SHELL.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ¿Es un pedido de datos o de la página? (siempre conviene la versión más nueva)
function esDinamico(url, req) {
  if (url.origin !== self.location.origin) return false;
  return req.mode === 'navigate' ||
         url.pathname.endsWith('/manifest.json') ||
         url.pathname.endsWith('.html') ||
         url.pathname.includes('/data/');
}

function guardar(req, resp) {
  if (resp && (resp.ok || resp.type === 'opaque')) {
    const copia = resp.clone();
    caches.open(CACHE).then((c) => c.put(req, copia));
  }
  return resp;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Los tiles del mapa son innumerables: siempre desde la red (no se cachean).
  if (url.hostname.indexOf('tile.openstreetmap.org') !== -1) return;
  // Imágenes satelitales del visor (Google Cloud Storage): se leen por partes
  // (pedidos con Range) y son muy grandes → nunca pasan por el caché.
  if (url.hostname === 'storage.googleapis.com' || req.headers.has('range')) return;

  if (esDinamico(url, req)) {
    // Primero red (sin caché HTTP intermedia); si falla, lo último guardado
    e.respondWith(
      fetch(req, { cache: 'no-store' })
        .then((resp) => guardar(req, resp))
        .catch(() => caches.match(req, { ignoreSearch: true }))
    );
    return;
  }

  // Recursos fijos: primero caché, actualizando en segundo plano
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((resp) => guardar(req, resp)).catch(() => cached);
      return cached || network;
    })
  );
});
