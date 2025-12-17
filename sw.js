self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('vendaja-v1').then(cache => {
      return cache.addAll([
        '/Vendas-aberta/',
        '/Vendas-aberta/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
